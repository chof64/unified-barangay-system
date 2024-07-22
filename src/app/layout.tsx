import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Toaster } from "~/components/ui/sonner";

import { TRPCReactProvider } from "~/trpc/react";

import Header from "~/components/header/Header";

export const metadata = {
  title: {
    template: "%s | Unified Barangay System",
    default: "Catungan IV - Unified Barangay System",
  },
  description: "Unified Barangay System for Catungan IV",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <Header />
          {children}
          <Toaster />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
