import { NextResponse } from "next/server"

// Explicitly set Node.js runtime
export const runtime = "nodejs"

export async function GET() {
  return NextResponse.json({
    message: "API is working",
    timestamp: new Date().toISOString(),
  })
}
