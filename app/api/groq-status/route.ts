import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function GET() {
  try {
    // Check if GROQ_API_KEY is set
    const apiKey = process.env.GROQ_API_KEY
    if (!apiKey) {
      return NextResponse.json({
        available: false,
        message: "Groq API key is not configured",
      })
    }

    // Simple check to see if we can access the Groq API
    try {
      const response = await fetch("https://api.groq.com/openai/v1/models", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      })

      if (response.ok) {
        return NextResponse.json({
          available: true,
          message: "Groq API is available",
        })
      } else {
        const errorData = await response.json().catch(() => ({}))
        return NextResponse.json({
          available: false,
          message: "Groq API returned an error",
          error: errorData.error?.message || response.statusText,
        })
      }
    } catch (apiError) {
      console.error("Groq API error:", apiError)
      return NextResponse.json({
        available: false,
        message: "Groq API returned an error",
        error: apiError instanceof Error ? apiError.message : String(apiError),
      })
    }
  } catch (error) {
    console.error("Error checking Groq status:", error)
    return NextResponse.json({
      available: false,
      message: "Error checking Groq API status",
      error: error instanceof Error ? error.message : String(error),
    })
  }
}
