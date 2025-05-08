import { NextResponse } from "next/server"
import { OpenAIStream, StreamingTextResponse } from "ai"
import OpenAI from "openai"

// Remove the runtime directive to avoid edge runtime issues
// export const runtime = 'edge'

export async function POST(req: Request) {
  console.log("[CHAT API] Request received")

  try {
    // Check if OpenAI API key is configured
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      console.error("[CHAT API] OpenAI API key is not configured")
      return NextResponse.json({ error: "OpenAI API key is not configured" }, { status: 500 })
    }

    // Log that we're creating the OpenAI client
    console.log("[CHAT API] Creating OpenAI client")

    // Create OpenAI client with explicit configuration
    const openai = new OpenAI({
      apiKey: apiKey,
    })

    // Parse request body
    console.log("[CHAT API] Parsing request body")
    const { messages } = await req.json()

    // Validate messages
    if (!messages || !Array.isArray(messages)) {
      console.error("[CHAT API] Invalid messages format")
      return NextResponse.json({ error: "Invalid messages format" }, { status: 400 })
    }

    console.log(`[CHAT API] Processing ${messages.length} messages`)

    // Log the model we're using
    console.log("[CHAT API] Using model: gpt-3.5-turbo")

    // Create chat completion
    console.log("[CHAT API] Creating chat completion")
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messages,
        stream: true,
      })

      console.log("[CHAT API] Chat completion created successfully")

      // Create stream
      const stream = OpenAIStream(response)

      // Return streaming response
      return new StreamingTextResponse(stream)
    } catch (openaiError) {
      console.error("[CHAT API] OpenAI API error:", openaiError)

      // Check for specific OpenAI error types
      if (openaiError instanceof Error) {
        const errorMessage = openaiError.message

        // Handle authentication errors
        if (errorMessage.includes("authentication") || errorMessage.includes("API key")) {
          return NextResponse.json(
            { error: "OpenAI API authentication failed. Please check your API key." },
            { status: 401 },
          )
        }

        // Handle rate limit errors
        if (errorMessage.includes("rate limit") || errorMessage.includes("quota")) {
          return NextResponse.json(
            { error: "OpenAI API rate limit exceeded. Please try again later." },
            { status: 429 },
          )
        }
      }

      // Generic OpenAI error
      return NextResponse.json(
        {
          error: "Error communicating with OpenAI API",
          details: openaiError instanceof Error ? openaiError.message : String(openaiError),
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("[CHAT API] Unexpected error:", error)
    return NextResponse.json(
      {
        error: "An unexpected error occurred",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
