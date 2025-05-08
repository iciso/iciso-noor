import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    message: "Hello, API is working!",
    timestamp: new Date().toISOString(),
  })
}
