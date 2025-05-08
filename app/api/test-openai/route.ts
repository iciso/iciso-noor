import { NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function GET() {
  try {
    // Use the AI SDK's generateText function which handles the environment properly
    const result = await generateText({
      model: openai("gpt-3.5-turbo"),
      prompt: "Say 'OpenAI connection successful!' if you can read this.",
      maxTokens: 50,
    })

    // Return the response
    return NextResponse.json({
      status: "success",
      message: "OpenAI API connection successful",
      response: result.text,
    })
  } catch (error) {
    console.error("Error testing OpenAI connection:", error)

    // Return detailed error information
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to connect to OpenAI API",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
