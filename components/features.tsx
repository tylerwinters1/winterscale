import { Smartphone, Search, Zap } from "lucide-react"

export default function Features() {
  return (
    <section className="py-16 bg-black/20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 transition-colors">
            <div className="h-12 w-12 rounded-full bg-violet-500/20 flex items-center justify-center mb-4">
              <Smartphone className="h-6 w-6 text-violet-400" />
            </div>
            <h3 className="text-xl font-medium mb-2">Mobile-Optimized</h3>
            <p className="text-muted-foreground">
              Responsive designs that look perfect on every device, from phones to desktops.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 transition-colors">
            <div className="h-12 w-12 rounded-full bg-violet-500/20 flex items-center justify-center mb-4">
              <Search className="h-6 w-6 text-violet-400" />
            </div>
            <h3 className="text-xl font-medium mb-2">SEO-Ready</h3>
            <p className="text-muted-foreground">
              Built with search engines in mind to help your business get discovered online.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 transition-colors">
            <div className="h-12 w-12 rounded-full bg-violet-500/20 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-violet-400" />
            </div>
            <h3 className="text-xl font-medium mb-2">Fast Delivery</h3>
            <p className="text-muted-foreground">
              Get your website in just 24 hours, not weeks or months like traditional agencies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
