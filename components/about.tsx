"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Lightbulb, Target, Users } from "lucide-react"

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Industries Served" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const duration = 2000
          const increment = value / (duration / 16)

          const timer = setInterval(() => {
            start += increment
            if (start >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-[#2ECC9A]">
      {count}
      {suffix}
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-hvac.jpg"
                alt="Climora HVAC Engineering"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2D8E]/40 to-transparent" />
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 animate-float">
              <div className="text-3xl font-bold text-[#2B2D8E]">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="absolute -top-6 -left-6 bg-[#2B2D8E] rounded-xl shadow-xl p-6 animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-3xl font-bold text-[#2ECC9A]">2+</div>
              <div className="text-sm text-white">Years of Excellence</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-[#2ECC9A] font-semibold text-sm uppercase tracking-wider">
              About Climora
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B2D8E] mt-3 mb-6 text-balance">
              Where Climate Science Meets Engineering Innovation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Climora represents the perfect blend of climate expertise and innovative 
              engineering. Founded with a vision to transform industrial environments, 
              we specialize in designing and delivering cutting-edge HVAC solutions 
              that prioritize both performance and environmental responsibility.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our team brings together decades of combined experience in pharmaceutical, 
              cleanroom, and industrial climate control systems. We understand that 
              every facility has unique requirements, which is why we approach each 
              project with customized solutions tailored to your specific needs.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#2ECC9A]/10 flex items-center justify-center mb-3">
                  <Lightbulb className="h-6 w-6 text-[#2ECC9A]" />
                </div>
                <h3 className="font-semibold text-[#2B2D8E]">Innovation First</h3>
                <p className="text-sm text-muted-foreground mt-1">Cutting-edge solutions</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#4A4CC8]/10 flex items-center justify-center mb-3">
                  <Target className="h-6 w-6 text-[#4A4CC8]" />
                </div>
                <h3 className="font-semibold text-[#2B2D8E]">Precision Focus</h3>
                <p className="text-sm text-muted-foreground mt-1">Accurate engineering</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#2B2D8E]/10 flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-[#2B2D8E]" />
                </div>
                <h3 className="font-semibold text-[#2B2D8E]">Expert Team</h3>
                <p className="text-sm text-muted-foreground mt-1">Industry veterans</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
