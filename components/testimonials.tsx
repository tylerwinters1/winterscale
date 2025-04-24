"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Founder, Bloom Boutique",
    content:
      "I was skeptical about getting a website so quickly, but Winterscale Media delivered beyond my expectations. The site looks professional and has already brought in new customers.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO, TechStart Inc.",
    content:
      "The speed and quality of service is unmatched. Our new website perfectly captures our brand and the AI-powered features have significantly improved our conversion rates.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Marketing Director, Elevate Fitness",
    content:
      "Working with Winterscale Media was effortless. They took our basic ideas and transformed them into a stunning website that our clients love. The 24-hour turnaround is a game-changer.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const handlePrevious = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-black/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — hear from businesses we've helped
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl bg-card/30 border border-border/50 p-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                    <Avatar className="h-16 w-16 mb-4">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            <Button variant="outline" size="icon" onClick={handlePrevious} aria-label="Previous testimonial">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className={`w-8 h-8 p-0 ${index === activeIndex ? "bg-violet-600 text-white border-violet-600" : ""}`}
                onClick={() => {
                  setAutoplay(false)
                  setActiveIndex(index)
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                {index + 1}
              </Button>
            ))}
            <Button variant="outline" size="icon" onClick={handleNext} aria-label="Next testimonial">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
