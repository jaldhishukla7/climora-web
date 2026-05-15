"use client"

import { useState, useEffect, useRef } from "react"
import { X, ChevronRight, Send } from "lucide-react"

// WhatsApp number (international format, no +)
const WA_NUMBER = "918141848212"

const products = [
  "Air Handling Units",
  "Air Washer Units",
  "Dehumidifiers",
  "Evaporative Cooling",
  "Fresh Air Units",
  "Fan Coil Units",
  "Industrial Scrubbers",
  "Clean Room Systems",
  "Ventilation Systems",
  "Exhaust Units",
]

type Step = "greeting" | "products" | "custom"

interface Message {
  from: "bot" | "user"
  text: string
}

function waLink(product: string) {
  const msg = encodeURIComponent(
    `Hi Climora Team 👋\n\nI'm interested in *${product}*.\n\nCould you please share more details, pricing, and availability?\n\nThank you!`
  )
  return `https://wa.me/${WA_NUMBER}?text=${msg}`
}

export function ChatBot() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<Step>("greeting")
  const [messages, setMessages] = useState<Message[]>([])
  const [customText, setCustomText] = useState("")
  const [pulse, setPulse] = useState(true)
  const bottomRef = useRef<HTMLDivElement>(null)

  // Stop pulsing after first open
  useEffect(() => {
    if (open) setPulse(false)
  }, [open])

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Greeting on first open
  useEffect(() => {
    if (open && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            from: "bot",
            text: "👋 Hello! Welcome to **Climora**.\n\nI'm here to help you find the right HVAC solution. How can I assist you today?",
          },
        ])
        setStep("greeting")
      }, 400)
    }
  }, [open, messages.length])

  function handleGreetingChoice(choice: "products" | "contact") {
    if (choice === "products") {
      setMessages((prev) => [
        ...prev,
        { from: "user", text: "I want to inquire about a product" },
        { from: "bot", text: "Great! Please select the product you're interested in:" },
      ])
      setStep("products")
    } else {
      setMessages((prev) => [
        ...prev,
        { from: "user", text: "I have a general inquiry" },
        { from: "bot", text: "No problem! You can reach us directly on WhatsApp. Tap below to start a conversation 👇" },
      ])
      setStep("custom")
    }
  }

  function handleProductSelect(product: string) {
    setMessages((prev) => [
      ...prev,
      { from: "user", text: product },
      {
        from: "bot",
        text: `Perfect! Tap the button below to chat with our team about **${product}** on WhatsApp. We'll respond within minutes! ⚡`,
      },
    ])
    setTimeout(() => {
      window.open(waLink(product), "_blank")
    }, 2500)
  }

  function handleCustomSend() {
    if (!customText.trim()) return
    const text = customText.trim()
    setCustomText("")
    setMessages((prev) => [...prev, { from: "user", text }])
    const msg = encodeURIComponent(`Hi Climora Team 👋\n\n${text}\n\nThank you!`)
    setTimeout(() => {
      window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank")
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Opening WhatsApp for you now... 🚀" },
      ])
    }, 2500)
  }

  function resetChat() {
    setMessages([])
    setStep("greeting")
  }

  // Render message text with basic bold (**text**)
  function renderText(text: string) {
    const parts = text.split(/\*\*(.+?)\*\*/g)
    return parts.map((part, i) =>
      i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>
    )
  }

  return (
    <>
      {/* ── Floating Button ── */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open WhatsApp chat"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
        style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
      >
        {/* Pulse ring */}
        {pulse && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-60" />
        )}
        {open ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          /* WhatsApp SVG icon */
          <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.773L0 32l8.473-2.004A15.94 15.94 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.406 22.594c-.35.984-2.04 1.883-2.812 2-.725.109-1.637.156-2.641-.166-1.625-.516-3.3-1.875-4.969-3.3C11.25 18.98 9.25 16.28 8.75 14.812c-.5-1.469-.031-2.594.219-2.875.25-.281.543-.344.73-.344h.624c.188 0 .438.031.688.594.25.563.844 2.063.906 2.219.063.156.094.344-.031.531-.125.188-.188.313-.375.5-.188.188-.406.406-.563.531-.188.156-.375.344-.156.688.219.344 1 1.563 2.156 2.531 1.531 1.281 2.813 1.781 3.063 1.875.25.094.438.094.594-.063.156-.156.625-.75.813-1 .156-.25.344-.219.563-.125.219.094 1.406.656 1.656.781.25.125.406.188.469.281.063.125.063.719-.281 1.703z" />
          </svg>
        )}
      </button>

      {/* ── Chat Window ── */}
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[360px] max-h-[520px] flex flex-col rounded-2xl shadow-2xl overflow-hidden border border-white/10"
          style={{ background: "#ECE5DD" }}>

          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3" style={{ background: "linear-gradient(135deg, #128C7E, #25D366)" }}>
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 32 32" className="h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.773L0 32l8.473-2.004A15.94 15.94 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.406 22.594c-.35.984-2.04 1.883-2.812 2-.725.109-1.637.156-2.641-.166-1.625-.516-3.3-1.875-4.969-3.3C11.25 18.98 9.25 16.28 8.75 14.812c-.5-1.469-.031-2.594.219-2.875.25-.281.543-.344.73-.344h.624c.188 0 .438.031.688.594.25.563.844 2.063.906 2.219.063.156.094.344-.031.531-.125.188-.188.313-.375.5-.188.188-.406.406-.563.531-.188.156-.375.344-.156.688.219.344 1 1.563 2.156 2.531 1.531 1.281 2.813 1.781 3.063 1.875.25.094.438.094.594-.063.156-.156.625-.75.813-1 .156-.25.344-.219.563-.125.219.094 1.406.656 1.656.781.25.125.406.188.469.281.063.125.063.719-.281 1.703z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm leading-tight">Climora Support</p>
              <p className="text-white/80 text-xs">Typically replies in minutes</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={resetChat} className="text-white/70 hover:text-white text-xs underline transition-colors" title="Start over">
                Reset
              </button>
              <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white transition-colors ml-1">
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-4 space-y-3 min-h-0" style={{ maxHeight: "280px" }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.from === "user"
                      ? "text-white rounded-br-sm"
                      : "text-gray-800 rounded-bl-sm"
                  }`}
                  style={{
                    background: msg.from === "user" ? "#25D366" : "#FFFFFF",
                  }}
                >
                  {renderText(msg.text)}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Action Area */}
          <div className="px-3 py-3 space-y-2" style={{ background: "#f0f0f0" }}>

            {/* Step: Greeting choices */}
            {step === "greeting" && messages.length > 0 && (
              <div className="space-y-2">
                <button
                  onClick={() => handleGreetingChoice("products")}
                  className="w-full flex items-center justify-between px-4 py-2.5 bg-white rounded-xl text-sm font-medium text-[#128C7E] border border-[#25D366]/30 hover:bg-[#25D366]/10 transition-colors shadow-sm"
                >
                  <span>🔧 Inquire about a Product</span>
                  <ChevronRight size={16} />
                </button>
                <button
                  onClick={() => handleGreetingChoice("contact")}
                  className="w-full flex items-center justify-between px-4 py-2.5 bg-white rounded-xl text-sm font-medium text-[#128C7E] border border-[#25D366]/30 hover:bg-[#25D366]/10 transition-colors shadow-sm"
                >
                  <span>💬 General Inquiry</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            )}

            {/* Step: Product list */}
            {step === "products" && (
              <div className="max-h-[200px] overflow-y-auto space-y-1.5 pr-0.5">
                {products.map((p) => (
                  <button
                    key={p}
                    onClick={() => handleProductSelect(p)}
                    className="w-full flex items-center justify-between px-4 py-2.5 bg-white rounded-xl text-sm font-medium text-gray-700 border border-gray-200 hover:border-[#25D366] hover:text-[#128C7E] hover:bg-[#25D366]/5 transition-all shadow-sm text-left"
                  >
                    <span>{p}</span>
                    <ChevronRight size={14} className="shrink-0 text-gray-400" />
                  </button>
                ))}
              </div>
            )}

            {/* Step: Custom / General message */}
            {step === "custom" && (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleCustomSend()}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 rounded-xl text-sm border border-gray-200 bg-white focus:outline-none focus:border-[#25D366]"
                />
                <button
                  onClick={handleCustomSend}
                  disabled={!customText.trim()}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white disabled:opacity-40 transition-opacity"
                  style={{ background: "linear-gradient(135deg, #128C7E, #25D366)" }}
                >
                  <Send size={16} />
                </button>
              </div>
            )}

            {/* Open WhatsApp directly after product selected */}
            {step === "products" && messages.some((m) => m.from === "user" && products.includes(m.text)) && (
              <a
                href={waLink(messages.filter((m) => m.from === "user" && products.includes(m.text)).slice(-1)[0]?.text || "")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-white font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #128C7E, #25D366)" }}
              >
                <svg viewBox="0 0 32 32" className="h-4 w-4 fill-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.773L0 32l8.473-2.004A15.94 15.94 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.406 22.594c-.35.984-2.04 1.883-2.812 2-.725.109-1.637.156-2.641-.166-1.625-.516-3.3-1.875-4.969-3.3C11.25 18.98 9.25 16.28 8.75 14.812c-.5-1.469-.031-2.594.219-2.875.25-.281.543-.344.73-.344h.624c.188 0 .438.031.688.594.25.563.844 2.063.906 2.219.063.156.094.344-.031.531-.125.188-.188.313-.375.5-.188.188-.406.406-.563.531-.188.156-.375.344-.156.688.219.344 1 1.563 2.156 2.531 1.531 1.281 2.813 1.781 3.063 1.875.25.094.438.094.594-.063.156-.156.625-.75.813-1 .156-.25.344-.219.563-.125.219.094 1.406.656 1.656.781.25.125.406.188.469.281.063.125.063.719-.281 1.703z" />
                </svg>
                Chat on WhatsApp
              </a>
            )}
          </div>
        </div>
      )}
    </>
  )
}
