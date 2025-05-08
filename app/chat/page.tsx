"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Loader2, Send, AlertCircle, Bot } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

// Define message type
type Message = {
  role: "user" | "assistant" | "system"
  content: string
  id?: string
  fallback?: boolean
}

export default function ChatPage() {
  // Get language context
  const { language, translations } = useLanguage()

  // State for messages, input, and loading
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [usingFallback, setUsingFallback] = useState(false)

  // Ref for message container to auto-scroll
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Router for navigation
  const router = useRouter()

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Function to handle fallback chat when main API fails
  const handleRetryWithFallback = async (userMessage: Message, formattedMessages: Message[]) => {
    console.log("Trying fallback chat API")
    try {
      setUsingFallback(true)

      const fallbackResponse = await fetch("/api/chat-fallback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: formattedMessages,
        }),
      })

      if (!fallbackResponse.ok) {
        throw new Error(`Fallback API error: ${fallbackResponse.status}`)
      }

      const fallbackData = await fallbackResponse.json()

      // Add fallback response to messages
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: "assistant",
          content: fallbackData.content,
          id: fallbackData.id || Date.now().toString(),
          fallback: true,
        },
      ])

      setLoading(false)
      setError(null)
    } catch (fallbackError) {
      console.error("Fallback chat error:", fallbackError)
      setError("Both main and fallback chat systems are unavailable. Please try again later.")
      setLoading(false)
    }
  }

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!input.trim() || loading) return

    // Create user message
    const userMessage: Message = {
      role: "user",
      content: input,
      id: Date.now().toString(),
    }

    // Add user message to state
    setMessages((prevMessages) => [...prevMessages, userMessage])

    // Clear input and set loading
    setInput("")
    setLoading(true)
    setError(null)
    setUsingFallback(false)

    // Format messages for API
    const formattedMessages = [...messages, userMessage].map(({ role, content }) => ({
      role,
      content,
    }))

    try {
      // Call chat API
      console.log("Calling main chat API")
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: formattedMessages,
        }),
      })

      // Check if response is ok
      if (!response.ok) {
        // Clone response before reading
        const clonedResponse = response.clone()

        // Try to get error details
        try {
          const errorData = await response.json()
          throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
        } catch (jsonError) {
          // If JSON parsing fails, try to get text
          const errorText = await clonedResponse.text()
          throw new Error(errorText || `HTTP error! status: ${response.status}`)
        }
      }

      // Create reader for streaming response
      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let done = false
      let text = ""

      // Process stream
      while (!done && reader) {
        const { value, done: doneReading } = await reader.read()
        done = doneReading
        const chunk = decoder.decode(value)
        text += chunk

        // Update message with current text
        setMessages((prevMessages) => {
          const newMessages = [...prevMessages]
          const assistantMessageIndex = newMessages.findIndex(
            (message) => message.role === "assistant" && message.id === "streaming",
          )

          if (assistantMessageIndex === -1) {
            newMessages.push({
              role: "assistant",
              content: text,
              id: "streaming",
            })
          } else {
            newMessages[assistantMessageIndex].content = text
          }

          return newMessages
        })
      }

      // Finalize message when stream is complete
      setMessages((prevMessages) => {
        const newMessages = [...prevMessages]
        const streamingIndex = newMessages.findIndex((message) => message.id === "streaming")

        if (streamingIndex !== -1) {
          newMessages[streamingIndex] = {
            ...newMessages[streamingIndex],
            id: Date.now().toString(),
          }
        }

        return newMessages
      })

      setLoading(false)
    } catch (error) {
      console.error("Chat error:", error)

      // Set error message
      setError(`${error instanceof Error ? error.message : String(error)}`)

      // Try fallback chat
      handleRetryWithFallback(userMessage, formattedMessages)
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="h-[80vh] flex flex-col">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{language === "en" ? "Chat with Noor" : "Discuter avec Noor"}</CardTitle>
              <Link href="/">
                <Button variant="outline" size="sm">
                  {language === "en" ? "Back to Home" : "Retour à l'accueil"}
                </Button>
              </Link>
            </div>
          </CardHeader>

          <CardContent className="flex-grow overflow-y-auto p-4 space-y-4">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                <Bot className="h-12 w-12 mb-4" />
                <p className="text-lg font-medium">
                  {language === "en"
                    ? "Ask me anything about religions and belief systems"
                    : "Posez-moi des questions sur les religions et les systèmes de croyance"}
                </p>
                <p className="text-sm max-w-md mt-2">
                  {language === "en"
                    ? "I can provide comparative information about different faiths, practices, and the Community Life Competence Process (CLCP)."
                    : "Je peux fournir des informations comparatives sur différentes religions, pratiques et le Processus de Compétence de Vie Communautaire (CLCP)."}
                </p>
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={message.id || index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className="flex items-start max-w-[80%]">
                    {message.role === "assistant" && (
                      <Avatar className="mr-2 mt-0.5">
                        <AvatarFallback>AI</AvatarFallback>
                        <AvatarImage src="/favicon.png" alt="AI" />
                      </Avatar>
                    )}

                    <div
                      className={`rounded-lg px-4 py-2 ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : message.fallback
                            ? "bg-yellow-100 text-yellow-800 border border-yellow-200"
                            : "bg-muted"
                      }`}
                    >
                      {message.content}
                      {message.fallback && (
                        <div className="text-xs mt-1 text-yellow-600 italic">
                          {language === "en"
                            ? "Note: This is a fallback response. AI service is currently unavailable."
                            : "Note : Ceci est une réponse de secours. Le service d'IA est actuellement indisponible."}
                        </div>
                      )}
                    </div>

                    {message.role === "user" && (
                      <Avatar className="ml-2 mt-0.5">
                        <AvatarFallback>You</AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                </div>
              ))
            )}

            {loading && (
              <div className="flex justify-start">
                <div className="flex items-center rounded-lg px-4 py-2 bg-muted">
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  {language === "en" ? "Thinking..." : "Réflexion en cours..."}
                </div>
              </div>
            )}

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>{language === "en" ? "Error" : "Erreur"}</AlertTitle>
                <AlertDescription>
                  {error}
                  {usingFallback && (
                    <div className="mt-2">
                      {language === "en"
                        ? "Using fallback chat system. Responses may be limited."
                        : "Utilisation du système de chat de secours. Les réponses peuvent être limitées."}
                    </div>
                  )}
                </AlertDescription>
              </Alert>
            )}

            <div ref={messagesEndRef} />
          </CardContent>

          <CardFooter className="border-t p-4">
            <form onSubmit={handleSubmit} className="flex w-full space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={language === "en" ? "Type your message here..." : "Tapez votre message ici..."}
                className="flex-grow"
                disabled={loading}
              />
              <Button type="submit" disabled={loading || !input.trim()}>
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                <span className="sr-only">{language === "en" ? "Send" : "Envoyer"}</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
