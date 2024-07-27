export const generatePathSegments = (path: string) => {
  const segments = path.split("/").filter(Boolean)
  const paths = []

  for (let i = 0; i < segments.length; i++) {
    paths.push("/" + segments.slice(0, i + 1).join("/"))
  }

  return paths
}
