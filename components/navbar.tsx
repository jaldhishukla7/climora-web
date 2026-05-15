"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#industries", label: "Industries" },
  { href: "#sustainability", label: "Sustainability" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300">
      {/* Top Contact Bar */}
      <div
        className={`bg-[#1a1b4b] text-white/90 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm flex justify-center md:justify-between items-center transition-all duration-300 ${isScrolled ? "h-0 py-0 opacity-0 overflow-hidden" : "h-10 py-2 opacity-100"
          }`}
      >
        <div className="flex gap-4 sm:gap-6 items-center"
          style={{
            marginLeft: "125px",
          }}>
          <div className="flex items-center gap-2 hover:text-[#2ECC9A] transition-colors cursor-pointer">
            <Phone size={14} />
            <span>+91 81418 48212</span>
          </div>
          <div className="flex items-center gap-2 hover:text-[#2ECC9A] transition-colors cursor-pointer">
            <Mail size={14} />
            <span>info@climora.com</span>
          </div>
        </div>
        <div className="hidden md:block" style={{
          marginRight: "125px",
        }}>
          Excellence in HVAC Solutions Since 2022
        </div>
      </div>

      <nav
        className={`w-full transition-all duration-300 ${isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-3">
              <Image
                src="/images/climora-logo.png"
                alt="Climora Logo"
                width={50}
                height={50}
                className="rounded-full"
                priority
              />
              <span
                className={`text-xl font-bold transition-colors ${isScrolled ? "text-[#2B2D8E]" : "text-white"
                  }`}
              >
                CLIMORA
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[#2ECC9A] ${isScrolled ? "text-[#2B2D8E]" : "text-white"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Contact Button */}
            <div className="hidden md:block">
              <Link href="/contact" target="_blank" rel="noopener noreferrer">
                <Button
                  className="bg-[#2ECC9A] hover:bg-[#25a87e] text-white font-medium px-6"
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={isScrolled ? "text-[#2B2D8E]" : "text-white"} size={24} />
              ) : (
                <Menu className={isScrolled ? "text-[#2B2D8E]" : "text-white"} size={24} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 p-4 animate-scale-in">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[#2B2D8E] font-medium hover:text-[#2ECC9A] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="w-full bg-[#2ECC9A] hover:bg-[#25a87e] text-white">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
