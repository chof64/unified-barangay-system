import { customAlphabet } from "nanoid/non-secure"

export function GET(request: Request) {
  const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz1234567890", 8)
  return Response.redirect(
    new URL(`/resident/profile/${nanoid()}`, request.url)
  )
}
