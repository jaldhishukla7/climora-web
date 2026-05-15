"use client"

import { useEffect, useRef, useState } from "react"
import { Wrench, Zap, GitBranch, Settings, Award, Cpu } from "lucide-react"

const features = [
  {
    icon: Wrench,
    title: "Custom Engineering",
    description: "Every solution is tailored to your specific requirements, ensuring optimal performance for your unique environment.",
    color: "#2ECC9A",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    description: "Our systems are designed to minimize energy consumption while delivering maximum climate control efficiency.",
    color: "#4A4CC8",
  },
  {
    icon: GitBranch,
    title: "End-to-End Execution",
    description: "From concept to commissioning, we handle every aspect of your HVAC project with precision and care.",
    color: "#2B2D8E",
  },
  {
    icon: Settings,
    title: "Maintenance Support",
    description: "Comprehensive after-sales service and maintenance programs to keep your systems running at peak performance.",
    color: "#2ECC9A",
  },
  {
    icon: Award,
    title: "ISO Quality Standards",
    description: "All our products and processes adhere to strict international quality standards and certifications.",
    color: "#4A4CC8",
  },
  {
    icon: Cpu,
    title: "Smart Systems",
    description: "Integration of IoT and smart controls for real-time monitoring, automation, and predictive maintenance.",
    color: "#2B2D8E",
  },
]

export function WhyClimora() {
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
    <section className="py-20 md:py-32 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#2ECC9A] font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B2D8E] mt-3 mb-6 text-balance">
            The Climora Advantage
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-pretty">
            When you partner with Climora, you gain access to unparalleled expertise, 
            cutting-edge technology, and a commitment to excellence that sets us apart.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`group relative p-8 rounded-2xl bg-[#f8f9ff] hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-[#2ECC9A]/20 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <Icon className="h-7 w-7" style={{ color: feature.color }} />
                </div>
                <h3 className="text-xl font-bold text-[#2B2D8E] mb-3 group-hover:text-[#4A4CC8] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(135deg, ${feature.color}10, transparent)` }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
