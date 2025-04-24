import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const pricingPlans = [
  {
    name: "Basic",
    price: "$497",
    description: "Perfect for small businesses and personal brands",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Contact form",
      "Basic SEO setup",
      "1 revision round",
      "Delivery in 24 hours",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Business",
    price: "$997",
    description: "Ideal for growing businesses with more needs",
    features: [
      "Up to 10 pages",
      "Mobile responsive design",
      "Contact form & newsletter signup",
      "Advanced SEO optimization",
      "2 revision rounds",
      "Social media integration",
      "Basic analytics setup",
      "Delivery in 24 hours",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Funnel",
    price: "$1,497",
    description: "Complete solution for sales-focused businesses",
    features: [
      "Multi-page sales funnel",
      "Mobile responsive design",
      "Lead capture forms",
      "Payment integration",
      "Advanced SEO optimization",
      "3 revision rounds",
      "Conversion tracking",
      "A/B testing setup",
      "Delivery in 24-48 hours",
    ],
    cta: "Get Started",
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-black/20 to-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl border ${
                plan.popular ? "border-violet-500 bg-card/40" : "border-border/50 bg-card/30"
              } p-6 flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="inline-block bg-violet-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">one-time</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-violet-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={plan.popular ? "bg-violet-600 hover:bg-violet-700" : ""}
                variant={plan.popular ? "default" : "outline"}
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-muted-foreground">
          <p>All plans include hosting setup assistance and 30 days of support.</p>
          <p className="mt-2">
            Not sure which plan is right for you?{" "}
            <a href="#contact" className="text-violet-400 hover:underline">
              Contact us
            </a>{" "}
            for a custom quote.
          </p>
        </div>
      </div>
    </section>
  )
}
