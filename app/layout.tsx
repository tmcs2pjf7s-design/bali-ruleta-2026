import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'
import GlobalEffects from '@/components/GlobalEffects'

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
  title: 'CRIMS — Investigación Criminal Interactiva',
  description: 'Explora casos criminales reales. Analiza pruebas, interroga sospechosos y resuelve el misterio. Una experiencia de documental interactivo.',
  keywords: ['crímenes', 'investigación', 'casos reales', 'detective', 'true crime'],
  openGraph: {
    title: 'CRIMS',
    description: 'Investigación criminal interactiva',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#080810',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${dmSans.variable} ${playfair.variable}`}>
      <body>
        <GlobalEffects />
        {children}
      </body>
    </html>
  )
}
