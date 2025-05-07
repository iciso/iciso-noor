"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

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
  sikhism: `
# Sikhism

Sikhism is a monotheistic religion founded in the Punjab region of South Asia in the 15th century by Guru Nanak. Key aspects include:

1. Belief in one formless God
2. Equality of all humans regardless of caste, gender, or creed
3. Service to others (seva)
4. Honest living and sharing with those in need
5. The teachings of the Ten Gurus compiled in the Guru Granth Sahib

Sikhs worship in gurdwaras and practice the values of humility, equality, and community service.
  `,
  clcp: `
# Community Life Competence Process (CLCP)

The Community Life Competence Process (CLCP) is an approach developed by The Constellation that empowers communities to respond to their challenges. Key principles include:

1. **SALT**: Stimulate, Appreciate, Learn, Transfer - an approach to community engagement
2. **Community ownership**: Communities take charge of their own responses to challenges
3. **Appreciative inquiry**: Focusing on strengths rather than problems
4. **Shared learning**: Communities learn from each other's experiences
5. **Local response**: Believing in the capacity of communities to address their own issues

CLCP follows a systematic process that includes relationship building, dream building, self-assessment, action planning, and implementation.
  `,
  salt: `
# SALT Approach

SALT is a foundational approach in the Community Life Competence Process (CLCP) that stands for:

- **S - Stimulate**: Encouraging communities to reflect on their experiences and potential
- **A - Appreciate**: Recognizing strengths and achievements rather than focusing on problems
- **L - Learn**: Learning from communities and facilitating their learning from each other
- **T - Transfer**: Sharing experiences and practices between communities

The SALT approach emphasizes respect, active listening, and the belief that communities have the capacity to address their own challenges. SALT visits involve teams engaging with communities in a spirit of learning and appreciation rather than as experts bringing solutions.
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
  salvation: `
# Salvation in Different Religions

## Islam
In Islam, salvation (najat) comes through submission to Allah and following the teachings of the Quran and the Prophet Muhammad. Key aspects include:
- Belief in one God (Allah) and Muhammad as His messenger
- Performing good deeds and avoiding sin
- Divine mercy and forgiveness play a crucial role
- The Day of Judgment will determine one's eternal destination

The Quran states: "Indeed, those who have believed and done righteous deeds - they will have the Gardens of Paradise as a lodging" (18:107).

## Christianity
In Christianity, salvation is primarily through faith in Jesus Christ:
- Humans are sinful and separated from God
- Jesus' death on the cross atones for humanity's sins
- Salvation is by grace through faith, not by works alone
- Acceptance of Jesus as savior leads to eternal life

The Bible states: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast" (Ephesians 2:8-9).

## Buddhism
Buddhism doesn't focus on salvation in the Western sense but on liberation (nirvana):
- Liberation from suffering (dukkha) and the cycle of rebirth
- Achieved through following the Eightfold Path
- Enlightenment comes through wisdom and compassion
- No divine savior; one must work toward one's own liberation

## Hinduism
In Hinduism, salvation (moksha) is:
- Release from the cycle of rebirth (samsara)
- Achieved through various paths: knowledge, devotion, or action
- Union with or realization of Brahman (ultimate reality)
- Can take multiple lifetimes to achieve
  `,
  afterlife: `
# Afterlife in Different Religions

## Islam
Islam teaches a clear afterlife concept:
- The soul enters barzakh (intermediate state) after death
- On the Day of Judgment (Yawm al-Qiyamah), all will be resurrected
- Allah will judge each person based on their faith and deeds
- The righteous enter Jannah (Paradise), while wrongdoers enter Jahannam (Hell)

The Quran describes Paradise as having "gardens beneath which rivers flow" (9:72).

## Christianity
Christianity's afterlife beliefs include:
- The soul continues after physical death
- Jesus will return for the final judgment
- The righteous receive eternal life in Heaven with God
- Those who reject God face eternal separation in Hell
- Some denominations believe in Purgatory as a place of purification

## Judaism
Judaism has varied afterlife beliefs:
- Traditional view includes Olam Ha-Ba (World to Come)
- Some believe in bodily resurrection in the messianic age
- Gan Eden (Garden of Eden) for the righteous
- Gehinnom as a place of purification (usually temporary)
- Focus tends to be more on this life than the afterlife

## Hinduism
Hinduism teaches:
- Reincarnation based on karma (law of cause and effect)
- The soul (atman) takes new forms after death
- Various heavens and hells as temporary realms
- Ultimate goal is moksha (liberation from the cycle of rebirth)

## Buddhism
Buddhism's afterlife concept includes:
- Rebirth in various realms based on karma
- Six realms of existence (gods, humans, animals, etc.)
- No eternal heaven or hell
- Ultimate goal is nirvana (end of suffering and rebirth)
  `,
  // New content about CLCP and religions
  "clcp-religions": `
# Commonalities Between Religions and CLCP

The Community Life Competence Process (CLCP) and various faith traditions share several fundamental values and approaches:

## Shared Values
1. **Community Empowerment**: Both CLCP and religious traditions emphasize the importance of community and collective action.
2. **Human Dignity**: All major religions and CLCP recognize the inherent worth and potential of every human being.
3. **Service to Others**: Selfless service is central to both religious teachings and the CLCP approach.
4. **Hope and Vision**: Faith traditions and CLCP both work toward a better future through hope and shared vision.
5. **Strength-Based Approach**: CLCP's appreciative approach parallels many religious teachings about recognizing gifts and blessings.

## CLCP and Islam
Islam's emphasis on community (ummah), mutual support, and human potential aligns closely with CLCP principles:

- The Quranic concept that God "will not change the condition of a people until they change what is in themselves" (13:11) mirrors CLCP's focus on community ownership.
- Zakat (obligatory charity) and sadaqah (voluntary charity) reflect CLCP's principles of sharing and transfer.
- Islamic teachings on human dignity and potential align with CLCP's belief in community capacity.
- The Prophet Muhammad's consultative leadership style parallels CLCP's facilitative approach.

## CLCP and Christianity
Christianity's community-centered approach shares much with CLCP:

- The early Christian community described in Acts 2:44-47 demonstrates principles similar to CLCP's community ownership and shared resources.
- Jesus's appreciative approach to individuals (seeing potential in fishermen, tax collectors, etc.) mirrors CLCP's SALT approach.
- Christian service (diakonia) aligns with CLCP's emphasis on community service and action.
- The concept of "the priesthood of all believers" parallels CLCP's belief in the capacity of all community members.

## CLCP and Buddhism
Buddhism's mindful approach to community and suffering connects with CLCP:

- The Buddhist sangha (community) operates on principles similar to CLCP's community approach.
- The Four Noble Truths provide a framework for addressing challenges that complements CLCP's process.
- Buddhist mindfulness practices enhance the reflective elements of CLCP.
- The concept of interdependence in Buddhism aligns with CLCP's understanding of community connections.

## CLCP and Hinduism
Hindu concepts of community duty and service align with CLCP:

- Dharma (duty/righteousness) parallels CLCP's emphasis on community responsibility.
- Seva (selfless service) mirrors CLCP's approach to community action.
- The concept of satsang (community of truth-seekers) reflects CLCP's learning communities.
- Hindu teachings on human potential align with CLCP's belief in community capacity.
  `,
  "islam-clcp": `
# Islam and Community Life Competence Process

## The Best of Both Worlds: Islam & Life Competence

Islam and the Community Life Competence Process (CLCP) share profound commonalities in their approach to human potential and community development.

### Humanity in Islam
The Quran states: "O mankind! We created you from a single (pair) of a male and a female, and made you into nations and tribes, that you may know each other" (49:13). This verse emphasizes:

1. The common origin of humanity
2. Diversity as a means for mutual learning and appreciation
3. The inherent dignity of all human beings

These principles align perfectly with CLCP's approach of appreciating diversity, learning from communities, and recognizing human potential.

### Community Ownership in Islam
The Islamic concept of "ummah" (community) emphasizes collective responsibility and mutual support. The Prophet Muhammad said: "The believers in their mutual kindness, compassion and sympathy are just like one body. When one of the limbs suffers, the whole body responds to it with wakefulness and fever."

This holistic view of community mirrors CLCP's emphasis on:
- Community ownership of challenges
- Collective response to issues
- Shared responsibility for outcomes

### Strength-Based Approach
Islam encourages focusing on strengths and potential rather than deficits. The Quran states: "Allah does not burden a soul beyond that it can bear" (2:286), indicating that every person and community has the capacity to address their challenges.

This aligns with CLCP's appreciative approach that:
- Recognizes existing strengths in communities
- Builds on what works rather than focusing only on problems
- Believes in the inherent capacity of communities to respond

### Action and Implementation
Both Islam and CLCP emphasize that knowledge must be translated into action. The Prophet Muhammad said: "The best of people are those who are most beneficial to people."

This parallels CLCP's action-oriented approach:
- Moving from knowledge to action
- Implementing community-driven solutions
- Measuring progress through tangible results

### Learning and Transfer
Islam places high value on seeking and sharing knowledge. The Prophet Muhammad said: "Seeking knowledge is an obligation upon every Muslim."

This connects with CLCP's emphasis on:
- Continuous learning
- Knowledge transfer between communities
- Adaptation of approaches to local contexts
  `,
  "christianity-clcp": `
# Christianity and Community Life Competence Process

## CLCP & Christianity: A Complementary Approach

Christianity and the Community Life Competence Process (CLCP) share fundamental values and approaches to community development and human flourishing.

### Community in Christianity
The early Christian church, as described in Acts, demonstrates principles similar to CLCP:

"All the believers were together and had everything in common. They sold property and possessions to give to anyone who had need... They broke bread in their homes and ate together with glad and sincere hearts" (Acts 2:44-46).

This reflects CLCP principles of:
- Community ownership
- Shared resources
- Collective action
- Mutual support

### Appreciative Approach
Jesus consistently saw potential in people that others overlooked:
- He called fishermen to become "fishers of men"
- He saw potential in tax collectors and social outcasts
- He emphasized building on faith "the size of a mustard seed"

This mirrors CLCP's SALT approach:
- Stimulating communities to recognize their potential
- Appreciating existing strengths
- Learning from what works
- Transferring knowledge between communities

### Servant Leadership
Jesus taught: "Whoever wants to become great among you must be your servant" (Mark 10:43). This servant leadership model aligns with CLCP's facilitative approach where:

- Facilitators serve rather than direct communities
- Leadership emerges from within the community
- Power is shared rather than concentrated
- The focus is on empowering others

### Hope and Vision
Christianity emphasizes hope and working toward a better future, similar to CLCP's dream-building process:

"For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, plans to give you hope and a future" (Jeremiah 29:11).

CLCP similarly helps communities:
- Envision a better future
- Build consensus around shared dreams
- Work systematically toward their vision
- Maintain hope through challenges

### Practical Application
Both Christianity and CLCP emphasize that faith/knowledge must be demonstrated through action:

"Faith by itself, if it is not accompanied by action, is dead" (James 2:17).

This parallels CLCP's emphasis on:
- Moving from assessment to action
- Implementing practical solutions
- Measuring progress through tangible results
- Continuous learning and adaptation
  `,
  "sikhism-clcp": `
# Sikhism and Community Life Competence Process

## Sikhism and Community Life Competence: Shared Principles

Sikhism and the Community Life Competence Process (CLCP) share remarkable similarities in their approach to community, service, and human potential.

### Community Ownership
The Sikh concept of sangat (congregation/community) emphasizes collective worship, decision-making, and action. This aligns with CLCP's focus on:

- Community ownership of challenges
- Collective decision-making processes
- Shared responsibility for implementation
- Community-driven solutions

### Seva (Selfless Service)
Seva is a cornerstone of Sikh practice and parallels CLCP's emphasis on service and action:

"One who performs selfless service, without thought of reward, shall attain his Lord and Master" (Guru Granth Sahib).

This connects with CLCP principles of:
- Service to the community
- Action beyond mere discussion
- Implementation of practical solutions
- Measuring progress through tangible results

### Equality and Dignity
Sikhism strongly emphasizes the equality of all humans, regardless of caste, gender, or religion. Guru Nanak taught: "There is no Hindu, there is no Muslim, all are children of God."

This aligns with CLCP's approach of:
- Recognizing the inherent dignity of all community members
- Inclusive participation in community processes
- Valuing diverse perspectives and contributions
- Ensuring all voices are heard

### Langar (Community Kitchen)
The Sikh practice of langar (free community kitchen open to all) demonstrates principles similar to CLCP:

- Breaking down social barriers
- Sharing resources equitably
- Creating spaces for community connection
- Practical demonstration of values

### Chardi Kala (Eternal Optimism)
The Sikh concept of chardi kala (eternal optimism and high spirits) parallels CLCP's appreciative approach:

- Maintaining hope in challenging circumstances
- Building on strengths rather than focusing on deficits
- Believing in the capacity of communities to overcome obstacles
- Celebrating progress and achievements

### Practical Spirituality
Sikhism emphasizes that spiritual principles must be applied in daily life. Guru Nanak taught: "Truth is high, but higher still is truthful living."

This mirrors CLCP's emphasis on:
- Practical application of principles
- Moving from knowledge to action
- Integrating values into community practices
- Measuring success through tangible outcomes
  `,
  "buddhism-clcp": `
# Buddhism and Community Life Competence Process

## Buddhism & Community Life Competence: Mindful Approaches

Buddhism and the Community Life Competence Process (CLCP) share complementary approaches to addressing suffering and building community resilience.

### The Four Noble Truths and CLCP
Buddhism's Four Noble Truths provide a framework that parallels CLCP's approach:

1. **The truth of suffering (dukkha)**: Recognizing challenges exists (similar to CLCP's assessment)
2. **The truth of the cause of suffering**: Understanding root causes (similar to CLCP's analysis)
3. **The truth of the cessation of suffering**: Envisioning solutions (similar to CLCP's dream-building)
4. **The truth of the path to cessation**: Taking systematic action (similar to CLCP's action planning)

### Sangha (Community)
The Buddhist concept of sangha (community) emphasizes:
- Mutual support and learning
- Collective practice
- Shared responsibility
- Harmonious relationships

These principles align with CLCP's emphasis on:
- Community ownership
- Collective action
- Shared learning
- Building relationships

### Mindfulness and Reflection
Buddhism's emphasis on mindfulness enhances CLCP's reflective practices:

- Mindful awareness of community dynamics
- Thoughtful consideration of actions and consequences
- Regular reflection on progress
- Present-moment awareness during community processes

### Compassion and Service
Buddhism emphasizes compassion (karuna) and loving-kindness (metta) as essential virtues:

"Just as a mother would protect her only child at the risk of her own life, even so, let one cultivate a boundless heart towards all beings" (Metta Sutta).

This aligns with CLCP's emphasis on:
- Service to the community
- Empathy in facilitation
- Appreciation of others' efforts
- Creating inclusive processes

### Interdependence
The Buddhist concept of interdependence (pratītyasamutpāda) recognizes that all phenomena arise in dependence upon multiple causes and conditions. This parallels CLCP's understanding of:

- Community interconnectedness
- Systems thinking
- Holistic approaches to challenges
- Recognition that change in one area affects others

### Middle Path
Buddhism's Middle Path avoids extremes, similar to CLCP's balanced approach:

- Neither imposing external solutions nor abandoning communities
- Balancing appreciation with honest assessment
- Combining reflection with action
- Respecting tradition while embracing innovation
  `,
  "hinduism-clcp": `
# Hinduism and Community Life Competence Process

## Hinduism & Community Life Competence: Dharmic Approaches

Hinduism and the Community Life Competence Process (CLCP) share complementary approaches to community development and human potential.

### Dharma (Duty/Righteousness)
The Hindu concept of dharma encompasses one's duties, rights, and responsibilities according to cosmic law. This parallels CLCP's emphasis on:

- Community responsibility
- Ethical action
- Fulfilling one's role in collective efforts
- Alignment of actions with higher principles

### Seva (Selfless Service)
Seva is a cornerstone of Hindu practice and aligns with CLCP's action orientation:

"Service to humanity is service to God" is a common Hindu teaching that reflects CLCP's emphasis on:
- Practical action to benefit others
- Service without expectation of reward
- Implementation of community solutions
- Measuring progress through tangible results

### Satsang (Community of Truth-Seekers)
The Hindu practice of satsang (gathering in truth) creates communities of learning and support, similar to CLCP's:

- Learning communities
- Knowledge sharing
- Collective wisdom
- Supportive environments for growth

### Yoga (Union/Integration)
Beyond physical postures, yoga represents integration and balance, which enhances CLCP's holistic approach:

- Integration of different aspects of community life
- Balance between reflection and action
- Harmony between individual and collective needs
- Connection between spiritual principles and practical application

### Karma Yoga (Path of Action)
The path of selfless action taught in the Bhagavad Gita aligns with CLCP's action orientation:

"You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions" (Bhagavad Gita 2:47).

This parallels CLCP's emphasis on:
- Action without attachment to outcomes
- Service as a spiritual practice
- Duty to contribute to community wellbeing
- Process as important as results

### Human Potential
Hinduism recognizes the divine potential within each person (Atman), similar to CLCP's belief in human capacity:

"The Self (Atman) is in all beings, but all beings are not in the Self. As the moon is reflected in various waters, all these various beings are reflected in the Self" (Upanishads).

This aligns with CLCP's recognition of:
- Inherent community capacity
- Potential for self-determination
- Ability to address challenges from within
- Strength-based approaches
  `,
  "being-humane": `
# Being Humane: Perspectives from Religions and CLCP

## The Best of Humanity

The concept of being humane is central to both religious traditions and the Community Life Competence Process (CLCP). As explored in "The Best of Both Worlds: Islam & Life Competence" by Essa Md. Rafique:

"That human beings makeup humanity, there is no doubt. Similarly, all are certain that some of humanity are humane or being human. Yet, most of humankind obviously are not humane. So, is it not that humankind must be humane to be called human beings?"

This profound question resonates across faith traditions and community development approaches.

### Islam on Being Humane
In Islam, being humane is intrinsically tied to fulfilling our purpose as God's vicegerent on earth:

"It is He who has appointed You vicegerent on the earth and exalted some of you in rank above others, so that He may test you by means of what he has given you." (Quran, Surat Al-An'am 6:165)

The Quran emphasizes that humanity was created with inherent dignity: "We have honored the children of Adam" (17:70), establishing a foundation for humane treatment of all people.

### Christianity on Being Humane
Christianity emphasizes love and compassion as the essence of being humane:

"Love your neighbor as yourself" (Mark 12:31) and "Whatever you did for one of the least of these brothers and sisters of mine, you did for me" (Matthew 25:40).

These teachings establish a clear connection between faith and humane treatment of others.

### Buddhism on Being Humane
Buddhism's emphasis on compassion (karuna) and loving-kindness (metta) provides a framework for being humane:

"Just as a mother would protect her only child at the risk of her own life, even so, let one cultivate a boundless heart towards all beings" (Metta Sutta).

The practice of mindfulness helps develop awareness of others' suffering and respond with compassion.

### CLCP's Approach to Being Humane
The Community Life Competence Process embodies being humane through:

1. **Appreciation**: Recognizing the inherent worth and capacity of all people
2. **Respect**: Honoring community wisdom and agency
3. **Facilitation**: Supporting rather than directing or controlling
4. **Empowerment**: Building capacity rather than creating dependency

### Common Principles Across Traditions
All these approaches share common elements of being humane:

1. **Recognition of dignity**: Seeing the inherent worth in every person
2. **Empathy**: Understanding and sharing the feelings of others
3. **Compassionate action**: Moving beyond feeling to practical assistance
4. **Justice**: Ensuring fair and equitable treatment
5. **Service**: Putting others' needs before self-interest

As noted in the CLCP & religion booklet: "Life is a long journey from human being to being humane." This journey is supported by both religious teachings and community development approaches like CLCP.
  `,
  default: `
I'm Noor, an assistant for comparative religion information. I can provide information about major world religions and their comparisons, as well as the Community Life Competence Process (CLCP) and its relationship with different faith traditions.

Try asking about:
- Islam, Christianity, Buddhism, Hinduism, Judaism, or Sikhism
- Comparison of religions on topics like salvation or afterlife
- The Community Life Competence Process (CLCP)
- The SALT approach (Stimulate, Appreciate, Learn, Transfer)
- Commonalities between religions and CLCP
- Specific relationships between a religion and CLCP (e.g., "Islam and CLCP")
- Being humane from religious and CLCP perspectives

Note: This is a static version with pre-defined responses. For more detailed or specific questions, I may not have the exact information you're looking for.
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
      if (query.includes("islam") && query.includes("clcp")) {
        responseContent = STATIC_RESPONSES["islam-clcp"]
      } else if (query.includes("christian") && query.includes("clcp")) {
        responseContent = STATIC_RESPONSES["christianity-clcp"]
      } else if (query.includes("buddhis") && query.includes("clcp")) {
        responseContent = STATIC_RESPONSES["buddhism-clcp"]
      } else if (query.includes("hindu") && query.includes("clcp")) {
        responseContent = STATIC_RESPONSES["hinduism-clcp"]
      } else if (query.includes("sikh") && query.includes("clcp")) {
        responseContent = STATIC_RESPONSES["sikhism-clcp"]
      } else if (query.includes("being human") || query.includes("humane")) {
        responseContent = STATIC_RESPONSES["being-humane"]
      } else if ((query.includes("religion") || query.includes("faith")) && query.includes("clcp")) {
        responseContent = STATIC_RESPONSES["clcp-religions"]
      } else if (query.includes("clcp")) {
        responseContent = STATIC_RESPONSES.clcp
      } else if (query.includes("salt")) {
        responseContent = STATIC_RESPONSES.salt
      } else if (query.includes("islam")) {
        responseContent = STATIC_RESPONSES.islam
      } else if (query.includes("christian")) {
        responseContent = STATIC_RESPONSES.christianity
      } else if (query.includes("buddhis")) {
        responseContent = STATIC_RESPONSES.buddhism
      } else if (query.includes("hindu")) {
        responseContent = STATIC_RESPONSES.hinduism
      } else if (query.includes("judai") || query.includes("jewish")) {
        responseContent = STATIC_RESPONSES.judaism
      } else if (query.includes("sikh")) {
        responseContent = STATIC_RESPONSES.sikhism
      } else if (query.includes("compar") || query.includes("difference") || query.includes("similar")) {
        responseContent = STATIC_RESPONSES.comparison
      } else if (query.includes("salvation") || query.includes("saved")) {
        responseContent = STATIC_RESPONSES.salvation
      } else if (
        query.includes("afterlife") ||
        query.includes("heaven") ||
        query.includes("hell") ||
        query.includes("death")
      ) {
        responseContent = STATIC_RESPONSES.afterlife
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
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span>Back</span>
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xl">
              ن
            </div>
            <div>
              <h1 className="text-2xl font-bold text-emerald-700">Noor</h1>
              <p className="text-sm text-gray-500">Neutral Open Objective Resource</p>
            </div>
          </div>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>
      </header>

      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto w-full">
        <Card className="w-full h-[calc(100vh-12rem)]">
          <CardHeader>
            <CardTitle>Ask about comparative religion and CLCP</CardTitle>
            <CardDescription>
              Ask questions about religions, the Community Life Competence Process, or their relationships
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
                    Try asking questions like "What are the commonalities between Islam and CLCP?" or "How does
                    Christianity relate to the Community Life Competence Process?"
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
                placeholder="Ask about religions, CLCP, or their relationships..."
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
