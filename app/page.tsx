"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"
import { AlertCircle, BookOpen, MessageSquare, Info } from "lucide-react"
import { useState, useEffect } from "react"

export default function Home() {
  const { t } = useLanguage()
  const [apiStatus, setApiStatus] = useState<"loading" | "available" | "unavailable">("loading")

  // Check API status on component mount
  useEffect(() => {
    const checkApiStatus = async () => {
      try {
        // Use the status API endpoint instead of directly checking environment variables
        const response = await fetch("/api/status")
        const data = await response.json()
        setApiStatus(data.status === "available" ? "available" : "unavailable")
      } catch (error) {
        setApiStatus("unavailable")
      }
    }

    checkApiStatus()
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-emerald-50 to-teal-100">
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xl">
              ن
            </div>
            <div>
              <h1 className="text-2xl font-bold text-emerald-700">Noor</h1>
              <p className="text-sm text-gray-500">Neutral Open Objective Resource</p>
            </div>
          </div>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto w-full">
        {apiStatus === "unavailable" && (
          <div className="mb-6 p-4 border border-yellow-300 bg-yellow-50 rounded-lg flex items-start">
            <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-yellow-800">OpenAI API Unavailable</h3>
              <p className="text-sm text-yellow-700 mt-1">
                The OpenAI API is currently unavailable or has exceeded its quota. You can still use the static chat or
                browse topics.
              </p>
            </div>
          </div>
        )}

        <Card className="w-full mb-8">
          <CardHeader>
            <CardTitle>{t("home.welcome")}</CardTitle>
            <CardDescription>{t("home.subtitle")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>{t("home.description")}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <Link href="/chat" className="w-full">
                <Button
                  className={`w-full h-full py-6 ${
                    apiStatus === "unavailable" ? "bg-gray-400 hover:bg-gray-400 cursor-not-allowed" : ""
                  }`}
                  variant="default"
                  disabled={apiStatus === "unavailable"}
                >
                  <div className="flex flex-col items-center">
                    <MessageSquare className="mb-2 h-6 w-6" />
                    <span className="text-lg font-medium">{t("home.chat")}</span>
                    {apiStatus === "loading" && <span className="text-xs mt-1">Checking availability...</span>}
                    {apiStatus === "unavailable" && <span className="text-xs mt-1">Currently unavailable</span>}
                  </div>
                </Button>
              </Link>

              <Link href="/browse" className="w-full">
                <Button className="w-full h-full py-6" variant="outline">
                  <div className="flex flex-col items-center">
                    <BookOpen className="mb-2 h-6 w-6" />
                    <span className="text-lg font-medium">{t("home.browse")}</span>
                  </div>
                </Button>
              </Link>

              <Link href="/clcp" className="w-full">
                <Button className="w-full h-full py-6" variant="outline">
                  <div className="flex flex-col items-center">
                    <Info className="mb-2 h-6 w-6" />
                    <span className="text-lg font-medium">{t("home.about.clcp")}</span>
                  </div>
                </Button>
              </Link>
            </div>

            {apiStatus === "unavailable" && (
              <div className="mt-4">
                <Link href="/static-chat-basic">
                  <Button className="w-full py-4" variant="default">
                    <div className="flex flex-col items-center">
                      <MessageSquare className="mb-2 h-6 w-6" />
                      <span className="text-lg font-medium">Try Static Chat (No API Required)</span>
                    </div>
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>{t("home.comparative.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{t("home.comparative.description")}</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>{t("home.comparative.texts")}</li>
                <li>{t("home.comparative.god")}</li>
                <li>{t("home.comparative.worship")}</li>
                <li>{t("home.comparative.ethics")}</li>
                <li>{t("home.comparative.afterlife")}</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t("home.clcp.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{t("home.clcp.description")}</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>{t("home.clcp.salt")}</li>
                <li>{t("home.clcp.ownership")}</li>
                <li>{t("home.clcp.strength")}</li>
                <li>{t("home.clcp.values")}</li>
                <li>{t("home.clcp.applications")}</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
