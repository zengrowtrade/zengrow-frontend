export const metadata = {
  title: "Find Verified Canadian Suppliers | ZenGrow Trade Ltd.",
  description:
    "Find verified Canadian suppliers for maple syrup, agricultural products, metals and more. ZenGrow helps importers source authentic Canadian products with secure, managed trade.",
  alternates: {
    canonical: "https://zengrowtrade.com/buyers",
  },
}
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { BuyerForm } from "../../components/buyer-form"
import { Card } from "../../components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function BuyersPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Want to Import from Canada?</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Source authentic Canadian products with confidence and security
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Why Choose ZenGrow</h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Authentic Canadian Products</h3>
                      <p className="text-muted-foreground">
                        Direct access to verified Canadian suppliers with genuine, high-quality products
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Secure Trade Management</h3>
                      <p className="text-muted-foreground">
                        We handle verification, documentation, and logistics to ensure safe transactions
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">AI-Powered Sourcing</h3>
                      <p className="text-muted-foreground">
                        Our technology matches you with the perfect suppliers based on your specific needs
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">End-to-End Support</h3>
                      <p className="text-muted-foreground">
                        From initial inquiry to delivery, we manage every aspect of your import process
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-muted/50">
                <h3 className="text-lg font-semibold mb-3">Popular Canadian Products</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Premium Maple Syrup & Products</li>
                  <li>• Agricultural Products & Grains</li>
                  <li>• Sustainable Lumber & Wood Products</li>
                  <li>• Natural Honey & Bee Products</li>
                  <li>• Metals & Minerals</li>
                </ul>
              </Card>
            </div>

            <div>
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Submit Your Inquiry</h2>
                <BuyerForm />
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
