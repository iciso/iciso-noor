"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// This is the same topics data from the browse page
const topics = [
  {
    id: "concept-of-god",
    title: "Concept of God",
    description: "How different religions view the divine",
    content: `
# Concept of God in Major Religions

## Islam
Islam emphasizes strict monotheism (Tawhid). Allah is one, indivisible, and has no partners or equals. The Quran states: "Say, He is Allah, [who is] One, Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent" (112:1-4). Allah has 99 names that describe His attributes, but He transcends human understanding.

## Christianity
Christianity teaches the doctrine of the Trinity - one God in three persons: Father, Son (Jesus Christ), and Holy Spirit. These three persons are distinct yet of one substance, essence, or nature. Jesus is believed to be both fully divine and fully human. The Bible states: "In the beginning was the Word, and the Word was with God, and the Word was God" (John 1:1).

## Judaism
Judaism, like Islam, maintains strict monotheism. God is one and indivisible, the creator and ruler of the universe. The Shema prayer declares: "Hear, O Israel: The Lord our God, the Lord is one" (Deuteronomy 6:4). God is seen as transcendent yet involved in human affairs through covenant relationships.

## Hinduism
Hinduism's view of God is complex and can be monotheistic, polytheistic, or non-theistic depending on the tradition. Many Hindus believe in Brahman, the ultimate reality or universal soul. Deities like Vishnu, Shiva, and the Goddess are often seen as manifestations or aspects of this ultimate reality. The Upanishads state: "That which is One, the wise call by many names."

## Buddhism
Traditional Buddhism is generally non-theistic and doesn't focus on a creator deity. The Buddha is not considered a god but an enlightened human being who showed the path to liberation. Some Buddhist schools, particularly Mahayana, venerate Buddha-like celestial beings (Bodhisattvas), but these are not creator gods in the Western sense.

## Sikhism
Sikhism believes in one formless God who is the eternal truth. God in Sikhism is without gender or form, beyond human comprehension yet accessible through meditation and devotion. The Mul Mantar states: "There is one God, eternal truth is his name, creator of all things, present everywhere."
    `,
  },
  {
    id: "sacred-texts",
    title: "Sacred Texts",
    description: "Holy books and scriptures across religions",
    content: `
# Sacred Texts in Major Religions

## Islam
The primary sacred text in Islam is the Quran, believed to be the literal word of God as revealed to Prophet Muhammad through the angel Gabriel over 23 years. The Quran consists of 114 chapters (surahs) and is preserved in its original Arabic. The Hadith, collections of sayings and actions of Muhammad, form the second source of guidance.

## Christianity
The Bible is Christianity's sacred text, consisting of the Old Testament (largely corresponding to the Jewish Tanakh) and the New Testament, which includes the four Gospels (accounts of Jesus's life), Acts of the Apostles, Epistles (letters), and Revelation. Different denominations may include additional books (Apocrypha/Deuterocanonical books).

## Judaism
The Tanakh (Hebrew Bible) consists of three parts: Torah (Law/Pentateuch), Nevi'im (Prophets), and Ketuvim (Writings). The Torah, containing the first five books, is the most sacred. The Talmud, consisting of the Mishnah (oral law) and Gemara (commentary), is also central to Jewish religious life.

## Hinduism
Hinduism has numerous sacred texts categorized as Shruti ("what is heard" - revealed) and Smriti ("what is remembered" - tradition). The Vedas (Rig, Sama, Yajur, and Atharva) are the oldest and most authoritative. Other important texts include the Upanishads (philosophical treatises), Bhagavad Gita (part of the epic Mahabharata), Puranas (myths and legends), and Ramayana.

## Buddhism
Buddhist sacred texts vary by tradition. Theravada Buddhism follows the Pali Canon (Tipitaka), containing the Vinaya Pitaka (monastic rules), Sutta Pitaka (Buddha's discourses), and Abhidhamma Pitaka (philosophical analysis). Mahayana Buddhism has additional sutras like the Heart Sutra, Diamond Sutra, and Lotus Sutra. Tibetan Buddhism includes tantric texts.

## Sikhism
The Guru Granth Sahib is Sikhism's central religious scripture and eternal living guru. It contains 1,430 pages of hymns written by the Sikh Gurus and various Hindu and Muslim saints. It provides spiritual guidance and is treated with the utmost respect in Sikh practice.
    `,
  },
  {
    id: "afterlife",
    title: "Afterlife",
    description: "Beliefs about what happens after death",
    content: `
# Afterlife in Major Religions

## Islam
Islam teaches that after death, the soul enters barzakh (an intermediate state) until the Day of Judgment (Yawm al-Qiyamah). On this day, all humans will be resurrected and judged by Allah based on their faith and deeds. The righteous will enter Jannah (Paradise), described as gardens with rivers flowing beneath, while wrongdoers will enter Jahannam (Hell), a place of punishment. The Quran states: "Indeed, those who have believed and done righteous deeds - they will have the Gardens of Paradise as a lodging" (18:107).

## Christianity
Christianity teaches that after death, the soul continues to exist. Jesus will return for the final judgment, where the righteous will receive eternal life in Heaven with God, while those who reject God face eternal separation in Hell. Some denominations, particularly Catholicism, believe in Purgatory as a place of purification before entering Heaven. The Bible states: "For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord" (Romans 6:23).

## Judaism
Judaism has varied afterlife beliefs that have evolved over time. Traditional views include Olam Ha-Ba (the World to Come), which may refer to a messianic age on earth or a spiritual afterlife. Some believe in bodily resurrection when the Messiah comes. Gan Eden (Garden of Eden) is a place for the righteous, while Gehinnom is often viewed as a place of purification (usually temporary, lasting up to 12 months). Judaism tends to focus more on this life than the afterlife.

## Hinduism
Hinduism teaches reincarnation (samsara) based on karma (the law of cause and effect). After death, the soul (atman) takes a new form based on one's actions in previous lives. Various heavens and hells exist as temporary realms where one may experience the fruits of good or bad karma. The ultimate goal is moksha (liberation from the cycle of rebirth) and realization of one's true nature as one with Brahman (ultimate reality).

## Buddhism
Buddhism teaches rebirth rather than reincarnation (as there is no permanent self or soul in Buddhist thought). One's karma determines rebirth in various realms, including those of gods, humans, animals, hungry ghosts, and hell beings. These realms are temporary, not eternal. The ultimate goal is nirvana, the cessation of suffering and the end of the cycle of rebirth. The Buddha taught: "This is peace, this is exquisite — the resolution of all fabrications, the relinquishment of all acquisitions, the ending of craving; dispassion; cessation; Nibbana."

## Sikhism
Sikhism teaches that the soul undergoes a cycle of rebirth based on karma. The goal is to break this cycle and achieve union with God through devotion, truthful living, and service to humanity. This liberation (mukti) ends the cycle of birth and death. The Guru Granth Sahib states: "Coming and going is by the Hukam of His Command; His Command is pre-ordained."
    `,
  },
  {
    id: "worship-practices",
    title: "Worship Practices",
    description: "How followers connect with the divine",
    content: `
# Worship Practices in Major Religions

## Islam
Islamic worship centers around the Five Pillars:
1. Shahada (declaration of faith): "There is no god but Allah, and Muhammad is the messenger of Allah"
2. Salat (prayer): Five daily prayers facing Mecca
3. Zakat (charity): Annual giving of 2.5% of one's wealth
4. Sawm (fasting): During the month of Ramadan from dawn to sunset
5. Hajj (pilgrimage): To Mecca at least once if physically and financially able

Muslims worship in mosques, though prayer can be performed anywhere clean. Friday noon prayer (Jumu'ah) is particularly important for communal worship. Worship is led by an imam and involves recitation of the Quran, physical movements (standing, bowing, prostrating), and devotional phrases.

## Christianity
Christian worship varies widely across denominations but typically includes:
- Regular church attendance (particularly Sunday services)
- Prayer (both personal and communal)
- Scripture reading and study
- Singing hymns and worship songs
- Sacraments/ordinances, especially:
  - Baptism (initiation into the faith)
  - Communion/Eucharist/Lord's Supper (commemorating Jesus's last meal with his disciples)

Catholic and Orthodox traditions emphasize liturgical worship and additional sacraments, while Protestant denominations may have more varied and sometimes less formal practices.

## Judaism
Jewish worship centers around:
- Prayer services (three times daily in Orthodox Judaism)
- Shabbat (Sabbath) observance from Friday sunset to Saturday sunset
- Study of Torah and other sacred texts
- Observance of holidays (Passover, Rosh Hashanah, Yom Kippur, etc.)
- Lifecycle rituals (circumcision, bar/bat mitzvah, marriage, funeral rites)

Worship takes place in synagogues and is led by rabbis and cantors. The Torah scroll is read publicly on Shabbat, Mondays, and Thursdays. Prayer often involves recitation from prayer books (siddur) in Hebrew, though Reform Judaism incorporates more vernacular language.

## Hinduism
Hindu worship (puja) involves:
- Offerings to deities (flowers, food, incense)
- Recitation of mantras and prayers
- Devotional singing (bhajans)
- Ritual purification
- Pilgrimage to holy sites (tirthas)
- Celebration of festivals (Diwali, Holi, Navaratri, etc.)

Worship can be performed at home shrines or in temples (mandirs). Temple worship often involves darshan (seeing and being seen by the deity) and receiving prasad (blessed food offerings). Many Hindus also practice yoga and meditation as spiritual disciplines.

## Buddhism
Buddhist practice includes:
- Meditation (various forms depending on tradition)
- Chanting sutras and mantras
- Offerings at shrines and temples
- Ethical living according to the Five Precepts (not killing, stealing, sexual misconduct, lying, or using intoxicants)
- Prostrations and circumambulation of stupas or sacred objects
- Acts of compassion and generosity

Worship typically takes place at temples, monasteries, or home shrines. Mahayana Buddhism often includes devotion to bodhisattvas, while Vajrayana (Tibetan) Buddhism incorporates elaborate rituals, mandalas, and visualization practices.

## Sikhism
Sikh worship practices include:
- Regular attendance at the gurdwara (Sikh temple)
- Recitation and study of the Guru Granth Sahib
- Kirtan (devotional singing)
- Langar (free community kitchen open to all)
- Nam Japna (meditation on God's name)
- Seva (selfless service)

Sikhs gather for congregational worship (sangat), where they sit on the floor as equals. There are no priests; any qualified Sikh can lead services. The Guru Granth Sahib is treated with utmost respect as the living guru.
    `,
  },
  {
    id: "salvation",
    title: "Salvation and Liberation",
    description: "Paths to spiritual fulfillment and freedom",
    content: `
# Salvation and Liberation in Major Religions

## Islam
In Islam, salvation (najat) comes through:
- Submission to Allah (the meaning of "Islam")
- Faith (iman) in Allah and His messenger Muhammad
- Righteous deeds and avoiding sin
- Divine mercy and forgiveness

The Quran emphasizes both faith and good works: "Indeed, those who have believed and done righteous deeds - they will have the Gardens of Paradise as a lodging" (18:107). However, ultimate salvation is by Allah's mercy, not human effort alone.

## Christianity
Christianity teaches salvation through:
- Faith in Jesus Christ as Lord and Savior
- Grace (unmerited favor) from God
- Jesus' atoning sacrifice on the cross
- Repentance from sin

Most Christians believe salvation cannot be earned through good works alone. The Bible states: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast" (Ephesians 2:8-9). Different denominations emphasize various aspects of salvation, such as predestination or free will.

## Judaism
Judaism focuses less on personal salvation and more on:
- Covenant relationship with God
- Ethical living according to Torah
- Tikkun olam (repairing the world)
- Collective redemption of Israel and humanity

Righteousness comes through observing God's commandments and ethical living. The prophets emphasized justice and compassion: "He has told you, O man, what is good; and what does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God?" (Micah 6:8).

## Hinduism
Hinduism teaches liberation (moksha) through:
- Karma yoga: selfless action
- Bhakti yoga: loving devotion to God
- Jnana yoga: spiritual knowledge and wisdom
- Raja yoga: meditation and mind control

Moksha is release from samsara (cycle of rebirth) and realization of one's true nature as atman (soul) identical with Brahman (ultimate reality). The Bhagavad Gita presents these various paths as suited to different temperaments.

## Buddhism
Buddhism focuses on liberation (nirvana) through:
- Following the Eightfold Path
- Developing wisdom and compassion
- Meditation and mindfulness
- Eliminating craving and attachment

Nirvana is the cessation of suffering and the end of the cycle of rebirth. The Buddha taught: "This is the noble truth of the path that leads to the cessation of suffering: precisely this Noble Eightfold Path: right view, right intention, right speech, right action, right livelihood, right effort, right mindfulness, right concentration."

## Sikhism
Sikhism teaches liberation (mukti) through:
- Nam Japna: meditation on God's name
- Kirat Karo: honest living
- Vand Chakko: sharing with others
- Overcoming the five evils: lust, anger, greed, attachment, and ego

The goal is union with God and release from the cycle of birth and death. This comes through God's grace and human effort in following the Guru's teachings.
    `,
  },
]

export default function TopicPage() {
  const params = useParams()
  const topicId = params.id as string

  const topic = topics.find((t) => t.id === topicId)

  if (!topic) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-emerald-50 to-teal-100">
        <header className="py-6 px-4 sm:px-6 lg:px-8 border-b bg-white">
          <div className="max-w-7xl mx-auto flex items-center">
            <Link href="/browse" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Topics</span>
            </Link>
          </div>
        </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto w-full flex items-center justify-center">
          <Card>
            <CardContent className="p-6">
              <h1 className="text-2xl font-bold mb-4">Topic Not Found</h1>
              <p>Sorry, the topic you're looking for doesn't exist.</p>
              <Link href="/browse" className="text-emerald-600 hover:underline mt-4 inline-block">
                Return to Topics
              </Link>
            </CardContent>
          </Card>
        </main>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-emerald-50 to-teal-100">
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b bg-white">
        <div className="max-w-7xl mx-auto flex items-center">
          <Link href="/browse" className="flex items-center space-x-2">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Topics</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto w-full">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{topic.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <div className="whitespace-pre-wrap">{topic.content}</div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
