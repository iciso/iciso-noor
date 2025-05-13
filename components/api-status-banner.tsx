"use client"

import { useState, useEffect } from "react"
import { AlertCircle } from "lucide-react"
import Link from "next/link"

export function ApiStatusBanner() {
  const [apiStatus, setApiStatus] = useState<"loading" | "available" | "unavailable">("loading")
  const [isVisible, setIsVisible] = useState(true)

  // Check API status on component mount
  useEffect(() => {
    const checkApiStatus = async () => {
      try {
        // Use the groq-status API endpoint
        const response = await fetch("/api/groq-status")
        if (response.ok) {
          const data = await response.json()
          setApiStatus(data.available ? "available" : "unavailable")
        } else {
          setApiStatus("unavailable")
        }
      } catch (error) {
        setApiStatus("unavailable")
      }
    }

    checkApiStatus()
  }, [])

  if (apiStatus !== "unavailable" || !isVisible) {
    return null
  }

  return (
    <div className="bg-yellow-100 border-b border-yellow-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-start justify-between">
        <div className="flex items-start">
          <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-yellow-800">Groq API Unavailable</h3>
            <p className="text-sm text-yellow-700 mt-1">
              The Groq API is currently unavailable. You can still use the{" "}
              <Link href="/static-chat-basic" className="text-yellow-800 font-medium hover:underline">
                static chat
              </Link>{" "}
              or{" "}
              <Link href="/browse" className="text-yellow-800 font-medium hover:underline">
                browse topics
              </Link>
              .
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-yellow-600 hover:text-yellow-800 text-sm font-medium"
        >
          Dismiss
        </button>
      </div>
    </div>
  )
}
