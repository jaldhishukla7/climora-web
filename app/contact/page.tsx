"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, ArrowLeft, CheckCircle } from "lucide-react"

const services = [
  "Air Handling Units",
  "Dehumidifiers",
  "Clean Room Systems",
  "Evaporative Cooling",
  "Fresh Air Units",
  "Fan Coil Units",
  "Industrial Scrubbers",
  "Ventilation Systems",
  "Maintenance Services",
  "Consultation",
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#f8f9ff]">
      {/* Header */}
      <header className="bg-[#2B2D8E] text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/climora-logo.png"
                alt="Climora Logo"
                width={45}
                height={45}
                className="rounded-full bg-white p-0.5"
              />
              <span className="text-xl font-bold">CLIMORA</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2B2D8E] to-[#4A4CC8] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Let&apos;s Build Your Climate Solution
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto text-pretty">
            Ready to transform your facility with advanced HVAC systems?
            Get in touch with our expert team today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 h-full flex flex-col justify-center">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-[#2ECC9A]/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-[#2ECC9A]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2B2D8E] mb-3">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Your message has been received. Our team will get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-[#2B2D8E] hover:bg-[#4A4CC8]"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-[#2B2D8E] mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we&apos;ll respond as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          required
                          className="border-border focus:border-[#2ECC9A]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          required
                          className="border-border focus:border-[#2ECC9A]"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          required
                          className="border-border focus:border-[#2ECC9A]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          placeholder="Your Company"
                          className="border-border focus:border-[#2ECC9A]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Required *</Label>
                      <Select required>
                        <SelectTrigger className="border-border focus:border-[#2ECC9A]">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, "-")}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project requirements..."
                        rows={5}
                        required
                        className="border-border focus:border-[#2ECC9A] resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#2ECC9A] hover:bg-[#25a87e] text-white font-semibold py-6"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>

            {/* Contact Info */}
            <div className="bg-[#2B2D8E] rounded-2xl p-8 md:p-10 text-white h-full flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/images/climora-logo.png"
                  alt="Climora Logo"
                  width={60}
                  height={60}
                  className="rounded-full bg-white p-1"
                />
                <div>
                  <h3 className="text-xl font-bold">CLIMORA</h3>
                  <p className="text-white/70 text-sm">Engimech Private Limited</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-8">
                Engineering cleaner air for a better tomorrow. We&apos;re here to help
                you achieve optimal climate control solutions for your facility.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#2ECC9A]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#2ECC9A]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office Address</h4>
                    <p className="text-white/70 text-sm">
                      13, Maruti Estate, Rd Number 52, Opp. Hindustan Marble,<br />
                      Near Jay Chemical, GIDC Odhav,<br />
                      Ahmedabad, Gujarat, India - 382415
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#2ECC9A]/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#2ECC9A]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a
                      href="tel:+918141848212"
                      className="text-white/70 text-sm hover:text-[#2ECC9A] transition-colors"
                    >
                      +91 81418 48212
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#2ECC9A]/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#2ECC9A]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:info@climora.com"
                      className="text-white/70 text-sm hover:text-[#2ECC9A] transition-colors"
                    >
                      info@climora.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#2ECC9A]/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-[#2ECC9A]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <p className="text-white/70 text-sm">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
            <div className="mt-12 lg:mt-16 bg-white rounded-2xl shadow-lg overflow-hidden h-[400px] md:h-[500px] relative w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9454872626943!2d72.6440636753139!3d23.02577367917152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8700bfffffff%3A0x9196c8885e84170e!2sShree%20Ambica%20Industries!5e0!3m2!1sen!2sin!4v1776878089437!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1b4b] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Climora Engimech Private Limited. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
