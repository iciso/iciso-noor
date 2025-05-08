import { NextResponse } from "next/server"

// Explicitly set Node.js runtime
export const runtime = "nodejs"

export async function GET() {
  try {
    console.log("[ENV CHECK] Starting environment check")

    // Create a simple response with minimal environment information
    // to avoid any potential issues with accessing environment variables
    const response = {
      message: "Environment check",
      nodeEnv: process.env.NODE_ENV || "not set",
      hasOpenAIKey: typeof process.env.OPENAI_API_KEY === "string",
      openAIKeyValid: typeof process.env.OPENAI_API_KEY === "string" && process.env.OPENAI_API_KEY.startsWith("sk-"),
      // Add a timestamp to ensure the response is fresh
      timestamp: new Date().toISOString(),
    }

    console.log("[ENV CHECK] Environment check completed successfully")

    return NextResponse.json(response)
  } catch (error) {
    console.error("[ENV CHECK] Error during environment check:", error)

    // Create a safe error response
    return NextResponse.json(
      {
        error: "Failed to check environment",
        message: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}
