"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Loader2 } from "lucide-react"

export default function DebugPage() {
  const [debugInfo, setDebugInfo] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchDebugInfo = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/debug")

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setDebugInfo(data.debugInfo)
    } catch (err) {
      console.error("Error fetching debug info:", err)
      setError(err instanceof Error ? err.message : String(err))
    } finally {
      setIsLoading(false)
    }
  }

  // Fetch debug info on page load
  useEffect(() => {
    fetchDebugInfo()
  }, [])

  return (
    <div className="container mx-auto py-8 px-4">
      <Link href="/" className="flex items-center space-x-2 mb-6">
        <ArrowLeft className="h-5 w-5" />
        <span>Back to Home</span>
      </Link>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Debug Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>This page displays debug information about your environment and configuration.</p>

          {isLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
            </div>
          ) : error ? (
            <div className="p-4 bg-red-100 text-red-700 rounded-md">
              <p className="font-bold">Error loading debug information:</p>
              <p>{error}</p>
              <Button onClick={fetchDebugInfo} className="mt-2" variant="outline" size="sm">
                Try Again
              </Button>
            </div>
          ) : debugInfo ? (
            <div className="bg-gray-100 p-4 rounded-md">
              <pre className="whitespace-pre-wrap overflow-x-auto text-sm">{JSON.stringify(debugInfo, null, 2)}</pre>
            </div>
          ) : (
            <p>No debug information available.</p>
          )}

          <div className="flex justify-between">
            <Button onClick={fetchDebugInfo} variant="outline">
              Refresh Debug Info
            </Button>
            <div className="space-x-2">
              <Button onClick={() => window.open("/simple-test", "_blank")} variant="outline">
                Run Environment Test
              </Button>
              <Button onClick={() => window.open("/chat-simple", "_blank")} variant="outline">
                Try Simple Chat
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
