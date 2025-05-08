"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle, XCircle, Loader2 } from "lucide-react"

export default function ApiTestPage() {
  const [result, setResult] = useState<string | null>(null)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const testApi = async () => {
    setStatus("loading")
    try {
      const response = await fetch("/api/hello")
      const data = await response.json()
      setResult(JSON.stringify(data, null, 2))
      setStatus("success")
    } catch (error) {
      setResult(`Error: ${error instanceof Error ? error.message : String(error)}`)
      setStatus("error")
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
          <CardTitle>Basic API Test</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>This is a very simple test that just checks if the API routes are working correctly.</p>

          <div className="flex justify-center">
            <Button onClick={testApi} disabled={status === "loading"}>
              {status === "loading" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Testing API...
                </>
              ) : (
                "Test Basic API"
              )}
            </Button>
          </div>

          {result && (
            <div
              className={`mt-4 p-4 rounded-md ${
                status === "success" ? "bg-green-50" : status === "error" ? "bg-red-50" : "bg-gray-100"
              }`}
            >
              <div className="flex items-center mb-2">
                {status === "success" ? (
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                ) : status === "error" ? (
                  <XCircle className="h-5 w-5 text-red-500 mr-2" />
                ) : null}
                <p className="font-medium">{status === "success" ? "API is working!" : "API test failed"}</p>
              </div>
              <pre className="whitespace-pre-wrap overflow-x-auto">{result}</pre>
            </div>
          )}

          <div className="text-sm text-gray-500">
            <p className="font-semibold">What this tests:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Verifies that API routes are accessible</li>
              <li>Confirms that JSON responses are working</li>
              <li>Checks that client-side fetch is functioning</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
