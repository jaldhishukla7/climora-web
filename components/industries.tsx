"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Pill, UtensilsCrossed, FlaskConical, Shirt, Server, Building, Hotel } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Industry {
  icon: LucideIcon
  title: string
  description: string
  image: string
  features: string[]
}

const industries: Industry[] = [
  {
    icon: Pill,
    title: "Pharmaceutical",
    description: "GMP-compliant HVAC systems ensuring sterile environments for drug manufacturing and research facilities.",
    image: "/images/industries/pharma.jpg",
    features: ["ISO Cleanrooms", "HEPA Filtration", "Pressure Cascading"],
  },
  {
    icon: UtensilsCrossed,
    title: "Food Processing",
    description: "Temperature and humidity control solutions maintaining food safety and quality standards.",
    image: "/images/industries/food.jpg",
    features: ["HACCP Compliant", "Cold Chain", "Hygienic Design"],
  },
  {
    icon: FlaskConical,
    title: "Chemical",
    description: "Specialized ventilation and air treatment systems for chemical processing facilities.",
    image: "/images/industries/chemical.jpg",
    features: ["Corrosion Resistant", "Fume Extraction", "Safety Controls"],
  },
  {
    icon: Shirt,
    title: "Textile",
    description: "Precision humidity control systems essential for textile manufacturing processes.",
    image: "/images/industries/textile.jpg",
    features: ["Humidity Control", "Dust Management", "Process Cooling"],
  },
  {
    icon: Server,
    title: "Data Centers",
    description: "High-efficiency cooling solutions ensuring optimal server performance and reliability.",
    image: "/images/industries/datacenter.jpg",
    features: ["Precision Cooling", "Hot/Cold Aisle", "Redundancy"],
  },
  {
    icon: Building,
    title: "Commercial",
    description: "Energy-efficient HVAC systems for offices, malls, hospitals, and hospitality venues.",
    image: "/images/industries/commercial.jpg",
    features: ["Energy Efficient", "Comfort Zones", "Smart Controls"],
  },
  {
    icon: Hotel,
    title: "Hotels & Restaurants",
    description: "Premium climate control systems for hotels and restaurants ensuring guest comfort, kitchen ventilation, and indoor air quality.",
    image: "/images/industries/hotels.jpg",
    features: ["Guest Comfort", "Kitchen Exhaust", "Odour Control"],
  },
]

function IndustryCard({ industry, index }: { industry: Industry; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isActive, setIsActive] = useState(false)
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

  // Close when clicking outside this card
  useEffect(() => {
    if (!isActive) return
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsActive(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isActive])

  const Icon = industry.icon

  return (
    <div
      ref={ref}
      className={`group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer select-none ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } transition-all duration-500`}
      style={{ transitionDelay: `${index * 100}ms` }}
      // Desktop: hover
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      // Mobile: tap to toggle
      onClick={() => setIsActive((prev) => !prev)}
    >
      {/* Background Image */}
      <Image
        src={industry.image}
        alt={industry.title}
        fill
        className={`object-cover transition-transform duration-700 ${
          isActive ? "scale-110" : "scale-100"
        }`}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isActive
            ? "bg-gradient-to-t from-[#2B2D8E] via-[#2B2D8E]/80 to-[#2B2D8E]/40"
            : "bg-gradient-to-t from-[#1a1b4b]/90 via-[#2B2D8E]/50 to-transparent"
        }`}
      />

      {/* Tap hint badge — only on mobile when not active */}
      <div
        className={`absolute top-4 right-4 md:hidden transition-opacity duration-300 ${
          isActive ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
          Tap to explore
        </span>
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className={`transform transition-transform duration-500 ${isActive ? "-translate-y-4" : ""}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-[#2ECC9A] flex items-center justify-center">
              <Icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">{industry.title}</h3>
          </div>

          <p
            className={`text-white/90 text-sm leading-relaxed transition-all duration-500 ${
              isActive ? "opacity-100 max-h-24" : "opacity-0 max-h-0"
            } overflow-hidden`}
          >
            {industry.description}
          </p>

          <div
            className={`flex flex-wrap gap-2 mt-4 transition-all duration-500 ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            {industry.features.map((feature) => (
              <span
                key={feature}
                className="px-3 py-1 bg-[#2ECC9A]/20 border border-[#2ECC9A]/40 rounded-full text-xs text-[#2ECC9A] font-medium"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Industries() {
  return (
    <section id="industries" className="py-20 md:py-32 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#2ECC9A] font-semibold text-sm uppercase tracking-wider">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B2D8E] mt-3 mb-6 text-balance">
            Specialized Solutions Across Sectors
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-pretty">
            From pharmaceutical cleanrooms to data center cooling, Climora delivers
            tailored HVAC solutions that meet the unique demands of each industry.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.title} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
