"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 bg-black/20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to transform your online presence? Contact us today for a free consultation.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-violet-400 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Email Us</h3>
                  <p className="text-muted-foreground">hello@winterscalemedia.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-violet-400 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Call Us</h3>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-violet-400 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Visit Us</h3>
                  <p className="text-muted-foreground">123 Design Street, Digital City</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card/30 border border-border/50 rounded-xl p-6 md:p-8">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="h-16 w-16 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="h-8 w-8 text-violet-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium">
                    Interested In
                  </label>
                  <Select name="service">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic Website</SelectItem>
                      <SelectItem value="business">Business Website</SelectItem>
                      <SelectItem value="funnel">Sales Funnel</SelectItem>
                      <SelectItem value="custom">Custom Project</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" name="message" placeholder="Tell us about your project..." rows={5} required />
                </div>

                <Button type="submit" className="w-full bg-violet-600 hover:bg-violet-700" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
