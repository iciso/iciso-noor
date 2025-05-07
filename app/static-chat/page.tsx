"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import { staticResponses } from "@/data/static-responses"
import { useLanguage } from "@/contexts/language-context"

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function StaticChatPage() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I can provide information about comparative religious topics. Ask me a question about Islam, Christianity, Buddhism, atheism, spirituality, or CLCP.",
    },
  ])
  const { language } = useLanguage()

  // Get responses for the current language
  const responses = staticResponses[language as keyof typeof staticResponses]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])

    // Process query and find response
    const query = input.toLowerCase()
    let responseContent = ""
    let found = false

    // Check for exact matches first
    for (const key in responses) {
      if (query.includes(key)) {
        responseContent = `<h3>${responses[key as keyof typeof responses].title}</h3>${responses[key as keyof typeof responses].content}`
        found = true
        break
      }
    }

    // If no exact match, check for partial matches
    if (!found) {
      for (const key in responses) {
        const keyWords = key.split(" ")
        if (keyWords.some((word) => query.includes(word) && word.length > 3)) {
          responseContent = `<h3>${responses[key as keyof typeof responses].title}</h3>${responses[key as keyof typeof responses].content}`
          found = true
          break
        }
      }
    }

    // Default response if no match found
    if (!found) {
      responseContent =
        language === "en"
          ? "I'm sorry, I don't have information on that specific topic yet. Please try asking about Islam, Christianity, Buddhism, atheism, spirituality, or CLCP topics."
          : "Je suis désolé, je n'ai pas encore d'informations sur ce sujet spécifique. Veuillez essayer de poser des questions sur l'Islam, le Christianisme, le Bouddhisme, l'athéisme, la spiritualité ou les sujets CLCP."
    }

    // Add assistant response
    const assistantMessage: Message = { role: "assistant", content: responseContent }
    setMessages((prev) => [...prev, assistantMessage])

    // Clear input
    setInput("")
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{language === "en" ? "Noor Chat" : "Chat Noor"}</CardTitle>
          <CardDescription>
            {language === "en"
              ? "Ask questions about comparative religious topics"
              : "Posez des questions sur des sujets religieux comparatifs"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 max-h-[60vh] overflow-y-auto p-4 rounded-lg bg-slate-50">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {message.role === "assistant" ? (
                    <div dangerouslySetInnerHTML={{ __html: message.content }} />
                  ) : (
                    <p>{message.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <form onSubmit={handleSubmit} className="w-full flex gap-2">
            <Input
              placeholder={language === "en" ? "Type your question..." : "Tapez votre question..."}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit">
              <Send className="h-4 w-4 mr-2" />
              {language === "en" ? "Send" : "Envoyer"}
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  )
}
