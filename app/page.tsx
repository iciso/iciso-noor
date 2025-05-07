"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { t } = useLanguage()

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
        <Card className="w-full mb-8">
          <CardHeader>
            <CardTitle>{t("home.welcome")}</CardTitle>
            <CardDescription>{t("home.subtitle")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>{t("home.description")}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <Link href="/chat" className="w-full">
                <Button className="w-full h-full py-6" variant="default">
                  <div className="flex flex-col items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-2"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span className="text-lg font-medium">{t("home.chat")}</span>
                  </div>
                </Button>
              </Link>

              <Link href="/browse" className="w-full">
                <Button className="w-full h-full py-6" variant="outline">
                  <div className="flex flex-col items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-2"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                    </svg>
                    <span className="text-lg font-medium">{t("home.browse")}</span>
                  </div>
                </Button>
              </Link>

              <Link href="/clcp" className="w-full">
                <Button className="w-full h-full py-6" variant="outline">
                  <div className="flex flex-col items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16v-4"></path>
                      <path d="M12 8h.01"></path>
                    </svg>
                    <span className="text-lg font-medium">{t("home.about.clcp")}</span>
                  </div>
                </Button>
              </Link>
            </div>
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
