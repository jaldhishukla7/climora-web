import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, ChevronRight, Mail, Phone } from "lucide-react"
import { allProducts, getProductBySlug } from "@/lib/products-data"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return allProducts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  return {
    title: `${product.title} | Climora`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ── Sticky Header ── */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo → home */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/climora-logo.png"
              alt="Climora"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
            <span className="text-lg font-bold text-[#2B2D8E] hidden sm:inline">CLIMORA</span>
          </Link>

          {/* Back + Contact */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2B2D8E] hover:text-[#2ECC9A] transition-colors"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Home</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2ECC9A] hover:bg-[#25a87e] text-white text-sm font-semibold rounded-full transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative h-[55vh] min-h-[340px] overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b4b] via-[#2B2D8E]/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-white/60 text-xs mb-4">
            <Link href="/" className="hover:text-[#2ECC9A] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/#products" className="hover:text-[#2ECC9A] transition-colors">Products</Link>
            <ChevronRight size={12} />
            <span className="text-white/90">{product.title}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
            {product.title}
          </h1>
          <p className="text-[#2ECC9A] text-lg font-medium">{product.tagline}</p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Overview */}
        <section className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-[#2ECC9A] font-semibold text-sm uppercase tracking-wider">Overview</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2B2D8E] mt-2 mb-5">
              What is a {product.title}?
            </h2>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              {product.longDescription}
            </p>
          </div>

          {/* Key Features */}
          <div className="bg-[#f8f9ff] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-[#2B2D8E] mb-5">Key Features</h3>
            <ul className="space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#2ECC9A] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Benefits */}
        <section>
          <div className="text-center mb-10">
            <span className="text-[#2ECC9A] font-semibold text-sm uppercase tracking-wider">Why Choose Climora</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2B2D8E] mt-2">Key Benefits</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {product.benefits.map((b, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#2ECC9A]/15 flex items-center justify-center mb-4">
                  <span className="text-[#2ECC9A] font-bold text-sm">{i + 1}</span>
                </div>
                <h3 className="font-bold text-[#2B2D8E] mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Specifications */}
        <section>
          <div className="text-center mb-10">
            <span className="text-[#2ECC9A] font-semibold text-sm uppercase tracking-wider">Technical Data</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2B2D8E] mt-2">Specifications</h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#2B2D8E] text-white">
                  <th className="text-left px-6 py-4 font-semibold w-1/2">Parameter</th>
                  <th className="text-left px-6 py-4 font-semibold w-1/2">Value</th>
                </tr>
              </thead>
              <tbody>
                {product.specifications.map((spec, i) => (
                  <tr key={spec.label} className={i % 2 === 0 ? "bg-white" : "bg-[#f8f9ff]"}>
                    <td className="px-6 py-4 text-gray-700 font-medium border-b border-gray-100">{spec.label}</td>
                    <td className="px-6 py-4 text-gray-600 border-b border-gray-100">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Applications */}
        <section className="bg-[#2B2D8E] rounded-3xl p-8 sm:p-12">
          <div className="text-center mb-10">
            <span className="text-[#2ECC9A] font-semibold text-sm uppercase tracking-wider">Industries</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">Applications</h2>
            <p className="text-white/70 mt-2 text-sm">Where Climora {product.title} deliver results</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.applications.map((app) => (
              <div key={app} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                <div className="w-2 h-2 rounded-full bg-[#2ECC9A] shrink-0" />
                <span className="text-white text-sm font-medium">{app}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-[#f8f9ff] rounded-3xl p-10 sm:p-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2B2D8E] mb-3">
            Ready to get started?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Talk to our engineers about your {product.title.toLowerCase()} requirements. We'll design the right solution for your facility.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#2B2D8E] hover:bg-[#4A4CC8] text-white font-semibold rounded-full transition-colors"
            >
              <Mail size={16} />
              Get a Quote
            </Link>
            <a
              href="tel:+918141848212"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#2ECC9A] hover:bg-[#25a87e] text-white font-semibold rounded-full transition-colors"
            >
              <Phone size={16} />
              Call Us Now
            </a>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-100 py-8 mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/climora-logo.png" alt="Climora" width={32} height={32} className="rounded-full" />
            <span className="text-sm font-bold text-[#2B2D8E]">CLIMORA</span>
          </Link>
          <p className="text-gray-500 text-xs text-center">
            © {new Date().getFullYear()} Climora Engimech Pvt. Ltd. All rights reserved.
          </p>
          <Link href="/" className="text-sm text-[#2B2D8E] hover:text-[#2ECC9A] font-medium transition-colors">
            ← Back to Home
          </Link>
        </div>
      </footer>
    </div>
  )
}
