"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Wind, Droplets, Thermometer, Fan, Cloud, Snowflake, Factory, Building2, Gauge, ArrowUpFromLine, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Product {
  icon: LucideIcon
  title: string
  description: string
  image: string
  slug: string
}

const products: Product[] = [
  {
    icon: Wind,
    title: "Air Handling Units",
    description: "Precision-engineered AHUs designed for optimal air quality, temperature control, and energy efficiency in demanding industrial environments.",
    image: "/images/products/ahu.jpg",
    slug: "air-handling-units",
  },
  {
    icon: Droplets,
    title: "Air Washer Units",
    description: "Advanced air washing systems that combine humidification and air cleaning for improved indoor air quality and comfort.",
    image: "/images/products/air-washer.jpg",
    slug: "air-washer-units",
  },
  {
    icon: Thermometer,
    title: "Dehumidifiers",
    description: "Industrial-grade dehumidification systems ensuring precise humidity control for sensitive manufacturing processes.",
    image: "/images/products/dehumidifier.jpg",
    slug: "dehumidifiers",
  },
  {
    icon: Snowflake,
    title: "Evaporative Cooling",
    description: "Eco-friendly cooling solutions utilizing natural evaporation processes for sustainable temperature management.",
    image: "/images/products/evaporative.jpg",
    slug: "evaporative-cooling",
  },
  {
    icon: Cloud,
    title: "Fresh Air Units",
    description: "High-performance fresh air handling systems providing continuous ventilation with energy recovery capabilities.",
    image: "/images/products/fresh-air.jpg",
    slug: "fresh-air-units",
  },
  {
    icon: Fan,
    title: "Fan Coil Units",
    description: "Compact and efficient FCUs delivering precise zone-level heating and cooling for commercial spaces.",
    image: "/images/products/fcu.jpg",
    slug: "fan-coil-units",
  },
  {
    icon: Factory,
    title: "Industrial Scrubbers",
    description: "Advanced pollution control systems removing harmful particles and gases from industrial exhaust streams.",
    image: "/images/products/scrubber.jpg",
    slug: "industrial-scrubbers",
  },
  {
    icon: Building2,
    title: "Clean Room Systems",
    description: "Complete cleanroom HVAC solutions meeting ISO standards for pharmaceutical and semiconductor facilities.",
    image: "/images/products/cleanroom.jpg",
    slug: "clean-room-systems",
  },
  {
    icon: Gauge,
    title: "Ventilation Systems",
    description: "Comprehensive ventilation engineering for factories, warehouses, and commercial buildings.",
    image: "/images/products/ventilation.jpg",
    slug: "ventilation-systems",
  },
  {
    icon: ArrowUpFromLine,
    title: "Exhaust Units",
    description: "High-performance exhaust units designed to efficiently remove stale air, heat, fumes, and contaminants from industrial and commercial spaces.",
    image: "/images/products/exhaust-unit.jpg",
    slug: "exhaust-units",
  },
]

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const Icon = product.icon

  return (
    <Link
      href={`/products/${product.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref as React.Ref<HTMLAnchorElement>}
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 block ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B2D8E]/80 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <div className="w-12 h-12 rounded-full bg-[#2ECC9A] flex items-center justify-center shadow-lg">
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#2B2D8E] mb-3 group-hover:text-[#4A4CC8] transition-colors">
          {product.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {product.description}
        </p>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2ECC9A] group-hover:gap-2.5 transition-all">
          View Details <ArrowRight size={14} />
        </span>
      </div>
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#2ECC9A]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
    </Link>
  )
}

export function Products() {
  return (
    <section id="products" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#2ECC9A] font-semibold text-sm uppercase tracking-wider">
            Our Solutions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B2D8E] mt-3 mb-6 text-balance">
            Comprehensive HVAC Product Range
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-pretty">
            From precision air handling to complete cleanroom solutions, Climora offers 
            a full spectrum of climate control products engineered for excellence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.title} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
