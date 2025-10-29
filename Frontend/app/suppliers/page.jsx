import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { SupplierForm } from "../../components/supplier-form"
import { Card } from "../../components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function SuppliersPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Want to Export from Canada?</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Connect with verified international buyers and expand your business globally
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">How ZenGrow Helps You</h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Connect with Verified Buyers</h3>
                      <p className="text-muted-foreground">
                        We match you with pre-qualified international buyers actively seeking Canadian products
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">AI-Powered Market Insights</h3>
                      <p className="text-muted-foreground">
                        Leverage data analytics to identify the best markets and opportunities for your products
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Transparent Process</h3>
                      <p className="text-muted-foreground">
                        Track every step of the export process with full visibility and regular updates
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Expert Support</h3>
                      <p className="text-muted-foreground">
                        Our team handles outreach, negotiations, and logistics so you can focus on production
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-muted/50">
                <h3 className="text-lg font-semibold mb-3">What We Need From You</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Product specifications and certifications</li>
                  <li>• Production capacity and lead times</li>
                  <li>• Export experience (if any)</li>
                  <li>• Target markets or regions of interest</li>
                </ul>
              </Card>
            </div>

            <div>
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Register Your Interest</h2>
                <SupplierForm />
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
