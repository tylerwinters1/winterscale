import { ClipboardList, Eye, Rocket } from "lucide-react"

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-background to-black/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process delivers custom websites in record time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-violet-500/20 flex items-center justify-center mb-6">
              <ClipboardList className="h-8 w-8 text-violet-400" />
            </div>
            <div className="bg-card/30 border border-border/50 rounded-lg p-6 w-full">
              <div className="inline-block px-3 py-1 rounded-full bg-violet-500/20 text-violet-400 text-sm font-medium mb-4">
                Step 1
              </div>
              <h3 className="text-xl font-medium mb-2">Intake</h3>
              <p className="text-muted-foreground">
                Fill out our brief questionnaire about your business and design preferences.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-violet-500/20 flex items-center justify-center mb-6">
              <Eye className="h-8 w-8 text-violet-400" />
            </div>
            <div className="bg-card/30 border border-border/50 rounded-lg p-6 w-full">
              <div className="inline-block px-3 py-1 rounded-full bg-violet-500/20 text-violet-400 text-sm font-medium mb-4">
                Step 2
              </div>
              <h3 className="text-xl font-medium mb-2">Preview</h3>
              <p className="text-muted-foreground">
                Receive a custom website preview within 24 hours for your approval.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-violet-500/20 flex items-center justify-center mb-6">
              <Rocket className="h-8 w-8 text-violet-400" />
            </div>
            <div className="bg-card/30 border border-border/50 rounded-lg p-6 w-full">
              <div className="inline-block px-3 py-1 rounded-full bg-violet-500/20 text-violet-400 text-sm font-medium mb-4">
                Step 3
              </div>
              <h3 className="text-xl font-medium mb-2">Launch</h3>
              <p className="text-muted-foreground">After approval, we finalize and launch your site on your domain.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
