import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

// Configure fonts with proper options
const geist = Geist({
  subsets: ["latin"],
  variable: '--font-geist',
  display: 'swap',
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
  display: 'swap',
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://nb-portfolio.vercel.app'),
  title: {
    default: "NB — AI/ML Engineer Portfolio",
    template: "%s | NB",
  },
  description:
    "AI/ML Engineer portfolio showcasing machine learning projects, deep learning experiments, and intelligent systems. Open to opportunities.",
  keywords: ["AI Engineer", "Machine Learning", "Deep Learning", "YOLO", "Python", "OpenCV", "Computer Vision", "Data Science", "Pandas", "NumPy"],
  authors: [{ name: "Nihar Bhatt", url: "https://github.com/nihar0123" }],
  creator: "Nihar Bhatt",
  publisher: "Nihar Bhatt",
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "NB — AI/ML Engineer Portfolio",
    description: "AI/ML Engineer portfolio showcasing machine learning projects, deep learning experiments, and intelligent systems.",
    siteName: "NB Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NB — AI/ML Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NB — AI/ML Engineer Portfolio",
    description: "AI/ML Engineer portfolio showcasing machine learning projects, deep learning experiments, and intelligent systems.",
    creator: "@niharbhatt",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} storageKey="theme-mode">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
