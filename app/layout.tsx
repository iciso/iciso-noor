import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/contexts/language-context"
import { ApiStatusBanner } from "@/components/api-status-banner"
import { ServiceWorkerHandler } from "@/components/service-worker-handler"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Noor: Faiths, Non-Faiths & CLCP",
  description:
    "Noor (Neutral Open Objective Resource) explores the commonalities between CLCP (Community Life Competence Process) and various faiths and non-faiths. It provides factual, non-biased information about religious and non-religious worldviews and their relationship with community-led development principles. Noor is freeware and open source, following the principles of Community Led Development (CLD) as reflected in The Constellation's approach to CLCP.",
  keywords:
    "CLCP, Community Life Competence Process, comparative religion, Islam, Christianity, Buddhism, Hinduism, Judaism, Sikhism, interfaith, community development, faith traditions",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ServiceWorkerHandler />
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <ApiStatusBanner />
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
