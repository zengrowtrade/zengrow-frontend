import Link from "next/link"
import Image from "next/image"
export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8  flex items-center justify-center overflow-hidden">
              <Image 
                src="/logo/box_image.svg" 
                alt="ZenGrow Trade" 
                width={32} 
                height={32} 
                className="object-contain" 
              />
            </div>
              <span className="font-bold text-lg">ZenGrow Trade</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered international trade consulting connecting Canadian suppliers with global buyers.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/suppliers" className="text-muted-foreground hover:text-primary transition-colors">
                  For Suppliers
                </Link>
              </li>
              <li>
                <Link href="/buyers" className="text-muted-foreground hover:text-primary transition-colors">
                  For Buyers
                </Link>
              </li>
              <li>
                <Link href="/blog/top-10-products-canada-export-2025" className="text-muted-foreground hover:text-primary transition-colors">
                  Top Canadian Exports 2025
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service " className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ZenGrow Trade Ltd. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Winnipeg, Manitoba, Canada</p>
        </div>
      </div>
    </footer>
  )
}
