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
  title: "Noor - Comparative Religion Resource",
  description:
    "Noor (Neutral Open Objective Resource) provides factual, non-biased information about faith and non-faiths, as well as the Community Life Competence Process (CLCP) and the relationships between them. Noor is freeware and open source, made by v0 following the principles of Community Led Development (CLD) as reflected in The Constellation website on CLCP.",
  keywords:
    "comparative religion, CLCP, Community Life Competence Process, Islam, Christianity, Buddhism, Hinduism, Judaism, Sikhism, interfaith, community development",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/svg+xml" },
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
