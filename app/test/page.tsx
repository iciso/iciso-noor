export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Environment Variable Test</h1>
      <p className="mb-4">This page tests if your environment variables are properly set.</p>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">API Test Links:</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <a href="/api/simple-test" className="text-blue-600 hover:underline">
              Simple Test API (Plain Text)
            </a>
          </li>
          <li>
            <a href="/api/test" className="text-blue-600 hover:underline">
              JSON Test API
            </a>
          </li>
        </ul>
      </div>

      <div className="p-4 bg-yellow-100 rounded-md">
        <p>
          <strong>Note:</strong> This page cannot directly access environment variables because it's a Server Component.
          The API routes above will check if your OpenAI API key is set.
        </p>
      </div>
    </div>
  )
}
