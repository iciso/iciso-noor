"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage, LanguageProvider } from "@/contexts/language-context"

// Create a wrapper component that uses the context
function CLCPContent() {
  const { t, language } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-emerald-50 to-teal-100">
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span>{t("nav.back")}</span>
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
          <LanguageSwitcher />
        </div>
      </header>

      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto w-full">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>{t("clcp.title")}</CardTitle>
            <CardDescription>{t("clcp.subtitle")}</CardDescription>
          </CardHeader>
          <CardContent className="prose max-w-none">
            {language === "en" ? (
              // English content
              <>
                <h2>{t("clcp.what")}</h2>
                <p>
                  The Community Life Competence Process (CLCP) is a systematic approach to community-led development
                  created by The Constellation, an international organization founded in 2004. CLCP empowers communities
                  to respond to their challenges by recognizing and building upon their existing strengths and
                  capacities. Rather than imposing external solutions, CLCP facilitates a process where communities take
                  ownership of both their challenges and the responses to those challenges.
                </p>
                <p>
                  At its core, CLCP is based on the belief that communities have the capacity to address their own
                  issues when they are able to identify their strengths, learn from their experiences, and take
                  collective action. This approach has been successfully implemented in over 60 countries across diverse
                  contexts including public health, education, environmental conservation, social cohesion, and economic
                  development.
                </p>

                <h2>{t("clcp.principles")}</h2>
                <p>
                  CLCP is founded on several key principles that guide its implementation and distinguish it from other
                  development approaches:
                </p>
                <ul>
                  <li>
                    <strong>{t("clcp.principles.ownership")}</strong> - Communities take responsibility for their own
                    responses to challenges. External facilitators support but do not direct the process. This ownership
                    is essential for sustainable change and builds on the community's intrinsic motivation.
                  </li>
                  <li>
                    <strong>{t("clcp.principles.strength")}</strong> - CLCP begins by identifying and appreciating
                    existing community strengths rather than focusing on problems or deficits. This appreciative
                    approach builds confidence and provides a foundation for action.
                  </li>
                  <li>
                    <strong>{t("clcp.principles.learning")}</strong> - Communities learn from their own experiences and
                    from each other. This experiential learning is more powerful than external expertise and creates a
                    cycle of continuous improvement.
                  </li>
                  <li>
                    <strong>{t("clcp.principles.local")}</strong> - Solutions emerge from local knowledge and are
                    adapted to local contexts. There is no one-size-fits-all approach; each community develops responses
                    appropriate to their unique situation.
                  </li>
                  <li>
                    <strong>{t("clcp.principles.transfer")}</strong> - Knowledge, skills, and experiences are shared
                    horizontally between communities rather than vertically from experts to beneficiaries. This
                    peer-to-peer transfer respects the wisdom in each community.
                  </li>
                </ul>

                <h2>{t("clcp.salt")}</h2>
                <p>
                  The SALT approach is the foundation of CLCP and represents both a mindset and a methodology for
                  engaging with communities. SALT stands for:
                </p>
                <ul>
                  <li>
                    <strong>{t("clcp.salt.stimulate")}</strong> - Stimulate dialogue and mutual reflection within
                    communities. This involves asking thought-provoking questions that help community members articulate
                    their experiences, aspirations, and strengths. Stimulation creates energy for change and helps
                    communities envision possibilities beyond current limitations.
                  </li>
                  <li>
                    <strong>{t("clcp.salt.appreciate")}</strong> - Appreciate strengths and capabilities that exist
                    within the community. This appreciative stance focuses on what is working well rather than what is
                    lacking. By recognizing existing capacities, communities build confidence and discover resources
                    they may not have previously acknowledged.
                  </li>
                  <li>
                    <strong>{t("clcp.salt.learn")}</strong> - Learn from the community through deep listening and
                    genuine curiosity. Facilitators approach communities as learners rather than experts, recognizing
                    that local knowledge is invaluable. This learning stance creates mutual respect and challenges power
                    imbalances in traditional development approaches.
                  </li>
                  <li>
                    <strong>{t("clcp.salt.transfer")}</strong> - Transfer knowledge and experiences between communities,
                    creating networks of mutual support and learning. This horizontal transfer of knowledge values the
                    wisdom in each community and creates sustainable learning systems that don't depend on external
                    experts.
                  </li>
                </ul>
                <p>
                  SALT is practiced through "SALT visits" where facilitators engage with communities in a spirit of
                  appreciation and learning. These visits are not assessments or evaluations but opportunities for
                  genuine human connection and mutual discovery. The quality of presence and attention during these
                  visits is as important as the specific activities conducted.
                </p>

                <h2>{t("clcp.process")}</h2>
                <p>
                  The CLCP unfolds through a flexible, non-linear process that typically includes the following
                  elements:
                </p>
                <ol>
                  <li>
                    <strong>{t("clcp.process.relationship")}</strong> - Building relationships of trust and mutual
                    respect is the foundation of CLCP. This involves SALT visits, community conversations, and
                    activities that create connections both within the community and with facilitators. These
                    relationships create the psychological safety needed for authentic engagement.
                  </li>
                  <li>
                    <strong>{t("clcp.process.dream")}</strong> - Communities articulate their shared dream or vision for
                    the future. This dream-building process creates a compelling vision that motivates action and
                    provides direction. The dream is expressed in the community's own language and reflects their values
                    and aspirations.
                  </li>
                  <li>
                    <strong>{t("clcp.process.assessment")}</strong> - Communities assess their current strengths and
                    challenges in relation to their dream. This self-assessment is conducted by the community itself
                    using tools like the Community Competence Framework. The process helps communities recognize their
                    existing capacities and identify areas for growth.
                  </li>
                  <li>
                    <strong>{t("clcp.process.action")}</strong> - Based on the self-assessment, communities develop
                    action plans to move toward their dream. These plans build on existing strengths and address
                    identified challenges. The actions are specific, measurable, and owned by community members rather
                    than imposed by external actors.
                  </li>
                  <li>
                    <strong>{t("clcp.process.implementation")}</strong> - Communities implement their action plans with
                    support from facilitators as needed. This implementation phase tests ideas, builds new capacities,
                    and creates tangible progress toward the community's dream. The emphasis is on learning by doing.
                  </li>
                  <li>
                    <strong>{t("clcp.process.measurement")}</strong> - Communities regularly measure their progress
                    using indicators they have developed. This self-measurement reinforces ownership and provides
                    opportunities for reflection and learning. The measurement process is simple, practical, and
                    meaningful to the community.
                  </li>
                  <li>
                    <strong>{t("clcp.process.sharing")}</strong> - Communities share their experiences, successes, and
                    challenges with other communities. This sharing creates opportunities for mutual learning and
                    inspiration. It also builds a sense of connection to a larger movement for community-led change.
                  </li>
                </ol>
                <p>
                  While these elements are common to most CLCP implementations, the process is always adapted to the
                  specific context and needs of each community. The emphasis is on principles rather than rigid
                  methodologies, allowing for cultural appropriateness and local ownership.
                </p>

                <h2>Applications of CLCP</h2>
                <p>
                  CLCP has been applied in diverse contexts around the world, demonstrating its versatility and
                  effectiveness:
                </p>
                <ul>
                  <li>
                    <strong>Public Health</strong> - Communities have used CLCP to respond to health challenges
                    including HIV/AIDS, malaria, tuberculosis, maternal and child health, and COVID-19. For example,
                    communities in Thailand, Cambodia, and India developed locally appropriate responses to HIV/AIDS
                    that complemented medical interventions with social support and stigma reduction.
                  </li>
                  <li>
                    <strong>Environmental Conservation</strong> - CLCP has supported community-led environmental
                    initiatives including sustainable agriculture, water management, and climate change adaptation. In
                    Indonesia and the Philippines, communities have used CLCP to develop integrated approaches to
                    coastal resource management.
                  </li>
                  <li>
                    <strong>Education</strong> - Schools and educational communities have applied CLCP to improve
                    learning environments, increase student engagement, and strengthen connections between schools and
                    communities. In Belgium and France, CLCP has been used to address school dropout rates and improve
                    educational outcomes.
                  </li>
                  <li>
                    <strong>Social Cohesion</strong> - CLCP has facilitated dialogue and collaboration in communities
                    affected by conflict or social division. In Rwanda and Burundi, communities have used CLCP to
                    support reconciliation and rebuild social fabric after conflict.
                  </li>
                  <li>
                    <strong>Economic Development</strong> - Communities have applied CLCP principles to develop local
                    economic initiatives, savings groups, and livelihood projects. In Uganda and Kenya, communities have
                    used CLCP to strengthen agricultural value chains and develop community-based enterprises.
                  </li>
                </ul>
                <p>
                  These applications demonstrate that CLCP is not limited to specific sectors but provides a framework
                  for community-led responses to diverse challenges. The common thread is the emphasis on community
                  ownership, strength-based approaches, and local solutions.
                </p>

                <h2>Distinctive Features of CLCP</h2>
                <p>Several features distinguish CLCP from other development approaches:</p>
                <ul>
                  <li>
                    <strong>Strength-Based</strong> - Unlike problem-focused approaches, CLCP begins with an
                    appreciation of existing community strengths and builds upon these foundations.
                  </li>
                  <li>
                    <strong>Process-Oriented</strong> - CLCP emphasizes the quality of the process rather than
                    predetermined outcomes. The way communities work together is as important as what they achieve.
                  </li>
                  <li>
                    <strong>Relationship-Centered</strong> - CLCP recognizes that authentic human relationships are the
                    foundation for sustainable change. Technical solutions without relational foundations often fail to
                    create lasting impact.
                  </li>
                  <li>
                    <strong>Locally Adapted</strong> - While CLCP provides a framework, it is always adapted to local
                    contexts, cultures, and needs. There are no rigid methodologies or universal solutions.
                  </li>
                  <li>
                    <strong>Horizontally Transferred</strong> - Knowledge and practices spread from community to
                    community rather than being disseminated by experts. This creates networks of mutual learning and
                    support.
                  </li>
                </ul>
                <p>
                  These distinctive features make CLCP particularly effective in contexts where community ownership and
                  cultural appropriateness are essential for sustainable change.
                </p>

                <h2>{t("clcp.faith")}</h2>
                <p>
                  CLCP is a secular approach that can be implemented in diverse cultural and religious contexts.
                  However, many of its principles resonate with values found in various faith traditions:
                </p>
                <ul>
                  <li>
                    <strong>{t("clcp.faith.community")}</strong> - Many faith traditions emphasize the importance of
                    community and collective responsibility. CLCP's focus on community ownership and collective action
                    aligns with these values.
                  </li>
                  <li>
                    <strong>{t("clcp.faith.dignity")}</strong> - The recognition of human dignity and inherent worth is
                    central to many religious traditions. CLCP's strength-based approach affirms the dignity and
                    capacity of each community member.
                  </li>
                  <li>
                    <strong>{t("clcp.faith.service")}</strong> - Service to others is a core value in many faith
                    traditions. CLCP facilitators embody this value through their supportive, non-directive stance.
                  </li>
                  <li>
                    <strong>{t("clcp.faith.hope")}</strong> - Hope for a better future is common across religious
                    perspectives. CLCP's dream-building process taps into this hope and channels it toward practical
                    action.
                  </li>
                  <li>
                    <strong>{t("clcp.faith.strength")}</strong> - Many faith traditions recognize that communities have
                    inherent strengths and capacities. CLCP's appreciative approach aligns with this recognition.
                  </li>
                </ul>
                <p>
                  At the same time, CLCP is fully compatible with non-religious and secular humanist perspectives that
                  value human agency, community solidarity, and evidence-based approaches to social change. The emphasis
                  on learning from experience and measuring outcomes resonates with scientific and pragmatic worldviews.
                </p>
                <p>
                  This compatibility with diverse worldviews makes CLCP a valuable approach in pluralistic contexts
                  where people with different beliefs need to work together toward common goals. The focus on shared
                  values and practical action creates space for collaboration across worldview differences.
                </p>

                <h2>Conclusion</h2>
                <p>
                  The Community Life Competence Process offers a powerful framework for community-led development that
                  respects local wisdom, builds on existing strengths, and facilitates sustainable change. By
                  emphasizing ownership, appreciation, learning, and horizontal transfer, CLCP creates conditions where
                  communities can effectively respond to their challenges and move toward their shared dreams.
                </p>
                <p>
                  For more detailed information on the relationships between CLCP and specific faith traditions or
                  non-faith perspectives, explore our chat interface or browse our topics section.
                </p>
              </>
            ) : (
              // French content
              <>
                <h2>{t("clcp.what")}</h2>
                <p>
                  Le Processus de Compétence de Vie Communautaire (CLCP) est une approche systématique du développement
                  communautaire créée par The Constellation, une organisation internationale fondée en 2004. Le CLCP
                  permet aux communautés de répondre à leurs défis en reconnaissant et en s'appuyant sur leurs forces et
                  capacités existantes. Plutôt que d'imposer des solutions externes, le CLCP facilite un processus où
                  les communautés s'approprient à la fois leurs défis et les réponses à ces défis.
                </p>
                <p>
                  À la base, le CLCP repose sur la conviction que les communautés ont la capacité de résoudre leurs
                  propres problèmes lorsqu'elles sont en mesure d'identifier leurs forces, d'apprendre de leurs
                  expériences et d'agir collectivement. Cette approche a été mise en œuvre avec succès dans plus de 60
                  pays dans divers contextes, notamment la santé publique, l'éducation, la conservation de
                  l'environnement, la cohésion sociale et le développement économique.
                </p>

                <h2>{t("clcp.principles")}</h2>
                <p>
                  Le CLCP est fondé sur plusieurs principes clés qui guident sa mise en œuvre et le distinguent des
                  autres approches de développement:
                </p>
                <ul>
                  <li>
                    <strong>{t("clcp.principles.ownership")}</strong> - Les communautés prennent la responsabilité de
                    leurs propres réponses aux défis. Les facilitateurs externes soutiennent mais ne dirigent pas le
                    processus. Cette appropriation est essentielle pour un changement durable et s'appuie sur la
                    motivation intrinsèque de la communauté.
                  </li>
                  <li>
                    <strong>{t("clcp.principles.strength")}</strong> - Le CLCP commence par identifier et apprécier les
                    forces communautaires existantes plutôt que de se concentrer sur les problèmes ou les déficits.
                    Cette approche appréciative renforce la confiance et fournit une base pour l'action.
                  </li>
                  <li>
                    <strong>{t("clcp.principles.learning")}</strong> - Les communautés apprennent de leurs propres
                    expériences et les unes des autres. Cet apprentissage expérientiel est plus puissant que l'expertise
                    externe et crée un cycle d'amélioration continue.
                  </li>
                  <li>
                    <strong>{t("clcp.principles.local")}</strong> - Les solutions émergent des connaissances locales et
                    sont adaptées aux contextes locaux. Il n'y a pas d'approche universelle; chaque communauté développe
                    des réponses appropriées à sa situation unique.
                  </li>
                  <li>
                    <strong>{t("clcp.principles.transfer")}</strong> - Les connaissances, les compétences et les
                    expériences sont partagées horizontalement entre les communautés plutôt que verticalement des
                    experts aux bénéficiaires. Ce transfert entre pairs respecte la sagesse de chaque communauté.
                  </li>
                </ul>

                <h2>{t("clcp.salt")}</h2>
                <p>
                  L'approche SALT est le fondement du CLCP et représente à la fois un état d'esprit et une méthodologie
                  d'engagement avec les communautés. SALT signifie:
                </p>
                <ul>
                  <li>
                    <strong>{t("clcp.salt.stimulate")}</strong> - Stimuler le dialogue et la réflexion mutuelle au sein
                    des communautés. Cela implique de poser des questions stimulantes qui aident les membres de la
                    communauté à articuler leurs expériences, leurs aspirations et leurs forces. La stimulation crée de
                    l'énergie pour le changement et aide les communautés à envisager des possibilités au-delà des
                    limitations actuelles.
                  </li>
                  <li>
                    <strong>{t("clcp.salt.appreciate")}</strong> - Apprécier les forces et les capacités qui existent au
                    sein de la communauté. Cette posture appréciative se concentre sur ce qui fonctionne bien plutôt que
                    sur ce qui manque. En reconnaissant les capacités existantes, les communautés renforcent leur
                    confiance et découvrent des ressources qu'elles n'avaient peut-être pas reconnues auparavant.
                  </li>
                  <li>
                    <strong>{t("clcp.salt.learn")}</strong> - Apprendre de la communauté par l'écoute profonde et une
                    curiosité authentique. Les facilitateurs approchent les communautés en tant qu'apprenants plutôt
                    qu'experts, reconnaissant que les connaissances locales sont inestimables. Cette posture
                    d'apprentissage crée un respect mutuel et remet en question les déséquilibres de pouvoir dans les
                    approches traditionnelles de développement.
                  </li>
                  <li>
                    <strong>{t("clcp.salt.transfer")}</strong> - Transférer les connaissances et les expériences entre
                    les communautés, créant des réseaux de soutien mutuel et d'apprentissage. Ce transfert horizontal de
                    connaissances valorise la sagesse de chaque communauté et crée des systèmes d'apprentissage durables
                    qui ne dépendent pas d'experts externes.
                  </li>
                </ul>
                <p>
                  SALT est pratiqué à travers des "visites SALT" où les facilitateurs s'engagent avec les communautés
                  dans un esprit d'appréciation et d'apprentissage. Ces visites ne sont pas des évaluations mais des
                  opportunités de connexion humaine authentique et de découverte mutuelle. La qualité de la présence et
                  de l'attention pendant ces visites est aussi importante que les activités spécifiques menées.
                </p>

                <h2>{t("clcp.process")}</h2>
                <p>
                  Le CLCP se déroule à travers un processus flexible et non linéaire qui comprend généralement les
                  éléments suivants:
                </p>
                <ol>
                  <li>
                    <strong>{t("clcp.process.relationship")}</strong> - Établir des relations de confiance et de respect
                    mutuel est le fondement du CLCP. Cela implique des visites SALT, des conversations communautaires et
                    des activités qui créent des connexions à la fois au sein de la communauté et avec les
                    facilitateurs. Ces relations créent la sécurité psychologique nécessaire à un engagement
                    authentique.
                  </li>
                  <li>
                    <strong>{t("clcp.process.dream")}</strong> - Les communautés articulent leur rêve ou vision partagée
                    pour l'avenir. Ce processus de construction de rêve crée une vision convaincante qui motive l'action
                    et fournit une direction. Le rêve est exprimé dans le langage propre de la communauté et reflète ses
                    valeurs et aspirations.
                  </li>
                  <li>
                    <strong>{t("clcp.process.assessment")}</strong> - Les communautés évaluent leurs forces et défis
                    actuels par rapport à leur rêve. Cette auto-évaluation est menée par la communauté elle-même en
                    utilisant des outils comme le Cadre de Compétence Communautaire. Le processus aide les communautés à
                    reconnaître leurs capacités existantes et à identifier les domaines de croissance.
                  </li>
                  <li>
                    <strong>{t("clcp.process.action")}</strong> - Sur la base de l'auto-évaluation, les communautés
                    développent des plans d'action pour avancer vers leur rêve. Ces plans s'appuient sur les forces
                    existantes et répondent aux défis identifiés. Les actions sont spécifiques, mesurables et
                    appropriées par les membres de la communauté plutôt qu'imposées par des acteurs externes.
                  </li>
                  <li>
                    <strong>{t("clcp.process.implementation")}</strong> - Les communautés mettent en œuvre leurs plans
                    d'action avec le soutien des facilitateurs si nécessaire. Cette phase de mise en œuvre teste des
                    idées, développe de nouvelles capacités et crée des progrès tangibles vers le rêve de la communauté.
                    L'accent est mis sur l'apprentissage par la pratique.
                  </li>
                  <li>
                    <strong>{t("clcp.process.measurement")}</strong> - Les communautés mesurent régulièrement leurs
                    progrès à l'aide d'indicateurs qu'elles ont développés. Cette auto-mesure renforce l'appropriation
                    et offre des opportunités de réflexion et d'apprentissage. Le processus de mesure est simple,
                    pratique et significatif pour la communauté.
                  </li>
                  <li>
                    <strong>{t("clcp.process.sharing")}</strong> - Les communautés partagent leurs expériences, succès
                    et défis avec d'autres communautés. Ce partage crée des opportunités d'apprentissage mutuel et
                    d'inspiration. Il construit également un sentiment de connexion à un mouvement plus large pour le
                    changement dirigé par la communauté.
                  </li>
                </ol>
                <p>
                  Bien que ces éléments soient communs à la plupart des mises en œuvre du CLCP, le processus est
                  toujours adapté au contexte spécifique et aux besoins de chaque communauté. L'accent est mis sur les
                  principes plutôt que sur des méthodologies rigides, permettant une adéquation culturelle et une
                  appropriation locale.
                </p>

                <h2>Applications du CLCP</h2>
                <p>
                  Le CLCP a été appliqué dans divers contextes à travers le monde, démontrant sa polyvalence et son
                  efficacité:
                </p>
                <ul>
                  <li>
                    <strong>Santé Publique</strong> - Les communautés ont utilisé le CLCP pour répondre aux défis de
                    santé, notamment le VIH/SIDA, le paludisme, la tuberculose, la santé maternelle et infantile et la
                    COVID-19. Par exemple, des communautés en Thaïlande, au Cambodge et en Inde ont développé des
                    réponses localement appropriées au VIH/SIDA qui complétaient les interventions médicales avec un
                    soutien social et une réduction de la stigmatisation.
                  </li>
                  <li>
                    <strong>Conservation Environnementale</strong> - Le CLCP a soutenu des initiatives environnementales
                    communautaires, notamment l'agriculture durable, la gestion de l'eau et l'adaptation au changement
                    climatique. En Indonésie et aux Philippines, les communautés ont utilisé le CLCP pour développer des
                    approches intégrées de gestion des ressources côtières.
                  </li>
                  <li>
                    <strong>Éducation</strong> - Les écoles et les communautés éducatives ont appliqué le CLCP pour
                    améliorer les environnements d'apprentissage, accroître l'engagement des élèves et renforcer les
                    liens entre les écoles et les communautés. En Belgique et en France, le CLCP a été utilisé pour
                    lutter contre le décrochage scolaire et améliorer les résultats éducatifs.
                  </li>
                  <li>
                    <strong>Cohésion Sociale</strong> - Le CLCP a facilité le dialogue et la collaboration dans les
                    communautés affectées par des conflits ou des divisions sociales. Au Rwanda et au Burundi, les
                    communautés ont utilisé le CLCP pour soutenir la réconciliation et reconstruire le tissu social
                    après les conflits.
                  </li>
                  <li>
                    <strong>Développement Économique</strong> - Les communautés ont appliqué les principes du CLCP pour
                    développer des initiatives économiques locales, des groupes d'épargne et des projets de subsistance.
                    En Ouganda et au Kenya, les communautés ont utilisé le CLCP pour renforcer les chaînes de valeur
                    agricoles et développer des entreprises communautaires.
                  </li>
                </ul>
                <p>
                  Ces applications démontrent que le CLCP n'est pas limité à des secteurs spécifiques mais fournit un
                  cadre pour des réponses communautaires à divers défis. Le fil conducteur est l'accent mis sur
                  l'appropriation communautaire, les approches basées sur les forces et les solutions locales.
                </p>

                <h2>Caractéristiques Distinctives du CLCP</h2>
                <p>Plusieurs caractéristiques distinguent le CLCP des autres approches de développement:</p>
                <ul>
                  <li>
                    <strong>Basé sur les Forces</strong> - Contrairement aux approches axées sur les problèmes, le CLCP
                    commence par une appréciation des forces communautaires existantes et s'appuie sur ces fondations.
                  </li>
                  <li>
                    <strong>Orienté Processus</strong> - Le CLCP met l'accent sur la qualité du processus plutôt que sur
                    des résultats prédéterminés. La façon dont les communautés travaillent ensemble est aussi importante
                    que ce qu'elles accomplissent.
                  </li>
                  <li>
                    <strong>Centré sur les Relations</strong> - Le CLCP reconnaît que des relations humaines
                    authentiques sont le fondement d'un changement durable. Les solutions techniques sans fondements
                    relationnels échouent souvent à créer un impact durable.
                  </li>
                  <li>
                    <strong>Adapté Localement</strong> - Bien que le CLCP fournisse un cadre, il est toujours adapté aux
                    contextes, cultures et besoins locaux. Il n'y a pas de méthodologies rigides ou de solutions
                    universelles.
                  </li>
                  <li>
                    <strong>Transfert Horizontal</strong> - Les connaissances et les pratiques se répandent de
                    communauté en communauté plutôt que d'être diffusées par des experts. Cela crée des réseaux
                    d'apprentissage et de soutien mutuels.
                  </li>
                </ul>
                <p>
                  Ces caractéristiques distinctives rendent le CLCP particulièrement efficace dans les contextes où
                  l'appropriation communautaire et l'adéquation culturelle sont essentielles pour un changement durable.
                </p>

                <h2>{t("clcp.faith")}</h2>
                <p>
                  Le CLCP est une approche séculière qui peut être mise en œuvre dans divers contextes culturels et
                  religieux. Cependant, nombre de ses principes résonnent avec des valeurs trouvées dans diverses
                  traditions religieuses:
                </p>
                <ul>
                  <li>
                    <strong>{t("clcp.faith.community")}</strong> - De nombreuses traditions religieuses soulignent
                    l'importance de la communauté et de la responsabilité collective. L'accent mis par le CLCP sur
                    l'appropriation communautaire et l'action collective s'aligne sur ces valeurs.
                  </li>
                  <li>
                    <strong>{t("clcp.faith.dignity")}</strong> - La reconnaissance de la dignité humaine et de la valeur
                    inhérente est centrale dans de nombreuses traditions religieuses. L'approche du CLCP basée sur les
                    forces affirme la dignité et la capacité de chaque membre de la communauté.
                  </li>
                  <li>
                    <strong>{t("clcp.faith.service")}</strong> - Le service aux autres est une valeur fondamentale dans
                    de nombreuses traditions religieuses. Les facilitateurs du CLCP incarnent cette valeur à travers
                    leur position de soutien, non directive.
                  </li>
                  <li>
                    <strong>{t("clcp.faith.hope")}</strong> - L'espoir d'un avenir meilleur est commun à travers les
                    perspectives religieuses. Le processus de construction de rêve du CLCP puise dans cet espoir et le
                    canalise vers une action pratique.
                  </li>
                  <li>
                    <strong>{t("clcp.faith.strength")}</strong> - De nombreuses traditions religieuses reconnaissent que
                    les communautés ont des forces et des capacités inhérentes. L'approche appréciative du CLCP s'aligne
                    sur cette reconnaissance.
                  </li>
                </ul>
                <p>
                  En même temps, le CLCP est pleinement compatible avec les perspectives humanistes non religieuses et
                  séculières qui valorisent l'agence humaine, la solidarité communautaire et les approches fondées sur
                  des preuves pour le changement social. L'accent mis sur l'apprentissage par l'expérience et la mesure
                  des résultats résonne avec les visions du monde scientifiques et pragmatiques.
                </p>
                <p>
                  Cette compatibilité avec diverses visions du monde fait du CLCP une approche précieuse dans des
                  contextes pluralistes où des personnes de différentes croyances doivent travailler ensemble vers des
                  objectifs communs. L'accent mis sur des valeurs partagées et des actions pratiques crée un espace de
                  collaboration à travers les différences de vision du monde.
                </p>

                <h2>Conclusion</h2>
                <p>
                  Le Processus de Compétence de Vie Communautaire offre un cadre puissant pour le développement dirigé
                  par la communauté qui respecte la sagesse locale, s'appuie sur les forces existantes et facilite un
                  changement durable. En mettant l'accent sur l'appropriation, l'appréciation, l'apprentissage et le
                  transfert horizontal, le CLCP crée des conditions où les communautés peuvent répondre efficacement à
                  leurs défis et avancer vers leurs rêves partagés.
                </p>
                <p>
                  Pour des informations plus détaillées sur les relations entre le CLCP et des traditions religieuses
                  spécifiques ou des perspectives non religieuses, explorez notre interface de chat ou parcourez notre
                  section de sujets.
                </p>
              </>
            )}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/chat">
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>{t("chat.title")}</CardTitle>
                <CardDescription>{t("chat.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  {language === "en"
                    ? "Use our chat interface to ask specific questions about CLCP and how it relates to different faith traditions."
                    : "Utilisez notre interface de chat pour poser des questions spécifiques sur le CLCP et comment il se rapporte à différentes traditions religieuses."}
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/browse">
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>{t("browse.title")}</CardTitle>
                <CardDescription>
                  {language === "en"
                    ? "Explore comparative religion topics and CLCP"
                    : "Explorez les sujets de religion comparative et le CLCP"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  {language === "en"
                    ? "Browse our collection of topics covering various aspects of religions and their relationship with CLCP."
                    : "Parcourez notre collection de sujets couvrant divers aspects des religions et leur relation avec le CLCP."}
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </main>
    </div>
  )
}

// Main component that wraps the content with the LanguageProvider
export default function CLCPPage() {
  return (
    <LanguageProvider>
      <CLCPContent />
    </LanguageProvider>
  )
}
