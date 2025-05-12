"use client"

import { useState, useEffect } from "react"
import { AlertCircle, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function GroqStatusBanner() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<"loading" | "available" | "unavailable">("loading")
  const [message, setMessage] = useState("")

  useEffect(() => {
    const checkGroqStatus = async () => {
      try {
        const response = await fetch("/api/groq-status")

        if (response.ok) {
          const data = await response.json()
          if (data.available) {
            setStatus("available")
            setMessage(data.message || "Groq API is available")
          } else {
            setStatus("unavailable")
            setMessage(data.message || "Groq API is currently unavailable")
          }
        } else {
          setStatus("unavailable")
          setMessage("Could not check Groq API status")
        }
      } catch (error) {
        setStatus("unavailable")
        setMessage("Error checking Groq API status")
      }
    }

    checkGroqStatus()
  }, [])

  if (status === "loading") {
    return (
      <div className="bg-gray-100 text-gray-700 py-1 px-4 text-center text-sm">
        <span className="inline-block animate-pulse">●</span> Checking Groq API status...
      </div>
    )
  }

  if (status === "available") {
    return (
      <div className="bg-green-100 text-green-800 py-1 px-4 text-center text-sm flex items-center justify-center">
        <CheckCircle className="h-4 w-4 mr-2" /> {message}
      </div>
    )
  }

  return (
    <div className="bg-yellow-100 text-yellow-800 py-1 px-4 text-center text-sm flex items-center justify-center">
      <AlertCircle className="h-4 w-4 mr-2" /> {message}
    </div>
  )
}
