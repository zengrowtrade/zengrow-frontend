import { Header } from "../components/header"
import { Hero } from "../components/hero"
import { WhoWeAre } from "../components/who-we-are"
import { FeaturedProducts } from "../components/featured-products"
import { TrustIndicators } from "../components/trust-indicators"
import { Footer } from "../components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhoWeAre />
        <FeaturedProducts />
        <TrustIndicators />
      </main>
      <Footer />
    </div>
  )
}
