import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    console.log("Simple Chat API route called")

    // Extract the messages from the request
    const { messages } = await req.json()
    console.log("Received messages:", JSON.stringify(messages.slice(0, 2))) // Log first few messages for debugging

    // Create system prompt to guide the model
    const systemMessage = {
      role: "system",
      content: `You are Noor (Neutral Open Objective Resource), an assistant specializing in comparative religion and the Community Life Competence Process (CLCP). Provide brief, factual responses.`,
    }

    console.log("Using OpenAI API key:", process.env.OPENAI_API_KEY ? "Key is set" : "Key is NOT set")

    // Use the AI SDK's generateText function for a non-streaming response
    console.log("Calling generateText with OpenAI model")
    const result = await generateText({
      model: openai("gpt-3.5-turbo"), // Use gpt-3.5-turbo for testing
      messages: [systemMessage, ...messages],
      maxTokens: 500, // Limit response size for testing
    })

    console.log("Response generated successfully")

    // Return the response
    return NextResponse.json({
      content: result.text,
    })
  } catch (error) {
    console.error("Detailed error in simple chat API:", error)

    // Extract more detailed error information
    let errorMessage = "An unknown error occurred"
    let errorDetails = ""

    if (error instanceof Error) {
      errorMessage = error.message
      errorDetails = error.stack || ""
    }

    // Check for specific OpenAI error patterns
    const errorString = String(error)
    if (errorString.includes("API key")) {
      errorMessage = "OpenAI API key error. Please check your API key."
    } else if (errorString.includes("rate limit")) {
      errorMessage = "OpenAI rate limit exceeded. Please try again later."
    } else if (errorString.includes("quota")) {
      errorMessage = "OpenAI quota exceeded. Please check your usage limits."
    }

    console.error("Returning error response:", errorMessage)

    return NextResponse.json(
      {
        error: errorMessage,
        details: errorDetails,
      },
      { status: 500 },
    )
  }
}
