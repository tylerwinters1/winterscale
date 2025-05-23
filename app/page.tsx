import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
