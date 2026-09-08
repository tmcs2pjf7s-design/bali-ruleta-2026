import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'
import Ambience from '@/components/Ambience'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SOBREMESA — 6 platos · 12 vinos',
  description:
    'Una cena a ciegas de seis actos y doce copas para doce comensales alrededor de una sola mesa. Maridaje guiado, un único pase por noche.',
  keywords: ['menú degustación', 'maridaje', 'cena', 'vino', 'tasting menu', 'wine pairing'],
  openGraph: {
    title: 'SOBREMESA',
    description: 'Seis actos. Doce copas. Una sola noche.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0806',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${dmSans.variable} ${playfair.variable}`}>
      <head>
        {/* If JS is off, framer-motion never animates: reveal everything. */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <Ambience />
        {children}
      </body>
    </html>
  )
}
