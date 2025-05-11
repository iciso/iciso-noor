"use client"

import type React from "react"

import { useState } from "react"
import { STATIC_RESPONSES_EN } from "@/data/static-responses"
import { NoorLogo } from "./noor-logo"
import { CCLicenseBadge } from "./cc-license-badge"
import { Send } from "lucide-react"

export function StaticChatSimple() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    {
      role: "assistant",
      content:
        "Ask about comparative religion\n\nNoor provides factual, non-biased information on major world religions, non-faith perspectives, and CLCP principles.",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Find matching response or use default
    setTimeout(() => {
      let responseContent = STATIC_RESPONSES_EN.default

      // Clean the input
      const lowercaseInput = input.toLowerCase().trim()

      // Check for exact matches first
      const exactKeys = Object.keys(STATIC_RESPONSES_EN).filter((key) => lowercaseInput === key.toLowerCase())

      if (exactKeys.length > 0) {
        responseContent = STATIC_RESPONSES_EN[exactKeys[0]]
      } else {
        // Check for partial matches
        const partialKeys = Object.keys(STATIC_RESPONSES_EN).filter((key) => lowercaseInput.includes(key.toLowerCase()))

        if (partialKeys.length > 0) {
          // Use the longest matching key (most specific)
          const longestKey = partialKeys.reduce((a, b) => (a.length > b.length ? a : b))
          responseContent = STATIC_RESPONSES_EN[longestKey]
        } else {
          // Check for compound keys (e.g., "islam-clcp")
          const compoundKeys = Object.keys(STATIC_RESPONSES_EN).filter(
            (key) => key.includes("-") && key.split("-").every((part) => lowercaseInput.includes(part.toLowerCase())),
          )

          if (compoundKeys.length > 0) {
            responseContent = STATIC_RESPONSES_EN[compoundKeys[0]]
          }
        }
      }

      // For debugging
      console.log("Input:", lowercaseInput)
      console.log("Response:", responseContent)

      setMessages((prev) => [...prev, { role: "assistant", content: responseContent }])
      setIsLoading(false)
    }, 1000) // Simulate response delay
  }

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <header className="bg-emerald-600 text-white p-4 flex items-center">
        <NoorLogo className="h-6 w-6 mr-2" />
        <h1 className="text-xl font-medium">Noor Chat</h1>
      </header>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.role === "assistant" ? "bg-emerald-50 border border-emerald-100" : "bg-gray-100"
            } p-4 rounded-lg max-w-3xl mx-auto`}
          >
            <div className="whitespace-pre-wrap">{message.content}</div>
          </div>
        ))}
        {isLoading && (
          <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-lg max-w-3xl mx-auto">
            <div className="flex items-center space-x-2">
              <div
                className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce"
                style={{ animationDelay: "0ms" }}
              ></div>
              <div
                className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce"
                style={{ animationDelay: "150ms" }}
              ></div>
              <div
                className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce"
                style={{ animationDelay: "300ms" }}
              ></div>
            </div>
          </div>
        )}
      </div>

      {/* Input form */}
      <form onSubmit={handleSubmit} className="border-t p-4">
        <div className="flex items-center bg-white border rounded-lg focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about comparative religion or CLCP..."
            className="flex-1 px-4 py-2 bg-transparent focus:outline-none"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="p-2 text-emerald-600 hover:text-emerald-800 disabled:opacity-50"
            disabled={!input.trim() || isLoading}
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>

      {/* Footer */}
      <footer className="border-t py-3 px-4 text-center text-sm text-gray-500">
        <div className="mb-1">Noor - Neutral Open Objective Resource</div>
        <div className="flex justify-center items-center space-x-4">
          <CCLicenseBadge />
          <span>The Constellation</span>
          <span>Faith Competence Resources</span>
        </div>
      </footer>
    </div>
  )
}
