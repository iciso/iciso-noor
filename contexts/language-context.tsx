"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "fr"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// English translations
const enTranslations: Record<string, string> = {
  // Navigation
  "nav.home": "Home",
  "nav.chat": "Chat",
  "nav.browse": "Browse Topics",
  "nav.clcp": "About CLCP",
  "nav.back": "Back",

  // Home page
  "home.welcome": "Welcome to Noor",
  "home.subtitle": "Your resource for comparative religion and CLCP information",
  "home.description":
    "Noor (Neutral Open Objective Resource) provides factual, non-biased information about faith and non-faiths, as well as the Community Life Competence Process (CLCP) and the relationships between them.",
  "home.chat": "Chat",
  "home.browse": "Browse Topics",
  "home.about.clcp": "About CLCP",

  // Comparative Religion section
  "home.comparative.title": "Comparative Perspectives",
  "home.comparative.description":
    "Explore the similarities and differences between major world religions, non-religious perspectives, and spiritual approaches.",
  "home.comparative.texts": "Sacred texts and teachings",
  "home.comparative.god": "Concepts of God, divinity, and meaning",
  "home.comparative.worship": "Worship practices, rituals, and contemplative approaches",
  "home.comparative.ethics": "Ethical principles and moral values",
  "home.comparative.afterlife": "Afterlife, salvation, and human purpose",

  // CLCP section
  "home.clcp.title": "Community Life Competence Process",
  "home.clcp.description":
    "Learn about the Community Life Competence Process (CLCP) and its relationship with various faith and non-faith traditions.",
  "home.clcp.salt": "SALT approach: Stimulate, Appreciate, Learn, Transfer",
  "home.clcp.ownership": "Community ownership and empowerment",
  "home.clcp.strength": "Strength-based approaches to challenges",
  "home.clcp.values": "Shared values with religious and non-religious traditions",
  "home.clcp.applications": "Applications in diverse community contexts",

  // Chat page
  "chat.title": "Ask about comparative perspectives and CLCP",
  "chat.subtitle":
    "Ask questions about religions, non-religious perspectives, the Community Life Competence Process, or their relationships",
  "chat.start": "Start a conversation",
  "chat.placeholder":
    'Try asking questions like "What are the commonalities between Islam and CLCP?" or "How does atheism relate to the Community Life Competence Process?"',
  "chat.input.placeholder": "Ask about religions, non-religious perspectives, CLCP, or their relationships...",

  // Browse page
  "browse.title": "Browse Topics",
  "browse.religion.title": "Religion Topics",
  "browse.clcp.title": "CLCP and Religion Topics",
  "browse.nonfaith.title": "Non-Faith Perspectives",

  // CLCP page
  "clcp.title": "Community Life Competence Process (CLCP)",
  "clcp.subtitle": "Understanding the CLCP approach",
  "clcp.what": "What is CLCP?",
  "clcp.what.description":
    "The Community Life Competence Process (CLCP) is an approach developed by The Constellation that empowers communities to respond to their challenges. It is based on the belief that communities have the capacity to address their own issues and that sustainable change comes from within.",
  "clcp.principles": "Key Principles of CLCP",
  "clcp.principles.ownership": "Community ownership: Communities take charge of their own responses to challenges",
  "clcp.principles.strength": "Strength-based approach: Focusing on strengths rather than problems",
  "clcp.principles.learning": "Learning from experience: Communities learn from their own and others' experiences",
  "clcp.principles.local": "Local response: Believing in the capacity of communities to address their own issues",
  "clcp.principles.transfer": "Transfer: Sharing experiences and practices between communities",

  // SALT section
  "clcp.salt": "The SALT Approach",
  "clcp.salt.description":
    "SALT is a foundational approach in CLCP that stands for Stimulate, Appreciate, Learn, and Transfer:",
  "clcp.salt.stimulate": "Stimulate: Encouraging communities to reflect on their experiences and potential",
  "clcp.salt.appreciate": "Appreciate: Recognizing strengths and achievements rather than focusing on problems",
  "clcp.salt.learn": "Learn: Learning from communities and facilitating their learning from each other",
  "clcp.salt.transfer": "Transfer: Sharing experiences and practices between communities",

  // CLCP Process
  "clcp.process": "The CLCP Process",
  "clcp.process.description": "CLCP follows a systematic process that includes:",
  "clcp.process.relationship": "Relationship building: Establishing trust and connection with communities",
  "clcp.process.dream": "Dream building: Helping communities envision their desired future",
  "clcp.process.assessment": "Self-assessment: Communities evaluate their current strengths and challenges",
  "clcp.process.action": "Action planning: Developing concrete steps to move toward the dream",
  "clcp.process.implementation": "Implementation: Taking action and learning from the process",
  "clcp.process.measurement": "Self-measurement: Communities track their own progress",
  "clcp.process.sharing": "Sharing and learning: Communities share their experiences with others",

  // CLCP and Faith
  "clcp.faith": "CLCP and Faith Traditions",
  "clcp.faith.description":
    "CLCP shares many commonalities with various faith traditions, including Islam, Christianity, Buddhism, Hinduism, and others. These commonalities include:",
  "clcp.faith.community": "Emphasis on community and collective action",
  "clcp.faith.dignity": "Recognition of human dignity and potential",
  "clcp.faith.service": "Service to others as a core value",
  "clcp.faith.hope": "Hope and vision for a better future",
  "clcp.faith.strength": "Strength-based approaches to challenges",

  // CLCP and Non-Faith
  "clcp.nonfaith": "CLCP and Non-Faith Perspectives",
  "clcp.nonfaith.description":
    "CLCP also shares important values with non-religious perspectives like atheism and secular spirituality:",
  "clcp.nonfaith.human": "Human-centered approaches to community challenges",
  "clcp.nonfaith.evidence": "Evidence-based thinking and practical solutions",
  "clcp.nonfaith.ethics": "Ethical frameworks based on human well-being",
  "clcp.nonfaith.connection": "Emphasis on human connection and community",
  "clcp.nonfaith.meaning": "Creating meaning through collective action",

  // Topic page
  "topic.notfound": "Topic Not Found",
  "topic.notfound.description": "Sorry, the topic you're looking for doesn't exist.",
  "topic.return": "Return to Topics",

  // Footer
  "footer.copyright": "CC BY 2023 Noor - Neutral Open Objective Resource",
  "footer.license": "Licensed under",
  "footer.creative.commons": "Creative Commons Attribution 4.0",
  "footer.fanf": "Faith and Non-Faith Resources",

  // Language switcher
  "language.en": "English",
  "language.fr": "Français",
}

// French translations
const frTranslations: Record<string, string> = {
  // Navigation
  "nav.home": "Accueil",
  "nav.chat": "Discussion",
  "nav.browse": "Parcourir les Sujets",
  "nav.clcp": "À propos de CLCP",
  "nav.back": "Retour",

  // Home page
  "home.welcome": "Bienvenue à Noor",
  "home.subtitle": "Votre ressource pour la religion comparative et l'information sur le CLCP",
  "home.description":
    "Noor (Ressource Objective Ouverte Neutre) fournit des informations factuelles et impartiales sur les religions et non-religions, ainsi que sur le Processus de Compétence de Vie Communautaire (CLCP) et les relations entre eux.",
  "home.chat": "Discussion",
  "home.browse": "Parcourir les Sujets",
  "home.about.clcp": "À propos de CLCP",

  // Comparative Religion section
  "home.comparative.title": "Perspectives Comparatives",
  "home.comparative.description":
    "Explorez les similitudes et les différences entre les principales religions du monde, les perspectives non-religieuses et les approches spirituelles.",
  "home.comparative.texts": "Textes sacrés et enseignements",
  "home.comparative.god": "Concepts de Dieu, divinité et sens",
  "home.comparative.worship": "Pratiques de culte, rituels et approches contemplatives",
  "home.comparative.ethics": "Principes éthiques et valeurs morales",
  "home.comparative.afterlife": "Au-delà, salut et but humain",

  // CLCP section
  "home.clcp.title": "Processus de Compétence de Vie Communautaire",
  "home.clcp.description":
    "Apprenez sur le Processus de Compétence de Vie Communautaire (CLCP) et sa relation avec diverses traditions religieuses et non-religieuses.",
  "home.clcp.salt": "Approche SALT: Stimuler, Apprécier, Apprendre, Transférer",
  "home.clcp.ownership": "Appropriation communautaire et autonomisation",
  "home.clcp.strength": "Approches basées sur les forces face aux défis",
  "home.clcp.values": "Valeurs partagées avec les traditions religieuses et non-religieuses",
  "home.clcp.applications": "Applications dans divers contextes communautaires",

  // Chat page
  "chat.title": "Posez des questions sur les perspectives comparatives et le CLCP",
  "chat.subtitle":
    "Posez des questions sur les religions, les perspectives non-religieuses, le Processus de Compétence de Vie Communautaire, ou leurs relations",
  "chat.start": "Commencer une conversation",
  "chat.placeholder":
    'Essayez de poser des questions comme "Quels sont les points communs entre l\'Islam et le CLCP?" ou "Comment l\'athéisme est-il lié au Processus de Compétence de Vie Communautaire?"',
  "chat.input.placeholder":
    "Posez des questions sur les religions, les perspectives non-religieuses, le CLCP, ou leurs relations...",

  // Browse page
  "browse.title": "Parcourir les Sujets",
  "browse.religion.title": "Sujets Religieux",
  "browse.clcp.title": "Sujets sur le CLCP et la Religion",
  "browse.nonfaith.title": "Perspectives Non-Religieuses",

  // CLCP page
  "clcp.title": "Processus de Compétence de Vie Communautaire (CLCP)",
  "clcp.subtitle": "Comprendre l'approche CLCP",
  "clcp.what": "Qu'est-ce que le CLCP?",
  "clcp.what.description":
    "Le Processus de Compétence de Vie Communautaire (CLCP) est une approche développée par The Constellation qui permet aux communautés de répondre à leurs défis. Il est basé sur la conviction que les communautés ont la capacité de résoudre leurs propres problèmes et que le changement durable vient de l'intérieur.",
  "clcp.principles": "Principes Clés du CLCP",
  "clcp.principles.ownership":
    "Appropriation communautaire: Les communautés prennent en charge leurs propres réponses aux défis",
  "clcp.principles.strength":
    "Approche basée sur les forces: Se concentrer sur les forces plutôt que sur les problèmes",
  "clcp.principles.learning":
    "Apprentissage par l'expérience: Les communautés apprennent de leurs propres expériences et de celles des autres",
  "clcp.principles.local": "Réponse locale: Croire en la capacité des communautés à résoudre leurs propres problèmes",
  "clcp.principles.transfer": "Transfert: Partager les expériences et les pratiques entre les communautés",

  // SALT section
  "clcp.salt": "L'Approche SALT",
  "clcp.salt.description":
    "SALT est une approche fondamentale du CLCP qui signifie Stimuler, Apprécier, Apprendre et Transférer:",
  "clcp.salt.stimulate": "Stimuler: Encourager les communautés à réfléchir sur leurs expériences et leur potentiel",
  "clcp.salt.appreciate":
    "Apprécier: Reconnaître les forces et les réalisations plutôt que de se concentrer sur les problèmes",
  "clcp.salt.learn": "Apprendre: Apprendre des communautés et faciliter leur apprentissage mutuel",
  "clcp.salt.transfer": "Transférer: Partager les expériences et les pratiques entre les communautés",

  // CLCP Process
  "clcp.process": "Le Processus CLCP",
  "clcp.process.description": "Le CLCP suit un processus systématique qui comprend:",
  "clcp.process.relationship": "Établissement de relations: Établir la confiance et la connexion avec les communautés",
  "clcp.process.dream": "Construction de rêves: Aider les communautés à envisager leur avenir souhaité",
  "clcp.process.assessment": "Auto-évaluation: Les communautés évaluent leurs forces et défis actuels",
  "clcp.process.action": "Planification d'action: Développer des étapes concrètes pour avancer vers le rêve",
  "clcp.process.implementation": "Mise en œuvre: Agir et apprendre du processus",
  "clcp.process.measurement": "Auto-mesure: Les communautés suivent leurs propres progrès",
  "clcp.process.sharing": "Partage et apprentissage: Les communautés partagent leurs expériences avec d'autres",

  // CLCP and Faith
  "clcp.faith": "CLCP et Traditions Religieuses",
  "clcp.faith.description":
    "Le CLCP partage de nombreux points communs avec diverses traditions religieuses, y compris l'Islam, le Christianisme, le Bouddhisme, l'Hindouisme et d'autres. Ces points communs comprennent:",
  "clcp.faith.community": "L'accent sur la communauté et l'action collective",
  "clcp.faith.dignity": "La reconnaissance de la dignité humaine et du potentiel",
  "clcp.faith.service": "Le service aux autres comme valeur fondamentale",
  "clcp.faith.hope": "L'espoir et la vision d'un avenir meilleur",
  "clcp.faith.strength": "Des approches basées sur les forces face aux défis",

  // CLCP and Non-Faith
  "clcp.nonfaith": "CLCP et Perspectives Non-Religieuses",
  "clcp.nonfaith.description":
    "Le CLCP partage également des valeurs importantes avec des perspectives non-religieuses comme l'athéisme et la spiritualité séculière:",
  "clcp.nonfaith.human": "Approches centrées sur l'humain face aux défis communautaires",
  "clcp.nonfaith.evidence": "Pensée fondée sur des preuves et solutions pratiques",
  "clcp.nonfaith.ethics": "Cadres éthiques basés sur le bien-être humain",
  "clcp.nonfaith.connection": "Accent sur la connexion humaine et la communauté",
  "clcp.nonfaith.meaning": "Création de sens par l'action collective",

  // Topic page
  "topic.notfound": "Sujet Non Trouvé",
  "topic.notfound.description": "Désolé, le sujet que vous recherchez n'existe pas.",
  "topic.return": "Retourner aux Sujets",

  // Footer
  "footer.copyright": "CC BY 2023 Noor - Ressource Objective Ouverte Neutre",
  "footer.license": "Sous licence",
  "footer.creative.commons": "Creative Commons Attribution 4.0",
  "footer.fanf": "Ressources de Foi et Non-Foi",

  // Language switcher
  "language.en": "English",
  "language.fr": "Français",
}

const translations: Record<Language, Record<string, string>> = {
  en: enTranslations,
  fr: frTranslations,
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en")

  // Load language preference from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "fr")) {
      setLanguageState(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage when it changes
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
