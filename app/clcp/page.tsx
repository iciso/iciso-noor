"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"

export default function CLCPPage() {
  const { t } = useLanguage()

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
            <CardDescription>{t("clcp.subtitle")}</CardHeader>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <h2>{t("clcp.what")}</h2>
            <p>
              The Community Life Competence Process (CLCP) is a systematic approach to community-led development created
              by The Constellation, an international organization founded in 2004. CLCP empowers communities to respond
              to their challenges by recognizing and building upon their existing strengths and capacities. Rather than
              imposing external solutions, CLCP facilitates a process where communities take ownership of both their
              challenges and the responses to those challenges.
            </p>
            <p>
              At its core, CLCP is based on the belief that communities have the capacity to address their own issues
              when they are able to identify their strengths, learn from their experiences, and take collective action.
              This approach has been successfully implemented in over 60 countries across diverse contexts including
              public health, education, environmental conservation, social cohesion, and economic development.
            </p>

            <h2>{t("clcp.principles")}</h2>
            <p>
              CLCP is founded on several key principles that guide its implementation and distinguish it from other
              development approaches:
            </p>
            <ul>
              <li>
                <strong>{t("clcp.principles.ownership")}</strong> - Communities take responsibility for their own
                responses to challenges. External facilitators support but do not direct the process. This ownership is
                essential for sustainable change and builds on the community's intrinsic motivation.
              </li>
              <li>
                <strong>{t("clcp.principles.strength")}</strong> - CLCP begins by identifying and appreciating existing
                community strengths rather than focusing on problems or deficits. This appreciative approach builds
                confidence and provides a foundation for action.
              </li>
              <li>
                <strong>{t("clcp.principles.learning")}</strong> - Communities learn from their own experiences and from
                each other. This experiential learning is more powerful than external expertise and creates a cycle of
                continuous improvement.
              </li>
              <li>
                <strong>{t("clcp.principles.local")}</strong> - Solutions emerge from local knowledge and are adapted to
                local contexts. There is no one-size-fits-all approach; each community develops responses appropriate to
                their unique situation.
              </li>
              <li>
                <strong>{t("clcp.principles.transfer")}</strong> - Knowledge, skills, and experiences are shared
                horizontally between communities rather than vertically from experts to beneficiaries. This peer-to-peer
                transfer respects the wisdom in each community.
              </li>
            </ul>

            <h2>{t("clcp.salt")}</h2>
            <p>
              The SALT approach is the foundation of CLCP and represents both a mindset and a methodology for engaging
              with communities. SALT stands for:
            </p>
            <ul>
              <li>
                <strong>{t("clcp.salt.stimulate")}</strong> - Stimulate dialogue and mutual reflection within
                communities. This involves asking thought-provoking questions that help community members articulate
                their experiences, aspirations, and strengths. Stimulation creates energy for change and helps
                communities envision possibilities beyond current limitations.
              </li>
              <li>
                <strong>{t("clcp.salt.appreciate")}</strong> - Appreciate strengths and capabilities that exist within
                the community. This appreciative stance focuses on what is working well rather than what is lacking. By
                recognizing existing capacities, communities build confidence and discover resources they may not have
                previously acknowledged.
              </li>
              <li>
                <strong>{t("clcp.salt.learn")}</strong> - Learn from the community through deep listening and genuine
                curiosity. Facilitators approach communities as learners rather than experts, recognizing that local
                knowledge is invaluable. This learning stance creates mutual respect and challenges power imbalances in
                traditional development approaches.
              </li>
              <li>
                <strong>{t("clcp.salt.transfer")}</strong> - Transfer knowledge and experiences between communities,
                creating networks of mutual support and learning. This horizontal transfer of knowledge values the
                wisdom in each community and creates sustainable learning systems that don't depend on external experts.
              </li>
            </ul>
            <p>
              SALT is practiced through "SALT visits" where facilitators engage with communities in a spirit of
              appreciation and learning. These visits are not assessments or evaluations but opportunities for genuine
              human connection and mutual discovery. The quality of presence and attention during these visits is as
              important as the specific activities conducted.
            </p>

            <h2>{t("clcp.process")}</h2>
            <p>
              The CLCP unfolds through a flexible, non-linear process that typically includes the following elements:
            </p>
            <ol>
              <li>
                <strong>{t("clcp.process.relationship")}</strong> - Building relationships of trust and mutual respect
                is the foundation of CLCP. This involves SALT visits, community conversations, and activities that
                create connections both within the community and with facilitators. These relationships create the
                psychological safety needed for authentic engagement.
              </li>
              <li>
                <strong>{t("clcp.process.dream")}</strong> - Communities articulate their shared dream or vision for the
                future. This dream-building process creates a compelling vision that motivates action and provides
                direction. The dream is expressed in the community's own language and reflects their values and
                aspirations.
              </li>
              <li>
                <strong>{t("clcp.process.assessment")}</strong> - Communities assess their current strengths and
                challenges in relation to their dream. This self-assessment is conducted by the community itself using
                tools like the Community Competence Framework. The process helps communities recognize their existing
                capacities and identify areas for growth.
              </li>
              <li>
                <strong>{t("clcp.process.action")}</strong> - Based on the self-assessment, communities develop action
                plans to move toward their dream. These plans build on existing strengths and address identified
                challenges. The actions are specific, measurable, and owned by community members rather than imposed by
                external actors.
              </li>
              <li>
                <strong>{t("clcp.process.implementation")}</strong> - Communities implement their action plans with
                support from facilitators as needed. This implementation phase tests ideas, builds new capacities, and
                creates tangible progress toward the community's dream. The emphasis is on learning by doing.
              </li>
              <li>
                <strong>{t("clcp.process.measurement")}</strong> - Communities regularly measure their progress using
                indicators they have developed. This self-measurement reinforces ownership and provides opportunities
                for reflection and learning. The measurement process is simple, practical, and meaningful to the
                community.
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
                <strong>Public Health</strong> - Communities have used CLCP to respond to health challenges including
                HIV/AIDS, malaria, tuberculosis, maternal and child health, and COVID-19. For example, communities in
                Thailand, Cambodia, and India developed locally appropriate responses to HIV/AIDS that complemented
                medical interventions with social support and stigma reduction.
              </li>
              <li>
                <strong>Environmental Conservation</strong> - CLCP has supported community-led environmental initiatives
                including sustainable agriculture, water management, and climate change adaptation. In Indonesia and the
                Philippines, communities have used CLCP to develop integrated approaches to coastal resource management.
              </li>
              <li>
                <strong>Education</strong> - Schools and educational communities have applied CLCP to improve learning
                environments, increase student engagement, and strengthen connections between schools and communities.
                In Belgium and France, CLCP has been used to address school dropout rates and improve educational
                outcomes.
              </li>
              <li>
                <strong>Social Cohesion</strong> - CLCP has facilitated dialogue and collaboration in communities
                affected by conflict or social division. In Rwanda and Burundi, communities have used CLCP to support
                reconciliation and rebuild social fabric after conflict.
              </li>
              <li>
                <strong>Economic Development</strong> - Communities have applied CLCP principles to develop local
                economic initiatives, savings groups, and livelihood projects. In Uganda and Kenya, communities have
                used CLCP to strengthen agricultural value chains and develop community-based enterprises.
              </li>
            </ul>
            <p>
              These applications demonstrate that CLCP is not limited to specific sectors but provides a framework for
              community-led responses to diverse challenges. The common thread is the emphasis on community ownership,
              strength-based approaches, and local solutions.
            </p>

            <h2>Distinctive Features of CLCP</h2>
            <p>Several features distinguish CLCP from other development approaches:</p>
            <ul>
              <li>
                <strong>Strength-Based</strong> - Unlike problem-focused approaches, CLCP begins with an appreciation of
                existing community strengths and builds upon these foundations.
              </li>
              <li>
                <strong>Process-Oriented</strong> - CLCP emphasizes the quality of the process rather than predetermined
                outcomes. The way communities work together is as important as what they achieve.
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
                <strong>Horizontally Transferred</strong> - Knowledge and practices spread from community to community
                rather than being disseminated by experts. This creates networks of mutual learning and support.
              </li>
            </ul>
            <p>
              These distinctive features make CLCP particularly effective in contexts where community ownership and
              cultural appropriateness are essential for sustainable change.
            </p>

            <h2>{t("clcp.faith")}</h2>
            <p>
              CLCP is a secular approach that can be implemented in diverse cultural and religious contexts. However,
              many of its principles resonate with values found in various faith traditions:
            </p>
            <ul>
              <li>
                <strong>{t("clcp.faith.community")}</strong> - Many faith traditions emphasize the importance of
                community and collective responsibility. CLCP's focus on community ownership and collective action
                aligns with these values.
              </li>
              <li>
                <strong>{t("clcp.faith.dignity")}</strong> - The recognition of human dignity and inherent worth is
                central to many religious traditions. CLCP's strength-based approach affirms the dignity and capacity of
                each community member.
              </li>
              <li>
                <strong>{t("clcp.faith.service")}</strong> - Service to others is a core value in many faith traditions.
                CLCP facilitators embody this value through their supportive, non-directive stance.
              </li>
              <li>
                <strong>{t("clcp.faith.hope")}</strong> - Hope for a better future is common across religious
                perspectives. CLCP's dream-building process taps into this hope and channels it toward practical action.
              </li>
              <li>
                <strong>{t("clcp.faith.strength")}</strong> - Many faith traditions recognize that communities have
                inherent strengths and capacities. CLCP's appreciative approach aligns with this recognition.
              </li>
            </ul>
            <p>
              At the same time, CLCP is fully compatible with non-religious and secular humanist perspectives that value
              human agency, community solidarity, and evidence-based approaches to social change. The emphasis on
              learning from experience and measuring outcomes resonates with scientific and pragmatic worldviews.
            </p>
            <p>
              This compatibility with diverse worldviews makes CLCP a valuable approach in pluralistic contexts where
              people with different beliefs need to work together toward common goals. The focus on shared values and
              practical action creates space for collaboration across worldview differences.
            </p>

            <h2>Conclusion</h2>
            <p>
              The Community Life Competence Process offers a powerful framework for community-led development that
              respects local wisdom, builds on existing strengths, and facilitates sustainable change. By emphasizing
              ownership, appreciation, learning, and horizontal transfer, CLCP creates conditions where communities can
              effectively respond to their challenges and move toward their shared dreams.
            </p>
            <p>
              For more detailed information on the relationships between CLCP and specific faith traditions or non-faith
              perspectives, explore our chat interface or browse our topics section.
            </p>
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
                  Use our chat interface to ask specific questions about CLCP and how it relates to different faith
                  traditions.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/browse">
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>{t("browse.title")}</CardTitle>
                <CardDescription>Explore comparative religion topics and CLCP</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Browse our collection of topics covering various aspects of religions and their relationship with
                  CLCP.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </main>
    </div>
  )
}
