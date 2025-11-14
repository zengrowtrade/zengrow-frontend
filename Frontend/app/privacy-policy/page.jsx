import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | ZenGrow Trade Ltd.",
  description:
    "Learn how ZenGrow Trade Ltd. collects, uses, and protects your personal information when you visit our website or work with us.",
  alternates: {
    canonical: "https://www.zengrowtrade.com/privacy-policy",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">
            Last updated: {new Date().getFullYear()}
          </p>

          <p className="text-muted-foreground mb-6">
            This Privacy Policy explains how ZenGrow Trade Ltd. (&quot;ZenGrow&quot;, &quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;) collects, uses, and protects your information when
            you visit our website or interact with our services. By using our website, you agree to
            the terms of this Privacy Policy.
          </p>

          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">1. Who We Are</h2>
              <p className="text-muted-foreground">
                ZenGrow Trade Ltd. is a Canada-based trade and consulting company that connects
                verified buyers and suppliers, with a focus on Canadian exports and international
                trade support.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-2">
                We collect information in the following ways:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>
                  <strong>Information you provide directly:</strong> such as your name, email
                  address, company name, country, and trade requirements when you submit a form on
                  our website (e.g., buyer form, supplier form, or contact form).
                </li>
                <li>
                  <strong>Usage data:</strong> information about how you use our website, including
                  pages viewed, time spent on pages, and interactions with forms and buttons.
                </li>
                <li>
                  <strong>Technical data:</strong> IP address, browser type, device information, and
                  approximate location, collected via analytics tools.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-2">
                We use the information we collect for purposes such as:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Responding to your inquiries and contact requests.</li>
                <li>Evaluating buyer and supplier opportunities and potential matches.</li>
                <li>Providing trade-related information and updates you request.</li>
                <li>Improving our website, services, and user experience.</li>
                <li>
                  Analyzing website performance, traffic, and usage patterns through tools like
                  Google Analytics.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">4. Cookies & Analytics</h2>
              <p className="text-muted-foreground mb-2">
                We use cookies and similar technologies to understand how visitors use our website
                and to improve our services. This may include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-2">
                <li>Measuring page views and navigation paths.</li>
                <li>Understanding which content is most useful to visitors.</li>
                <li>Detecting technical issues and improving performance.</li>
              </ul>
              <p className="text-muted-foreground">
                You can control cookies through your browser settings. Disabling cookies may affect
                certain website features.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">5. How We Share Information</h2>
              <p className="text-muted-foreground mb-2">
                We do not sell your personal information. We may share information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>
                  With service providers that help us operate our website and systems (e.g., hosting
                  providers, analytics tools).
                </li>
                <li>
                  With potential trade partners (buyers/suppliers) only when you explicitly request
                  introductions or services.
                </li>
                <li>
                  When required by law, regulation, or to comply with legal requests or government
                  authorities.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">6. Data Security</h2>
              <p className="text-muted-foreground">
                We take reasonable technical and organizational measures to protect your information
                from unauthorized access, loss, misuse, or alteration. However, no method of
                transmission over the internet or electronic storage is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">7. International Data Transfers</h2>
              <p className="text-muted-foreground">
                As part of international trade activities, your information may be processed or
                stored in other countries. We aim to work with partners who handle data in a
                responsible and secure manner.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">8. Your Rights</h2>
              <p className="text-muted-foreground mb-2">
                Depending on your location, you may have rights over your personal data, such as:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Accessing the personal data we hold about you.</li>
                <li>Requesting corrections to inaccurate or incomplete data.</li>
                <li>Requesting deletion of your data where applicable.</li>
                <li>Withdrawing consent for certain types of processing.</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                To exercise these rights, contact us at{" "}
                <a
                  href="mailto:deepanshukapoor@zengrowtrade.com"
                  className="underline underline-offset-2"
                >
                  deepanshukapoor@zengrowtrade.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">9. Third-Party Links</h2>
              <p className="text-muted-foreground">
                Our website may contain links to third-party websites. We are not responsible for
                the privacy practices or content of those websites. We recommend reviewing their
                privacy policies separately.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">10. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time to reflect changes in our
                practices or legal requirements. The &quot;Last updated&quot; date at the top will
                indicate the latest version. Continued use of our website after changes are posted
                means you accept the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">11. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy or how we handle your
                information, please contact us at{" "}
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
              This Privacy Policy is provided for general informational purposes and does not
              constitute legal advice. You should consult with a qualified legal professional to
              ensure compliance with applicable privacy laws in your jurisdiction.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
