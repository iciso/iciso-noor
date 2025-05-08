"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowLeft, Send, AlertCircle } from "lucide-react"

type Message = {
  role: "user" | "assistant"
  content: string
  id: string
}

export default function EchoTestPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "This is an echo test. Type something and I'll echo it back to you.",
      id: "initial",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [rawResponse, setRawResponse] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

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
    setRawResponse(null)

    try {
      // Format messages for the API
      const apiMessages = messages.concat(userMessage).map((m) => ({
        role: m.role,
        content: m.content,
      }))

      // Call the echo API
      const response = await fetch("/api/echo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: apiMessages,
        }),
      })

      // Store the raw response for debugging
      const rawText = await response.text()
      setRawResponse(rawText)

      // Try to parse the response as JSON
      let data
      try {
        data = JSON.parse(rawText)
      } catch (jsonError) {
        throw new Error(`Failed to parse response as JSON: ${rawText}`)
      }

      // Check if the response is OK
      if (!response.ok) {
        throw new Error(data.error || `Server error: ${response.status}`)
      }

      // Add assistant message
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.content,
          id: data.id || Date.now().toString(),
        },
      ])
    } catch (err) {
      console.error("Echo test error:", err)
      setError(err instanceof Error ? err.message : String(err))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span>Back</span>
            </Link>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-blue-700">Echo Test</h1>
            <p className="text-sm text-gray-500">API Infrastructure Test</p>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto w-full">
        <Card className="w-full h-[calc(100vh-12rem)] flex flex-col">
          <CardHeader>
            <CardTitle>Echo API Test</CardTitle>
            <CardDescription>This page tests if the API infrastructure is working correctly</CardDescription>
          </CardHeader>

          <CardContent className="flex-grow overflow-y-auto">
            {error && (
              <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg flex items-start">
                <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-bold">Error: {error}</p>
                  {rawResponse && (
                    <div className="mt-2">
                      <p className="font-semibold">Raw Response:</p>
                      <pre className="mt-1 p-2 bg-gray-100 rounded overflow-x-auto text-xs">{rawResponse}</pre>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="space-y-4 p-4">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-4 ${
                      m.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{m.content}</div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>

          <CardFooter className="border-t p-4">
            <form onSubmit={handleSubmit} className="flex w-full space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type something to echo..."
                className="flex-grow"
                disabled={isLoading}
              />
              <Button type="submit" disabled={isLoading || !input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
