import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    console.log("Fallback chat API route called")

    // Parse the request body
    let messages
    try {
      const body = await req.json()
      messages = body.messages

      if (!messages || !Array.isArray(messages)) {
        console.error("Invalid request: messages is not an array")
        return NextResponse.json(
          { error: "Invalid request: messages is required and must be an array" },
          { status: 400 },
        )
      }

      console.log("Received messages count in fallback:", messages.length)
    } catch (parseError) {
      console.error("Failed to parse request body in fallback API:", parseError)
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
    }

    // Get the last user message
    const lastUserMessage = messages.filter((m) => m.role === "user").pop()
    const userQuery = lastUserMessage?.content || ""
    console.log("Last user query:", userQuery)

    // Generate a simple fallback response
    let response = "I'm sorry, but I'm currently experiencing technical difficulties with my AI service. "

    // Add some context based on the query
    if (userQuery.toLowerCase().includes("islam")) {
      response +=
        "If you're interested in Islam, you can visit our static topics page to learn more about Islamic beliefs and practices."
    } else if (userQuery.toLowerCase().includes("christian")) {
      response +=
        "If you're interested in Christianity, you can visit our static topics page to learn more about Christian beliefs and practices."
    } else if (userQuery.toLowerCase().includes("clcp") || userQuery.toLowerCase().includes("community life")) {
      response +=
        "If you're interested in the Community Life Competence Process (CLCP), you can visit our static topics page to learn more about its principles and applications."
    } else if (userQuery.toLowerCase().includes("hindu") || userQuery.toLowerCase().includes("hinduism")) {
      response +=
        "If you're interested in Hinduism, you can visit our static topics page to learn more about Hindu beliefs, practices, and traditions."
    } else {
      response +=
        "Please try again later or visit our static topics page for pre-written information on various religions and the Community Life Competence Process."
    }

    console.log("Sending fallback response")

    // Return the response
    return NextResponse.json({
      role: "assistant",
      content: response,
      id: Date.now().toString(),
      fallback: true,
    })
  } catch (error) {
    console.error("Error in fallback chat API:", error)

    return NextResponse.json(
      {
        error: "An error occurred in the fallback chat service",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
