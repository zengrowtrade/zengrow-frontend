import { Inter } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import ChatbotWidget from "../components/ChatbotWidget";


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ZenGrow Trade Ltd. - AI-Powered International Trade Consulting",
  description:
    "Connecting Canadian suppliers with global buyers. Your trusted AI-powered trade partner for sourcing and exporting.",
  generator: "v0.app",
  alternates: {
    canonical: "https://www.zengrowtrade.com/",
  },
  icons: {
    icon: "/logo/box_Logo.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>

        {/* --- Google Analytics 4 --- */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0243S72PEX"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0243S72PEX');
          `}
        </Script>
        {/* --- End GA4 --- */}
        
        {/* --- Schema Markup: Organization --- */}
        <Script id="schema-organization" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ZenGrow Trade Ltd.",
              "url": "https://www.zengrowtrade.com",
              "logo": "https://www.zengrowtrade.com/logo/box_Logo.png",
              "sameAs": [
                "https://www.linkedin.com/company/zengrowtrade/"
              ]
            }
          `}
        </Script>

        {/* --- Schema Markup: LocalBusiness --- */}
        <Script id="schema-localbusiness" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ZenGrow Trade Ltd.",
              "url": "https://www.zengrowtrade.com",
              "telephone": "+1-204-869-7337",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Winnipeg",
                "addressRegion": "MB",
                "addressCountry": "CA"
              }
            }
          `}
        </Script>

        <ChatbotWidget />
        {children}
        <Analytics />

      </body>
    </html>
  )
}
