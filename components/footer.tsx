import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black/40 border-t border-border/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
                Winterscale Media
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              We use AI + automation to build high-converting websites in record time. Custom designs delivered in 24
              hours.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-violet-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-violet-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-violet-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-violet-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#how-it-works" className="text-muted-foreground hover:text-violet-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-muted-foreground hover:text-violet-400 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-muted-foreground hover:text-violet-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-violet-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-violet-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-violet-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-violet-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Winterscale Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
