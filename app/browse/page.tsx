"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { staticResponses } from "@/data/static-responses"

export default function BrowsePage() {
  const { language, t } = useLanguage()

  // Get responses for the current language
  const responses = staticResponses[language as keyof typeof staticResponses]

  // Create categories in order of global religious demographics
  const categories = {
    christianity: {
      title: language === "en" ? "Christianity" : "Christianisme",
      topics: Object.keys(responses).filter(
        (key) => key.includes("christian") && !key.includes("islam") && key !== "christianity-clcp",
      ),
    },
    islam: {
      title: language === "en" ? "Islam" : "Islam",
      topics: Object.keys(responses).filter(
        (key) => key.includes("islam") && !key.includes("christianity") && key !== "islam-clcp",
      ),
    },
    hinduism: {
      title: language === "en" ? "Hinduism" : "Hindouisme",
      topics: Object.keys(responses).filter((key) => key.includes("hindu") && key !== "hinduism-clcp"),
    },
    judaism: {
      title: language === "en" ? "Judaism" : "Judaïsme",
      topics: Object.keys(responses).filter((key) => key.includes("juda") && key !== "judaism-clcp"),
    },
    comparative: {
      title: language === "en" ? "Comparative Topics" : "Sujets Comparatifs",
      topics: Object.keys(responses).filter(
        (key) => key.includes("comparison") || key.includes("salvation") || key.includes("afterlife"),
      ),
    },
    clcp: {
      title: language === "en" ? "CLCP Topics" : "Sujets CLCP",
      topics: [
        // Order explicitly by global religious demographics
        "christianity-clcp",
        "islam-clcp",
        "hinduism-clcp",
        "buddhism-clcp",
        "sikhism-clcp",
        "judaism-clcp",
        "atheism-clcp",
        "spirituality-clcp",
        "salt",
        "being-humane",
        "clcp-religions",
      ].filter((key) => Object.keys(responses).includes(key)),
    },
    nonfaith: {
      title: language === "en" ? "Non-Faith Perspectives" : "Perspectives Non-Religieuses",
      topics: Object.keys(responses).filter(
        (key) => key === "atheism" || key === "spirituality" || key === "atheism-clcp" || key === "spirituality-clcp",
      ),
    },
  }

  // Special case for CLCP main topic
  const clcpMainTopic = {
    title:
      language === "en"
        ? "Community Life Competence Process (CLCP)"
        : "Processus de Compétence de Vie Communautaire (CLCP)",
    description:
      language === "en"
        ? "A comprehensive overview of the CLCP methodology"
        : "Un aperçu complet de la méthodologie CLCP",
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">{t("browse.title")}</h1>

      {/* Special card for CLCP main topic that links to /app/clcp */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{language === "en" ? "Featured Topic" : "Sujet Vedette"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle>{clcpMainTopic.title}</CardTitle>
              <CardDescription>{language === "en" ? "Core methodology" : "Méthodologie principale"}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>
                {language === "en"
                  ? "Explore the comprehensive overview of the Community Life Competence Process."
                  : "Explorez l'aperçu complet du Processus de Compétence de Vie Communautaire."}
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/clcp" className="w-full">
                <Button className="w-full">{language === "en" ? "Read More" : "Lire Plus"}</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>

      {Object.entries(categories).map(([categoryKey, category]) => (
        <div key={categoryKey} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.topics.length > 0 ? (
              category.topics.map((topicKey) => (
                <Card key={topicKey} className="flex flex-col h-full">
                  <CardHeader>
                    <CardTitle>{responses[topicKey as keyof typeof responses].title}</CardTitle>
                    <CardDescription>{language === "en" ? "Comparative topic" : "Sujet comparatif"}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p>
                      {language === "en"
                        ? "Explore this topic to learn more about different perspectives."
                        : "Explorez ce sujet pour en savoir plus sur différentes perspectives."}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/topic/${topicKey}`} className="w-full">
                      <Button className="w-full">{language === "en" ? "Read More" : "Lire Plus"}</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <p className="text-gray-500 col-span-3">No topics available in this category.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
