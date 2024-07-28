import "~/styles/globals.css"
import "@mantine/core/styles.layer.css"

import { ColorSchemeScript, MantineProvider } from "@mantine/core"
import { GeistSans } from "geist/font/sans"

import { TRPCReactProvider } from "~/trpc/react"

import { Toaster } from "~/components/ui/sonner"
import Header from "~/components/header/Header"

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
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <TRPCReactProvider>
          <MantineProvider>
            <Header />
            {children}
            <Toaster />
          </MantineProvider>
        </TRPCReactProvider>
      </body>
    </html>
  )
}
