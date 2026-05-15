"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, ArrowRight } from "lucide-react"

const heroSlides = [
  { src: "/images/hero-hvac.jpg", alt: "Industrial HVAC systems" },
  { src: "/images/hero-city.jpg", alt: "Smart sustainable city" },
  { src: "/images/hero-wind.jpg", alt: "Wind turbines renewable energy" },
  { src: "/images/hero-solar.jpg", alt: "Solar panels clean energy" },
  { src: "/images/hero-forest.jpg", alt: "Green forest with sunlight" },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Carousel */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.src}
          className={`hero-slide ${index === currentSlide ? "active" : ""}`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1b4b]/80 via-[#2B2D8E]/60 to-[#1a1b4b]/90" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
            Engineering Cleaner Air for a{" "}
            <span className="text-[#2ECC9A]">Better Tomorrow</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed text-pretty">
            Climora delivers advanced HVAC and climate engineering solutions designed 
            for performance, efficiency, and sustainability across industrial and 
            commercial environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#products">
              <Button
                size="lg"
                className="bg-[#2ECC9A] hover:bg-[#25a87e] text-white font-semibold px-8 py-6 text-lg group"
              >
                Explore Solutions
                <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#2B2D8E] font-semibold px-8 py-6 text-lg group bg-transparent"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-24 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-[#2ECC9A] w-8"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="text-white/70 h-8 w-8" />
        </div>
      </div>
    </section>
  )
}
