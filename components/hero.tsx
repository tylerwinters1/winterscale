import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 to-background pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Custom Websites Delivered in 24 Hours
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            We use AI + automation to build high-converting sites fast. Pay only if you love it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white">
              Get a Free Preview
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Examples
            </Button>
          </div>

          {/* Decorative element */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </div>
    </section>
  )
}
