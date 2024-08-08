import "~/styles/globals.css"

import { Inter } from "next/font/google"

import { TRPCReactProvider } from "~/trpc/react"
import { cn } from "~/lib/utils"

import { Toaster } from "~/components/ui/sonner"

const inter = Inter({
  display: "swap",
  variable: "--font-inter",
})

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
    <html lang="en" className={cn(inter.variable)}>
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
