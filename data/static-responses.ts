export const STATIC_RESPONSES_EN = {
  "islam-clcp": "Both emphasize community, service, and human dignity.",
  "christianity-clcp": "Shared values of compassion, love, and community empowerment.",
  "buddhism-clcp": "Mindfulness, compassion, and interdependence are key to both.",
  "hinduism-clcp": "Dharma, seva, and community responsibility align in both.",
  "sikhism-clcp": "Service, equality, and community action are central to both.",
  "atheism-clcp": "Human-centered approaches, evidence-based thinking, and community empowerment align in both.",
  "spirituality-clcp": "Holistic well-being, connection, and mindfulness are central to both.",
  "being-humane": "Being humane is a core value shared across religions and CLCP.",
  "clcp-religions": "CLCP resonates with values found in many religious traditions.",
  clcp: "CLCP is a community-led development approach.",
  salt: "SALT is a facilitation method used in CLCP.",
  islam: "Islam emphasizes submission to God and compassion.",
  christianity: "Christianity teaches love, forgiveness, and redemption.",
  buddhism: "Buddhism focuses on mindfulness and compassion.",
  hinduism: "Hinduism values dharma, karma, and reincarnation.",
  judaism: "Judaism emphasizes justice, righteousness, and community.",
  sikhism: "Sikhism promotes equality, service, and devotion to God.",
  atheism:
    "Atheism is a perspective that doesn't include belief in deities, focusing on human agency and evidence-based reasoning.",
  spirituality:
    "Spirituality without religion focuses on meaning, connection, and transcendence outside of organized religious frameworks.",
  comparison: "Comparative religion explores similarities and differences between faiths.",
  salvation: "Salvation is a concept of spiritual liberation or redemption.",
  afterlife: "Beliefs about what happens after death vary across religions.",
  default: "Ask me about comparative religion or CLCP!",
}

export const STATIC_RESPONSES_FR = {
  "islam-clcp": "Les deux mettent l'accent sur la communauté, le service et la dignité humaine.",
  "christianity-clcp": "Valeurs partagées de compassion, d'amour et d'autonomisation communautaire.",
  "buddhism-clcp": "La pleine conscience, la compassion et l'interdépendance sont essentielles aux deux.",
  "hinduism-clcp": "Dharma, seva et responsabilité communautaire s'alignent dans les deux.",
  "sikhism-clcp": "Le service, l'égalité et l'action communautaire sont au cœur des deux.",
  "atheism-clcp":
    "Les approches centrées sur l'humain, la pensée fondée sur des preuves et l'autonomisation communautaire s'alignent dans les deux.",
  "spirituality-clcp": "Le bien-être holistique, la connexion et la pleine conscience sont au cœur des deux.",
  "being-humane": "Être humain est une valeur fondamentale partagée par les religions et le CLCP.",
  "clcp-religions": "Le CLCP résonne avec les valeurs trouvées dans de nombreuses traditions religieuses.",
  clcp: "Le CLCP est une approche de développement menée par la communauté.",
  salt: "SALT est une méthode de facilitation utilisée dans le CLCP.",
  islam: "L'islam met l'accent sur la soumission à Dieu et la compassion.",
  christianity: "Le christianisme enseigne l'amour, le pardon et la rédemption.",
  buddhism: "Le bouddhisme se concentre sur la pleine conscience et la compassion.",
  hinduism: "L'hindouisme valorise le dharma, le karma et la réincarnation.",
  judaism: "Le judaïsme met l'accent sur la justice, la droiture et la communauté.",
  sikhism: "Le sikhisme promeut l'égalité, le service et la dévotion à Dieu.",
  atheism:
    "L'athéisme est une perspective qui n'inclut pas la croyance en des divinités, se concentrant sur l'agence humaine et le raisonnement fondé sur des preuves.",
  spirituality:
    "La spiritualité sans religion se concentre sur le sens, la connexion et la transcendance en dehors des cadres religieux organisés.",
  comparison: "La religion comparée explore les similitudes et les différences entre les religions.",
  salvation: "Le salut est un concept de libération ou de rédemption spirituelle.",
  afterlife: "Les croyances sur ce qui se passe après la mort varient selon les religions.",
  default: "Posez-moi des questions sur la religion comparée ou le CLCP !",
}

// Add the staticResponses export that combines both language versions
export const staticResponses = {
  en: {
    "islam-clcp": {
      title: "Islam and CLCP",
      content: `<p>${STATIC_RESPONSES_EN["islam-clcp"]}</p>
      <p>Islamic principles of community service (khidma), compassion (rahma), and human dignity (karama) align closely with CLCP's emphasis on community ownership and strength-based approaches.</p>`,
    },
    "christianity-clcp": {
      title: "Christianity and CLCP",
      content: `<p>Christian values of love (agape), service to others, and community support reflect CLCP's focus on community empowerment and collective action for positive change.</p>
      
      <h3>Shared Values and Approaches</h3>
      <p>Christianity and the Community Life Competence Process (CLCP) share several important values and approaches that create natural synergies:</p>
      
      <h4>1. Community and Collective Responsibility</h4>
      <ul>
        <li>Christianity emphasizes the church as a community of believers (ekklesia) who support one another</li>
        <li>The early Christian church in Acts 2:42-47 practiced communal living and shared resources</li>
        <li>CLCP focuses on community ownership and collective action for addressing challenges</li>
        <li>Both recognize that individuals flourish within supportive communities</li>
      </ul>
      
      <h4>2. Service to Others</h4>
      <ul>
        <li>Jesus modeled servant leadership and taught that "the greatest among you will be your servant" (Matthew 23:11)</li>
        <li>Christian service (diakonia) is a core expression of faith in action</li>
        <li>CLCP facilitators serve communities by supporting their journey without imposing solutions</li>
        <li>Both value humble service that empowers others</li>
      </ul>
      
      <h4>3. Recognizing Inherent Dignity and Strengths</h4>
      <ul>
        <li>Christianity teaches that all humans are created in God's image (imago dei) with inherent worth</li>
        <li>Jesus often recognized and called forth people's strengths and potential</li>
        <li>CLCP's strength-based approach focuses on community assets rather than deficits</li>
        <li>Both affirm human capacity and potential</li>
      </ul>
      
      <h4>4. Transformation and Hope</h4>
      <ul>
        <li>Christianity offers hope for personal and social transformation</li>
        <li>The concept of the Kingdom of God represents a vision for a transformed world</li>
        <li>CLCP's dream-building process helps communities envision and work toward a better future</li>
        <li>Both balance pragmatic action with hopeful vision</li>
      </ul>
      
      <h3>Practical Applications</h3>
      <p>Christian communities implementing CLCP often find that:</p>
      <ul>
        <li>CLCP provides practical tools for living out Christian values of service and community</li>
        <li>The SALT approach resonates with Christian practices of appreciative discernment</li>
        <li>CLCP's horizontal learning aligns with the priesthood of all believers concept in many Protestant traditions</li>
        <li>The emphasis on local ownership complements the principle of subsidiarity in Catholic social teaching</li>
      </ul>
      
      <h3>Examples from Practice</h3>
      <p>Christian churches and organizations have used CLCP to:</p>
      <ul>
        <li>Strengthen congregational life and mission</li>
        <li>Address community challenges like poverty, health issues, and social division</li>
        <li>Build bridges between different denominations through shared action</li>
        <li>Connect faith values with practical community development</li>
      </ul>
      
      <p>The integration of Christian faith and CLCP creates opportunities for communities to live out their faith through practical action while respecting the dignity and agency of all community members.</p>`,
    },
    "buddhism-clcp": {
      title: "Buddhism and CLCP",
      content: `<p>${STATIC_RESPONSES_EN["buddhism-clcp"]}</p>
      <p>Buddhist practices of mindfulness, compassion (karuna), and interdependence (pratityasamutpada) complement CLCP's approach to community awareness and interconnected solutions.</p>`,
    },
    "hinduism-clcp": {
      title: "Hinduism and CLCP",
      content: `<p>${STATIC_RESPONSES_EN["hinduism-clcp"]}</p>
      <p>Hindu concepts of dharma (duty), seva (selfless service), and community responsibility resonate with CLCP's emphasis on community ownership and collective action.</p>`,
    },
    "sikhism-clcp": {
      title: "Sikhism and CLCP",
      content: `<p>${STATIC_RESPONSES_EN["sikhism-clcp"]}</p>
      <p>Sikh principles of equality (sarbat da bhala), service (seva), and community action (langar) align with CLCP's focus on inclusive community development and shared responsibility.</p>`,
    },
    "atheism-clcp": {
      title: "Atheism and CLCP",
      content: `<p>${STATIC_RESPONSES_EN["atheism-clcp"]}</p>
      <p>Atheist perspectives on human agency, evidence-based approaches, and community empowerment complement CLCP's focus on local solutions and measurable outcomes without requiring religious frameworks.</p>`,
    },
    "spirituality-clcp": {
      title: "Spirituality and CLCP",
      content: `<p>${STATIC_RESPONSES_EN["spirituality-clcp"]}</p>
      <p>Non-religious spiritual approaches to holistic well-being, connection, and mindfulness enhance CLCP's methods for community engagement and sustainable development.</p>`,
    },
    "being-humane": {
      title: "Being Humane",
      content: `<p>${STATIC_RESPONSES_EN["being-humane"]}</p>
      <p>The concept of being humane—showing compassion, dignity, and respect for all—is a foundational value shared across religious and non-religious traditions, as well as CLCP's approach to community development.</p>`,
    },
    "clcp-religions": {
      title: "CLCP and Religions",
      content: `<p>${STATIC_RESPONSES_EN["clcp-religions"]}</p>
      <p>CLCP shares common values with many religious traditions, including community service, human dignity, compassion, and collective responsibility for well-being.</p>`,
    },
    clcp: {
      title: "CLCP",
      content: `<p>${STATIC_RESPONSES_EN.clcp}</p>
      <p>The Community Life Competence Process (CLCP) empowers communities to identify their strengths and address their challenges through ownership, shared learning, and collective action.</p>`,
    },
    salt: {
      title: "SALT Approach",
      content: `<p>${STATIC_RESPONSES_EN.salt}</p>
      <p>SALT (Stimulate, Appreciate, Learn, Transfer) is a facilitation approach used in CLCP that focuses on appreciative inquiry, community strengths, and shared learning between communities.</p>`,
    },
    islam: {
      title: "Islam",
      content: `<p>${STATIC_RESPONSES_EN.islam}</p>
      <p>Islam is a monotheistic religion founded on the teachings of Prophet Muhammad and the Quran, emphasizing submission to Allah (God), compassion, justice, and community welfare.</p>
  <p>Islam is the second-largest religion globally with approximately 1.9 billion followers. The word "Islam" means "submission to the will of Allah" and "peace" in Arabic.</p>
  
  <h3>Core Beliefs</h3>
  <ul>
    <li><strong>Tawhid (Monotheism)</strong>: The absolute oneness of Allah (God), who is indivisible and has no partners or equals</li>
    <li><strong>Prophethood</strong>: Belief in Muhammad as the final prophet and messenger of Allah, and in all previous prophets including Adam, Noah, Abraham, Moses, and Jesus</li>
    <li><strong>Revelation</strong>: The Quran as the literal word of Allah revealed to Prophet Muhammad through the angel Gabriel</li>
    <li><strong>Angels</strong>: Belief in angels as Allah's creations who carry out His commands</li>
    <li><strong>Day of Judgment</strong>: Belief in a final day when all humans will be judged according to their deeds</li>
    <li><strong>Divine Decree</strong>: Belief that Allah has knowledge of and control over all that happens</li>
  </ul>
  
  <h3>Five Pillars of Islam</h3>
  <ul>
    <li><strong>Shahada</strong>: Declaration of faith - "There is no god but Allah, and Muhammad is the messenger of Allah"</li>
    <li><strong>Salat</strong>: Five daily prayers facing the Kaaba in Mecca</li>
    <li><strong>Zakat</strong>: Annual charitable giving of 2.5% of one's wealth to those in need</li>
    <li><strong>Sawm</strong>: Fasting during the month of Ramadan from dawn until sunset</li>
    <li><strong>Hajj</strong>: Pilgrimage to Mecca at least once in a lifetime for those who are physically and financially able</li>
  </ul>
  
  <h3>Key Values and Practices</h3>
  <ul>
    <li><strong>Justice (Adl)</strong>: Commitment to fairness and equity in all dealings</li>
    <li><strong>Compassion (Rahma)</strong>: Mercy and kindness toward all creation</li>
    <li><strong>Community (Ummah)</strong>: The global community of Muslims united by faith</li>
    <li><strong>Knowledge (Ilm)</strong>: The pursuit of knowledge as a religious duty</li>
    <li><strong>Moderation (Wasatiyyah)</strong>: Following the middle path, avoiding extremes</li>
  </ul>
  
  <h3>Sources of Guidance</h3>
  <ul>
    <li><strong>Quran</strong>: The primary source of Islamic teachings, believed to be the literal word of Allah</li>
    <li><strong>Sunnah</strong>: The traditions and practices of Prophet Muhammad</li>
    <li><strong>Hadith</strong>: Recorded sayings and actions of Prophet Muhammad</li>
    <li><strong>Ijma</strong>: Consensus of Islamic scholars on matters of Islamic law</li>
    <li><strong>Qiyas</strong>: Analogical reasoning to apply Islamic principles to new situations</li>
  </ul>`,
    },
    christianity: {
      title: "Christianity",
      content: `<p>Christianity is based on the life and teachings of Jesus Christ, focusing on love, forgiveness, redemption through Christ, and service to others as expressions of faith.</p>
      <p>Christianity is a monotheistic religion centered on the life, teachings, death, and resurrection of Jesus Christ. With over 2 billion adherents worldwide, it's the world's largest religion, encompassing diverse denominations including Catholic, Orthodox, and Protestant traditions.</p>
      
      <h3>Core Beliefs</h3>
      <ul>
        <li><strong>God</strong>: Christians believe in one God who exists as a Trinity: Father, Son (Jesus Christ), and Holy Spirit.</li>
        <li><strong>Jesus Christ</strong>: Believed to be the Son of God who became human, lived a sinless life, died by crucifixion to atone for humanity's sins, and was resurrected.</li>
        <li><strong>Salvation</strong>: Achieved through faith in Jesus Christ and his sacrificial death, which offers forgiveness of sins and eternal life.</li>
        <li><strong>Bible</strong>: Considered the inspired word of God, consisting of the Old and New Testaments.</li>
        <li><strong>Church</strong>: The community of believers who gather for worship, learning, and service.</li>
      </ul>
      
      <h3>Key Values and Practices</h3>
      <ul>
        <li><strong>Love</strong>: Jesus taught that loving God and loving one's neighbor are the greatest commandments.</li>
        <li><strong>Service</strong>: Following Christ's example of serving others, especially those in need.</li>
        <li><strong>Community</strong>: Gathering together for worship, prayer, and mutual support.</li>
        <li><strong>Prayer</strong>: Regular communication with God, both individual and communal.</li>
        <li><strong>Scripture study</strong>: Reading and reflecting on the Bible for guidance and spiritual growth.</li>
      </ul>`,
    },
    buddhism: {
      title: "Buddhism",
      content: `<p>${STATIC_RESPONSES_EN.buddhism}</p>
      <p>Buddhism follows the teachings of Buddha, emphasizing mindfulness, compassion, the Four Noble Truths, and the Eightfold Path as ways to overcome suffering and achieve enlightenment.</p>`,
    },
    hinduism: {
      title: "Hinduism",
      content: `<h2>Hinduism: A Diverse and Ancient Tradition</h2>
      
      <p>Hinduism is one of the world's oldest religious and philosophical traditions, originating in the Indian subcontinent. Rather than a single unified religion, Hinduism encompasses a wide variety of beliefs, practices, and traditions that have evolved over thousands of years. With approximately 1.2 billion followers worldwide, it is the third-largest religion globally and the predominant faith in India and Nepal.</p>
      
      <h3>Core Concepts and Beliefs</h3>
      
      <h4>Brahman and Atman</h4>
      <ul>
        <li><strong>Brahman</strong>: The ultimate reality, the universal soul or absolute consciousness that underlies all existence</li>
        <li><strong>Atman</strong>: The individual soul or self, which in many Hindu traditions is considered identical to or part of Brahman</li>
        <li><strong>Relationship</strong>: Different schools of Hindu thought understand the relationship between Brahman and Atman differently, from complete identity (Advaita Vedanta) to qualified non-dualism (Vishishtadvaita) to dualism (Dvaita)</li>
      </ul>
      
      <h4>Dharma, Karma, and Samsara</h4>
      <ul>
        <li><strong>Dharma</strong>: Cosmic order, ethical duty, and righteous living according to one's nature and stage of life</li>
        <li><strong>Karma</strong>: The law of cause and effect, where actions generate consequences that affect one's current and future lives</li>
        <li><strong>Samsara</strong>: The cycle of birth, death, and rebirth (reincarnation) determined by one's karma</li>
        <li><strong>Moksha</strong>: Liberation from the cycle of samsara, the ultimate spiritual goal in Hinduism</li>
      </ul>
      
      <h4>Divine Manifestations</h4>
      <ul>
        <li><strong>Polytheistic Elements</strong>: Hinduism recognizes numerous deities, often understood as manifestations of the divine</li>
        <li><strong>Major Deities</strong>: Include Brahma (creator), Vishnu (preserver), Shiva (transformer), Devi (the goddess in various forms like Durga, Kali, Lakshmi, Saraswati), and Ganesha (remover of obstacles)</li>
        <li><strong>Ishta Devata</strong>: The concept of a personal deity chosen for worship</li>
        <li><strong>Avatars</strong>: Divine incarnations, particularly of Vishnu (such as Rama and Krishna)</li>
      </ul>
      
      <h3>Sacred Texts</h3>
      
      <h4>Shruti ("What is Heard")</h4>
      <ul>
        <li><strong>Vedas</strong>: The oldest sacred texts, including the Rig Veda, Sama Veda, Yajur Veda, and Atharva Veda</li>
        <li><strong>Upanishads</strong>: Philosophical texts exploring the nature of reality, consciousness, and liberation</li>
        <li><strong>Status</strong>: Considered revealed knowledge, eternal truths "heard" by ancient sages</li>
      </ul>
      
      <h4>Smriti ("What is Remembered")</h4>
      <ul>
        <li><strong>Bhagavad Gita</strong>: Part of the epic Mahabharata, a dialogue between Krishna and Arjuna on duty, devotion, and spiritual knowledge</li>
        <li><strong>Ramayana</strong>: Epic story of Rama, an avatar of Vishnu, embodying dharmic ideals</li>
        <li><strong>Puranas</strong>: Ancient texts containing stories of deities, cosmology, and philosophy</li>
        <li><strong>Dharma Shastras</strong>: Texts on law, ethics, and social conduct, including the Laws of Manu</li>
      </ul>
      
      <h3>Major Traditions and Paths</h3>
      
      <h4>Devotional Traditions (Bhakti)</h4>
      <ul>
        <li><strong>Vaishnavism</strong>: Devotion to Vishnu and his avatars, especially Krishna and Rama</li>
        <li><strong>Shaivism</strong>: Devotion to Shiva as the supreme deity</li>
        <li><strong>Shaktism</strong>: Worship of the divine feminine power (Shakti) in forms like Durga and Kali</li>
        <li><strong>Practices</strong>: Include prayer, singing devotional songs (bhajans), pilgrimage, and temple worship (puja)</li>
      </ul>
      
      <h4>Philosophical Schools (Jnana)</h4>
      <ul>
        <li><strong>Advaita Vedanta</strong>: Non-dualism taught by Adi Shankara, asserting the oneness of Atman and Brahman</li>
        <li><strong>Vishishtadvaita</strong>: Qualified non-dualism taught by Ramanuja, where souls are distinct but dependent on God</li>
        <li><strong>Dvaita</strong>: Dualism taught by Madhva, maintaining a permanent distinction between individual souls and God</li>
        <li><strong>Approach</strong>: Emphasizes intellectual inquiry, scriptural study, and meditation</li>
      </ul>
      
      <h4>Yoga Traditions (Raja)</h4>
      <ul>
        <li><strong>Ashtanga Yoga</strong>: The eight-limbed path described by Patanjali in the Yoga Sutras</li>
        <li><strong>Hatha Yoga</strong>: Physical practices including asanas (postures) and pranayama (breath control)</li>
        <li><strong>Kundalini Yoga</strong>: Practices to awaken spiritual energy at the base of the spine</li>
        <li><strong>Goal</strong>: Control of the mind and senses to achieve spiritual realization</li>
      </ul>
      
      <h4>Action and Service (Karma)</h4>
      <ul>
        <li><strong>Karma Yoga</strong>: The path of selfless action without attachment to results</li>
        <li><strong>Seva</strong>: Selfless service as spiritual practice</li>
        <li><strong>Approach</strong>: Performing one's duties as sacred acts, offering the fruits to the divine</li>
      </ul>
      
      <h3>Practices and Rituals</h3>
      
      <h4>Worship and Devotion</h4>
      <ul>
        <li><strong>Puja</strong>: Ritual worship involving offerings to deities, often performed at home shrines or temples</li>
        <li><strong>Darshan</strong>: Beholding the divine image in temples, considered a reciprocal seeing and being seen by the deity</li>
        <li><strong>Aarti</strong>: Ritual of light, waving lamps before the deity while chanting prayers</li>
        <li><strong>Bhajan and Kirtan</strong>: Devotional singing and chanting, often in groups</li>
      </ul>
      
      <h4>Life-Cycle Rituals (Samskaras)</h4>
      <ul>
        <li><strong>Birth Rituals</strong>: Including naming ceremonies and first feeding</li>
        <li><strong>Upanayana</strong>: Sacred thread ceremony marking the beginning of formal education</li>
        <li><strong>Vivaha</strong>: Marriage ceremonies with various regional traditions</li>
        <li><strong>Antyeshti</strong>: Funeral rites, typically involving cremation</li>
      </ul>
      
      <h4>Festivals and Celebrations</h4>
      <ul>
        <li><strong>Diwali</strong>: Festival of lights celebrating the triumph of light over darkness</li>
        <li><strong>Holi</strong>: Spring festival of colors and renewal</li>
        <li><strong>Navaratri</strong>: Nine nights honoring the goddess in her various forms</li>
        <li><strong>Janmashtami</strong>: Celebration of Krishna's birth</li>
        <li><strong>Maha Shivaratri</strong>: Night dedicated to Shiva</li>
      </ul>
      
      <h3>Social and Ethical Dimensions</h3>
      
      <h4>Varnashrama Dharma</h4>
      <ul>
        <li><strong>Varnas</strong>: The four traditional social categories (Brahmin, Kshatriya, Vaishya, Shudra)</li>
        <li><strong>Ashramas</strong>: The four stages of life (student, householder, forest-dweller, renunciant)</li>
        <li><strong>Modern Context</strong>: These concepts have evolved and are interpreted differently in contemporary Hinduism</li>
      </ul>
      
      <h4>Ethical Principles</h4>
      <ul>
        <li><strong>Ahimsa</strong>: Non-violence toward all living beings</li>
        <li><strong>Satya</strong>: Truthfulness in thought, speech, and action</li>
        <li><strong>Asteya</strong>: Non-stealing</li>
        <li><strong>Daya</strong>: Compassion toward all creatures</li>
        <li><strong>Tapas</strong>: Self-discipline and austerity</li>
      </ul>
      
      <h3>Contemporary Hinduism</h3>
      
      <h4>Global Presence</h4>
      <ul>
        <li><strong>Diaspora</strong>: Significant Hindu communities in North America, Europe, Africa, the Caribbean, and Southeast Asia</li>
        <li><strong>Temples</strong>: Hindu temples serve as cultural and religious centers in many countries</li>
        <li><strong>Organizations</strong>: Various international Hindu organizations promote Hindu values and practices globally</li>
      </ul>
      
      <h4>Modern Movements</h4>
      <ul>
        <li><strong>Reform Movements</strong>: Including the Brahmo Samaj, Arya Samaj, and Ramakrishna Mission</li>
        <li><strong>Guru Traditions</strong>: Various spiritual teachers and their lineages have global followings</li>
        <li><strong>Neo-Vedanta</strong>: Modern interpretations emphasizing universal spiritual principles</li>
        <li><strong>ISKCON</strong> (Hare Krishna): International movement focused on Krishna devotion</li>
      </ul>
      
      <h4>Engagement with Contemporary Issues</h4>
      <ul>
        <li><strong>Environmentalism</strong>: Drawing on Hindu concepts of reverence for nature</li>
        <li><strong>Social Justice</strong>: Addressing caste discrimination and promoting equality</li>
        <li><strong>Interfaith Dialogue</strong>: Participation in global conversations on religious harmony</li>
        <li><strong>Science and Spirituality</strong>: Exploring connections between Hindu philosophy and modern science</li>
      </ul>
      
      <p>Hinduism's diversity, adaptability, and depth have allowed it to evolve over millennia while maintaining continuity with its ancient roots. Its emphasis on multiple paths to spiritual fulfillment offers practitioners various approaches to connect with the divine and realize their spiritual potential according to their individual natures and inclinations.</p>`,
    },
    judaism: {
      title: "Judaism",
      content: `<p>${STATIC_RESPONSES_EN.judaism}</p>
      <p>Judaism is centered on the covenant between God and the Jewish people, emphasizing justice, righteousness, community responsibility, and ethical monotheism.</p>`,
    },
    sikhism: {
      title: "Sikhism",
      content: `<p>${STATIC_RESPONSES_EN.sikhism}</p>
      <p>Sikhism was founded by Guru Nanak and promotes equality, service to humanity, devotion to one God, and the importance of living an honest, compassionate life.</p>`,
    },
    atheism: {
      title: "Atheism",
      content: `<p>${STATIC_RESPONSES_EN.atheism}</p>
      <p>Atheism is the absence of belief in deities, often emphasizing human agency, evidence-based reasoning, and ethical frameworks based on human well-being rather than divine command.</p>`,
    },
    spirituality: {
      title: "Spirituality Without Religion",
      content: `<p>${STATIC_RESPONSES_EN.spirituality}</p>
      <p>Non-religious spirituality focuses on personal meaning, connection, transcendence, and well-being outside of organized religious frameworks, often incorporating mindfulness, nature connection, and contemplative practices.</p>`,
    },
    comparison: {
      title: "Comparative Religion",
      content: `<h2>Comparative Religion: Understanding Diverse Faith Traditions</h2>
      
      <p>Comparative religion is the systematic study of the similarities and differences between religious traditions and belief systems. This field examines shared themes, unique perspectives, and the historical and cultural contexts that shape religious expression around the world.</p>
      
      <h3>Major Dimensions of Comparison</h3>
      
      <h4>1. Concepts of Ultimate Reality</h4>
      <ul>
        <li><strong>Monotheism</strong>: Islam, Christianity, and Judaism emphasize one supreme deity who created and governs the universe.</li>
        <li><strong>Polytheism</strong>: Some Hindu traditions recognize multiple deities as manifestations of ultimate reality.</li>
        <li><strong>Non-theism</strong>: Buddhism generally does not focus on a creator deity but on the nature of mind and reality.</li>
        <li><strong>Monism</strong>: Advaita Vedanta in Hinduism sees all reality as ultimately one (Brahman).</li>
        <li><strong>Naturalism</strong>: Atheistic perspectives view the natural world as all that exists, without supernatural dimensions.</li>
      </ul>
      
      <h4>2. Sacred Texts and Authority</h4>
      <ul>
        <li><strong>Revealed Texts</strong>: The Quran (Islam), Bible (Christianity), and Torah (Judaism) are considered divine revelations.</li>
        <li><strong>Wisdom Literature</strong>: Buddhist sutras and Hindu Upanishads offer philosophical insights rather than divine commandments.</li>
        <li><strong>Oral Traditions</strong>: Many indigenous spiritual traditions transmit teachings through oral storytelling and ritual.</li>
        <li><strong>Interpretive Authority</strong>: Religions differ in who can authoritatively interpret texts—clergy, scholars, individuals, or community consensus.</li>
      </ul>
      
      <h4>3. Ethical Frameworks</h4>
      <ul>
        <li><strong>Divine Command</strong>: Many theistic traditions ground ethics in divine will or revelation.</li>
        <li><strong>Virtue Ethics</strong>: Confucianism emphasizes cultivating personal virtues like benevolence and propriety.</li>
        <li><strong>Consequentialist Ethics</strong>: Some Buddhist approaches focus on actions that reduce suffering.</li>
        <li><strong>Natural Law</strong>: Catholic Christianity emphasizes moral principles discernible through reason.</li>
        <li><strong>Humanistic Ethics</strong>: Secular approaches ground morality in human well-being and flourishing.</li>
      </ul>
      
      <h4>4. Ritual and Practice</h4>
      <ul>
        <li><strong>Prayer and Worship</strong>: Formal communication with divine beings varies widely across traditions.</li>
        <li><strong>Meditation</strong>: Contemplative practices range from mindfulness (Buddhism) to devotional focus (bhakti in Hinduism).</li>
        <li><strong>Communal Gatherings</strong>: From Muslim Friday prayers to Christian Sunday services to secular community meetings.</li>
        <li><strong>Rites of Passage</strong>: Birth, coming-of-age, marriage, and death rituals mark life transitions across cultures.</li>
        <li><strong>Dietary Practices</strong>: From halal (Islam) and kosher (Judaism) to vegetarianism (Jainism) to fasting traditions.</li>
      </ul>
      
      <h4>5. Views on Human Nature</h4>
      <ul>
        <li><strong>Original Sin</strong>: Traditional Christianity emphasizes humanity's fallen nature requiring redemption.</li>
        <li><strong>Inherent Goodness</strong>: Confucianism and some humanist perspectives see humans as naturally inclined toward goodness.</li>
        <li><strong>Neutral Potential</strong>: Buddhism sees human nature as neither inherently good nor evil but shaped by causes and conditions.</li>
        <li><strong>Divine Image</strong>: Abrahamic faiths teach that humans are created in God's image with inherent dignity.</li>
        <li><strong>Evolutionary Product</strong>: Naturalistic perspectives view human nature as shaped by biological and cultural evolution.</li>
      </ul>
      
      <h3>Shared Themes Across Traditions</h3>
      
      <p>Despite their differences, religious and non-religious worldviews often share common concerns:</p>
      
      <ul>
        <li><strong>The Golden Rule</strong>: Treating others as one wishes to be treated appears across diverse traditions.</li>
        <li><strong>Compassion</strong>: Concern for the suffering of others is central to many ethical frameworks.</li>
        <li><strong>Community</strong>: The importance of human connection and social bonds transcends specific beliefs.</li>
        <li><strong>Meaning-Making</strong>: All traditions offer frameworks for understanding life's purpose and significance.</li>
        <li><strong>Moral Development</strong>: Most traditions emphasize the cultivation of character and ethical growth.</li>
      </ul>
      
      <h3>Approaches to Religious Diversity</h3>
      
      <p>Scholars and practitioners take various approaches to religious differences:</p>
      
      <ul>
        <li><strong>Exclusivism</strong>: The view that one tradition contains the exclusive truth, while others are mistaken.</li>
        <li><strong>Inclusivism</strong>: The belief that one's own tradition represents the fullest truth, but other traditions contain partial truths.</li>
        <li><strong>Pluralism</strong>: The perspective that multiple traditions represent valid responses to ultimate reality.</li>
        <li><strong>Universalism</strong>: The view that all traditions ultimately lead to the same truth, despite different expressions.</li>
        <li><strong>Naturalism</strong>: The approach that explains religious diversity through historical, psychological, and sociological factors.</li>
      </ul>
      
      <h3>Contemporary Relevance</h3>
      
      <p>Comparative religion offers several benefits in our diverse global society:</p>
      
      <ul>
        <li>Promotes understanding and respect across cultural and religious boundaries</li>
        <li>Provides context for interpreting religious references in literature, art, and politics</li>
        <li>Helps individuals explore their own beliefs by encountering alternative perspectives</li>
        <li>Contributes to interfaith dialogue and cooperation on shared concerns</li>
        <li>Offers insights into the common human quest for meaning, purpose, and ethical guidance</li>
      </ul>
      
      <p>By studying diverse religious and non-religious perspectives with respect and curiosity, we gain a richer understanding of humanity's enduring questions about meaning, purpose, ethics, and ultimate reality.</p>`,
    },
    salvation: {
      title: "Salvation and Liberation",
      content: `<h2>Salvation and Liberation: Perspectives Across Traditions</h2>
      
      <p>The concepts of salvation, liberation, and ultimate fulfillment are central to many religious and philosophical traditions, though they take remarkably different forms. These concepts address fundamental human concerns about suffering, meaning, and what constitutes the highest good or ultimate goal of human existence.</p>
      
      <h3>Abrahamic Traditions</h3>
      
      <h4>Islam</h4>
      <p>In Islam, salvation (najat) involves:</p>
      <ul>
        <li><strong>Submission to Allah</strong>: Following God's will as revealed in the Quran and exemplified by Prophet Muhammad</li>
        <li><strong>Faith and Righteous Deeds</strong>: Belief in the oneness of God (tawhid) combined with good actions</li>
        <li><strong>Divine Mercy</strong>: Ultimate salvation depends on Allah's mercy and forgiveness</li>
        <li><strong>Judgment</strong>: On the Day of Judgment, one's deeds will be weighed to determine eternal destiny</li>
        <li><strong>Paradise (Jannah)</strong>: The ultimate reward for the faithful, described as gardens of bliss</li>
      </ul>
      <p>The Quran states: "Indeed, those who have believed and done righteous deeds - they will have the Gardens of Paradise as a lodging" (18:107).</p>
      
      <h4>Christianity</h4>
      <p>Christian understanding of salvation includes:</p>
      <ul>
        <li><strong>Sin and Redemption</strong>: Humanity is separated from God by sin but redeemed through Christ</li>
        <li><strong>Grace</strong>: Salvation is a gift from God, not earned through works (though traditions differ on the role of works)</li>
        <li><strong>Faith in Christ</strong>: Belief in Jesus as savior is central to most Christian understandings</li>
        <li><strong>Atonement</strong>: Christ's death provides forgiveness of sins (with various theological interpretations)</li>
        <li><strong>Eternal Life</strong>: Communion with God now and in the hereafter</li>
      </ul>
      <p>As expressed in Ephesians 2:8-9: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast."</p>
      
      <h4>Judaism</h4>
      <p>Judaism focuses less on individual salvation and more on:</p>
      <ul>
        <li><strong>Covenant Relationship</strong>: Maintaining the special relationship between God and the Jewish people</li>
        <li><strong>Tikkun Olam</strong>: "Repairing the world" through justice and righteous action</li>
        <li><strong>Ethical Monotheism</strong>: Living according to God's moral law</li>
        <li><strong>Messianic Age</strong>: A future time of universal peace and harmony rather than individual afterlife</li>
        <li><strong>This-Worldly Focus</strong>: Emphasis on living ethically in this life rather than securing rewards in the next</li>
      </ul>
      <p>The prophet Micah summarized: "What does the Lord require of you? To act justly and to love mercy and to walk humbly with your God" (Micah 6:8).</p>
      
      <h3>Dharmic Traditions</h3>
      
      <h4>Hinduism</h4>
      <p>Hindu traditions offer several paths to liberation (moksha):</p>
      <ul>
        <li><strong>Release from Samsara</strong>: Liberation from the cycle of rebirth and suffering</li>
        <li><strong>Self-Realization</strong>: Recognition of one's true nature as Atman (self) and its unity with Brahman (ultimate reality)</li>
        <li><strong>Multiple Paths</strong>: Karma yoga (action), bhakti yoga (devotion), jnana yoga (knowledge), and raja yoga (meditation)</li>
        <li><strong>Dharma</strong>: Living according to one's ethical and social duties</li>
        <li><strong>Grace</strong>: In some traditions, divine grace (especially in bhakti traditions) is essential</li>
      </ul>
      <p>The Bhagavad Gita teaches: "When a person is devoted to something with complete faith, I unify his faith in that form" (7:21).</p>
      
      <h4>Buddhism</h4>
      <p>Buddhism focuses on liberation (nirvana) through:</p>
      <ul>
        <li><strong>Ending Suffering</strong>: Recognizing and addressing the causes of suffering (dukkha)</li>
        <li><strong>Four Noble Truths</strong>: Understanding suffering, its origin, cessation, and the path to its end</li>
        <li><strong>Eightfold Path</strong>: Ethical conduct, mental discipline, and wisdom leading to liberation</li>
        <li><strong>Impermanence and Non-self</strong>: Recognizing that all phenomena are transient and without inherent self</li>
        <li><strong>Enlightenment</strong>: Awakening to the true nature of reality and freedom from delusion</li>
      </ul>
      <p>The Buddha taught: "Just as the ocean has one taste, the taste of salt, so too this teaching and discipline has one taste, the taste of liberation."</p>
      
      <h4>Jainism</h4>
      <p>Jain liberation (moksha) involves:</p>
      <ul>
        <li><strong>Ahimsa</strong>: Non-violence toward all living beings as the highest principle</li>
        <li><strong>Karma Removal</strong>: Eliminating accumulated karma through asceticism and non-attachment</li>
        <li><strong>Self-Control</strong>: Strict discipline of mind, speech, and body</li>
        <li><strong>Right Knowledge, Faith, and Conduct</strong>: The three jewels (ratnatraya) of Jainism</li>
        <li><strong>Liberation of the Soul</strong>: The jiva (soul) freed from karmic bondage ascends to the realm of the liberated</li>
      </ul>
      
      <h3>East Asian Traditions</h3>
      
      <h4>Daoism</h4>
      <p>Daoist fulfillment centers on:</p>
      <ul>
        <li><strong>Harmony with the Dao</strong>: Aligning with the natural way of the universe</li>
        <li><strong>Wu-wei</strong>: "Non-action" or effortless action in accordance with nature</li>
        <li><strong>Simplicity</strong>: Returning to an uncomplicated, natural state</li>
        <li><strong>Longevity</strong>: In some traditions, physical immortality through alchemical practices</li>
        <li><strong>Balance</strong>: Harmonizing opposing forces (yin and yang)</li>
      </ul>
      
      <h4>Confucianism</h4>
      <p>Confucian fulfillment emphasizes:</p>
      <ul>
        <li><strong>Moral Cultivation</strong>: Developing virtue (de) and becoming a junzi (person of noble character)</li>
        <li><strong>Social Harmony</strong>: Proper relationships within family and society</li>
        <li><strong>Ritual Propriety</strong>: Appropriate conduct in all situations</li>
        <li><strong>This-Worldly Focus</strong>: Emphasis on social ethics rather than afterlife</li>
        <li><strong>Mandate of Heaven</strong>: Aligning human affairs with cosmic moral order</li>
      </ul>
      
      <h3>Non-Religious Perspectives</h3>
      
      <h4>Secular Humanism</h4>
      <p>Humanist fulfillment focuses on:</p>
      <ul>
        <li><strong>Human Flourishing</strong>: Well-being and development of human potential</li>
        <li><strong>Ethical Living</strong>: Morality based on human needs and rational principles</li>
        <li><strong>Social Progress</strong>: Creating a more just and compassionate society</li>
        <li><strong>Scientific Understanding</strong>: Knowledge as a path to solving human problems</li>
        <li><strong>This-Worldly Focus</strong>: Finding meaning within natural human existence</li>
      </ul>
      
      <h4>Existentialism</h4>
      <p>Existentialist fulfillment involves:</p>
      <ul>
        <li><strong>Authentic Existence</strong>: Living according to one's own choices rather than external dictates</li>
        <li><strong>Creating Meaning</strong>: Finding or creating purpose in an objectively meaningless universe</li>
        <li><strong>Confronting Mortality</strong>: Facing the reality of death and finitude</li>
        <li><strong>Freedom and Responsibility</strong>: Accepting the burden of choice and its consequences</li>
        <li><strong>Engagement</strong>: Active participation in life rather than detached observation</li>
      </ul>
      
      <h3>Comparative Insights</h3>
      
      <p>Despite their differences, these approaches to salvation and liberation reveal some common themes:</p>
      
      <ul>
        <li><strong>Transformation</strong>: All traditions seek some form of profound change in human experience</li>
        <li><strong>Ethical Dimension</strong>: Most paths involve moral development and ethical action</li>
        <li><strong>Overcoming Limitations</strong>: Whether sin, ignorance, attachment, or inauthenticity</li>
        <li><strong>Community Context</strong>: Salvation rarely occurs in isolation but within traditions and communities</li>
        <li><strong>Ultimate Concerns</strong>: All address humanity's deepest questions about meaning and purpose</li>
      </ul>
      
      <p>Understanding these diverse approaches to salvation and liberation helps us appreciate the variety of ways humans have sought to address fundamental existential questions across cultures and throughout history.</p>`,
    },
    afterlife: {
      title: "Afterlife",
      content: `<p>${STATIC_RESPONSES_EN.afterlife}</p>
      <p>Beliefs about what happens after death vary widely across religions, from reincarnation to heaven and hell, judgment, or spiritual union with the divine, while some traditions focus more on this-worldly concerns.</p>`,
    },
    default: {
      title: "Noor",
      content: `<p>${STATIC_RESPONSES_EN.default}</p>`,
    },
  },
  fr: {
    "islam-clcp": {
      title: "Islam et CLCP",
      content: `<p>${STATIC_RESPONSES_FR["islam-clcp"]}</p>
      <p>Les principes islamiques de service communautaire (khidma), de compassion (rahma) et de dignité humaine (karama) s'alignent étroitement sur l'accent mis par le CLCP sur l'appropriation communautaire et les approches basées sur les forces.</p>`,
    },
    "christianity-clcp": {
      title: "Christianisme et CLCP",
      content: `<p>${STATIC_RESPONSES_FR["christianity-clcp"]}</p>
      
      <h3>Valeurs et Approches Partagées</h3>
      <p>Le christianisme et le Processus de Compétence de Vie Communautaire (CLCP) partagent plusieurs valeurs et approches importantes qui créent des synergies naturelles:</p>
      
      <h4>1. Communauté et Responsabilité Collective</h4>
      <ul>
        <li>Le christianisme met l'accent sur l'église en tant que communauté de croyants (ekklesia) qui se soutiennent mutuellement</li>
        <li>L'église chrétienne primitive dans Actes 2:42-47 pratiquait la vie communautaire et partageait les ressources</li>
        <li>Le CLCP se concentre sur l'appropriation communautaire et l'action collective pour relever les défis</li>
        <li>Les deux reconnaissent que les individus s'épanouissent au sein de communautés solidaires</li>
      </ul>
      
      <h4>2. Service aux Autres</h4>
      <ul>
        <li>Jésus a modelé le leadership serviteur et a enseigné que "le plus grand parmi vous sera votre serviteur" (Matthieu 23:11)</li>
        <li>Le service chrétien (diakonia) est une expression fondamentale de la foi en action</li>
        <li>Les facilitateurs du CLCP servent les communautés en soutenant leur parcours sans imposer de solutions</li>
        <li>Les deux valorisent le service humble qui autonomise les autres</li>
      </ul>
      
      <h4>3. Reconnaissance de la Dignité et des Forces Inhérentes</h4>
      <ul>
        <li>Le christianisme enseigne que tous les humains sont créés à l'image de Dieu (imago dei) avec une valeur inhérente</li>
        <li>Jésus reconnaissait souvent et faisait ressortir les forces et le potentiel des gens</li>
        <li>L'approche du CLCP basée sur les forces se concentre sur les atouts de la communauté plutôt que sur les déficits</li>
        <li>Les deux affirment la capacité et le potentiel humains</li>
      </ul>
      
      <h4>4. Transformation et Espoir</h4>
      <ul>
        <li>Le christianisme offre l'espoir d'une transformation personnelle et sociale</li>
        <li>Le concept du Royaume de Dieu représente une vision pour un monde transformé</li>
        <li>Le processus de construction de rêve du CLCP aide les communautés à envisager et à travailler vers un avenir meilleur</li>
        <li>Les deux équilibrent l'action pragmatique avec une vision pleine d'espoir</li>
      </ul>
      
      <h3>Applications Pratiques</h3>
      <p>Les communautés chrétiennes mettant en œuvre le CLCP constatent souvent que:</p>
      <ul>
        <li>Le CLCP fournit des outils pratiques pour vivre les valeurs chrétiennes de service et de communauté</li>
        <li>L'approche SALT résonne avec les pratiques chrétiennes de discernement appréciatif</li>
        <li>L'apprentissage horizontal du CLCP s'aligne avec le concept du sacerdoce de tous les croyants dans de nombreuses traditions protestantes</li>
        <li>L'accent mis sur l'appropriation locale complète le principe de subsidiarité dans l'enseignement social catholique</li>
      </ul>
      
      <h3>Exemples de la Pratique</h3>
      <p>Les églises et organisations chrétiennes ont utilisé le CLCP pour:</p>
      <ul>
        <li>Renforcer la vie et la mission de la congrégation</li>
        <li>Aborder les défis communautaires comme la pauvreté, les problèmes de santé et la division sociale</li>
        <li>Construire des ponts entre différentes dénominations par une action partagée</li>
        <li>Connecter les valeurs de foi avec le développement communautaire pratique</li>
      </ul>
      
      <p>L'intégration de la foi chrétienne et du CLCP crée des opportunités pour les communautés de vivre leur foi à travers une action pratique tout en respectant la dignité et l'agence de tous les membres de la communauté.</p>`,
    },
    "buddhism-clcp": {
      title: "Bouddhisme et CLCP",
      content: `<p>${STATIC_RESPONSES_FR["buddhism-clcp"]}</p>
      <p>Les pratiques bouddhistes de pleine conscience, de compassion (karuna) et d'interdépendance (pratityasamutpada) complètent l'approche du CLCP en matière de sensibilisation communautaire et de solutions interconnectées.</p>`,
    },
    "hinduism-clcp": {
      title: "Hindouisme et CLCP",
      content: `<p>${STATIC_RESPONSES_FR["hinduism-clcp"]}</p>
      <p>Les concepts hindous de dharma (devoir), seva (service désintéressé) et de responsabilité communautaire résonnent avec l'accent mis par le CLCP sur l'appropriation communautaire et l'action collective.</p>`,
    },
    "sikhism-clcp": {
      title: "Sikhisme et CLCP",
      content: `<p>${STATIC_RESPONSES_FR["sikhism-clcp"]}</p>
      <p>Les principes sikhs d'égalité (sarbat da bhala), de service (seva) et d'action communautaire (langar) s'alignent sur l'accent mis par le CLCP sur le développement communautaire inclusif et la responsabilité partagée.</p>`,
    },
    "atheism-clcp": {
      title: "Athéisme et CLCP",
      content: `<p>${STATIC_RESPONSES_FR["atheism-clcp"]}</p>
      <p>Les perspectives athées sur l'agence humaine, les approches fondées sur des preuves et l'autonomisation communautaire complètent l'accent mis par le CLCP sur les solutions locales et les résultats mesurables sans nécessiter de cadres religieux.</p>`,
    },
    "spirituality-clcp": {
      title: "Spiritualité et CLCP",
      content: `<p>${STATIC_RESPONSES_FR["spirituality-clcp"]}</p>
      <p>Les approches spirituelles non religieuses du bien-être holistique, de la connexion et de la pleine conscience améliorent les méthodes du CLCP pour l'engagement communautaire et le développement durable.</p>`,
    },
    "being-humane": {
      title: "Être Humain",
      content: `<p>${STATIC_RESPONSES_FR["being-humane"]}</p>
      <p>Le concept d'être humain - montrer de la compassion, de la dignité et du respect pour tous - est une valeur fondamentale partagée par les traditions religieuses et non religieuses, ainsi que par l'approche du CLCP en matière de développement communautaire.</p>`,
    },
    "clcp-religions": {
      title: "CLCP et Religions",
      content: `<p>${STATIC_RESPONSES_FR["clcp-religions"]}</p>
      <p>Le CLCP partage des valeurs communes avec de nombreuses traditions religieuses, notamment le service communautaire, la dignité humaine, la compassion et la responsabilité collective pour le bien-être.</p>`,
    },
    clcp: {
      title: "CLCP",
      content: `<p>${STATIC_RESPONSES_FR.clcp}</p>
      <p>Le Processus de Compétence de Vie Communautaire (CLCP) permet aux communautés d'identifier leurs forces et de relever leurs défis grâce à l'appropriation, l'apprentissage partagé et l'action collective.</p>`,
    },
    salt: {
      title: "Approche SALT",
      content: `<p>${STATIC_RESPONSES_FR.salt}</p>
      <p>SALT (Stimuler, Apprécier, Apprendre, Transférer) est une approche de facilitation utilisée dans le CLCP qui se concentre sur l'enquête appréciative, les forces communautaires et l'apprentissage partagé entre les communautés.</p>`,
    },
    islam: {
      title: "Islam",
      content: `<p>${STATIC_RESPONSES_FR.islam}</p>
      <p>L'Islam est une religion monothéiste fondée sur les enseignements du Prophète Muhammad et le Coran, mettant l'accent sur la soumission à Allah (Dieu), la compassion, la justice et le bien-être communautaire.</p>`,
    },
    christianity: {
      title: "Christianisme",
      content: `<p>Le christianisme est basé sur la vie et les enseignements de Jésus-Christ, mettant l'accent sur l'amour, le pardon, la rédemption par le Christ et le service aux autres comme expressions de la foi.</p>
      <p>Le christianisme est une religion monothéiste centrée sur la vie, les enseignements, la mort et la résurrection de Jésus-Christ. Avec plus de 2 milliards d'adeptes dans le monde, c'est la plus grande religion du monde, englobant diverses dénominations, notamment les traditions catholique, orthodoxe et protestante.</p>
      
      <h3>Croyances Fondamentales</h3>
      <ul>
        <li><strong>Dieu</strong>: Les chrétiens croient en un seul Dieu qui existe en tant que Trinité: Père, Fils (Jésus-Christ) et Saint-Esprit.</li>
        <li><strong>Jésus-Christ</strong>: Considéré comme le Fils de Dieu qui est devenu humain, a vécu une vie sans péché, est mort par crucifixion pour expier les péchés de l'humanité, et a été ressuscité.</li>
        <li><strong>Salut</strong>: Obtenu par la foi en Jésus-Christ et sa mort sacrificielle, qui offre le pardon des péchés et la vie éternelle.</li>
        <li><strong>Bible</strong>: Considérée comme la parole inspirée de Dieu, composée de l'Ancien et du Nouveau Testament.</li>
        <li><strong>Église</strong>: La communauté des croyants qui se rassemblent pour le culte, l'apprentissage et le service.</li>
      </ul>
      
      <h3>Valeurs et Pratiques Clés</h3>
      <ul>
        <li><strong>Amour</strong>: Jésus a enseigné que l'amour de Dieu et l'amour du prochain sont les plus grands commandements.</li>
        <li><strong>Service</strong>: Suivre l'exemple du Christ en servant les autres, en particulier ceux dans le besoin.</li>
        <li><strong>Communauté</strong>: Se rassembler pour le culte, la prière et le soutien mutuel.</li>
        <li><strong>Prière</strong>: Communication régulière avec Dieu, à la fois individuelle et communautaire.</li>
        <li><strong>Étude des Écritures</strong>: Lire et réfléchir sur la Bible pour obtenir des conseils et une croissance spirituelle.</li>
      </ul>`,
    },
    buddhism: {
      title: "Bouddhisme",
      content: `<p>${STATIC_RESPONSES_FR.buddhism}</p>
      <p>Le bouddhisme suit les enseignements de Bouddha, mettant l'accent sur la pleine conscience, la compassion, les Quatre Nobles Vérités et le Noble Chemin Octuple comme moyens de surmonter la souffrance et d'atteindre l'illumination.</p>`,
    },
    hinduism: {
      title: "Hindouisme",
      content: `<h2>Hindouisme: Une Tradition Diverse et Ancienne</h2>
      
      <p>L'hindouisme est l'une des plus anciennes traditions religieuses et philosophiques du monde, originaire du sous-continent indien. Plutôt qu'une religion unifiée unique, l'hindouisme englobe une grande variété de croyances, pratiques et traditions qui ont évolué sur des milliers d'années. Avec environ 1,2 milliard d'adeptes dans le monde, c'est la troisième plus grande religion au niveau mondial et la foi prédominante en Inde et au Népal.</p>
      
      <h3>Concepts et Croyances Fondamentaux</h3>
      
      <h4>Brahman et Atman</h4>
      <ul>
        <li><strong>Brahman</strong>: La réalité ultime, l'âme universelle ou la conscience absolue qui sous-tend toute existence</li>
        <li><strong>Atman</strong>: L'âme ou le soi individuel, qui dans de nombreuses traditions hindoues est considéré comme identique à ou faisant partie de Brahman</li>
        <li><strong>Relation</strong>: Différentes écoles de pensée hindoue comprennent différemment la relation entre Brahman et Atman, de l'identité complète (Advaita Vedanta) au non-dualisme qualifié (Vishishtadvaita) au dualisme (Dvaita)</li>
      </ul>
      
        au non-dualisme qualifié (Vishishtadvaita) au dualisme (Dvaita)</li>
      </ul>
      
      <h4>Dharma, Karma et Samsara</h4>
      <ul>
        <li><strong>Dharma</strong>: Ordre cosmique, devoir éthique et vie juste selon sa nature et son stade de vie</li>
        <li><strong>Karma</strong>: La loi de cause à effet, où les actions génèrent des conséquences qui affectent la vie actuelle et future</li>
        <li><strong>Samsara</strong>: Le cycle de naissance, mort et renaissance (réincarnation) déterminé par le karma de chacun</li>
        <li><strong>Moksha</strong>: Libération du cycle du samsara, l'objectif spirituel ultime dans l'hindouisme</li>
      </ul>
      
      <h4>Manifestations Divines</h4>
      <ul>
        <li><strong>Éléments Polythéistes</strong>: L'hindouisme reconnaît de nombreuses divinités, souvent comprises comme des manifestations du divin</li>
        <li><strong>Divinités Majeures</strong>: Incluent Brahma (créateur), Vishnu (préservateur), Shiva (transformateur), Devi (la déesse sous diverses formes comme Durga, Kali, Lakshmi, Saraswati), et Ganesha (celui qui élimine les obstacles)</li>
        <li><strong>Ishta Devata</strong>: Le concept d'une divinité personnelle choisie pour l'adoration</li>
        <li><strong>Avatars</strong>: Incarnations divines, particulièrement de Vishnu (comme Rama et Krishna)</li>
      </ul>
      
      <h3>Textes Sacrés</h3>
      
      <h4>Shruti ("Ce qui est Entendu")</h4>
      <ul>
        <li><strong>Vedas</strong>: Les plus anciens textes sacrés, comprenant le Rig Veda, Sama Veda, Yajur Veda et Atharva Veda</li>
        <li><strong>Upanishads</strong>: Textes philosophiques explorant la nature de la réalité, de la conscience et de la libération</li>
        <li><strong>Statut</strong>: Considérés comme des connaissances révélées, des vérités éternelles "entendues" par les sages anciens</li>
      </ul>
      
      <h4>Smriti ("Ce qui est Rappelé")</h4>
      <ul>
        <li><strong>Bhagavad Gita</strong>: Partie de l'épopée Mahabharata, un dialogue entre Krishna et Arjuna sur le devoir, la dévotion et la connaissance spirituelle</li>
        <li><strong>Ramayana</strong>: Histoire épique de Rama, un avatar de Vishnu, incarnant les idéaux dharmiques</li>
        <li><strong>Puranas</strong>: Textes anciens contenant des histoires de divinités, de cosmologie et de philosophie</li>
        <li><strong>Dharma Shastras</strong>: Textes sur la loi, l'éthique et la conduite sociale, y compris les Lois de Manu</li>
      </ul>
      
      <h3>Traditions et Voies Majeures</h3>
      
      <h4>Traditions Dévotionnelles (Bhakti)</h4>
      <ul>
        <li><strong>Vaishnavisme</strong>: Dévotion à Vishnu et ses avatars, spécialement Krishna et Rama</li>
        <li><strong>Shaivisme</strong>: Dévotion à Shiva comme divinité suprême</li>
        <li><strong>Shaktisme</strong>: Adoration du pouvoir divin féminin (Shakti) sous des formes comme Durga et Kali</li>
        <li><strong>Pratiques</strong>: Incluent la prière, le chant de chansons dévotionnelles (bhajans), le pèlerinage et l'adoration au temple (puja)</li>
      </ul>
      
      <h4>Écoles Philosophiques (Jnana)</h4>
      <ul>
        <li><strong>Advaita Vedanta</strong>: Non-dualisme enseigné par Adi Shankara, affirmant l'unité d'Atman et Brahman</li>
        <li><strong>Vishishtadvaita</strong>: Non-dualisme qualifié enseigné par Ramanuja, où les âmes sont distinctes mais dépendantes de Dieu</li>
        <li><strong>Dvaita</strong>: Dualisme enseigné par Madhva, maintenant une distinction permanente entre les âmes individuelles et Dieu</li>
        <li><strong>Approche</strong>: Met l'accent sur l'enquête intellectuelle, l'étude des écritures et la méditation</li>
      </ul>
      
      <h4>Traditions du Yoga (Raja)</h4>
      <ul>
        <li><strong>Ashtanga Yoga</strong>: La voie à huit membres décrite par Patanjali dans les Yoga Sutras</li>
        <li><strong>Hatha Yoga</strong>: Pratiques physiques incluant asanas (postures) et pranayama (contrôle du souffle)</li>
        <li><strong>Kundalini Yoga</strong>: Pratiques pour éveiller l'énergie spirituelle à la base de la colonne vertébrale</li>
        <li><strong>Objectif</strong>: Contrôle de l'esprit et des sens pour atteindre la réalisation spirituelle</li>
      </ul>
      
      <h4>Action et Service (Karma)</h4>
      <ul>
        <li><strong>Karma Yoga</strong>: La voie de l'action désintéressée sans attachement aux résultats</li>
        <li><strong>Seva</strong>: Service désintéressé comme pratique spirituelle</li>
        <li><strong>Approche</strong>: Accomplir ses devoirs comme des actes sacrés, offrant les fruits au divin</li>
      </ul>
      
      <h3>Pratiques et Rituels</h3>
      
      <h4>Adoration et Dévotion</h4>
      <ul>
        <li><strong>Puja</strong>: Adoration rituelle impliquant des offrandes aux divinités, souvent réalisée dans des autels domestiques ou des temples</li>
        <li><strong>Darshan</strong>: Contempler l'image divine dans les temples, considéré comme un voir et être vu réciproque par la divinité</li>
        <li><strong>Aarti</strong>: Rituel de lumière, agitant des lampes devant la divinité tout en chantant des prières</li>
        <li><strong>Bhajan et Kirtan</strong>: Chant dévotionnel, souvent en groupes</li>
      </ul>
      
      <h4>Rituels du Cycle de Vie (Samskaras)</h4>
      <ul>
        <li><strong>Rituels de Naissance</strong>: Incluant les cérémonies de nomination et première alimentation</li>
        <li><strong>Upanayana</strong>: Cérémonie du fil sacré marquant le début de l'éducation formelle</li>
        <li><strong>Vivaha</strong>: Cérémonies de mariage avec diverses traditions régionales</li>
        <li><strong>Antyeshti</strong>: Rites funéraires, impliquant typiquement la crémation</li>
      </ul>
      
      <h4>Festivals et Célébrations</h4>
      <ul>
        <li><strong>Diwali</strong>: Festival des lumières célébrant le triomphe de la lumière sur l'obscurité</li>
        <li><strong>Holi</strong>: Festival de printemps des couleurs et du renouveau</li>
        <li><strong>Navaratri</strong>: Neuf nuits honorant la déesse sous ses diverses formes</li>
        <li><strong>Janmashtami</strong>: Célébration de la naissance de Krishna</li>
        <li><strong>Maha Shivaratri</strong>: Nuit dédiée à Shiva</li>
      </ul>
      
      <h3>Dimensions Sociales et Éthiques</h3>
      
      <h4>Varnashrama Dharma</h4>
      <ul>
        <li><strong>Varnas</strong>: Les quatre catégories sociales traditionnelles (Brahmin, Kshatriya, Vaishya, Shudra)</li>
        <li><strong>Ashramas</strong>: Les quatre étapes de la vie (étudiant, maître de maison, ermite forestier, renonçant)</li>
        <li><strong>Contexte Moderne</strong>: Ces concepts ont évolué et sont interprétés différemment dans l'hindouisme contemporain</li>
      </ul>
      
      <h4>Principes Éthiques</h4>
      <ul>
        <li><strong>Ahimsa</strong>: Non-violence envers tous les êtres vivants</li>
        <li><strong>Satya</strong>: Véracité dans la pensée, la parole et l'action</li>
        <li><strong>Asteya</strong>: Non-vol</li>
        <li><strong>Daya</strong>: Compassion envers toutes les créatures</li>
        <li><strong>Tapas</strong>: Auto-discipline et austérité</li>
      </ul>
      
      <h3>Hindouisme Contemporain</h3>
      
      <h4>Présence Mondiale</h4>
      <ul>
        <li><strong>Diaspora</strong>: Communautés hindoues significatives en Amérique du Nord, Europe, Afrique, Caraïbes et Asie du Sud-Est</li>
        <li><strong>Temples</strong>: Les temples hindous servent de centres culturels et religieux dans de nombreux pays</li>
        <li><strong>Organisations</strong>: Diverses organisations hindoues internationales promeuvent les valeurs et pratiques hindoues globalement</li>
      </ul>
      
      <h4>Mouvements Modernes</h4>
      <ul>
        <li><strong>Mouvements de Réforme</strong>: Incluant le Brahmo Samaj, Arya Samaj et la Mission Ramakrishna</li>
        <li><strong>Traditions de Gourous</strong>: Divers enseignants spirituels et leurs lignées ont des suiveurs mondiaux</li>
        <li><strong>Néo-Vedanta</strong>: Interprétations modernes mettant l'accent sur les principes spirituels universels</li>
        <li><strong>ISKCON</strong> (Hare Krishna): Mouvement international centré sur la dévotion à Krishna</li>
      </ul>
      
      <h4>Engagement avec les Questions Contemporaines</h4>
      <ul>
        <li><strong>Environnementalisme</strong>: S'appuyant sur les concepts hindous de révérence pour la nature</li>
        <li><strong>Justice Sociale</strong>: Aborder la discrimination de caste et promouvoir l'égalité</li>
        <li><strong>Dialogue Interreligieux</strong>: Participation aux conversations globales sur l'harmonie religieuse</li>
        <li><strong>Science et Spiritualité</strong>: Explorer les connexions entre la philosophie hindoue et la science moderne</li>
      </ul>
      
      <p>La diversité, l'adaptabilité et la profondeur de l'hindouisme lui ont permis d'évoluer sur des millénaires tout en maintenant une continuité avec ses racines anciennes. Son accent sur les multiples voies vers l'accomplissement spirituel offre aux pratiquants diverses approches pour se connecter avec le divin et réaliser leur potentiel spirituel selon leurs natures et inclinations individuelles.</p>`,
    },
    judaism: {
      title: "Judaïsme",
      content: `<p>${STATIC_RESPONSES_FR.judaism}</p>
      <p>Le judaïsme est centré sur l'alliance entre Dieu et le peuple juif, mettant l'accent sur la justice, la droiture, la responsabilité communautaire et le monothéisme éthique.</p>`,
    },
    sikhism: {
      title: "Sikhisme",
      content: `<p>${STATIC_RESPONSES_FR.sikhism}</p>
      <p>Le sikhisme a été fondé par Guru Nanak et promeut l'égalité, le service à l'humanité, la dévotion à un seul Dieu et l'importance de vivre une vie honnête et compatissante.</p>`,
    },
    atheism: {
      title: "Athéisme",
      content: `<p>${STATIC_RESPONSES_FR.atheism}</p>
      <p>L'athéisme est l'absence de croyance en des divinités, mettant souvent l'accent sur l'agence humaine, le raisonnement fondé sur des preuves et des cadres éthiques basés sur le bien-être humain plutôt que sur le commandement divin.</p>`,
    },
    spirituality: {
      title: "Spiritualité Sans Religion",
      content: `<p>${STATIC_RESPONSES_FR.spirituality}</p>
      <p>La spiritualité non religieuse se concentre sur le sens personnel, la connexion, la transcendance et le bien-être en dehors des cadres religieux organisés, incorporant souvent la pleine conscience, la connexion avec la nature et les pratiques contemplatives.</p>`,
    },
    comparison: {
      title: "Religion Comparée",
      content: `<h2>Religion Comparée: Comprendre les Diverses Traditions Religieuses</h2>
      
      <p>La religion comparée est l'étude systématique des similitudes et des différences entre les traditions religieuses et les systèmes de croyance. Ce domaine examine les thèmes communs, les perspectives uniques, et les contextes historiques et culturels qui façonnent l'expression religieuse à travers le monde.</p>
      
      <h3>Dimensions Majeures de Comparaison</h3>
      
      <h4>1. Concepts de Réalité Ultime</h4>
      <ul>
        <li><strong>Monothéisme</strong>: L'islam, le christianisme et le judaïsme mettent l'accent sur une divinité suprême qui a créé et gouverne l'univers.</li>
        <li><strong>Polythéisme</strong>: Certaines traditions hindoues reconnaissent plusieurs divinités comme manifestations de la réalité ultime.</li>
        <li><strong>Non-théisme</strong>: Le bouddhisme ne se concentre généralement pas sur une divinité créatrice mais sur la nature de l'esprit et de la réalité.</li>
        <li><strong>Monisme</strong>: L'Advaita Vedanta dans l'hindouisme voit toute la réalité comme étant ultimement une (Brahman).</li>
        <li><strong>Naturalisme</strong>: Les perspectives athées considèrent le monde naturel comme tout ce qui existe, sans dimensions surnaturelles.</li>
      </ul>
      
      <h4>2. Textes Sacrés et Autorité</h4>
      <ul>
        <li><strong>Textes Révélés</strong>: Le Coran (Islam), la Bible (Christianisme) et la Torah (Judaïsme) sont considérés comme des révélations divines.</li>
        <li><strong>Littérature de Sagesse</strong>: Les sutras bouddhistes et les Upanishads hindous offrent des aperçus philosophiques plutôt que des commandements divins.</li>
        <li><strong>Traditions Orales</strong>: De nombreuses traditions spirituelles indigènes transmettent les enseignements par la narration orale et le rituel.</li>
        <li><strong>Autorité Interprétative</strong>: Les religions diffèrent quant à qui peut interpréter les textes avec autorité—clergé, érudits, individus ou consensus communautaire.</li>
      </ul>
      
      <h4>3. Cadres Éthiques</h4>
      <ul>
        <li><strong>Commandement Divin</strong>: De nombreuses traditions théistes fondent l'éthique sur la volonté divine ou la révélation.</li>
        <li><strong>Éthique de la Vertu</strong>: Le confucianisme met l'accent sur la cultivation des vertus personnelles comme la bienveillance et la bienséance.</li>
        <li><strong>Éthique Conséquentialiste</strong>: Certaines approches bouddhistes se concentrent sur les actions qui réduisent la souffrance.</li>
        <li><strong>Loi Naturelle</strong>: Le christianisme catholique met l'accent sur les principes moraux discernables par la raison.</li>
        <li><strong>Éthique Humaniste</strong>: Les approches séculières fondent la moralité sur le bien-être et l'épanouissement humains.</li>
      </ul>
      
      <h4>4. Rituel et Pratique</h4>
      <ul>
        <li><strong>Prière et Culte</strong>: La communication formelle avec les êtres divins varie considérablement selon les traditions.</li>
        <li><strong>Méditation</strong>: Les pratiques contemplatives vont de la pleine conscience (bouddhisme) à la concentration dévotionnelle (bhakti dans l'hindouisme).</li>
        <li><strong>Rassemblements Communautaires</strong>: Des prières du vendredi musulmanes aux services dominicaux chrétiens aux réunions communautaires séculières.</li>
        <li><strong>Rites de Passage</strong>: Les rituels de naissance, de passage à l'âge adulte, de mariage et de mort marquent les transitions de vie dans toutes les cultures.</li>
        <li><strong>Pratiques Alimentaires</strong>: Du halal (Islam) et casher (Judaïsme) au végétarisme (Jaïnisme) aux traditions de jeûne.</li>
      </ul>
      
      <h4>5. Vues sur la Nature Humaine</h4>
      <ul>
        <li><strong>Péché Originel</strong>: Le christianisme traditionnel met l'accent sur la nature déchue de l'humanité nécessitant la rédemption.</li>
        <li><strong>Bonté Inhérente</strong>: Le confucianisme et certaines perspectives humanistes voient les humains comme naturellement inclinés vers le bien.</li>
        <li><strong>Potentiel Neutre</strong>: Le bouddhisme voit la nature humaine comme n'étant ni intrinsèquement bonne ni mauvaise mais façonnée par les causes et conditions.</li>
        <li><strong>Image Divine</strong>: Les religions abrahamiques enseignent que les humains sont créés à l'image de Dieu avec une dignité inhérente.</li>
        <li><strong>Produit Évolutif</strong>: Les perspectives naturalistes voient la nature humaine comme façonnée par l'évolution biologique et culturelle.</li>
      </ul>
      
      <h3>Thèmes Communs à Travers les Traditions</h3>
      
      <p>Malgré leurs différences, les visions du monde religieuses et non religieuses partagent souvent des préoccupations communes:</p>
      
      <ul>
        <li><strong>La Règle d'Or</strong>: Traiter les autres comme on souhaite être traité apparaît dans diverses traditions.</li>
        <li><strong>Compassion</strong>: Le souci de la souffrance des autres est central dans de nombreux cadres éthiques.</li>
        <li><strong>Communauté</strong>: L'importance de la connexion humaine et des liens sociaux transcende les croyances spécifiques.</li>
        <li><strong>Création de Sens</strong>: Toutes les traditions offrent des cadres pour comprendre le but et la signification de la vie.</li>
        <li><strong>Développement Moral</strong>: La plupart des traditions mettent l'accent sur la cultivation du caractère et la croissance éthique.</li>
      </ul>
      
      <h3>Approches de la Diversité Religieuse</h3>
      
      <p>Les érudits et les praticiens adoptent diverses approches face aux différences religieuses:</p>
      
      <ul>
        <li><strong>Exclusivisme</strong>: La vision qu'une tradition contient la vérité exclusive, tandis que les autres se trompent.</li>
        <li><strong>Inclusivisme</strong>: La croyance que sa propre tradition représente la vérité la plus complète, mais que d'autres traditions contiennent des vérités partielles.</li>
        <li><strong>Pluralisme</strong>: La perspective que plusieurs traditions représentent des réponses valides à la réalité ultime.</li>
        <li><strong>Universalisme</strong>: La vision que toutes les traditions mènent ultimement à la même vérité, malgré des expressions différentes.</li>
        <li><strong>Naturalisme</strong>: L'approche qui explique la diversité religieuse par des facteurs historiques, psychologiques et sociologiques.</li>
      </ul>
      
      <h3>Pertinence Contemporaine</h3>
      
      <p>La religion comparée offre plusieurs avantages dans notre société mondiale diverse:</p>
      
      <ul>
        <li>Favorise la compréhension et le respect à travers les frontières culturelles et religieuses</li>
        <li>Fournit un contexte pour interpréter les références religieuses dans la littérature, l'art et la politique</li>
        <li>Aide les individus à explorer leurs propres croyances en rencontrant des perspectives alternatives</li>
        <li>Contribue au dialogue interreligieux et à la coopération sur des préoccupations communes</li>
        <li>Offre des aperçus sur la quête humaine commune de sens, de but et de guidance éthique</li>
      </ul>
      
      <p>En étudiant diverses perspectives religieuses et non religieuses avec respect et curiosité, nous acquérons une compréhension plus riche des questions durables de l'humanité concernant le sens, le but, l'éthique et la réalité ultime.</p>`,
    },
    salvation: {
      title: "Salut et Libération",
      content: `<h2>Salut et Libération: Perspectives à Travers les Traditions</h2>
      
      <p>Les concepts de salut, de libération et d'accomplissement ultime sont centraux dans de nombreuses traditions religieuses et philosophiques, bien qu'ils prennent des formes remarquablement différentes. Ces concepts abordent des préoccupations humaines fondamentales concernant la souffrance, le sens et ce qui constitue le bien suprême ou le but ultime de l'existence humaine.</p>
      
      <h3>Traditions Abrahamiques</h3>
      
      <h4>Islam</h4>
      <p>Dans l'Islam, le salut (najat) implique:</p>
      <ul>
        <li><strong>Soumission à Allah</strong>: Suivre la volonté de Dieu telle que révélée dans le Coran et exemplifiée par le Prophète Muhammad</li>
        <li><strong>Foi et Actions Justes</strong>: Croyance en l'unicité de Dieu (tawhid) combinée avec de bonnes actions</li>
        <li><strong>Miséricorde Divine</strong>: Le salut ultime dépend de la miséricorde et du pardon d'Allah</li>
        <li><strong>Jugement</strong>: Au Jour du Jugement, les actions de chacun seront pesées pour déterminer sa destinée éternelle</li>
        <li><strong>Paradis (Jannah)</strong>: La récompense ultime pour les fidèles, décrite comme des jardins de félicité</li>
      </ul>
      <p>Le Coran déclare: "Ceux qui croient et font de bonnes œuvres auront pour résidence les Jardins du Paradis" (18:107).</p>
      
      <h4>Christianisme</h4>
      <p>La compréhension chrétienne du salut comprend:</p>
      <ul>
        <li><strong>Péché et Rédemption</strong>: L'humanité est séparée de Dieu par le péché mais rachetée par le Christ</li>
        <li><strong>Grâce</strong>: Le salut est un don de Dieu, non mérité par les œuvres (bien que les traditions diffèrent sur le rôle des œuvres)</li>
        <li><strong>Foi en Christ</strong>: La croyance en Jésus comme sauveur est centrale dans la plupart des compréhensions chrétiennes</li>
        <li><strong>Expiation</strong>: La mort du Christ offre le pardon des péchés (avec diverses interprétations théologiques)</li>
        <li><strong>Vie Éternelle</strong>: Communion avec Dieu maintenant et dans l'au-delà</li>
      </ul>
      <p>Comme l'exprime Éphésiens 2:8-9: "Car c'est par la grâce que vous êtes sauvés, par le moyen de la foi. Et cela ne vient pas de vous, c'est le don de Dieu. Ce n'est point par les œuvres, afin que personne ne se glorifie."</p>
      
      <h4>Judaïsme</h4>
      <p>Le judaïsme se concentre moins sur le salut individuel et davantage sur:</p>
      <ul>
        <li><strong>Relation d'Alliance</strong>: Maintenir la relation spéciale entre Dieu et le peuple juif</li>
        <li><strong>Tikkun Olam</strong>: "Réparer le monde" par la justice et l'action juste</li>
        <li><strong>Monothéisme Éthique</strong>: Vivre selon la loi morale de Dieu</li>
        <li><strong>Ère Messianique</strong>: Un temps futur de paix et d'harmonie universelles plutôt qu'une vie après la mort individuelle</li>
        <li><strong>Focus sur Ce Monde</strong>: Accent mis sur une vie éthique dans cette vie plutôt que sur l'obtention de récompenses dans la suivante</li>
      </ul>
      <p>Le prophète Michée a résumé: "Qu'est-ce que l'Éternel demande de toi? C'est que tu pratiques la justice, que tu aimes la miséricorde, et que tu marches humblement avec ton Dieu" (Michée 6:8).</p>
      
      <h3>Traditions Dharmiques</h3>
      
      <h4>Hindouisme</h4>
      <p>Les traditions hindoues offrent plusieurs voies vers la libération (moksha):</p>
      <ul>
        <li><strong>Libération du Samsara</strong>: Libération du cycle de renaissance et de souffrance</li>
        <li><strong>Réalisation de Soi</strong>: Reconnaissance de sa vraie nature comme Atman (soi) et son unité avec Brahman (réalité ultime)</li>
        <li><strong>Voies Multiples</strong>: Karma yoga (action), bhakti yoga (dévotion), jnana yoga (connaissance) et raja yoga (méditation)</li>
        <li><strong>Dharma</strong>: Vivre selon ses devoirs éthiques et sociaux</li>
        <li><strong>Grâce</strong>: Dans certaines traditions, la grâce divine (particulièrement dans les traditions bhakti) est essentielle</li>
      </ul>
      <p>La Bhagavad Gita enseigne: "Quand une personne est dévouée à quelque chose avec une foi complète, j'unifie sa foi dans cette forme" (7:21).</p>
      
      <h4>Bouddhisme</h4>
      <p>Le bouddhisme se concentre sur la libération (nirvana) à travers:</p>
      <ul>
        <li><strong>Fin de la Souffrance</strong>: Reconnaître et aborder les causes de la souffrance (dukkha)</li>
        <li><strong>Quatre Nobles Vérités</strong>: Comprendre la souffrance, son origine, sa cessation et le chemin vers sa fin</li>
        <li><strong>Noble Chemin Octuple</strong>: Conduite éthique, discipline mentale et sagesse menant à la libération</li>
        <li><strong>Impermanence et Non-soi</strong>: Reconnaître que tous les phénomènes sont transitoires et sans soi inhérent</li>
        <li><strong>Éveil</strong>: S'éveiller à la vraie nature de la réalité et à la liberté de l'illusion</li>
      </ul>
      <p>Le Bouddha a enseigné: "Tout comme l'océan a un seul goût, le goût du sel, de même cet enseignement et cette discipline ont un seul goût, le goût de la libération."</p>
      
      <h4>Jaïnisme</h4>
      <p>La libération jaïne (moksha) implique:</p>
      <ul>
        <li><strong>Ahimsa</strong>: Non-violence envers tous les êtres vivants comme principe suprême</li>
        <li><strong>Élimination du Karma</strong>: Éliminer le karma accumulé par l'ascétisme et le non-attachement</li>
        <li><strong>Maîtrise de Soi</strong>: Discipline stricte de l'esprit, de la parole et du corps</li>
        <li><strong>Connaissance, Foi et Conduite Justes</strong>: Les trois joyaux (ratnatraya) du jaïnisme</li>
        <li><strong>Libération de l'Âme</strong>: Le jiva (âme) libéré des liens karmiques s'élève vers le royaume des libérés</li>
      </ul>
      
      <h3>Traditions d'Asie de l'Est</h3>
      
      <h4>Taoïsme</h4>
      <p>L'accomplissement taoïste se centre sur:</p>
      <ul>
        <li><strong>Harmonie avec le Tao</strong>: S'aligner avec la voie naturelle de l'univers</li>
        <li><strong>Wu-wei</strong>: "Non-action" ou action sans effort en accord avec la nature</li>
        <li><strong>Simplicité</strong>: Retour à un état naturel et non compliqué</li>
        <li><strong>Longévité</strong>: Dans certaines traditions, immortalité physique par des pratiques alchimiques</li>
        <li><strong>Équilibre</strong>: Harmonisation des forces opposées (yin et yang)</li>
      </ul>
      
      <h4>Confucianisme</h4>
      <p>L'accomplissement confucéen met l'accent sur:</p>
      <ul>
        <li><strong>Cultivation Morale</strong>: Développer la vertu (de) et devenir un junzi (personne de noble caractère)</li>
        <li><strong>Harmonie Sociale</strong>: Relations appropriées au sein de la famille et de la société</li>
        <li><strong>Bienséance Rituelle</strong>: Conduite appropriée dans toutes les situations</li>
        <li><strong>Focus sur Ce Monde</strong>: Accent mis sur l'éthique sociale plutôt que sur l'au-delà</li>
        <li><strong>Mandat du Ciel</strong>: Aligner les affaires humaines avec l'ordre moral cosmique</li>
      </ul>
      
      <h3>Perspectives Non-Religieuses</h3>
      
      <h4>Humanisme Séculier</h4>
      <p>L'accomplissement humaniste se concentre sur:</p>
      <ul>
        <li><strong>Épanouissement Humain</strong>: Bien-être et développement du potentiel humain</li>
        <li><strong>Vie Éthique</strong>: Moralité basée sur les besoins humains et les principes rationnels</li>
        <li><strong>Progrès Social</strong>: Créer une société plus juste et compatissante</li>
        <li><strong>Compréhension Scientifique</strong>: La connaissance comme voie pour résoudre les problèmes humains</li>
        <li><strong>Focus sur Ce Monde</strong>: Trouver du sens dans l'existence humaine naturelle</li>
      </ul>
      
      <h4>Existentialisme</h4>
      <p>L'accomplissement existentialiste implique:</p>
      <ul>
        <li><strong>Existence Authentique</strong>: Vivre selon ses propres choix plutôt que selon des dictats externes</li>
        <li><strong>Création de Sens</strong>: Trouver ou créer un but dans un univers objectivement dépourvu de sens</li>
        <li><strong>Confrontation à la Mortalité</strong>: Faire face à la réalité de la mort et de la finitude</li>
        <li><strong>Liberté et Responsabilité</strong>: Accepter le fardeau du choix et ses conséquences</li>
        <li><strong>Engagement</strong>: Participation active à la vie plutôt qu'observation détachée</li>
      </ul>
      
      <h3>Aperçus Comparatifs</h3>
      
      <p>Malgré leurs différences, ces approches du salut et de la libération révèlent quelques thèmes communs:</p>
      
      <ul>
        <li><strong>Transformation</strong>: Toutes les traditions cherchent une forme de changement profond dans l'expérience humaine</li>
        <li><strong>Dimension Éthique</strong>: La plupart des voies impliquent un développement moral et une action éthique</li>
        <li><strong>Surmonter les Limitations</strong>: Que ce soit le péché, l'ignorance, l'attachement ou l'inauthenticité</li>
        <li><strong>Contexte Communautaire</strong>: Le salut se produit rarement isolément mais au sein de traditions et de communautés</li>
        <li><strong>Préoccupations Ultimes</strong>: Toutes abordent les questions les plus profondes de l'humanité concernant le sens et le but</li>
      </ul>
      
      <p>Comprendre ces diverses approches du salut et de la libération nous aide à apprécier la variété des façons dont les humains ont cherché à aborder les questions existentielles fondamentales à travers les cultures et tout au long de l'histoire.</p>`,
    },
    afterlife: {
      title: "Vie Après la Mort",
      content: `<p>${STATIC_RESPONSES_FR.afterlife}</p>
      <p>Les croyances sur ce qui se passe après la mort varient considérablement selon les religions, de la réincarnation au paradis et à l'enfer, au jugement ou à l'union spirituelle avec le divin, tandis que certaines traditions se concentrent davantage sur les préoccupations de ce monde.</p>`,
    },
    default: {
      title: "Noor",
      content: `<p>${STATIC_RESPONSES_FR.default}</p>`,
    },
  },
}
