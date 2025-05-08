import { NextResponse } from "next/server"

export async function GET() {
  try {
    console.log("[STATUS API] Checking API status")

    // Check if OpenAI API key is set
    const apiKey = process.env.OPENAI_API_KEY

    if (!apiKey) {
      console.log("[STATUS API] OpenAI API key is not set")
      return NextResponse.json({
        status: "unavailable",
        message: "OpenAI API key is not configured",
        details: {
          openAIKeyPresent: false,
        },
      })
    }

    // Check if API key has correct format
    if (!apiKey.startsWith("sk-")) {
      console.log("[STATUS API] OpenAI API key has invalid format")
      return NextResponse.json({
        status: "unavailable",
        message: "OpenAI API key has invalid format",
        details: {
          openAIKeyPresent: true,
          openAIKeyFormat: "invalid",
        },
      })
    }

    console.log("[STATUS API] API status check successful")

    return NextResponse.json({
      status: "available",
      message: "API is available",
      details: {
        openAIKeyPresent: true,
        openAIKeyFormat: "valid",
      },
    })
  } catch (error) {
    console.error("[STATUS API] Error checking API status:", error)

    return NextResponse.json(
      {
        status: "error",
        message: "Error checking API status",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
