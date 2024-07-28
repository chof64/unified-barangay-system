import "~/styles/globals.css"

import { GeistSans } from "geist/font/sans"

import { TRPCReactProvider } from "~/trpc/react"

import { Toaster } from "~/components/ui/sonner"

export const metadata = {
  title: {
    template: "%s | Unified Barangay System",
    default: "Catungan IV - Unified Barangay System",
  },
  description: "Unified Barangay System for Catungan IV",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <main>
            {children}
            <Toaster />
          </main>
        </TRPCReactProvider>
      </body>
    </html>
  )
}
