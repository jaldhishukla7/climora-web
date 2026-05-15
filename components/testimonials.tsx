"use client"

import { useEffect, useRef, useState } from "react"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    position: "Plant Manager",
    company: "MedPharma Industries",
    content: "Climora transformed our pharmaceutical facility with their cleanroom HVAC solutions. The precision in temperature and humidity control has significantly improved our production quality.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    position: "Operations Director",
    company: "FreshFoods Processing",
    content: "The energy efficiency of Climora systems exceeded our expectations. We have seen a 40% reduction in our energy bills while maintaining optimal cold storage conditions.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    position: "Technical Head",
    company: "TechData Solutions",
    content: "Our data center cooling requirements were complex, but Climora delivered a seamless solution. Their smart monitoring system gives us complete visibility and control.",
    rating: 5,
  },
]

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 md:py-32 bg-[#f8f9ff]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#2ECC9A] font-semibold text-sm uppercase tracking-wider">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B2D8E] mt-3 mb-6 text-balance">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-pretty">
            Hear from our clients about how Climora solutions have transformed their operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-[#2ECC9A]/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#2ECC9A] text-[#2ECC9A]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {`"${testimonial.content}"`}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2B2D8E] to-[#4A4CC8] flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-[#2B2D8E]">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
