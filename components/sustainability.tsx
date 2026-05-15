"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Leaf, Zap, Recycle, Cpu, TrendingDown, Globe } from "lucide-react"

const sustainabilityStats = [
  { icon: TrendingDown, value: "80%", label: "Energy Savings Potential" },
  { icon: Recycle, value: "100%", label: "Eco-Friendly Refrigerants" },
  { icon: Cpu, value: "24/7", label: "Smart Automation" },
  { icon: Globe, value: "Net Zero", label: "Carbon Commitment" },
]

const features = [
  {
    icon: Zap,
    title: "Energy Efficient Design",
    description: "Our systems are engineered to minimize energy consumption while maximizing performance output.",
  },
  {
    icon: Leaf,
    title: "Green Technology",
    description: "We utilize eco-friendly refrigerants and sustainable materials in all our installations.",
  },
  {
    icon: Cpu,
    title: "Smart Automation",
    description: "Intelligent controls and IoT integration for optimized operation and reduced waste.",
  },
]

export function Sustainability() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="sustainability" className="py-20 md:py-32 bg-[#1a1b4b] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#2ECC9A] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4A4CC8] rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <span className="text-[#2ECC9A] font-semibold text-sm uppercase tracking-wider">
              Our Commitment
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-6 text-balance">
              Engineering a{" "}
              <span className="text-[#2ECC9A]">Sustainable</span> Future
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              At Climora, sustainability is not an afterthought—it is the foundation 
              of every solution we design. We believe that exceptional climate control 
              and environmental responsibility can coexist, driving us to continuously 
              innovate for a greener tomorrow.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={feature.title}
                    className={`flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#2ECC9A]/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-[#2ECC9A]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-white/60 text-sm">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Image Side */}
          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/sustainability.jpg"
                alt="Renewable Energy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b4b] via-transparent to-transparent" />
            </div>

            {/* Stats Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="grid grid-cols-2 gap-4">
                {sustainabilityStats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div
                      key={stat.label}
                      className={`glass rounded-xl p-4 text-center transition-all duration-500 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: `${(index + 3) * 150}ms` }}
                    >
                      <Icon className="h-6 w-6 text-[#2ECC9A] mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-white/60">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
