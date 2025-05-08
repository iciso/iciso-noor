import { NextResponse } from "next/server"

// Explicitly set Node.js runtime
export const runtime = "nodejs"

export async function POST(req: Request) {
  try {
    console.log("[CHAT DIRECT] Request received")

    // Check if OpenAI API key is available
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      console.error("[CHAT DIRECT] OpenAI API key is not set")
      return NextResponse.json(
        {
          error: "OpenAI API key is not configured",
          details: "Please set up your OpenAI API key in the environment variables",
        },
        { status: 500 },
      )
    }

    // Extract the messages from the request
    const { messages } = await req.json()
    console.log("[CHAT DIRECT] Received messages count:", messages.length)

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

    // Prepare the request to OpenAI API
    const openaiMessages = [systemMessage, ...messages]
    console.log("[CHAT DIRECT] Prepared messages for OpenAI API")

    // Make a direct fetch request to OpenAI API
    console.log("[CHAT DIRECT] Making direct fetch request to OpenAI API")
    const openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: openaiMessages,
        max_tokens: 1000,
        temperature: 0.7,
      }),
    })

    // Check if OpenAI API response is ok
    if (!openaiResponse.ok) {
      const errorData = await openaiResponse.json()
      console.error("[CHAT DIRECT] OpenAI API error:", errorData)
      return NextResponse.json(
        {
          error: "OpenAI API error",
          details: errorData.error?.message || "Unknown error from OpenAI API",
        },
        { status: 500 },
      )
    }

    // Parse OpenAI API response
    const openaiData = await openaiResponse.json()
    console.log("[CHAT DIRECT] OpenAI API response received")

    // Extract the assistant's message
    const assistantMessage = openaiData.choices[0].message.content
    console.log("[CHAT DIRECT] Assistant message extracted")

    // Return the response
    return NextResponse.json({
      role: "assistant",
      content: assistantMessage,
      id: Date.now().toString(),
    })
  } catch (error) {
    console.error("[CHAT DIRECT] Detailed error:", error)

    // Extract more detailed error information
    let errorMessage = "An unknown error occurred"
    let errorDetails = ""

    if (error instanceof Error) {
      errorMessage = error.message
      errorDetails = error.stack || ""
    }

    // Return error response
    return NextResponse.json(
      {
        error: errorMessage,
        details: errorDetails,
      },
      { status: 500 },
    )
  }
}
