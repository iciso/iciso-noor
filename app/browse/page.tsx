import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

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
  // New CLCP-related topics
  {
    id: "clcp-overview",
    title: "CLCP Overview",
    description: "Understanding the Community Life Competence Process",
    content: `
# Community Life Competence Process (CLCP)

The Community Life Competence Process (CLCP) is an approach developed by The Constellation that empowers communities to respond to their challenges. It is based on the belief that communities have the capacity to address their own issues and that sustainable change comes from within.

## Key Principles of CLCP

### Community Ownership
CLCP emphasizes that communities must take ownership of both their challenges and solutions. External facilitators serve as catalysts rather than directors of change. This principle recognizes that sustainable solutions emerge when communities are fully engaged in the process.

### Strength-Based Approach
Rather than focusing on problems and deficits, CLCP begins by appreciating existing strengths and capacities within communities. This appreciative approach builds confidence and motivation by recognizing what is already working well.

### Learning from Experience
CLCP values the knowledge and wisdom that communities have developed through their experiences. It creates opportunities for communities to reflect on their experiences, draw lessons, and apply these insights to current challenges.

### Local Response
CLCP is founded on the belief that communities have the capacity to address their own issues. It recognizes that local responses are more sustainable and contextually appropriate than externally imposed solutions.

### Transfer
Knowledge and practices are shared between communities, allowing them to learn from each other's experiences. This horizontal transfer of knowledge respects the wisdom of communities and promotes peer learning.

## The CLCP Process

CLCP follows a systematic process that includes:

1. **Relationship Building**: Establishing trust and connection with communities through SALT visits (Stimulate, Appreciate, Learn, Transfer).

2. **Dream Building**: Helping communities envision their desired future through participatory exercises that build consensus around shared aspirations.

3. **Self-Assessment**: Communities evaluate their current strengths and challenges using a framework that they develop themselves.

4. **Action Planning**: Developing concrete steps to move toward the dream, with clear responsibilities, timelines, and indicators of success.

5. **Implementation**: Taking action and learning from the process, with regular reflection and adaptation.

6. **Self-Measurement**: Communities track their own progress using indicators they have developed, promoting ownership of both the process and outcomes.

7. **Sharing and Learning**: Communities share their experiences with others, contributing to a broader learning network.

## Applications of CLCP

CLCP has been applied in various contexts around the world, including:

- Public health initiatives (HIV/AIDS, maternal health, etc.)
- Community development projects
- Environmental conservation efforts
- Peace-building and conflict resolution
- Education and youth development
- Disaster response and resilience building

The flexibility of the CLCP approach allows it to be adapted to different cultural contexts and types of challenges while maintaining its core principles.
    `,
  },
  {
    id: "salt-approach",
    title: "SALT Approach",
    description: "Stimulate, Appreciate, Learn, Transfer",
    content: `
# The SALT Approach

SALT is a foundational approach in the Community Life Competence Process (CLCP) that stands for Stimulate, Appreciate, Learn, and Transfer. It represents both a mindset and a methodology for engaging with communities.

## Components of SALT

### S - Stimulate
The SALT approach stimulates communities to:
- Reflect on their experiences and potential
- Recognize their own strengths and capacities
- Envision possibilities for the future
- Take initiative in addressing their challenges

Stimulation happens through thoughtful questions, appreciative feedback, and creating spaces for community members to express their ideas and aspirations.

### A - Appreciate
Appreciation involves:
- Recognizing strengths and achievements rather than focusing on problems
- Acknowledging the wisdom and experience within communities
- Valuing diverse perspectives and contributions
- Celebrating progress and successes, however small

This appreciative stance builds confidence and motivation, creating a foundation for action based on existing strengths.

### L - Learn
The SALT approach emphasizes learning:
- From communities rather than teaching or instructing them
- Through active listening and genuine curiosity
- By asking questions rather than providing answers
- From both successes and challenges

This learning stance positions the facilitator as a student of the community's experience rather than an expert bringing solutions.

### T - Transfer
Transfer involves:
- Sharing experiences and practices between communities
- Connecting communities with similar challenges or interests
- Facilitating peer learning and exchange
- Building networks of mutual support and learning

Transfer recognizes that communities can learn valuable lessons from each other's experiences.

## SALT Visits

SALT visits are a key practice in the CLCP approach. During these visits:

1. **Teams** of facilitators (often including community members from other locations) visit a community with an attitude of learning and appreciation.

2. **Conversations** focus on the community's experiences, strengths, and aspirations rather than problems or needs.

3. **Appreciation** is expressed for what the community has achieved and the strengths they demonstrate.

4. **Learning** occurs as visitors ask questions and listen deeply to community members' stories and insights.

5. **Stimulation** happens as the conversation helps community members reflect on their experiences and potential.

6. **Transfer** may occur as visitors share relevant experiences from other communities or their own contexts.

## Principles of SALT

The SALT approach is guided by several key principles:

- **Respect** for the dignity, wisdom, and agency of community members
- **Humility** in recognizing that outsiders do not have all the answers
- **Curiosity** and genuine interest in learning from the community
- **Belief** in the capacity of communities to address their own challenges
- **Patience** in allowing community processes to unfold at their own pace
- **Reciprocity** in the relationship between facilitators and communities

These principles create a foundation for authentic engagement that empowers rather than disempowers communities.
    `,
  },
  {
    id: "clcp-religions",
    title: "CLCP and Religions",
    description: "Commonalities between faith traditions and CLCP",
    content: `
# Commonalities Between Religions and CLCP

The Community Life Competence Process (CLCP) and various faith traditions share several fundamental values and approaches to community development and human flourishing.

## Shared Values

### Community Empowerment
Both CLCP and religious traditions emphasize the importance of community and collective action. Religious communities (ummah in Islam, sangha in Buddhism, kehillah in Judaism, etc.) provide models of mutual support and shared responsibility that align with CLCP's emphasis on community ownership.

### Human Dignity
All major religions recognize the inherent worth and potential of every human being, often grounded in concepts like being created in God's image (Abrahamic faiths) or possessing Buddha-nature (Buddhism). This aligns with CLCP's belief in the capacity of all community members to contribute to solutions.

### Service to Others
Selfless service is central to both religious teachings (seva in Sikhism and Hinduism, zakat and sadaqah in Islam, tzedakah in Judaism, etc.) and the CLCP approach. Both emphasize that serving others is fundamental to human fulfillment and community wellbeing.

### Hope and Vision
Faith traditions and CLCP both work toward a better future through hope and shared vision. Religious concepts of the Kingdom of God, tikkun olam (repairing the world), or creating a more compassionate society parallel CLCP's dream-building process.

### Strength-Based Approach
CLCP's appreciative approach parallels many religious teachings about recognizing gifts, blessings, and potential rather than focusing solely on problems or deficits.

## Specific Connections with Major Religions

### CLCP and Islam
- The Quranic concept that God "will not change the condition of a people until they change what is in themselves" (13:11) mirrors CLCP's focus on community ownership.
- Shura (consultation) in Islamic governance parallels CLCP's participatory approach.
- The concept of ummah (community) emphasizes collective responsibility similar to CLCP.
- Zakat (obligatory charity) and sadaqah (voluntary charity) reflect CLCP's principles of sharing and transfer.

### CLCP and Christianity
- The early Christian community described in Acts 2:44-47 demonstrates principles similar to CLCP's community ownership and shared resources.
- Jesus's appreciative approach to individuals mirrors CLCP's SALT approach.
- Christian service (diakonia) aligns with CLCP's emphasis on community service and action.
- The concept of "the priesthood of all believers" parallels CLCP's belief in the capacity of all community members.

### CLCP and Buddhism
- The Buddhist sangha (community) operates on principles similar to CLCP's community approach.
- The Four Noble Truths provide a framework for addressing challenges that complements CLCP's process.
- Buddhist mindfulness practices enhance the reflective elements of CLCP.
- The concept of interdependence in Buddhism aligns with CLCP's understanding of community connections.

### CLCP and Hinduism
- Dharma (duty/righteousness) parallels CLCP's emphasis on community responsibility.
- Seva (selfless service) mirrors CLCP's approach to community action.
- The concept of satsang (community of truth-seekers) reflects CLCP's learning communities.
- Hindu teachings on human potential align with CLCP's belief in community capacity.

### CLCP and Judaism
- The Jewish concept of tikkun olam (repairing the world) aligns with CLCP's focus on community action for positive change.
- Torah study in community (chevruta) parallels CLCP's emphasis on collective learning.
- The tradition of tzedakah (righteous giving) reflects CLCP's principles of sharing resources.
- Jewish communal decision-making processes mirror CLCP's participatory approach.

## Practical Applications

The commonalities between CLCP and religious traditions create opportunities for:

1. **Faith-Based CLCP Implementation**: Religious communities can integrate CLCP principles into their social outreach and community development work.

2. **Interfaith Collaboration**: CLCP provides a framework for different faith communities to work together on shared concerns.

3. **Cultural Contextualization**: CLCP can be adapted to different religious contexts by drawing on relevant religious concepts and practices.

4. **Holistic Development**: Integrating spiritual dimensions with CLCP's community development approach creates more holistic and culturally resonant programs.

These connections demonstrate that CLCP is not at odds with religious traditions but can complement and enhance faith-based approaches to community development and human flourishing.
    `,
  },
  {
    id: "being-humane",
    title: "Being Humane",
    description: "Perspectives from religions and CLCP on humanity",
    content: `
# Being Humane: Perspectives from Religions and CLCP

## The Best of Humanity

The concept of being humane is central to both religious traditions and the Community Life Competence Process (CLCP). As explored in "The Best of Both Worlds: Islam & Life Competence" by Essa Md. Rafique:

"That human beings makeup humanity, there is no doubt. Similarly, all are certain that some of humanity are humane or being human. Yet, most of humankind obviously are not humane. So, is it not that humankind must be humane to be called human beings?"

This profound question resonates across faith traditions and community development approaches.

## Religious Perspectives on Being Humane

### Islam on Being Humane
In Islam, being humane is intrinsically tied to fulfilling our purpose as God's vicegerent on earth:

"It is He who has appointed You vicegerent on the earth and exalted some of you in rank above others, so that He may test you by means of what he has given you." (Quran, Surat Al-An'am 6:165)

The Quran emphasizes that humanity was created with inherent dignity: "We have honored the children of Adam" (17:70), establishing a foundation for humane treatment of all people.

Islamic ethics emphasize rahma (mercy/compassion) and 'adl (justice) as essential qualities of being humane. The Prophet Muhammad said: "The merciful are shown mercy by the Most Merciful. Be merciful to those on earth, and the One in heaven will be merciful to you."

### Christianity on Being Humane
Christianity emphasizes love and compassion as the essence of being humane:

"Love your neighbor as yourself" (Mark 12:31) and "Whatever you did for one of the least of these brothers and sisters of mine, you did for me" (Matthew 25:40).

The parable of the Good Samaritan illustrates that being humane transcends religious and ethnic boundaries, calling for compassion toward all people regardless of group affiliations.

### Buddhism on Being Humane
Buddhism's emphasis on compassion (karuna) and loving-kindness (metta) provides a framework for being humane:

"Just as a mother would protect her only child at the risk of her own life, even so, let one cultivate a boundless heart towards all beings" (Metta Sutta).

The practice of mindfulness helps develop awareness of others' suffering and respond with compassion. The Five Precepts (not killing, stealing, sexual misconduct, lying, or using intoxicants) provide ethical guidelines for humane behavior.

### Hinduism on Being Humane
Hinduism expresses the concept of being humane through:

- Ahimsa (non-violence): Respect for all living beings
- Daya (compassion): Caring for the suffering of others
- Seva (selfless service): Acting for the benefit of others without expectation of reward

The concept of "Vasudhaiva Kutumbakam" (the world is one family) from the Maha Upanishad expresses the ideal of universal kinship that underlies humane behavior.

### Judaism on Being Humane
Judaism emphasizes the concept of "tzelem Elohim" (image of God) as the foundation for human dignity and humane treatment:

"Whoever destroys a soul, it is considered as if he destroyed an entire world. And whoever saves a life, it is considered as if he saved an entire world" (Mishnah Sanhedrin 4:5).

The prophetic tradition emphasizes justice and compassion: "He has told you, O mortal, what is good; and what does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God?" (Micah 6:8).

## CLCP's Approach to Being Humane

The Community Life Competence Process embodies being humane through:

### Appreciation
CLCP begins with appreciating the inherent worth and capacity of all people. This appreciation recognizes the dignity of every community member and their potential to contribute to solutions.

### Respect
CLCP respects community wisdom and agency, avoiding imposing external solutions or treating communities as passive recipients of aid. This respect honors the autonomy and self-determination of communities.

### Facilitation
CLCP facilitators support rather than direct or control community processes. This facilitative approach empowers communities to take ownership of their challenges and solutions.

### Empowerment
CLCP builds capacity rather than creating dependency, helping communities recognize and develop their own strengths. This empowerment approach believes in the potential of all people to grow and contribute.

## Common Principles Across Traditions

All these approaches share common elements of being humane:

1. **Recognition of dignity**: Seeing the inherent worth in every person
2. **Empathy**: Understanding and sharing the feelings of others
3. **Compassionate action**: Moving beyond feeling to practical assistance
4. **Justice**: Ensuring fair and equitable treatment
5. **Service**: Putting others' needs before self-interest

As noted in the CLCP & religion booklet: "Life is a long journey from human being to being humane." This journey is supported by both religious teachings and community development approaches like CLCP.

## Integration of Religious and CLCP Approaches

When religious traditions and CLCP approaches are integrated, they can create powerful frameworks for promoting humane behavior and community development:

1. **Faith-Inspired Action**: Religious teachings provide motivation and meaning for humane action, while CLCP offers practical methodologies for implementation.

2. **Holistic Development**: Religious perspectives address spiritual dimensions of being humane, while CLCP addresses social and practical dimensions.

3. **Sustainable Change**: Religious communities provide ongoing support structures for humane behavior, while CLCP offers processes for community-led change.

4. **Cultural Relevance**: Religious concepts make CLCP approaches more culturally resonant in faith-based communities.

## Conclusion

The journey from "human being to being humane" is a central concern of both religious traditions and community development approaches like CLCP. By recognizing the complementary nature of these perspectives, we can develop more holistic, culturally appropriate, and effective approaches to promoting humane behavior and community wellbeing.

As we face global challenges that require humane responses—from poverty and inequality to conflict and environmental degradation—the integration of wisdom from religious traditions with practical approaches like CLCP offers promising pathways forward.
    `,
  },
]

export default function BrowseTopics() {
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
        <h1 className="text-3xl font-bold mb-6">Browse Topics</h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Religion Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topics.slice(0, 6).map((topic) => (
              <Link key={topic.id} href={`/topic/${topic.id}`}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>{topic.title}</CardTitle>
                    <CardDescription>{topic.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-3">
                      {topic.content.split("\n").slice(0, 3).join(" ").substring(0, 150)}...
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">CLCP and Religion Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topics.slice(6).map((topic) => (
              <Link key={topic.id} href={`/topic/${topic.id}`}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>{topic.title}</CardTitle>
                    <CardDescription>{topic.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-3">
                      {topic.content.split("\n").slice(0, 3).join(" ").substring(0, 150)}...
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
