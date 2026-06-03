import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "DotYsquare — Software, Cloud & IT Consulting",
  description:
    "DotYsquare is a technology consultancy delivering software, cloud, mobile, data, AI, cybersecurity and IT support solutions that drive your business forward.",
  keywords: [
    "IT consulting",
    "software development",
    "cloud solutions",
    "mobile app development",
    "cybersecurity",
    "DevOps",
    "DotYsquare",
  ],
  icons: { icon: "/DotYsquare_logo.png" },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${montserrat.variable} ${openSans.variable} antialiased`}>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
