import { NextResponse } from "next/server"
import OpenAI from "openai"

// Explicitly set Node.js runtime
export const runtime = "nodejs"

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
    // Add dangerouslyAllowBrowser: true to address the browser environment detection issue
    const openai = new OpenAI({
      apiKey: apiKey,
      dangerouslyAllowBrowser: true, // Add this to address the browser environment detection
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

    // Add system message if not present
    const systemMessage = {
      role: "system",
      content: `You are Noor (Neutral Open Objective Resource), an assistant specializing in comparative religion and the Community Life Competence Process (CLCP).
      
Provide factual, non-biased information on:
1. Major world religions (Islam, Christianity, Buddhism, Hinduism, Judaism, Sikhism)
2. Non-faith perspectives (atheism, humanism, secular spirituality)
3. The Community Life Competence Process (CLCP) and its principles
4. The SALT approach (Stimulate, Appreciate, Learn, Transfer)
5. Relationships between faith/non-faith traditions and CLCP

Answer in a balanced, informative style, citing primary sources when possible. When asked about connections between religions and CLCP, highlight shared values like community ownership, strength-based approaches, and human dignity.

If you don't know something, admit it rather than speculating. Your purpose is to foster understanding, not to proselytize any particular viewpoint.`,
    }

    // Ensure system message is included
    const messagesWithSystem = messages.some((m) => m.role === "system") ? messages : [systemMessage, ...messages]

    // Log the model we're using
    console.log("[CHAT API] Using model: gpt-3.5-turbo")

    // Create chat completion
    console.log("[CHAT API] Creating chat completion")
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messagesWithSystem,
        stream: false, // Change to non-streaming for simplicity
      })

      console.log("[CHAT API] Chat completion created successfully")

      // Return the response
      return NextResponse.json({
        role: "assistant",
        content: response.choices[0].message.content,
        id: Date.now().toString(),
      })
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
