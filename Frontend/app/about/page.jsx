export const metadata = {
  title: "About ZenGrow Trade Ltd. | Verified Trade, Data & AI",
  description:
    "Learn about ZenGrow Trade Ltd., a Canadian trade-tech company connecting verified buyers and suppliers using transparency, data, and AI.",
  alternates: {
    canonical: "https://zengrowtrade.com/about",
  },
}
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Card } from "../../components//ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About ZenGrow Trade Ltd.</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Empowering global trade through data, transparency & AI
            </p>
          </div>

          <div className="space-y-12">
            <Card className="p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At ZenGrow Trade Ltd., we are committed to empowering global trade through cutting-edge technology,
                unwavering transparency, and artificial intelligence. We bridge the gap between Canadian suppliers and
                international buyers, creating seamless connections that drive business growth and foster trust in every
                transaction.
              </p>
            </Card>

            <Card className="p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To make international trade efficient, secure, and accessible for every business. We envision a world
                where geographical boundaries don't limit business opportunities, and where technology enables fair,
                transparent trade relationships that benefit all parties involved.
              </p>
            </Card>

            <Card className="p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Founded in Winnipeg, Manitoba, Canada, ZenGrow Trade Ltd. was born from a simple observation:
                international trade is complex, time-consuming, and often lacks transparency. We saw an opportunity to
                leverage artificial intelligence and data analytics to simplify the process.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we proudly serve as a bridge between Canadian excellence and global demand, helping suppliers
                reach new markets and buyers access authentic Canadian products with confidence. Our Canadian roots
                ground us in values of reliability, innovation, and ethical business practices.
              </p>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">Reliability</div>
                <p className="text-muted-foreground">Built on Canadian values of trust and integrity</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">Innovation</div>
                <p className="text-muted-foreground">AI-powered solutions for modern trade challenges</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">Ethics</div>
                <p className="text-muted-foreground">Transparent processes and verified partnerships</p>
              </Card>
            </div>
            <Card className="p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-4">What We Do</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                ZenGrow Trade Ltd. connects verified buyers and suppliers and supports them through
                the entire trade journey. We focus on trust, transparency, and efficiency so you
                can close deals faster with less risk.
              </p>

              <ul className="space-y-3 text-muted-foreground text-lg">
                <li>
                  <span className="font-semibold text-foreground">Buyer–Supplier Matching:</span>{" "}
                  We introduce credible buyers and suppliers so you get real opportunities, not random leads.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Company Verification:</span>{" "}
                  We help reduce fraud by checking business legitimacy and verifying trade partners.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Import & Export Support:</span>{" "}
                  Guidance on documentation, logistics, and basic compliance so deals move smoothly.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Canadian Market Entry:</span>{" "}
                  For global suppliers, we help you access the Canadian market and connect with local buyers.
                </li>
                <li>
                  <span className="font-semibold text-foreground">AI-Powered Insights:</span>{" "}
                  We leverage data and AI tools to identify opportunities, spot risks, and support smarter trade decisions.
                </li>
              </ul>
            </Card>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
