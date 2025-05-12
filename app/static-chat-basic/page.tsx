import { StaticChatBasic } from "@/components/static-chat-basic"
import { LanguageProvider } from "@/contexts/language-context"

export default function StaticChatBasicPage() {
  return (
    <LanguageProvider>
      <StaticChatBasic />
    </LanguageProvider>
  )
}
