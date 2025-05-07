export default function EnvTestPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Environment Variable Test</h1>

      <div className="bg-yellow-100 p-4 rounded-md mb-6">
        <p className="font-medium">Important Note:</p>
        <p>
          This page cannot directly check environment variables because it's a static page. We're experiencing issues
          with API routes, so we'll need to use a different approach.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Troubleshooting Steps:</h2>

        <div className="border p-4 rounded-md">
          <h3 className="font-medium mb-2">1. Verify your OpenAI API key is set in Vercel</h3>
          <p>Make sure you've added the OPENAI_API_KEY environment variable in your Vercel project settings.</p>
        </div>

        <div className="border p-4 rounded-md">
          <h3 className="font-medium mb-2">2. Try the static chat version</h3>
          <p>We've created a static version of the chat that doesn't rely on OpenAI API.</p>
          <a href="/static-chat" className="text-blue-600 hover:underline">
            Go to Static Chat
          </a>
        </div>

        <div className="border p-4 rounded-md">
          <h3 className="font-medium mb-2">3. Check for deployment issues</h3>
          <p>Try redeploying your application to ensure all environment variables are properly applied.</p>
        </div>
      </div>
    </div>
  )
}
