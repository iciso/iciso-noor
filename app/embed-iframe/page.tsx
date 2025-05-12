import { StaticChatBasic } from "@/components/static-chat-basic"
import { LanguageProvider } from "@/contexts/language-context"

export default function EmbedIframePage() {
  return (
    <LanguageProvider>
      <StaticChatBasic />
    </LanguageProvider>
  )
}
