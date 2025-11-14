"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 ">
          <Link href="/" className="flex items-center gap-2">
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
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/suppliers" className="text-sm font-medium hover:text-primary transition-colors">
              For Suppliers
            </Link>
            <Link href="/buyers" className="text-sm font-medium hover:text-primary transition-colors">
              For Buyers
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Get Verify
            </Link>
            <Link href="/blog" className="hover:text-primary">Blog</Link>

          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" asChild>
              <Link href="/suppliers">I Want to Export</Link>
            </Button>
            <Button asChild className="text-base bg-primary">
              <Link href="/buyers">I Want to Import</Link>
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/suppliers"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                For Suppliers
              </Link>
              <Link
                href="/buyers"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                For Buyers
              </Link>
              {/* Find Verify */}
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Verify
              </Link>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="outline" asChild>
                  <Link href="/suppliers">I Want to Export</Link>
                </Button>
                <Button asChild className="text-base bg-primary">
                  <Link href="/buyers">I Want to Import</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
