import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#industries", label: "Industries" },
  { href: "#sustainability", label: "Sustainability" },
]

const products = [
  "Air Handling Units",
  "Dehumidifiers",
  "Clean Rooms",
  "Evaporative Cooling",
  "Ventilation Systems",
]

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="bg-[#1a1b4b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/climora-logo.png"
                alt="Climora Logo"
                width={50}
                height={50}
                className="rounded-full bg-white p-1"
              />
              <span className="text-2xl font-bold">CLIMORA</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Blend of Climate and Innovation. Engineering advanced HVAC solutions 
              for a sustainable future.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2ECC9A] transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#2ECC9A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Products</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <Link
                    href="#products"
                    className="text-white/70 hover:text-[#2ECC9A] transition-colors"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#2ECC9A] flex-shrink-0 mt-0.5" />
                <span className="text-white/70">
                  13, Maruti Estate, Rd Number 52, Opp. Hindustan Marble,<br />
                  Near Jay Chemical, GIDC Odhav,<br />
                  Ahmedabad, Gujarat, India - 382415
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#2ECC9A] flex-shrink-0" />
                <a
                  href="tel:+918141848212"
                  className="text-white/70 hover:text-[#2ECC9A] transition-colors"
                >
                  +91 81418 48212
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#2ECC9A] flex-shrink-0" />
                <a
                  href="mailto:info@climora.com"
                  className="text-white/70 hover:text-[#2ECC9A] transition-colors"
                >
                  info@climora.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Climora Engimech Private Limited. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-white/50 hover:text-[#2ECC9A] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/50 hover:text-[#2ECC9A] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
