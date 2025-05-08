import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function GET() {
  try {
    // Collect debug information
    const debugInfo = {
      environment: {
        nodeEnv: process.env.NODE_ENV,
        hasOpenAIKey: !!process.env.OPENAI_API_KEY,
        openAIKeyFormat: process.env.OPENAI_API_KEY
          ? `${process.env.OPENAI_API_KEY.substring(0, 3)}...${process.env.OPENAI_API_KEY.substring(process.env.OPENAI_API_KEY.length - 4)}`
          : "Not set",
        openAIKeyLength: process.env.OPENAI_API_KEY?.length || 0,
        openAIKeyStartsWithSk: process.env.OPENAI_API_KEY?.startsWith("sk-") || false,
      },
      runtime: {
        version: process.version,
        platform: process.platform,
        arch: process.arch,
      },
      timestamp: new Date().toISOString(),
    }

    return NextResponse.json(debugInfo)
  } catch (error) {
    console.error("Error in debug-openai API:", error)

    return NextResponse.json(
      {
        error: "An error occurred while collecting debug information",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
