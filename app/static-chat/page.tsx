"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

// Predefined responses for common questions
const STATIC_RESPONSES: Record<string, string> = {
  islam: `
# Islam

Islam is a monotheistic religion that follows the teachings of the Prophet Muhammad as recorded in the Quran. It emphasizes the worship of one God (Allah) and adherence to the Five Pillars of Islam:

1. Shahada (faith): Belief in one God and Muhammad as His messenger
2. Salat (prayer): Performing ritual prayers five times daily
3. Zakat (charity): Giving a portion of one's wealth to those in need
4. Sawm (fasting): Fasting during the month of Ramadan
5. Hajj (pilgrimage): Pilgrimage to Mecca at least once in a lifetime if able

The Quran is considered the literal word of God as revealed to Muhammad through the angel Gabriel.
  `,
  christianity: `
# Christianity

Christianity is a monotheistic religion based on the life and teachings of Jesus Christ as recorded in the New Testament. Christians believe Jesus is the Son of God and the savior of humanity. Key beliefs include:

1. The Trinity: God exists as three persons - the Father, Son (Jesus), and Holy Spirit
2. Salvation through faith in Jesus Christ
3. The death and resurrection of Jesus as atonement for humanity's sins
4. The Bible as the inspired word of God
5. The Second Coming of Christ

Christianity has various denominations including Catholic, Orthodox, and Protestant traditions.
  `,
  buddhism: `
# Buddhism

Buddhism is a path of practice and spiritual development based on the teachings of Siddhartha Gautama, commonly known as the Buddha. It focuses on understanding suffering and its cessation through:

1. The Four Noble Truths: The truth of suffering, its cause, its cessation, and the path to its cessation
2. The Eightfold Path: Right understanding, intention, speech, action, livelihood, effort, mindfulness, and concentration
3. Meditation and mindfulness practices
4. Compassion for all sentient beings

Unlike many religions, Buddhism doesn't focus on a deity but rather on personal spiritual development.
  `,
  hinduism: `
# Hinduism

Hinduism is one of the world's oldest religions, originating in the Indian subcontinent. It's a diverse system of thought with beliefs and practices including:

1. Dharma: Ethical and moral duties
2. Karma: The law of cause and effect
3. Samsara: The cycle of rebirth
4. Moksha: Liberation from the cycle of rebirth
5. Various paths to spiritual realization including devotion, meditation, and action

Hinduism recognizes multiple manifestations of the divine, though many Hindus believe in a single supreme reality (Brahman).
  `,
  judaism: `
# Judaism

Judaism is the oldest of the Abrahamic religions, centered on the belief in one God and the covenant God made with the Jewish people. Key aspects include:

1. Monotheism: Belief in one, indivisible God
2. Torah: The first five books of the Hebrew Bible containing God's revelation to Moses
3. Covenant: The special relationship between God and the Jewish people
4. Mitzvot: The 613 commandments that guide Jewish life
5. Tikkun Olam: The responsibility to repair and improve the world

Judaism emphasizes ethical conduct, justice, and the sanctification of everyday life.
  `,
  comparison: `
# Comparing Major Religions

## Concept of God
- **Islam**: Strict monotheism (Tawhid). Allah is one, indivisible, and has no partners.
- **Christianity**: Trinity - one God in three persons (Father, Son, Holy Spirit).
- **Judaism**: Strict monotheism. God is one and indivisible.
- **Hinduism**: Can be monotheistic, polytheistic, or non-theistic. Ultimate reality is Brahman.
- **Buddhism**: Generally non-theistic, though some schools venerate Buddha-like deities.

## Sacred Texts
- **Islam**: Quran and Hadith
- **Christianity**: Bible (Old and New Testaments)
- **Judaism**: Tanakh (Torah, Nevi'im, Ketuvim) and Talmud
- **Hinduism**: Vedas, Upanishads, Bhagavad Gita, Puranas
- **Buddhism**: Tripitaka, Sutras, various canons depending on tradition

## Afterlife
- **Islam**: Judgment Day followed by eternal Paradise or Hell
- **Christianity**: Heaven or Hell, with some denominations believing in Purgatory
- **Judaism**: Various views, from physical resurrection to spiritual afterlife
- **Hinduism**: Reincarnation based on karma until achieving moksha (liberation)
- **Buddhism**: Rebirth in various realms until achieving nirvana (cessation of suffering)
  `,
  default: `
I'm Noor, a static assistant for comparative religion information. I can provide basic information about major world religions and their comparisons.

Try asking about:
- Islam
- Christianity
- Buddhism
- Hinduism
- Judaism
- Comparison of religions

Note: This is a static version that works without API calls. For more detailed or specific questions, please try again when the API connection is working.
  `,
}

type Message = {
  role: "user" | "assistant"
  content: string
  id: string
}

export default function StaticChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      role: "user",
      content: input,
      id: Date.now().toString(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Generate static response
    setTimeout(() => {
      const query = input.toLowerCase()
      let responseContent = STATIC_RESPONSES.default

      // Check for keywords in the query
      if (query.includes("islam")) {
        responseContent = STATIC_RESPONSES.islam
      } else if (query.includes("christian")) {
        responseContent = STATIC_RESPONSES.christianity
      } else if (query.includes("buddhis")) {
        responseContent = STATIC_RESPONSES.buddhism
      } else if (query.includes("hindu")) {
        responseContent = STATIC_RESPONSES.hinduism
      } else if (query.includes("judai") || query.includes("jewish")) {
        responseContent = STATIC_RESPONSES.judaism
      } else if (query.includes("compar") || query.includes("difference") || query.includes("similar")) {
        responseContent = STATIC_RESPONSES.comparison
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: responseContent,
        id: (Date.now() + 1).toString(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    }, 500)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-emerald-50 to-teal-100">
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xl">
              ن
            </div>
            <div>
              <h1 className="text-2xl font-bold text-emerald-700">Noor (Static Mode)</h1>
              <p className="text-sm text-gray-500">Neutral Open Objective Resource</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto w-full">
        <Card className="w-full h-[calc(100vh-12rem)]">
          <CardHeader>
            <CardTitle>Ask about comparative religion (Static Mode)</CardTitle>
            <CardDescription>
              This is a static version that works without API calls. Try asking about major religions.
            </CardDescription>
          </CardHeader>
          <CardContent className="overflow-y-auto h-[calc(100%-10rem)]">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
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
                    className="text-emerald-600"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Start a conversation</h3>
                  <p className="text-sm text-gray-500 max-w-md">
                    Try asking questions like "Tell me about Islam" or "What is Christianity?"
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((m) => (
                  <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg p-4 ${
                        m.role === "user" ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <div className="whitespace-pre-wrap">{m.content}</div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            )}
          </CardContent>
          <CardFooter className="border-t p-4">
            <form onSubmit={handleSubmit} className="flex w-full space-x-2">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask a question about comparative religion..."
                className="flex-grow"
              />
              <Button type="submit" disabled={!input.trim()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M22 2L11 13"></path>
                  <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
                </svg>
              </Button>
            </form>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
