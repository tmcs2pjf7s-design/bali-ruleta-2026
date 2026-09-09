import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
})

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SIX WORLDS — A private gastronomic journey',
  description:
    'Six guests. Six worlds. One table. A four-hour journey through six destinations — six dishes, twelve wines. Thursday and Friday nights only.',
  keywords: [
    'six worlds', 'gastronomic journey', 'private dining', 'tasting experience',
    'wine pairing', 'fine dining', 'chef table',
  ],
  openGraph: {
    title: 'SIX WORLDS',
    description: 'A private gastronomic journey · 6 dishes · 12 wines · 6 guests · 4 hours',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0908',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <head>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="grain">{children}</body>
    </html>
  )
}
