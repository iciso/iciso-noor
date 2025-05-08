"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function SimpleTestPage() {
  const [result, setResult] = useState<string | null>(null)

  const testEnv = async () => {
    try {
      const response = await fetch("/api/env-test")
      const data = await response.json()
      setResult(JSON.stringify(data, null, 2))
    } catch (error) {
      setResult(`Error: ${error instanceof Error ? error.message : String(error)}`)
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
          <CardTitle>Simple Environment Test</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>This is a very simple test that just checks if your environment variables are set correctly.</p>

          <div className="flex justify-center">
            <Button onClick={testEnv}>Test Environment</Button>
          </div>

          {result && (
            <div className="mt-4 p-4 bg-gray-100 rounded-md">
              <pre className="whitespace-pre-wrap overflow-x-auto">{result}</pre>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
