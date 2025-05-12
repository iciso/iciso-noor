import { streamText } from "ai"
import { groq } from "@ai-sdk/groq"
import { NextResponse } from "next/server"

// Set runtime to nodejs (not edge) for Groq
export const runtime = "nodejs"

export async function POST(req: Request) {
  try {
    // Parse the request body
    const { messages } = await req.json()

    // Validate messages
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages format" }, { status: 400 })
    }

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

    // Create the stream
    const result = streamText({
      model: groq("llama3-8b-8192"),
      messages: messagesWithSystem,
    })

    // Return the stream response
    return result.toDataStreamResponse()
  } catch (error) {
    console.error("[CHAT-GROQ API] Error:", error)
    return NextResponse.json(
      {
        error: "An error occurred while processing your request",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
