"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
              Winterscale Media
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#how-it-works" className="text-sm font-medium hover:text-violet-400 transition-colors">
            How It Works
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-violet-400 transition-colors">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-violet-400 transition-colors">
            Pricing
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-violet-400 transition-colors">
            Contact
          </Link>
          <Button variant="default" className="bg-violet-600 hover:bg-violet-700">
            Get a Free Preview
          </Button>
        </nav>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden container py-4 bg-background border-b border-border/40">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-violet-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-violet-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:text-violet-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-violet-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              variant="default"
              className="bg-violet-600 hover:bg-violet-700 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Free Preview
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
