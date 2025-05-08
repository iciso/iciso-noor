import { NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

// Explicitly set Node.js runtime
export const runtime = "nodejs"

export async function POST(req: Request) {
  try {
    console.log("[CHAT AI SDK] Request received")

    // Extract the messages from the request
    const { messages } = await req.json()
    console.log("[CHAT AI SDK] Received messages count:", messages.length)

    // Create system prompt to guide the model
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

    // Check if OpenAI API key is available
    if (!process.env.OPENAI_API_KEY) {
      console.error("[CHAT AI SDK] OpenAI API key is not set")
      return NextResponse.json(
        {
          error: "OpenAI API key is not configured",
          details: "Please set up your OpenAI API key in the environment variables",
        },
        { status: 500 },
      )
    }

    console.log("[CHAT AI SDK] Using OpenAI API key:", process.env.OPENAI_API_KEY ? "Key is set" : "Key is NOT set")

    // Use the AI SDK's generateText function for a non-streaming response
    console.log("[CHAT AI SDK] Calling generateText with OpenAI model")
    const result = await generateText({
      model: openai("gpt-3.5-turbo"), // Use gpt-3.5-turbo for better compatibility
      messages: [systemMessage, ...messages],
      maxTokens: 1000, // Limit response size for reliability
    })

    console.log("[CHAT AI SDK] Response generated successfully")

    // Return the response
    return NextResponse.json({
      role: "assistant",
      content: result.text,
      id: Date.now().toString(),
    })
  } catch (error) {
    console.error("[CHAT AI SDK] Detailed error:", error)

    // Extract more detailed error information
    let errorMessage = "An unknown error occurred"
    let errorDetails = ""

    if (error instanceof Error) {
      errorMessage = error.message
      errorDetails = error.stack || ""
    }

    // Check for specific OpenAI error patterns
    const errorString = String(error)
    if (errorString.includes("API key")) {
      errorMessage = "OpenAI API key error. Please check your API key."
    } else if (errorString.includes("rate limit")) {
      errorMessage = "OpenAI rate limit exceeded. Please try again later."
    } else if (errorString.includes("quota")) {
      errorMessage = "OpenAI quota exceeded. Please check your usage limits."
    }

    console.error("[CHAT AI SDK] Returning error response:", errorMessage)

    // Ensure we're returning a proper JSON response
    return NextResponse.json(
      {
        error: errorMessage,
        details: errorDetails,
      },
      { status: 500 },
    )
  }
}
