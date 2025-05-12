import { NextResponse } from "next/server"
import { groq } from "@ai-sdk/groq"
import { generateText } from "ai"

export const runtime = "nodejs"

export async function GET() {
  try {
    // Check if Groq API key is configured
    const apiKey = process.env.GROQ_API_KEY
    if (!apiKey) {
      return NextResponse.json({
        available: false,
        message: "Groq API key is not configured",
      })
    }

    // Test the Groq API with a simple request
    const { text } = await generateText({
      model: groq("llama3-8b-8192"),
      prompt: "Hello, are you working?",
      maxTokens: 5,
    })

    // If we get here, the API is working
    return NextResponse.json({
      available: true,
      message: "Groq API is available and working",
    })
  } catch (error) {
    console.error("Groq API status check failed:", error)

    // Return detailed error message
    return NextResponse.json({
      available: false,
      message: error instanceof Error ? error.message : "Unknown error checking Groq API status",
      error: error instanceof Error ? error.message : String(error),
    })
  }
}
