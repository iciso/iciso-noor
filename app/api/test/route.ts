export async function GET() {
  return new Response("API test endpoint is working", {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
