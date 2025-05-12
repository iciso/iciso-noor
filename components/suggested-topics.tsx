"use client"

import { useLanguage } from "@/contexts/language-context"

interface SuggestedTopicsProps {
  onSelectTopic: (topic: string) => void
}

export function SuggestedTopics({ onSelectTopic }: SuggestedTopicsProps) {
  const { language } = useLanguage()

  const topics =
    language === "en"
      ? [
          { id: "islam", label: "Islam" },
          { id: "christianity", label: "Christianity" },
          { id: "buddhism", label: "Buddhism" },
          { id: "clcp", label: "CLCP" },
          { id: "islam-clcp", label: "Islam & CLCP" },
          { id: "atheism", label: "Atheism" },
        ]
      : [
          { id: "islam", label: "Islam" },
          { id: "christianity", label: "Christianisme" },
          { id: "buddhism", label: "Bouddhisme" },
          { id: "clcp", label: "CLCP" },
          { id: "islam-clcp", label: "Islam & CLCP" },
          { id: "atheism", label: "Athéisme" },
        ]

  return (
    <div className="flex flex-wrap gap-2 my-4 justify-center">
      {topics.map((topic) => (
        <button
          key={topic.id}
          onClick={() => onSelectTopic(topic.id)}
          className="px-3 py-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 rounded-full text-sm transition-colors"
        >
          {topic.label}
        </button>
      ))}
    </div>
  )
}
