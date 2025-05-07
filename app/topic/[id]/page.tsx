"use client"

import { useParams, notFound } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { staticResponses } from "@/data/static-responses"
import { useLanguage } from "@/contexts/language-context"

export default function TopicPage() {
  const { id } = useParams()
  const { language } = useLanguage()

  // Ensure id is a string
  const topicId = Array.isArray(id) ? id[0] : id

  // Get responses for the current language
  const responses = staticResponses[language as keyof typeof staticResponses]

  // Check if the topic exists
  if (!responses || !responses[topicId as keyof typeof responses]) {
    return notFound()
  }

  const topic = responses[topicId as keyof typeof responses]

  return (
    <div className="container mx-auto py-8 px-4">
      <Link href="/browse">
        <Button variant="outline" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {language === "en" ? "Back to Topics" : "Retour aux Sujets"}
        </Button>
      </Link>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl">{topic.title}</CardTitle>
          <CardDescription>
            {language === "en" ? "Comparative religious topic" : "Sujet religieux comparatif"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div dangerouslySetInnerHTML={{ __html: topic.content }} />
        </CardContent>
      </Card>
    </div>
  )
}
