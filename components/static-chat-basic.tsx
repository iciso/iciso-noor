"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { STATIC_RESPONSES_EN, STATIC_RESPONSES_FR, staticResponses } from "@/data/static-responses"
import { NoorLogo } from "./noor-logo"
import { CCLicenseBadge } from "./cc-license-badge"
import { Send, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { SuggestedTopics } from "./suggested-topics"

export function StaticChatBasic() {
  const { language, setLanguage, t } = useLanguage()
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)

  // Set initial message based on language
  useEffect(() => {
    setMessages([
      {
        role: "assistant",
        content:
          language === "en"
            ? "Ask about comparative religion\n\nNoor provides factual, non-biased information on major world religions, non-faith perspectives, and CLCP principles."
            : "Posez des questions sur la religion comparée\n\nNoor fournit des informations factuelles et non biaisées sur les principales religions du monde, les perspectives non religieuses et les principes du CLCP.",
      },
    ])
    setShowSuggestions(true)
  }, [language])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    processInput(input)
  }

  const processInput = (text: string) => {
    if (!text.trim()) return

    // Add user message
    const userMessage = { role: "user", content: text }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setShowSuggestions(false)

    // Find matching response or use default
    setTimeout(() => {
      // Select responses based on current language
      const responses = language === "en" ? STATIC_RESPONSES_EN : STATIC_RESPONSES_FR
      const nestedResponses = language === "en" ? staticResponses.en : staticResponses.fr

      let responseContent =
        responses.default ||
        (language === "en"
          ? "I don't have specific information about that topic yet. Please try asking about major world religions, non-faith perspectives, or CLCP principles."
          : "Je n'ai pas encore d'informations spécifiques sur ce sujet. Veuillez essayer de poser des questions sur les principales religions du monde, les perspectives non religieuses ou les principes du CLCP.")

      // Check for keyword matches in static responses
      const lowercaseInput = text.toLowerCase().trim()

      // First check for exact matches
      if (responses[lowercaseInput]) {
        responseContent = responses[lowercaseInput]
      } else {
        // Then check for partial matches
        for (const [key, value] of Object.entries(responses)) {
          if (lowercaseInput.includes(key.toLowerCase())) {
            responseContent = value
            break
          }
        }

        // Check for compound keys like "islam-clcp"
        for (const [key, value] of Object.entries(responses)) {
          if (key.includes("-") && key.split("-").every((part) => lowercaseInput.includes(part.toLowerCase()))) {
            responseContent = value
            break
          }
        }
      }

      // Check for nested responses (with title and content)
      for (const [key, value] of Object.entries(nestedResponses)) {
        if (lowercaseInput === key || lowercaseInput.includes(key)) {
          if (typeof value === "object" && value.content) {
            responseContent = value.content
            break
          }
        }
      }

      // If we have a match in the nested structure, use the content
      if (typeof responseContent === "object" && responseContent.content) {
        responseContent = responseContent.content
      } else if (typeof responseContent === "object" && responseContent.title) {
        // If it has a title but no content field, create a simple response
        responseContent = `<h2>${responseContent.title}</h2>\n\n${responseContent.content || ""}`
      }

      // For debugging
      console.log("Language:", language)
      console.log("Input:", lowercaseInput)
      console.log("Response:", responseContent)

      setMessages((prev) => [...prev, { role: "assistant", content: responseContent }])
      setIsLoading(false)

      // Show suggestions again after response
      setShowSuggestions(true)
    }, 1000) // Simulate response delay
  }

  const handleTopicSelect = (topic: string) => {
    processInput(topic)
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en")
  }

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <header className="bg-emerald-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <NoorLogo className="h-6 w-6 mr-2" />
          <h1 className="text-xl font-medium">Noor Chat</h1>
        </div>
        <button
          onClick={toggleLanguage}
          className="flex items-center justify-center p-2 rounded-full hover:bg-emerald-700 transition-colors"
          aria-label={language === "en" ? "Switch to French" : "Switch to English"}
        >
          <Globe className="h-5 w-5" />
          <span className="ml-1 text-sm font-medium">{language === "en" ? "FR" : "EN"}</span>
        </button>
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
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: message.content }} />
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

        {/* Suggested topics */}
        {showSuggestions && messages.length > 0 && !isLoading && (
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-sm text-gray-500 mb-2">
              {language === "en" ? "Suggested topics:" : "Sujets suggérés:"}
            </p>
            <SuggestedTopics onSelectTopic={handleTopicSelect} />
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
            placeholder={
              language === "en"
                ? "Ask about comparative religion or CLCP..."
                : "Posez des questions sur la religion comparée ou le CLCP..."
            }
            className="flex-1 px-4 py-2 bg-transparent focus:outline-none"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="p-2 text-emerald-600 hover:text-emerald-800 disabled:opacity-50"
            disabled={!input.trim() || isLoading}
            aria-label={language === "en" ? "Send message" : "Envoyer le message"}
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>

      {/* Footer */}
      <footer className="border-t py-3 px-4 text-center text-sm text-gray-500">
        <div className="mb-1">
          {language === "en" ? "Noor - Neutral Open Objective Resource" : "Noor - Ressource Objective Ouverte Neutre"}
        </div>
        <div className="flex justify-center items-center space-x-4">
          <CCLicenseBadge />
          <span>The Constellation</span>
          <span>{language === "en" ? "Faith Competence Resources" : "Ressources de Compétence de Foi"}</span>
        </div>
      </footer>
    </div>
  )
}
