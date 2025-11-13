export const metadata = {
  title: "Connect With Verified Global Buyers & Suppliers | ZenGrow Trade Ltd.",
  description:
    "ZenGrow Trade Ltd. connects verified buyers and suppliers across Canada and global markets, simplifying imports, exports, logistics, and trade documentation.",
    alternates: {
    canonical: "https://zengrowtrade.com/",
  },
}
import { Header } from "../components/header"
import { Hero } from "../components/hero"
import { WhoWeAre } from "../components/who-we-are"
import { FeaturedProducts } from "../components/featured-products"
import { TrustIndicators } from "../components/trust-indicators"
import { Footer } from "../components/footer"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <WhoWeAre />
          <FeaturedProducts />
          <TrustIndicators />
          {/* Internal link block */}
          <section className="py-8">
            <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
              Want to understand how we operate? Learn more on our{" "}
              <Link href="/about" className="underline underline-offset-2">
                About page
              </Link>
              .
            </div>
          </section>
        </main>
        <Footer />
      </div>
  )
}
