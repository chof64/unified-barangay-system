export const combineToFullName = (data: (string | null | undefined)[]) => {
  return data.filter(Boolean).join(" ")
}
