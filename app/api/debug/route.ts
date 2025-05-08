import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Collect debug information
    const debugInfo = {
      environment: process.env.NODE_ENV,
      openaiKeySet: !!process.env.OPENAI_API_KEY,
      openaiKeyFormat: process.env.OPENAI_API_KEY
        ? process.env.OPENAI_API_KEY.startsWith("sk-")
          ? "Valid format (starts with sk-)"
          : "Invalid format"
        : "Not set",
      openaiKeyLength: process.env.OPENAI_API_KEY ? process.env.OPENAI_API_KEY.length : 0,
      nodeVersion: process.version,
      timestamp: new Date().toISOString(),
    }

    // Return the debug information
    return NextResponse.json({
      status: "success",
      message: "Debug information collected successfully",
      debugInfo,
    })
  } catch (error) {
    console.error("Error in debug endpoint:", error)
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to collect debug information",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
