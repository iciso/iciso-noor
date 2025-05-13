"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowLeft, Loader2, Send, AlertCircle } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage, LanguageProvider } from "@/contexts/language-context"

// Define message type
interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

function ChatGroqContent() {
  const { t, language } = useLanguage()
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [apiAvailable, setApiAvailable] = useState<boolean | null>(null)
  const [isCheckingApi, setIsCheckingApi] = useState(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Check if Groq API is available
  useEffect(() => {
    const checkGroqApi = async () => {
      try {
        setIsCheckingApi(true)
        const response = await fetch("/api/groq-status")
        if (response.ok) {
          const data = await response.json()
          setApiAvailable(data.available)
        } else {
          setApiAvailable(false)
        }
      } catch (error) {
        console.error("Error checking Groq API:", error)
        setApiAvailable(false)
      } finally {
        setIsCheckingApi(false)
      }
    }

    checkGroqApi()
  }, [])

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // Reset error when input changes
  useEffect(() => {
    if (errorMessage && input.trim()) {
      setErrorMessage(null)
    }
  }, [input, errorMessage])

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!input.trim() || isLoading || apiAvailable === false) return

    // Clear any previous errors
    setErrorMessage(null)

    // Add user message to the chat
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Send the message to the API with the current language
      const response = await fetch("/api/chat-groq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: messages.concat(userMessage).map(({ role, content }) => ({ role, content })),
          language, // Pass the current language to the API
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || errorData.details || response.statusText)
      }

      const data = await response.json()

      // Add assistant message to the chat
      if (data.message) {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: data.message,
        }

        setMessages((prev) => [...prev, assistantMessage])
      } else if (data.error) {
        throw new Error(data.error)
      }
    } catch (error) {
      console.error("Chat error:", error)
      setErrorMessage(error instanceof Error ? error.message : String(error))
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
        <Card className="w-full h-[calc(100vh-12rem)] flex flex-col bg-white shadow-lg">
          <CardHeader className="border-b">
            <CardTitle className="text-emerald-700">{t("chat.title")}</CardTitle>
            <CardDescription>{t("chat.subtitle")}</CardDescription>
          </CardHeader>

          <CardContent className="flex-grow overflow-y-auto p-0">
            {isCheckingApi ? (
              <div className="flex flex-col items-center justify-center h-full">
                <Loader2 className="h-8 w-8 animate-spin text-emerald-600 mb-4" />
                <p>Checking API availability...</p>
              </div>
            ) : apiAvailable === false ? (
              <div className="p-4 m-4 text-sm bg-red-100 rounded-lg flex items-start">
                <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-red-700" />
                <div className="text-red-700">
                  <p className="font-bold">Groq API Unavailable</p>
                  <p className="mt-1">
                    The Groq API is currently unavailable. Please try again later or use the static chat.
                  </p>
                  <div className="mt-3">
                    <Link href="/static-chat-basic">
                      <Button variant="outline" size="sm" className="text-xs">
                        Try Static Chat
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ) : errorMessage ? (
              <div className="p-4 m-4 text-sm bg-red-100 rounded-lg flex items-start">
                <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-red-700" />
                <div className="text-red-700">
                  <p className="font-bold">Error: {errorMessage}</p>
                  <p className="mt-1">Please try again or use the static chat.</p>
                  <div className="mt-3">
                    <Link href="/static-chat-basic">
                      <Button variant="outline" size="sm" className="text-xs">
                        Try Static Chat
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ) : messages.length === 0 ? (
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
                  <h3 className="text-lg font-medium text-emerald-800">{t("chat.start")}</h3>
                  <p className="text-sm text-emerald-600 max-w-md">{t("chat.placeholder")}</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4 p-6">
                {messages.map((m) => (
                  <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg p-4 ${
                        m.role === "user"
                          ? "bg-emerald-600 text-white"
                          : "bg-emerald-50 text-emerald-900 border border-emerald-200"
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

          <CardFooter className="border-t p-4 bg-white">
            <form onSubmit={handleSubmit} className="flex w-full space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("chat.input.placeholder")}
                className="flex-grow border-emerald-200 focus-visible:ring-emerald-500"
                disabled={isLoading || apiAvailable === false}
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim() || apiAvailable === false}
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </Button>
            </form>
            {apiAvailable === false && (
              <div className="w-full mt-2 text-xs text-center text-red-600">
                Chat is disabled because the Groq API is unavailable. Please try the static chat.
              </div>
            )}
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

export default function ChatGroq() {
  return (
    <LanguageProvider>
      <ChatGroqContent />
    </LanguageProvider>
  )
}
