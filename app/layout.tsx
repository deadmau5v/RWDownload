import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "铁锈战争下载站 - Rusted Warfare Downloads",
  description: "提供最新版本的铁锈战争游戏下载，支持多平台，安全可靠。提供最新、最全的游戏版本，无广告、免登录、不限速，支持多平台。",
  keywords: "铁锈战争, Rusted Warfare, RTS, 即时战略, 游戏下载, 铁锈战争PC版, 铁锈战争手机版, 1.15, 1.14, 免费游戏",
  metadataBase: new URL("https://pan.d5v.cc"),
  openGraph: {
    title: "铁锈战争下载站 - Rusted Warfare Downloads",
    description: "提供最新版本的铁锈战争游戏下载，支持多平台，安全可靠。提供最新、最全的游戏版本。",
    url: "https://pan.d5v.cc",
    siteName: "铁锈战争下载站",
    images: [
      {
        url: "/logo.png",
        width: 256,
        height: 256,
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "铁锈战争下载站 - Rusted Warfare Downloads",
    description: "提供最新版本的铁锈战争游戏下载，支持多平台，安全可靠。提供最新、最全的游戏版本。",
    images: ["/logo.png"],
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020817" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen w-full flex-col">
            <Header />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
