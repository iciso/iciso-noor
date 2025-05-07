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
      content: `<p>${STATIC_RESPONSES_EN["christianity-clcp"]}</p>
      <p>Christian values of love (agape), service to others, and community support reflect CLCP's focus on community empowerment and collective action for positive change.</p>`,
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
      <p>Islam is a monotheistic religion founded on the teachings of Prophet Muhammad and the Quran, emphasizing submission to Allah (God), compassion, justice, and community welfare.</p>`,
    },
    christianity: {
      title: "Christianity",
      content: `<p>${STATIC_RESPONSES_EN.christianity}</p>
      <p>Christianity is based on the life and teachings of Jesus Christ, focusing on love, forgiveness, redemption through Christ, and service to others as expressions of faith.</p>`,
    },
    buddhism: {
      title: "Buddhism",
      content: `<p>${STATIC_RESPONSES_EN.buddhism}</p>
      <p>Buddhism follows the teachings of Buddha, emphasizing mindfulness, compassion, the Four Noble Truths, and the Eightfold Path as ways to overcome suffering and achieve enlightenment.</p>`,
    },
    hinduism: {
      title: "Hinduism",
      content: `<p>${STATIC_RESPONSES_EN.hinduism}</p>
      <p>Hinduism encompasses diverse traditions centered on concepts like dharma (duty/ethics), karma (action and consequence), and reincarnation, with various paths to spiritual liberation.</p>`,
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
      content: `<p>${STATIC_RESPONSES_EN.comparison}</p>
      <p>Comparative religion studies the similarities and differences between religious traditions, examining shared themes like ethics, rituals, concepts of divinity, and approaches to human purpose and meaning.</p>`,
    },
    salvation: {
      title: "Salvation",
      content: `<p>${STATIC_RESPONSES_EN.salvation}</p>
      <p>Salvation refers to concepts of spiritual liberation, redemption, or deliverance from suffering or sin, with different religious traditions offering various paths and understandings of this concept.</p>`,
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
      <p>Les valeurs chrétiennes d'amour (agape), de service aux autres et de soutien communautaire reflètent l'accent mis par le CLCP sur l'autonomisation communautaire et l'action collective pour un changement positif.</p>`,
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
      content: `<p>${STATIC_RESPONSES_FR.christianity}</p>
      <p>Le christianisme est basé sur la vie et les enseignements de Jésus-Christ, mettant l'accent sur l'amour, le pardon, la rédemption par le Christ et le service aux autres comme expressions de la foi.</p>`,
    },
    buddhism: {
      title: "Bouddhisme",
      content: `<p>${STATIC_RESPONSES_FR.buddhism}</p>
      <p>Le bouddhisme suit les enseignements de Bouddha, mettant l'accent sur la pleine conscience, la compassion, les Quatre Nobles Vérités et le Noble Chemin Octuple comme moyens de surmonter la souffrance et d'atteindre l'illumination.</p>`,
    },
    hinduism: {
      title: "Hindouisme",
      content: `<p>${STATIC_RESPONSES_FR.hinduism}</p>
      <p>L'hindouisme englobe diverses traditions centrées sur des concepts comme le dharma (devoir/éthique), le karma (action et conséquence) et la réincarnation, avec diverses voies vers la libération spirituelle.</p>`,
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
      content: `<p>${STATIC_RESPONSES_FR.comparison}</p>
      <p>La religion comparée étudie les similitudes et les différences entre les traditions religieuses, examinant des thèmes communs comme l'éthique, les rituels, les concepts de divinité et les approches du but et du sens humains.</p>`,
    },
    salvation: {
      title: "Salut",
      content: `<p>${STATIC_RESPONSES_FR.salvation}</p>
      <p>Le salut fait référence aux concepts de libération spirituelle, de rédemption ou de délivrance de la souffrance ou du péché, avec différentes traditions religieuses offrant diverses voies et compréhensions de ce concept.</p>`,
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
