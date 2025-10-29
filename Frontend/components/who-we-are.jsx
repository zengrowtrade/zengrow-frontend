import { Card } from "./ui/card"
import { Globe, Shield, Zap } from "lucide-react"

export function WhoWeAre() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Founded in Canada, ZenGrow Trade Ltd. is your trusted partner in international trade. We leverage
            cutting-edge IT technology and data-driven insights to connect suppliers and buyers, ensuring transparent,
            secure, and efficient cross-border transactions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Globe className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Global Reach</h3>
            <p className="text-muted-foreground">
              Connecting businesses across continents with seamless trade solutions
            </p>
          </Card>

          <Card className="p-8 text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Trust & Security</h3>
            <p className="text-muted-foreground">Verified processes and secure transactions you can rely on</p>
          </Card>

          <Card className="p-8 text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">IT-Powered</h3>
            <p className="text-muted-foreground">Smart matching and data analytics for optimal trade partnerships</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
