"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"

// Import static responses from a shared file
import { STATIC_RESPONSES_EN, STATIC_RESPONSES_FR } from "@/data/static-responses"

type Message = {
  role: "user" | "assistant"
  content: string
  id: string
}

export default function StaticChat() {
  const { t, language } = useLanguage()
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
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

    // Generate static response
    setTimeout(() => {
      const query = input.toLowerCase()
      const STATIC_RESPONSES = language === "en" ? STATIC_RESPONSES_EN : STATIC_RESPONSES_FR
      let responseContent = STATIC_RESPONSES.default

      // Check for keywords in the query
      if (query.includes("islam") && query.includes("clcp")) {
        responseContent = STATIC_RESPONSES["islam-clcp"]
      } else if (query.includes("christian") && query.includes("clcp")) {
        responseContent = STATIC_RESPONSES["christianity-clcp"]
      } else if (query.includes("buddhis") && query.includes("clcp")) {
        responseContent = STATIC_RESPONSES["buddhism-clcp"]
      } else if (query.includes("hindu") && query.includes("clcp")) {
        responseContent = STATIC_RESPONSES["hinduism-clcp"]
      } else if (query.includes("sikh") && query.includes("clcp")) {
        responseContent = STATIC_RESPONSES["sikhism-clcp"]
      } else if (query.includes("atheis") && query.includes("clcp")) {
        responseContent = STATIC_RESPONSES["atheism-clcp"]
      } else if ((query.includes("spiritual") || query.includes("non-religious")) && query.includes("clcp")) {
        responseContent = STATIC_RESPONSES["spirituality-clcp"]
      } else if (query.includes("being human") || query.includes("humane")) {
        responseContent = STATIC_RESPONSES["being-humane"]
      } else if ((query.includes("religion") || query.includes("faith")) && query.includes("clcp")) {
        responseContent = STATIC_RESPONSES["clcp-religions"]
      } else if (query.includes("clcp")) {
        responseContent = STATIC_RESPONSES.clcp
      } else if (query.includes("salt")) {
        responseContent = STATIC_RESPONSES.salt
      } else if (query.includes("islam")) {
        responseContent = STATIC_RESPONSES.islam
      } else if (query.includes("christian")) {
        responseContent = STATIC_RESPONSES.christianity
      } else if (query.includes("buddhis")) {
        responseContent = STATIC_RESPONSES.buddhism
      } else if (query.includes("hindu")) {
        responseContent = STATIC_RESPONSES.hinduism
      } else if (query.includes("judai") || query.includes("jewish")) {
        responseContent = STATIC_RESPONSES.judaism
      } else if (query.includes("sikh")) {
        responseContent = STATIC_RESPONSES.sikhism
      } else if (query.includes("atheis")) {
        responseContent = STATIC_RESPONSES.atheism
      } else if (query.includes("spiritual") || query.includes("non-religious")) {
        responseContent = STATIC_RESPONSES.spirituality
      } else if (query.includes("compar") || query.includes("difference") || query.includes("similar")) {
        responseContent = STATIC_RESPONSES.comparison
      } else if (query.includes("salvation") || query.includes("saved")) {
        responseContent = STATIC_RESPONSES.salvation
      } else if (
        query.includes("afterlife") ||
        query.includes("heaven") ||
        query.includes("hell") ||
        query.includes("death")
      ) {
        responseContent = STATIC_RESPONSES.afterlife
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: responseContent,
        id: (Date.now() + 1).toString(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    }, 500)
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
        <Card className="w-full h-[calc(100vh-12rem)]">
          <CardHeader>
            <CardTitle>{t("chat.title")}</CardTitle>
            <CardDescription>{t("chat.subtitle")}</CardDescription>
          </CardHeader>
          <CardContent className="overflow-y-auto h-[calc(100%-10rem)]">
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
              <div className="space-y-4">
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
            <form onSubmit={handleSubmit} className="flex w-full space-x-2">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder={t("chat.input.placeholder")}
                className="flex-grow"
              />
              <Button type="submit" disabled={!input.trim()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M22 2L11 13"></path>
                  <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
                </svg>
              </Button>
            </form>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
