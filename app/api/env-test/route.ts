import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Check if the OpenAI API key is set
    const apiKey = process.env.OPENAI_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        {
          status: "error",
          message: "OpenAI API key is not set",
        },
        { status: 400 },
      )
    }

    // Check if the API key has the correct format (starts with 'sk-')
    if (!apiKey.startsWith("sk-")) {
      return NextResponse.json(
        {
          status: "error",
          message: "OpenAI API key has incorrect format. It should start with 'sk-'",
        },
        { status: 400 },
      )
    }

    // Return success if the API key is set and has the correct format
    return NextResponse.json({
      status: "success",
      message: "OpenAI API key is set and has the correct format",
      keyLength: apiKey.length,
      keyPrefix: apiKey.substring(0, 5) + "...",
    })
  } catch (error) {
    console.error("Error in env test:", error)
    return NextResponse.json(
      {
        status: "error",
        message: "An error occurred while checking the environment",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
