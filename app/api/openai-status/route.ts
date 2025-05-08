import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function GET() {
  try {
    // Check if the OpenAI API key is set
    const apiKey = process.env.OPENAI_API_KEY

    if (!apiKey) {
      return NextResponse.json({
        status: "unavailable",
        message: "OpenAI API key is not set",
      })
    }

    // Check if the API key has the correct format (starts with 'sk-')
    if (!apiKey.startsWith("sk-")) {
      return NextResponse.json({
        status: "unavailable",
        message: "OpenAI API key has incorrect format",
      })
    }

    // Return success if the API key is set and has the correct format
    return NextResponse.json({
      status: "available",
      message: "OpenAI API key is set and has the correct format",
    })
  } catch (error) {
    console.error("Error checking OpenAI status:", error)
    return NextResponse.json({
      status: "error",
      message: "An error occurred while checking OpenAI status",
      error: error instanceof Error ? error.message : String(error),
    })
  }
}
