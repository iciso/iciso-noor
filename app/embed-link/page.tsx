import Link from "next/link"

export default function EmbedLinkPage() {
  // Get the base URL from environment or use a placeholder
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://your-noor-app-url.vercel.app"
  const iframeCode = `<iframe src="${baseUrl}/embed-iframe" width="100%" height="600" frameborder="0" allowtransparency="true"></iframe>`

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Noor Chat Embed Link</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">How to embed Noor Chat in Google Sites</h2>
        <ol className="list-decimal pl-5 space-y-3">
          <li>In Google Sites, edit your page</li>
          <li>
            Click <strong>Insert → Embed → By URL</strong>
          </li>
          <li>
            Enter this URL: <code className="bg-gray-100 px-2 py-1 rounded">{baseUrl}/embed-iframe</code>
          </li>
          <li>Click "Insert" and adjust the size as needed</li>
          <li>Save your page</li>
        </ol>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Alternative: Embed using HTML</h2>
        <p className="mb-3">If your platform allows HTML embedding, use this code:</p>
        <div className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <pre className="text-sm">{iframeCode}</pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Preview</h2>
        <div className="border rounded-lg overflow-hidden">
          <iframe src="/embed-iframe" width="100%" height="600" frameBorder="0" title="Noor Chat Preview"></iframe>
        </div>
      </div>

      <div className="mt-8">
        <Link href="/" className="text-emerald-600 hover:text-emerald-800">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
