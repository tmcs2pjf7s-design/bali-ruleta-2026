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
  title: 'SIX WORLDS',
  description:
    'Seis comensales. Seis mundos. Una mesa. Un viaje gastronómico privado de cuatro horas — seis platos, doce vinos.',
  keywords: [
    'six worlds', 'viaje gastronómico', 'cena privada', 'menú degustación',
    'maridaje', 'alta cocina', 'mesa del chef', 'gastronomic journey', 'private dining',
  ],
  openGraph: {
    title: 'SIX WORLDS',
    description: 'Un viaje gastronómico privado · 6 platos · 12 vinos · 6 comensales · 4 horas',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0908',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <head>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="grain">{children}</body>
    </html>
  )
}
