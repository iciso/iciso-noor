"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowLeft, Send } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage, LanguageProvider } from "@/contexts/language-context"

// Enhanced predefined responses
const RESPONSES: Record<string, string> = {
  hello: "Hello! I'm Noor, a resource for comparative religion and CLCP information. How can I help you today?",
  islam: `<h3>Islam</h3>
    <p>Islam is a monotheistic religion founded on the teachings of Prophet Muhammad and the Quran, emphasizing submission to Allah (God), compassion, justice, and community welfare.</p>
    <p>Core beliefs include:</p>
    <ul>
      <li>Tawhid: The absolute oneness of Allah</li>
      <li>Prophethood: Muhammad as the final prophet</li>
      <li>The Quran as the literal word of Allah</li>
      <li>Angels, Day of Judgment, and Divine Decree</li>
    </ul>
    <p>The Five Pillars of Islam are Shahada (declaration of faith), Salat (prayer), Zakat (charity), Sawm (fasting), and Hajj (pilgrimage).</p>`,
  christianity: `<h3>Christianity</h3>
    <p>Christianity is based on the life and teachings of Jesus Christ, focusing on love, forgiveness, redemption through Christ, and service to others as expressions of faith.</p>
    <p>Core beliefs include:</p>
    <ul>
      <li>One God who exists as Trinity: Father, Son (Jesus Christ), and Holy Spirit</li>
      <li>Jesus as the Son of God who died for humanity's sins and was resurrected</li>
      <li>Salvation through faith in Jesus Christ</li>
      <li>The Bible as the inspired word of God</li>
      <li>The Church as the community of believers</li>
    </ul>
    <p>Key values include love, service, community, prayer, and scripture study.</p>`,
  buddhism:
    "Buddhism follows the teachings of Buddha, emphasizing mindfulness, compassion, the Four Noble Truths, and the Eightfold Path as ways to overcome suffering and achieve enlightenment.",
  hinduism:
    "Hinduism encompasses diverse traditions centered on concepts like dharma (duty/ethics), karma (action and consequence), and reincarnation, with various paths to spiritual liberation.",
  judaism:
    "Judaism is centered on the covenant between God and the Jewish people, emphasizing justice, righteousness, community responsibility, and ethical monotheism.",
  sikhism:
    "Sikhism was founded by Guru Nanak and promotes equality, service to humanity, devotion to one God, and the importance of living an honest, compassionate life.",
  atheism:
    "Atheism is the absence of belief in deities, often emphasizing human agency, evidence-based reasoning, and ethical frameworks based on human well-being rather than divine command.",
  spirituality:
    "Non-religious spirituality focuses on personal meaning, connection, transcendence, and well-being outside of organized religious frameworks, often incorporating mindfulness, nature connection, and contemplative practices.",
  clcp: `<h3>Community Life Competence Process (CLCP)</h3>
    <p>The Community Life Competence Process (CLCP) empowers communities to identify their strengths and address their challenges through ownership, shared learning, and collective action.</p>
    <p>Key principles include:</p>
    <ul>
      <li>Community ownership of both challenges and solutions</li>
      <li>Strength-based approaches that build on existing capacities</li>
      <li>Learning from experience within and between communities</li>
      <li>Local adaptation of solutions to specific contexts</li>
      <li>Horizontal transfer of knowledge between communities</li>
    </ul>`,
  salt: `<h3>SALT Approach</h3>
    <p>SALT (Stimulate, Appreciate, Learn, Transfer) is a facilitation approach used in CLCP:</p>
    <ul>
      <li><strong>Stimulate</strong>: Encourage dialogue and reflection within communities</li>
      <li><strong>Appreciate</strong>: Focus on strengths and what's working well</li>
      <li><strong>Learn</strong>: Learn from communities through deep listening</li>
      <li><strong>Transfer</strong>: Share knowledge between communities</li>
    </ul>
    <p>SALT visits are opportunities for genuine connection and mutual discovery, not assessments or evaluations.</p>`,
  "islam-clcp": `<h3>Islam and CLCP</h3>
    <p>Islamic principles and CLCP share several important connections:</p>
    <ol>
      <li><strong>Community Responsibility</strong>: The Islamic concept of ummah (community) emphasizes collective responsibility, while CLCP focuses on community ownership.</li>
      <li><strong>Service and Compassion</strong>: Islam places great emphasis on khidma (service) and rahma (compassion), and CLCP facilitators serve communities by supporting their journey.</li>
      <li><strong>Human Dignity</strong>: Islam teaches that humans have inherent dignity (karama), while CLCP's strength-based approach focuses on community assets rather than deficits.</li>
      <li><strong>Justice and Equity</strong>: Islam emphasizes adl (justice), and CLCP promotes equitable participation and fair distribution of benefits.</li>
    </ol>
    <p>Muslim communities implementing CLCP often find that it provides practical tools for living out Islamic values of service and community.</p>`,
  "christianity-clcp": `<h3>Christianity and CLCP</h3>
    <p>Christian values and CLCP share several important connections:</p>
    <ol>
      <li><strong>Community and Collective Responsibility</strong>: Christianity emphasizes the church as a community of believers who support one another, while CLCP focuses on community ownership and collective action.</li>
      <li><strong>Service to Others</strong>: Jesus modeled servant leadership, and CLCP facilitators serve communities by supporting their journey without imposing solutions.</li>
      <li><strong>Recognizing Inherent Dignity</strong>: Christianity teaches that humans are created in God's image with inherent worth, while CLCP's strength-based approach focuses on community assets rather than deficits.</li>
      <li><strong>Transformation and Hope</strong>: Christianity offers hope for personal and social transformation, and CLCP's dream-building process helps communities envision and work toward a better future.</li>
    </ol>
    <p>Christian communities implementing CLCP often find that it provides practical tools for living out Christian values of service and community.</p>`,
  "buddhism-clcp":
    "Buddhist practices of mindfulness, compassion (karuna), and interdependence (pratityasamutpada) complement CLCP's approach to community awareness and interconnected solutions.",
  "atheism-clcp":
    "Atheist perspectives on human agency, evidence-based approaches, and community empowerment complement CLCP's focus on local solutions and measurable outcomes without requiring religious frameworks.",
  "spirituality-clcp":
    "Non-religious spiritual approaches to holistic well-being, connection, and mindfulness enhance CLCP's methods for community engagement and sustainable development.",
  comparison: `<h3>Comparative Religion</h3>
    <p>Comparative religion is the systematic study of similarities and differences between religious traditions. Key dimensions of comparison include:</p>
    <ul>
      <li><strong>Concepts of Ultimate Reality</strong>: From monotheism (Islam, Christianity) to non-theism (some Buddhist traditions) to naturalism (atheistic perspectives)</li>
      <li><strong>Sacred Texts and Authority</strong>: Revealed texts (Quran, Bible) vs. wisdom literature (Buddhist sutras) vs. oral traditions</li>
      <li><strong>Ethical Frameworks</strong>: Divine command, virtue ethics, consequentialism, natural law, and humanistic approaches</li>
      <li><strong>Ritual and Practice</strong>: Prayer, meditation, communal gatherings, rites of passage, and dietary practices</li>
      <li><strong>Views on Human Nature</strong>: From original sin to inherent goodness to neutral potential</li>
    </ul>
    <p>Despite differences, many traditions share common themes like the Golden Rule, compassion, community, and meaning-making.</p>`,
  salvation: `<h3>Salvation and Liberation</h3>
    <p>Concepts of salvation, liberation, and ultimate fulfillment vary across traditions:</p>
    <ul>
      <li><strong>Islam</strong>: Salvation (najat) through submission to Allah, faith, righteous deeds, and divine mercy</li>
      <li><strong>Christianity</strong>: Salvation through faith in Christ, grace, and redemption from sin</li>
      <li><strong>Judaism</strong>: Focus on covenant relationship, tikkun olam (repairing the world), and ethical living</li>
      <li><strong>Hinduism</strong>: Liberation (moksha) from the cycle of rebirth through various paths including knowledge, devotion, and action</li>
      <li><strong>Buddhism</strong>: Liberation (nirvana) by ending suffering through the Four Noble Truths and Eightfold Path</li>
      <li><strong>Non-Religious Views</strong>: Human flourishing, authentic existence, and creating meaning in a natural world</li>
    </ul>
    <p>Despite differences, most traditions seek transformation, ethical development, and overcoming human limitations.</p>`,
  default:
    "I'm a static chat demo that works without API calls. I can respond to keywords like 'hello', 'islam', 'christianity', 'buddhism', 'hinduism', 'judaism', 'sikhism', 'atheism', 'spirituality', 'clcp', 'salt', 'comparison', 'salvation', and combinations like 'islam-clcp' or 'christianity-clcp'.",
}

type Message = {
  role: "user" | "assistant"
  content: string
  id: string
}

function StaticChatContent() {
  const { t, language } = useLanguage()
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! This is a static chat that works without API calls. Try asking about religions (Islam, Christianity, Buddhism, etc.), CLCP, or combinations like 'Islam and CLCP'.",
      id: "initial",
    },
  ])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      role: "user",
      content: input,
      id: Date.now().toString(),
    }

    setMessages((prev) => [...prev, userMessage])

    // Generate static response
    const lowercaseInput = input.toLowerCase()
    let responseContent = RESPONSES.default
    let bestMatch = ""

    // First, check for exact keyword matches
    for (const keyword of Object.keys(RESPONSES)) {
      if (lowercaseInput.includes(keyword) && keyword.length > bestMatch.length) {
        bestMatch = keyword
        responseContent = RESPONSES[keyword]
      }
    }

    // If no exact match found, look for partial matches with Christianity and CLCP
    if (bestMatch === "") {
      // Check for Christianity-related queries
      if (
        lowercaseInput.includes("christ") ||
        lowercaseInput.includes("jesus") ||
        lowercaseInput.includes("bible") ||
        lowercaseInput.includes("church") ||
        lowercaseInput.includes("gospel")
      ) {
        responseContent = RESPONSES["christianity"]

        // If also asking about CLCP, use the relationship content
        if (
          lowercaseInput.includes("clcp") ||
          lowercaseInput.includes("community life") ||
          lowercaseInput.includes("relationship") ||
          lowercaseInput.includes("connection")
        ) {
          responseContent = RESPONSES["christianity-clcp"]
        }
      }

      // Check for comparison-related queries
      if (
        lowercaseInput.includes("compar") ||
        lowercaseInput.includes("differ") ||
        lowercaseInput.includes("similar") ||
        lowercaseInput.includes("versus") ||
        lowercaseInput.includes("vs")
      ) {
        responseContent = RESPONSES["comparison"]
      }

      // Check for salvation-related queries
      if (
        lowercaseInput.includes("salvat") ||
        lowercaseInput.includes("liber") ||
        lowercaseInput.includes("redempt") ||
        lowercaseInput.includes("moksha") ||
        lowercaseInput.includes("nirvana") ||
        lowercaseInput.includes("afterlife") ||
        lowercaseInput.includes("heaven") ||
        lowercaseInput.includes("paradise")
      ) {
        responseContent = RESPONSES["salvation"]
      }
    }

    // Add assistant message
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: responseContent,
          id: (Date.now() + 1).toString(),
        },
      ])
    }, 500) // Small delay to simulate response time

    setInput("")
  }

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
              <h1 className="text-2xl font-bold text-emerald-700">Noor (Static)</h1>
              <p className="text-sm text-gray-500">No API Required</p>
            </div>
          </div>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto w-full">
        <Card className="w-full h-[calc(100vh-12rem)] flex flex-col">
          <CardHeader>
            <CardTitle>Static Chat</CardTitle>
            <CardDescription>This version works without OpenAI API - using predefined responses</CardDescription>
          </CardHeader>

          <CardContent className="flex-grow overflow-y-auto">
            <div className="space-y-4 p-4">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-4 ${
                      m.role === "user" ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: m.content }}></div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>

          <CardFooter className="border-t p-4">
            <form onSubmit={handleSubmit} className="flex w-full space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about religions, CLCP, or their relationships..."
                className="flex-grow"
              />
              <Button type="submit" disabled={!input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

// Main component that wraps the content with the LanguageProvider
export default function StaticChatBasicPage() {
  return (
    <LanguageProvider>
      <StaticChatContent />
    </LanguageProvider>
  )
}
