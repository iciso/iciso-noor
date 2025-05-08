import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Get all environment variables
    const envVars = process.env

    // Create a safe version without actual values
    const safeEnvVars = Object.keys(envVars).reduce(
      (acc, key) => {
        // Skip sensitive variables
        if (key.includes("KEY") || key.includes("SECRET") || key.includes("TOKEN") || key.includes("PASSWORD")) {
          acc[key] = "[REDACTED]"
        } else {
          // For non-sensitive variables, just indicate they exist
          acc[key] = "EXISTS"
        }
        return acc
      },
      {} as Record<string, string>,
    )

    return NextResponse.json({
      message: "Environment variables check",
      variables: safeEnvVars,
      nodeEnv: process.env.NODE_ENV,
      hasOpenAIKey: !!process.env.OPENAI_API_KEY,
      openAIKeyFormat: process.env.OPENAI_API_KEY
        ? process.env.OPENAI_API_KEY.startsWith("sk-")
          ? "Valid format"
          : "Invalid format"
        : "Not set",
    })
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to check environment variables",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
