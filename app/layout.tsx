import type { Metadata, Viewport } from 'next'
import { Sora, DM_Sans, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const sora = Sora({ 
  subsets: ["latin"],
  variable: "--font-sora",
})

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://climora.in'),
  title: 'Climora | Blend of Climate and Innovation',
  description: 'Climora delivers advanced HVAC and climate engineering solutions designed for performance, efficiency, and sustainability across industrial and commercial environments.',
  keywords: ['HVAC', 'climate control', 'air handling units', 'cleanroom', 'industrial cooling', 'sustainability', 'Climora'],
  authors: [{ name: 'Climora Engimech Private Limited' }],
  creator: 'Climora',
  icons: {
    icon: [
      {
        url: '/images/climora-logo.png',
        type: 'image/png',
      },
    ],
    apple: '/images/climora-logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://climora.com',
    siteName: 'Climora',
    title: 'Climora | Blend of Climate and Innovation',
    description: 'Engineering cleaner air for a better tomorrow. Advanced HVAC solutions for industrial and commercial environments.',
    images: [
      {
        url: '/images/climora-logo.png',
        width: 512,
        height: 512,
        alt: 'Climora Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Climora | Blend of Climate and Innovation',
    description: 'Engineering cleaner air for a better tomorrow.',
    images: ['/images/climora-logo.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#2B2D8E',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable} ${spaceMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
