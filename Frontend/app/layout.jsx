import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ZenGrow Trade Ltd. - AI-Powered International Trade Consulting",
  description:
    "Connecting Canadian suppliers with global buyers. Your trusted AI-powered trade partner for sourcing and exporting.",
  generator: "v0.app",
  icons: {
    icon: '/logo/box_Logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
