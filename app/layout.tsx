import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'

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
  themeColor: '#fbf8f3',
  colorScheme: 'light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${dmSans.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}
