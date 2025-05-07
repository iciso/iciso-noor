import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-emerald-50 to-teal-100">
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xl">
              ن
            </div>
            <div>
              <h1 className="text-2xl font-bold text-emerald-700">Noor</h1>
              <p className="text-sm text-gray-500">Neutral Open Objective Resource</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto w-full">
        <Card className="w-full mb-8">
          <CardHeader>
            <CardTitle>Welcome to Noor</CardTitle>
            <CardDescription>Your resource for comparative religion and CLCP information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Noor (Neutral Open Objective Resource) provides factual, non-biased information about Islam and other
              religions, spiritualities, or belief systems, as well as the Community Life Competence Process (CLCP) and
              the relationships between them.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <Link href="/chat" className="w-full">
                <Button className="w-full h-full py-6" variant="default">
                  <div className="flex flex-col items-center">
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
                      className="mb-2"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span className="text-lg font-medium">Chat</span>
                  </div>
                </Button>
              </Link>

              <Link href="/browse" className="w-full">
                <Button className="w-full h-full py-6" variant="outline">
                  <div className="flex flex-col items-center">
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
                      className="mb-2"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                    </svg>
                    <span className="text-lg font-medium">Browse Topics</span>
                  </div>
                </Button>
              </Link>

              <Link href="/clcp" className="w-full">
                <Button className="w-full h-full py-6" variant="outline">
                  <div className="flex flex-col items-center">
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
                      className="mb-2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16v-4"></path>
                      <path d="M12 8h.01"></path>
                    </svg>
                    <span className="text-lg font-medium">About CLCP</span>
                  </div>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Comparative Religion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Explore the similarities and differences between major world religions, including Islam, Christianity,
                Buddhism, Hinduism, Judaism, and Sikhism.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Sacred texts and teachings</li>
                <li>Concepts of God and divinity</li>
                <li>Worship practices and rituals</li>
                <li>Ethical principles and moral values</li>
                <li>Afterlife and salvation concepts</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community Life Competence Process</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Learn about the Community Life Competence Process (CLCP) and its relationship with various faith
                traditions.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>SALT approach: Stimulate, Appreciate, Learn, Transfer</li>
                <li>Community ownership and empowerment</li>
                <li>Strength-based approaches to challenges</li>
                <li>Shared values with religious traditions</li>
                <li>Applications in diverse community contexts</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
