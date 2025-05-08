import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function POST(req: Request) {
  try {
    // Parse the request body
    const body = await req.json()

    // Echo back the request with a timestamp
    return NextResponse.json({
      role: "assistant",
      content: `Echo: ${body.messages[body.messages.length - 1]?.content || "No message"}`,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      received: body,
    })
  } catch (error) {
    console.error("Error in echo API:", error)

    // Ensure we're returning a proper JSON response
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : String(error),
        timestamp: new Date().toISOString(),
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  }
}
