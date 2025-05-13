import { NextResponse } from "next/server"

// Set runtime to nodejs (not edge) for Groq
export const runtime = "nodejs"

export async function POST(req: Request) {
  try {
    // Parse the request body
    const { messages, language = "en" } = await req.json()

    // Validate messages
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages format" }, { status: 400 })
    }

    // Add system message if not present, including language instruction
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

If you don't know something, admit it rather than speculating. Your purpose is to foster understanding, not to proselytize any particular viewpoint.

IMPORTANT: Keep your responses concise and focused on the question. Avoid lengthy explanations unless specifically requested. Aim for 2-3 paragraphs maximum for most responses.

CRITICAL: The user's selected language is ${language === "fr" ? "French" : "English"}. You MUST respond in ${
        language === "fr" ? "French" : "English"
      }. If the user asks a question in French, respond in French. If the user asks in English, respond in English.`,
    }

    // Ensure system message is included
    const messagesWithSystem = messages.some((m) => m.role === "system") ? messages : [systemMessage, ...messages]

    // Make a direct request to the Groq API (non-streaming)
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: messagesWithSystem,
        max_tokens: 1000,
        temperature: 0.7,
        stream: false, // Use non-streaming mode
      }),
    })

    // Check if the response is ok
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error("[CHAT-GROQ API] Groq API error:", errorData)
      return NextResponse.json(
        {
          error: "Groq API error",
          details: errorData.error?.message || response.statusText,
        },
        { status: response.status },
      )
    }

    // Parse the response
    const data = await response.json()

    // Extract the assistant's message
    const assistantMessage = data.choices?.[0]?.message?.content || ""

    // Return the message
    return NextResponse.json({ message: assistantMessage })
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
