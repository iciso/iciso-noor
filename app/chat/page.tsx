"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowLeft, Loader2, Send, AlertCircle, ExternalLink, Info } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage, LanguageProvider } from "@/contexts/language-context"

type Message = {
  role: "user" | "assistant"
  content: string
  id: string
  fallback?: boolean
}

function ChatContent() {
  const { t, language } = useLanguage()
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isQuotaError, setIsQuotaError] = useState(false)
  const [useFallback, setUseFallback] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      role: "user",
      content: input,
      id: Date.now().toString(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setError(null)
    setIsQuotaError(false)

    // Format messages for the API - define this outside the try block so it's available in the catch block
    const formattedMessages = messages.concat(userMessage).map((m) => ({
      role: m.role,
      content: m.content,
    }))

    try {
      // Use the direct chat API endpoint
      console.log("Calling direct chat API")
      const response = await fetch("/api/chat-direct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: formattedMessages,
        }),
      })

      // Check if the response is OK
      if (!response.ok) {
        // Clone the response before reading it
        const responseClone = response.clone()

        // Try to parse the error as JSON
        let errorData
        try {
          errorData = await response.json()
        } catch (jsonError) {
          // If JSON parsing fails, use the text response from the cloned response
          const textError = await responseClone.text()
          throw new Error(textError || `Server error: ${response.status}`)
        }

        // Check if it's a quota error
        const errorMsg = errorData.error || errorData.details || `Server error: ${response.status}`
        if (errorMsg.includes("quota") || errorMsg.includes("billing")) {
          setIsQuotaError(true)
        }

        throw new Error(errorMsg)
      }

      // Parse the JSON response
      let data
      try {
        data = await response.json()
      } catch (jsonError) {
        throw new Error("Invalid response from server: Failed to parse JSON")
      }

      // Add assistant message
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.content,
          id: data.id || Date.now().toString(),
          fallback: data.fallback,
        },
      ])

      // If this was a successful fallback response, keep using fallback
      if (data.fallback) {
        setUseFallback(true)
      }
    } catch (err) {
      console.error("Chat error:", err)
      const errorMessage = err instanceof Error ? err.message : String(err)
      setError(errorMessage)

      // Check if it's a quota error
      if (errorMessage.includes("quota") || errorMessage.includes("billing")) {
        setIsQuotaError(true)
      }

      // If main API failed and we haven't tried fallback yet, try the fallback API
      if (!useFallback) {
        setUseFallback(true)
        // Retry with fallback API - pass the formatted messages we defined earlier
        handleRetryWithFallback(userMessage, formattedMessages)
      }
    } finally {
      setIsLoading(false)
    }
  }

  // Function to retry with fallback API
  const handleRetryWithFallback = async (userMessage: Message, formattedMessages: any[]) => {
    try {
      setIsLoading(true)

      // Call the fallback chat API
      const response = await fetch("/api/chat-fallback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: formattedMessages,
        }),
      })

      if (!response.ok) {
        throw new Error(`Fallback API error: ${response.status}`)
      }

      const data = await response.json()

      // Add assistant message
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.content,
          id: data.id || Date.now().toString(),
          fallback: true,
        },
      ])

      // Clear error since fallback worked
      setError(null)
    } catch (fallbackError) {
      console.error("Fallback chat error:", fallbackError)
      // Keep the original error, don't update it with the fallback error
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-emerald-50 to-teal-100">
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span>{t("nav.back")}</span>
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xl">
              ن
            </div>
            <div>
              <h1 className="text-2xl font-bold text-emerald-700">Noor</h1>
              <p className="text-sm text-gray-500">Neutral Open Objective Resource</p>
            </div>
          </div>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto w-full">
        {useFallback && !error && (
          <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start">
            <Info className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-blue-600" />
            <div className="text-blue-700 text-sm">
              <p className="font-medium">Using simplified chat mode</p>
              <p>
                The AI-powered chat is currently unavailable. We're using a simplified chat mode with limited
                capabilities.
              </p>
            </div>
          </div>
        )}

        <Card className="w-full h-[calc(100vh-12rem)] flex flex-col">
          <CardHeader>
            <CardTitle>{t("chat.title")}</CardTitle>
            <CardDescription>{t("chat.subtitle")}</CardDescription>
          </CardHeader>

          <CardContent className="flex-grow overflow-y-auto">
            {error && (
              <div className="p-4 mb-4 text-sm bg-red-100 rounded-lg flex items-start">
                <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-red-700" />
                <div className="text-red-700">
                  {isQuotaError ? (
                    <>
                      <p className="font-bold">OpenAI API Quota Exceeded</p>
                      <p className="mt-1">
                        Your OpenAI API key has exceeded its quota or has billing issues. Please check your OpenAI
                        account.
                      </p>
                      <div className="mt-3 space-y-2">
                        <p className="font-semibold">Options:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            <a
                              href="https://platform.openai.com/account/usage"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-700 hover:underline flex items-center"
                            >
                              Check your OpenAI usage
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://platform.openai.com/account/billing"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-700 hover:underline flex items-center"
                            >
                              Update your billing information
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </a>
                          </li>
                          <li>
                            <Link href="/static-chat-basic" className="text-blue-700 hover:underline">
                              Try our static chat (no API key needed)
                            </Link>
                          </li>
                          <li>
                            <Link href="/browse" className="text-blue-700 hover:underline">
                              Browse pre-written topics
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="font-bold">Error: {error}</p>
                      <div className="mt-2 flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs"
                          onClick={() => window.open("/debug", "_blank")}
                        >
                          Debug Info
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs"
                          onClick={() => window.open("/static-chat-basic", "_blank")}
                        >
                          Try Static Chat
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-emerald-600"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">{t("chat.start")}</h3>
                  <p className="text-sm text-gray-500 max-w-md">{t("chat.placeholder")}</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4 p-4">
                {messages.map((m) => (
                  <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg p-4 ${
                        m.role === "user"
                          ? "bg-emerald-600 text-white"
                          : m.fallback
                            ? "bg-blue-50 text-gray-900 border border-blue-100"
                            : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <div className="whitespace-pre-wrap">{m.content}</div>
                      {m.fallback && m.role === "assistant" && (
                        <div className="mt-2 text-xs text-blue-600 flex items-center">
                          <Info className="h-3 w-3 mr-1" />
                          Simplified response
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            )}
          </CardContent>

          <CardFooter className="border-t p-4">
            <form onSubmit={handleSubmit} className="flex w-full space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("chat.input.placeholder")}
                className="flex-grow"
                disabled={isLoading || isQuotaError}
              />
              <Button type="submit" disabled={isLoading || !input.trim() || isQuotaError}>
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </Button>
            </form>
            {isQuotaError && (
              <div className="w-full mt-2 text-xs text-center text-red-600">
                Chat is disabled due to OpenAI API quota issues. Please try the static chat or browse topics.
              </div>
            )}
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

// Main component that wraps the content with the LanguageProvider
export default function ChatPage() {
  return (
    <LanguageProvider>
      <ChatContent />
    </LanguageProvider>
  )
}
