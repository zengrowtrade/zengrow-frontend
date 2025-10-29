import { Card } from "./ui/card"
import { BadgeCheck, FileCheck, Lock } from "lucide-react"

export function TrustIndicators() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Trust ZenGrow</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your security and success are our top priorities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BadgeCheck className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Canadian Registered</h3>
            <p className="text-muted-foreground">Officially registered and operating from Winnipeg, Manitoba, Canada</p>
          </Card>

          <Card className="p-8 text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Lock className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Secure Trade</h3>
            <p className="text-muted-foreground">
              End-to-end encryption and secure payment processing for all transactions
            </p>
          </Card>

          <Card className="p-8 text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FileCheck className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Verified Process</h3>
            <p className="text-muted-foreground">
              All suppliers and buyers undergo thorough verification before partnership
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
