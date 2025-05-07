"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"

export default function CLCPPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-emerald-50 to-teal-100">
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span>{t("nav.back")}</span>
            </Link>
          </div>
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
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>{t("clcp.title")}</CardTitle>
            <CardDescription>{t("clcp.subtitle")}</CardDescription>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <h2>{t("clcp.what")}</h2>
            <p>{t("clcp.what.description")}</p>

            <h2>{t("clcp.principles")}</h2>
            <ul>
              <li>
                <strong>{t("clcp.principles.ownership")}</strong>
              </li>
              <li>
                <strong>{t("clcp.principles.strength")}</strong>
              </li>
              <li>
                <strong>{t("clcp.principles.learning")}</strong>
              </li>
              <li>
                <strong>{t("clcp.principles.local")}</strong>
              </li>
              <li>
                <strong>{t("clcp.principles.transfer")}</strong>
              </li>
            </ul>

            <h2>{t("clcp.salt")}</h2>
            <p>{t("clcp.salt.description")}</p>
            <ul>
              <li>
                <strong>{t("clcp.salt.stimulate")}</strong>
              </li>
              <li>
                <strong>{t("clcp.salt.appreciate")}</strong>
              </li>
              <li>
                <strong>{t("clcp.salt.learn")}</strong>
              </li>
              <li>
                <strong>{t("clcp.salt.transfer")}</strong>
              </li>
            </ul>

            <h2>{t("clcp.process")}</h2>
            <p>{t("clcp.process.description")}</p>
            <ol>
              <li>
                <strong>{t("clcp.process.relationship")}</strong>
              </li>
              <li>
                <strong>{t("clcp.process.dream")}</strong>
              </li>
              <li>
                <strong>{t("clcp.process.assessment")}</strong>
              </li>
              <li>
                <strong>{t("clcp.process.action")}</strong>
              </li>
              <li>
                <strong>{t("clcp.process.implementation")}</strong>
              </li>
              <li>
                <strong>{t("clcp.process.measurement")}</strong>
              </li>
              <li>
                <strong>{t("clcp.process.sharing")}</strong>
              </li>
            </ol>

            <h2>{t("clcp.faith")}</h2>
            <p>{t("clcp.faith.description")}</p>
            <ul>
              <li>{t("clcp.faith.community")}</li>
              <li>{t("clcp.faith.dignity")}</li>
              <li>{t("clcp.faith.service")}</li>
              <li>{t("clcp.faith.hope")}</li>
              <li>{t("clcp.faith.strength")}</li>
            </ul>

            <p>
              For more detailed information on the relationships between CLCP and specific faith traditions, explore our
              chat interface or browse our topics section.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/chat">
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>{t("chat.title")}</CardTitle>
                <CardDescription>{t("chat.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Use our chat interface to ask specific questions about CLCP and how it relates to different faith
                  traditions.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/browse">
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>{t("browse.title")}</CardTitle>
                <CardDescription>Explore comparative religion topics and CLCP</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Browse our collection of topics covering various aspects of religions and their relationship with
                  CLCP.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </main>
    </div>
  )
}
