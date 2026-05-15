import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Products } from "@/components/products"
import { Industries } from "@/components/industries"
import { Sustainability } from "@/components/sustainability"
import { WhyClimora } from "@/components/why-climora"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Industries />
      <Sustainability />
      <WhyClimora />
      <Testimonials />
      <Footer />
    </main>
  )
}
