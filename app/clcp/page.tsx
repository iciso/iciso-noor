import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function CLCPPage() {
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
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Community Life Competence Process (CLCP)</CardTitle>
            <CardDescription>Understanding the CLCP approach</CardDescription>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <h2>What is CLCP?</h2>
            <p>
              The Community Life Competence Process (CLCP) is an approach developed by The Constellation that empowers
              communities to respond to their challenges. It is based on the belief that communities have the capacity
              to address their own issues and that sustainable change comes from within.
            </p>

            <h2>Key Principles of CLCP</h2>
            <ul>
              <li>
                <strong>Community ownership:</strong> Communities take charge of their own responses to challenges
              </li>
              <li>
                <strong>Strength-based approach:</strong> Focusing on strengths rather than problems
              </li>
              <li>
                <strong>Learning from experience:</strong> Communities learn from their own and others' experiences
              </li>
              <li>
                <strong>Local response:</strong> Believing in the capacity of communities to address their own issues
              </li>
              <li>
                <strong>Transfer:</strong> Sharing experiences and practices between communities
              </li>
            </ul>

            <h2>The SALT Approach</h2>
            <p>SALT is a foundational approach in CLCP that stands for Stimulate, Appreciate, Learn, and Transfer:</p>
            <ul>
              <li>
                <strong>Stimulate:</strong> Encouraging communities to reflect on their experiences and potential
              </li>
              <li>
                <strong>Appreciate:</strong> Recognizing strengths and achievements rather than focusing on problems
              </li>
              <li>
                <strong>Learn:</strong> Learning from communities and facilitating their learning from each other
              </li>
              <li>
                <strong>Transfer:</strong> Sharing experiences and practices between communities
              </li>
            </ul>

            <h2>The CLCP Process</h2>
            <p>CLCP follows a systematic process that includes:</p>
            <ol>
              <li>
                <strong>Relationship building:</strong> Establishing trust and connection with communities
              </li>
              <li>
                <strong>Dream building:</strong> Helping communities envision their desired future
              </li>
              <li>
                <strong>Self-assessment:</strong> Communities evaluate their current strengths and challenges
              </li>
              <li>
                <strong>Action planning:</strong> Developing concrete steps to move toward the dream
              </li>
              <li>
                <strong>Implementation:</strong> Taking action and learning from the process
              </li>
              <li>
                <strong>Self-measurement:</strong> Communities track their own progress
              </li>
              <li>
                <strong>Sharing and learning:</strong> Communities share their experiences with others
              </li>
            </ol>

            <h2>CLCP and Faith Traditions</h2>
            <p>
              CLCP shares many commonalities with various faith traditions, including Islam, Christianity, Buddhism,
              Hinduism, and others. These commonalities include:
            </p>
            <ul>
              <li>Emphasis on community and collective action</li>
              <li>Recognition of human dignity and potential</li>
              <li>Service to others as a core value</li>
              <li>Hope and vision for a better future</li>
              <li>Strength-based approaches to challenges</li>
            </ul>

            <p>
              For more detailed information on the relationships between CLCP and specific faith traditions, explore our
              chat interface or browse our topics section.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/chat">
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>Chat About CLCP</CardTitle>
                <CardDescription>Ask questions about CLCP and its relationship with religions</CardDescription>
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
                <CardTitle>Browse Topics</CardTitle>
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
