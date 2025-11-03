import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const geist = localFont({
  src: [
    { path: "../fonts/Geist-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Geist-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Geist-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/Geist-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "Leonhel Fortin - Embedded ML Engineer | AIoT Specialist",
  description: "Embedded Machine Learning Engineer specializing in Artificial Intelligence of Things, Data Analytics, and Smart Cities solutions. CEO at SIRENA AI.",
  openGraph: {
    title: "Leonhel Fortin - Embedded ML Engineer | AIoT Specialist",
    description: "Embedded Machine Learning Engineer specializing in Artificial Intelligence of Things, Data Analytics, and Smart Cities solutions. CEO at SIRENA AI.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className={`font-sans bg-slate-50 text-foreground`}>
        {children}
      </body>
    </html>
  )
}
