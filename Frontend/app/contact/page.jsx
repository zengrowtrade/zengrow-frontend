import { Header } from "../../components//header"
import { Footer } from "../../components/footer"
import { ContactForm } from "../../components/contact-form"
import { Card } from "../../components/ui/card"
import { Mail, MessageSquare, MapPin } from "lucide-react"
import { Button } from "../../components/ui/button"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Have questions? We're here to help you navigate international trade
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-sm text-muted-foreground mb-4">Get a response within 24 hours</p>
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:info@zengrowtrade.com">deepanshukapoor@zengrowtrade.com</a>
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-sm text-muted-foreground mb-4">Chat with us instantly</p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://wa.me/12048697337" target="_blank" rel="noopener noreferrer">
                  Start Chat
                </a>
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-sm text-muted-foreground">
                Winnipeg, Manitoba
                <br />
                Canada
              </p>
            </Card>
          </div>

          <Card className="p-8 md:p-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
            <ContactForm />
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
