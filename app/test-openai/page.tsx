"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle, XCircle, Loader2 } from "lucide-react"

export default function TestOpenAIPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  const [response, setResponse] = useState("")

  const testConnection = async () => {
    setStatus("loading")
    try {
      // Call the server-side API route
      const res = await fetch("/api/test-openai")

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      const data = await res.json()

      if (data.status === "success") {
        setStatus("success")
        setMessage(data.message)
        setResponse(data.response)
      } else {
        setStatus("error")
        setMessage(data.message)
        setResponse(data.error || "Unknown error")
      }
    } catch (error) {
      setStatus("error")
      setMessage("Failed to test OpenAI connection")
      setResponse(error instanceof Error ? error.message : String(error))
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Link href="/" className="flex items-center space-x-2 mb-6">
        <ArrowLeft className="h-5 w-5" />
        <span>Back to Home</span>
      </Link>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>OpenAI API Connection Test</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>
            This page tests if your OpenAI API key is correctly configured and if the application can successfully
            connect to the OpenAI API.
          </p>

          <div className="flex justify-center">
            <Button onClick={testConnection} disabled={status === "loading"} size="lg">
              {status === "loading" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Testing Connection...
                </>
              ) : (
                "Test OpenAI Connection"
              )}
            </Button>
          </div>

          {status !== "idle" && (
            <div
              className={`p-4 rounded-md ${
                status === "success" ? "bg-green-50" : status === "error" ? "bg-red-50" : "bg-gray-50"
              }`}
            >
              <div className="flex items-center mb-2">
                {status === "success" ? (
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                ) : status === "error" ? (
                  <XCircle className="h-5 w-5 text-red-500 mr-2" />
                ) : null}
                <p className="font-medium">{message}</p>
              </div>
              {response && (
                <div className="mt-2 text-sm">
                  <p className="font-semibold">Response:</p>
                  <p className="mt-1">{response}</p>
                </div>
              )}
            </div>
          )}

          <div className="text-sm text-gray-500">
            <p className="font-semibold">Troubleshooting Tips:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Verify that your OPENAI_API_KEY environment variable is set correctly in Vercel</li>
              <li>Check that your OpenAI API key is valid and has not expired</li>
              <li>Ensure your OpenAI account has sufficient credits</li>
              <li>If using a free tier, check if you've exceeded the rate limits</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
