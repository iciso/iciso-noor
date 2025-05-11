"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Send, AlertCircle, Info } from "lucide-react"

type Message = {
  role: "user" | "assistant"
  content: string
  id: string
  fallback?: boolean
}

export function EmbeddableChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isQuotaError, setIsQuotaError] = useState(false)
  const [useFallback, setUseFallback] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [baseUrl, setBaseUrl] = useState("")

  // Set base URL
  useEffect(() => {
    // Get the script src to determine the base URL
    const scripts = document.getElementsByTagName("script")
    for (let i = 0; i < scripts.length; i++) {
      const src = scripts[i].src
      if (src.includes("/api/embed")) {
        const url = new URL(src)
        setBaseUrl(`${url.protocol}//${url.host}`)
        break
      }
    }
  }, [])

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

    // Format messages for the API
    const formattedMessages = messages.concat(userMessage).map((m) => ({
      role: m.role,
      content: m.content,
    }))

    try {
      // Use the direct chat API endpoint
      const apiUrl = `${baseUrl || window.location.origin}/api/chat-direct`
      const response = await fetch(apiUrl, {
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
        // Retry with fallback API
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
      const apiUrl = `${baseUrl || window.location.origin}/api/chat-fallback`
      const response = await fetch(apiUrl, {
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
    <Card className="w-full h-[500px] flex flex-col shadow-lg border-emerald-200">
      <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <CardTitle className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-emerald-700 font-bold text-lg mr-2">
            ن
          </div>
          Noor Chat
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-grow overflow-y-auto p-4">
        {useFallback && !error && (
          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-start text-xs">
            <Info className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0 text-blue-600" />
            <div className="text-blue-700">Using simplified chat mode</div>
          </div>
        )}

        {error && (
          <div className="p-3 mb-4 text-xs bg-red-100 rounded-lg flex items-start">
            <AlertCircle className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0 text-red-700" />
            <div className="text-red-700">
              {isQuotaError ? (
                <>
                  <p className="font-bold">OpenAI API Quota Exceeded</p>
                  <p className="mt-1">The API key has exceeded its quota or has billing issues.</p>
                </>
              ) : (
                <>
                  <p className="font-bold">Error: {error}</p>
                </>
              )}
            </div>
          </div>
        )}

        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
            <div className="space-y-1">
              <h3 className="text-base font-medium">Ask about comparative religion</h3>
              <p className="text-xs text-gray-500 max-w-xs">
                Noor provides factual, non-biased information on major world religions, non-faith perspectives, and CLCP
                principles.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 text-sm ${
                    m.role === "user"
                      ? "bg-emerald-600 text-white"
                      : m.fallback
                        ? "bg-blue-50 text-gray-900 border border-blue-100"
                        : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <div className="whitespace-pre-wrap">{m.content}</div>
                  {m.fallback && m.role === "assistant" && (
                    <div className="mt-1 text-xs text-blue-600 flex items-center">
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

      <CardFooter className="border-t p-3">
        <form onSubmit={handleSubmit} className="flex w-full space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about comparative religion or CLCP..."
            className="flex-grow text-sm"
            disabled={isLoading || isQuotaError}
          />
          <Button type="submit" size="sm" disabled={isLoading || !input.trim() || isQuotaError}>
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}
