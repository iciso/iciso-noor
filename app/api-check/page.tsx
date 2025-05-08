"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2, CheckCircle, XCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function ApiCheckPage() {
  const [simpleStatus, setSimpleStatus] = useState<"loading" | "success" | "error">("loading")
  const [envStatus, setEnvStatus] = useState<"loading" | "success" | "error">("loading")
  const [openaiStatus, setOpenaiStatus] = useState<"loading" | "success" | "error" | "warning">("loading")

  const [simpleResponse, setSimpleResponse] = useState<any>(null)
  const [envResponse, setEnvResponse] = useState<any>(null)
  const [openaiResponse, setOpenaiResponse] = useState<any>(null)

  const [simpleError, setSimpleError] = useState<string | null>(null)
  const [envError, setEnvError] = useState<string | null>(null)
  const [openaiError, setOpenaiError] = useState<string | null>(null)

  useEffect(() => {
    // Test simple API
    fetch("/api/simple-test")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
        return res.json()
      })
      .then((data) => {
        setSimpleStatus("success")
        setSimpleResponse(data)
      })
      .catch((err) => {
        setSimpleStatus("error")
        setSimpleError(err.message)
      })

    // Test env check API
    fetch("/api/env-check")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
        return res.json()
      })
      .then((data) => {
        setEnvStatus("success")
        setEnvResponse(data)

        // Check OpenAI status based on env check
        if (data.hasOpenAIKey) {
          if (data.openAIKeyValid) {
            setOpenaiStatus("success")
            setOpenaiResponse({ message: "OpenAI API key is configured and has valid format" })
          } else {
            setOpenaiStatus("warning")
            setOpenaiResponse({ message: "OpenAI API key is configured but has invalid format" })
          }
        } else {
          setOpenaiStatus("error")
          setOpenaiResponse({ message: "OpenAI API key is not configured" })
        }
      })
      .catch((err) => {
        setEnvStatus("error")
        setEnvError(err.message)

        // Set OpenAI status to error as well
        setOpenaiStatus("error")
        setOpenaiError("Could not check OpenAI status due to environment check failure")
      })
  }, [])

  const getStatusIcon = (status: "loading" | "success" | "error" | "warning") => {
    switch (status) {
      case "loading":
        return <Loader2 className="h-5 w-5 animate-spin text-blue-500" />
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "error":
        return <XCircle className="h-5 w-5 text-red-500" />
      case "warning":
        return <AlertCircle className="h-5 w-5 text-yellow-500" />
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">API Status Check</h1>

        <div className="space-y-6">
          {/* Simple API Test */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                {getStatusIcon(simpleStatus)}
                <span className="ml-2">Basic API Test</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {simpleStatus === "loading" && <p>Checking basic API functionality...</p>}

              {simpleStatus === "success" && (
                <div>
                  <p className="text-green-600 font-medium">Basic API is working correctly</p>
                  <pre className="mt-2 p-2 bg-gray-100 rounded text-sm overflow-auto">
                    {JSON.stringify(simpleResponse, null, 2)}
                  </pre>
                </div>
              )}

              {simpleStatus === "error" && (
                <Alert variant="destructive">
                  <AlertTitle>Basic API Test Failed</AlertTitle>
                  <AlertDescription>{simpleError}</AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* Environment Check */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                {getStatusIcon(envStatus)}
                <span className="ml-2">Environment Check</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {envStatus === "loading" && <p>Checking environment variables...</p>}

              {envStatus === "success" && (
                <div>
                  <p className="text-green-600 font-medium">Environment check completed</p>
                  <pre className="mt-2 p-2 bg-gray-100 rounded text-sm overflow-auto">
                    {JSON.stringify(envResponse, null, 2)}
                  </pre>
                </div>
              )}

              {envStatus === "error" && (
                <Alert variant="destructive">
                  <AlertTitle>Environment Check Failed</AlertTitle>
                  <AlertDescription>{envError}</AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* OpenAI Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                {getStatusIcon(openaiStatus)}
                <span className="ml-2">OpenAI API Status</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {openaiStatus === "loading" && <p>Checking OpenAI API configuration...</p>}

              {openaiStatus === "success" && (
                <div>
                  <p className="text-green-600 font-medium">OpenAI API is properly configured</p>
                  <pre className="mt-2 p-2 bg-gray-100 rounded text-sm overflow-auto">
                    {JSON.stringify(openaiResponse, null, 2)}
                  </pre>
                </div>
              )}

              {openaiStatus === "warning" && (
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>OpenAI API Warning</AlertTitle>
                  <AlertDescription>{openaiResponse?.message}</AlertDescription>
                </Alert>
              )}

              {openaiStatus === "error" && (
                <Alert variant="destructive">
                  <AlertTitle>OpenAI API Issue</AlertTitle>
                  <AlertDescription>{openaiError || openaiResponse?.message}</AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Link href="/">
              <Button variant="outline">Back to Home</Button>
            </Link>

            <Button onClick={() => window.location.reload()}>Refresh Tests</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
