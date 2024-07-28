import { customAlphabet } from "nanoid/non-secure"

export function GET(
  request: Request,
  { params }: { params: { profileId: string } }
) {
  const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz1234567890", 8)
  return Response.redirect(
    new URL(`/resident/identity/${params.profileId}/${nanoid(12)}`, request.url)
  )
}
