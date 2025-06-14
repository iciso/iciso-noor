"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle, XCircle, Loader2 } from "lucide-react"

export default function EnvTestPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  const [details, setDetails] = useState<Record<string, any>>({})

  const testEnv = async () => {
    setStatus("loading")
    try {
      const res = await fetch("/api/env-test")
      const data = await res.json()

      if (data.status === "success") {
        setStatus("success")
        setMessage(data.message)
        // Remove the message from details
        const { message, ...rest } = data
        setDetails(rest)
      } else {
        setStatus("error")
        setMessage(data.message)
        // Remove the message and status from details
        const { message, status, ...rest } = data
        setDetails(rest)
      }
    } catch (error) {
      setStatus("error")
      setMessage("Failed to test environment")
      setDetails({ error: error instanceof Error ? error.message : String(error) })
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
          <CardTitle>Environment Variables Test</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>This page tests if your environment variables are correctly configured without making any API calls.</p>

          <div className="flex justify-center">
            <Button onClick={testEnv} disabled={status === "loading"} size="lg">
              {status === "loading" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Testing Environment...
                </>
              ) : (
                "Test Environment Variables"
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
              {Object.keys(details).length > 0 && (
                <div className="mt-2 text-sm">
                  <p className="font-semibold">Details:</p>
                  <pre className="mt-1 p-2 bg-gray-100 rounded overflow-x-auto">{JSON.stringify(details, null, 2)}</pre>
                </div>
              )}
            </div>
          )}

          <div className="text-sm text-gray-500">
            <p className="font-semibold">Troubleshooting Tips:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Verify that your OPENAI_API_KEY environment variable is set correctly in Vercel</li>
              <li>Check that your OpenAI API key is valid and has not expired</li>
              <li>Make sure the API key starts with 'sk-'</li>
              <li>Try redeploying your application after updating environment variables</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
