"use client"

import type React from "react"

import { useChat } from "ai/react"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowLeft, Loader2, Send, AlertCircle } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage, LanguageProvider } from "@/contexts/language-context"

function ChatGroqContent() {
  const { t, language } = useLanguage()
  const [error, setError] = useState<string | null>(null)
  const [isQuotaError, setIsQuotaError] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Use the useChat hook from the AI SDK
  const { messages, input, handleInputChange, handleSubmit, isLoading, setMessages } = useChat({
    api: "/api/chat-groq",
    onError: (error) => {
      console.error("Chat error:", error)
      setError(error.message)

      // Check if it's a quota error
      if (error.message.includes("quota") || error.message.includes("billing")) {
        setIsQuotaError(true)
      }
    },
  })

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // Handle form submission with error handling
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setIsQuotaError(false)

    try {
      await handleSubmit(e)
    } catch (err) {
      // Error is handled by onError callback
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
        <Card className="w-full h-[calc(100vh-12rem)] flex flex-col">
          <CardHeader>
            <CardTitle>{t("chat.title")}</CardTitle>
            <CardDescription>
              {t("chat.subtitle")} <span className="text-emerald-600 font-medium">(Powered by Groq)</span>
            </CardDescription>
          </CardHeader>

          <CardContent className="flex-grow overflow-y-auto">
            {error && (
              <div className="p-4 mb-4 text-sm bg-red-100 rounded-lg flex items-start">
                <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-red-700" />
                <div className="text-red-700">
                  {isQuotaError ? (
                    <>
                      <p className="font-bold">API Quota Exceeded</p>
                      <p className="mt-1">The API key has exceeded its quota or has billing issues.</p>
                      <div className="mt-3 space-y-2">
                        <p className="font-semibold">Options:</p>
                        <ul className="list-disc pl-5 space-y-1">
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
                        m.role === "user" ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <div className="whitespace-pre-wrap">{m.content}</div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            )}
          </CardContent>

          <CardFooter className="border-t p-4">
            <form onSubmit={handleFormSubmit} className="flex w-full space-x-2">
              <Input
                value={input}
                onChange={handleInputChange}
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
                Chat is disabled due to API quota issues. Please try the static chat or browse topics.
              </div>
            )}
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

// Main component that wraps the content with the LanguageProvider
export default function ChatGroqPage() {
  return (
    <LanguageProvider>
      <ChatGroqContent />
    </LanguageProvider>
  )
}
