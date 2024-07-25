interface MetadataBreadcrumb {
  path: RegExp
  title: string
}

export const metadataBreadcrumbs = [
  {
    path: /^\/$/,
    title: "Home",
  },
  {
    path: /^\/admin$/,
    title: "Admin",
  },
  {
    path: /^\/resident$/,
    title: "Resident",
  },
  {
    path: /^\/resident\/profile$/,
    title: "Resident Profiles",
  },
  {
    path: /^\/resident\/profile\/(.*)$/,
    title: "Resident Profile",
  },
  {
    path: /^\/resident\/identity$/,
    title: "Resident Identities",
  },
  {
    path: /^\/resident\/identity\/(.*)$/,
    title: "Resident Identity",
  },
] as MetadataBreadcrumb[]
