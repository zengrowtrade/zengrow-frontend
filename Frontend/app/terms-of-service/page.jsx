import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import Link from "next/link"

export const metadata = {
  title: "Terms of Service | ZenGrow Trade Ltd.",
  description:
    "Read the terms and conditions for using the ZenGrow Trade Ltd. website and services.",
  alternates: {
    canonical: "https://www.zengrowtrade.com/terms-of-service",
  },
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-8">
            Last updated: {new Date().getFullYear()}
          </p>

          <p className="text-muted-foreground mb-6">
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of the ZenGrow
            Trade Ltd. (&quot;ZenGrow&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
            website and any services or information we provide through it. By using our website, you
            agree to these Terms. If you do not agree, please do not use our website.
          </p>

          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">1. Use of the Website</h2>
              <p className="text-muted-foreground">
                You may use our website for lawful purposes related to exploring trade opportunities
                with buyers and suppliers, learning about our services, or contacting us. You agree
                not to misuse the website or attempt to interfere with its normal operation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">2. No Guaranteed Outcomes</h2>
              <p className="text-muted-foreground">
                ZenGrow facilitates introductions, information, and support between buyers and
                suppliers. We do not guarantee specific business outcomes, deal closures, pricing,
                or profitability. Any trade or contractual arrangements are strictly between the
                parties involved, and you are responsible for your own due diligence and decisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">3. Information and Advice</h2>
              <p className="text-muted-foreground">
                Information provided on this website, including blog posts, guides, and any
                communication from us, is for general informational purposes only. It does not
                constitute legal, financial, or tax advice. You should consult qualified
                professionals before making decisions based on trade, regulatory, or contractual
                matters.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">4. Buyer and Supplier Responsibility</h2>
              <p className="text-muted-foreground mb-2">
                While we aim to work only with serious and verified partners, each buyer and
                supplier remains fully responsible for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Ensuring the legality of their business and products.</li>
                <li>Complying with applicable local and international laws and regulations.</li>
                <li>Performing independent due diligence on any counterparty.</li>
                <li>Agreeing to their own commercial terms, contracts, and risk management.</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                ZenGrow is not a party to contracts between buyers and suppliers unless explicitly
                agreed in writing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">5. Third-Party Services and Links</h2>
              <p className="text-muted-foreground">
                Our website may include links to third-party websites or services. We do not control
                and are not responsible for the content, policies, or practices of third parties.
                Any use of such third-party sites or services is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">6. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content on this website, including text, branding, graphics, and layouts, is
                owned by or licensed to ZenGrow and is protected by intellectual property laws. You
                may not copy, reproduce, or distribute our content without prior written permission,
                except for personal, non-commercial use or where clearly allowed by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">7. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                To the maximum extent permitted by law, ZenGrow Trade Ltd. is not liable for any
                indirect, incidental, special, consequential, or punitive damages, or any loss of
                profits or revenues, arising from your use of our website or services, even if we
                have been advised of the possibility of such damages. Your sole remedy for
                dissatisfaction with the website is to stop using it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">8. Indemnity</h2>
              <p className="text-muted-foreground">
                You agree to indemnify and hold harmless ZenGrow Trade Ltd., its directors,
                employees, and partners from any claims, losses, liabilities, and expenses
                (including legal fees) arising from your use of the website, your business dealings
                with other parties, or your breach of these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">9. Changes to the Website or Services</h2>
              <p className="text-muted-foreground">
                We may modify, suspend, or discontinue any part of the website or services at any
                time, without prior notice. We are not liable for any changes, interruptions, or
                discontinuation of the website or service offerings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">10. Changes to These Terms</h2>
              <p className="text-muted-foreground">
                We may update these Terms from time to time. The &quot;Last updated&quot; date at
                the top indicates the latest version. Your continued use of the website after
                changes are posted constitutes your acceptance of the updated Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">11. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms are governed by the laws of the province of Manitoba and the federal
                laws of Canada, without regard to conflict of law principles. Any disputes shall be
                handled in the appropriate courts located in Manitoba, Canada, unless otherwise
                required by applicable law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">12. Contact</h2>
              <p className="text-muted-foreground">
                If you have questions about these Terms, please contact us at{" "}
                <a
                  href="mailto:deepanshukapoor@zengrowtrade.com"
                  className="underline underline-offset-2"
                >
                  deepanshukapoor@zengrowtrade.com
                </a>{" "}
                or through our{" "}
                <Link href="/contact" className="underline underline-offset-2">
                  contact page
                </Link>
                .
              </p>
            </div>

            <p className="text-xs text-muted-foreground mt-8">
              These Terms of Service are provided as a general framework and do not replace tailored
              legal advice. You should consult a qualified lawyer to review and adapt these Terms
              for your specific business and jurisdictions.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
