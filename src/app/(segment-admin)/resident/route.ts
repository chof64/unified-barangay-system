export async function GET(request: Request) {
  return Response.redirect(new URL("/resident/profile", request.url), 307)
}
