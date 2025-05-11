import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname

  // Only add CORS headers for API routes and embed pages
  if (path.startsWith("/api/") || path === "/embed-frame" || path === "/api/embed" || path === "/embed-iframe") {
    // Clone the request headers
    const requestHeaders = new Headers(request.headers)

    // Create a new response
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })

    // Add CORS headers
    response.headers.set("Access-Control-Allow-Origin", "*")
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization")
    response.headers.set("Access-Control-Max-Age", "86400")

    // Add X-Frame-Options header to allow embedding
    response.headers.set("X-Frame-Options", "ALLOW-FROM *")
    response.headers.set("Content-Security-Policy", "frame-ancestors *")

    return response
  }

  return NextResponse.next()
}

// Only run the middleware on the following paths
export const config = {
  matcher: ["/api/:path*", "/embed-frame", "/embed-iframe"],
}
