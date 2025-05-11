export default function EmbedDemoPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Noor Chat Embed Demo</h1>

      <div className="mb-8 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Embed Code</h2>
        <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm">
          {`<div id="noor-chat-container"></div>
<script src="${process.env.NEXT_PUBLIC_BASE_URL || "https://your-noor-app-url.vercel.app"}/api/embed"></script>`}
        </pre>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Preview</h2>
        <div id="noor-chat-container" className="border border-gray-300 rounded-lg min-h-[500px]"></div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Instructions</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Copy the embed code above</li>
          <li>Paste it into your Google Site where you want the chat to appear</li>
          <li>
            For Google Sites:
            <ul className="list-disc pl-5 mt-2">
              <li>Edit your page</li>
              <li>Insert → Embed → Embed code</li>
              <li>Paste the code and click "Insert"</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  )
}
