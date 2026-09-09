import type { Metadata } from 'next'
import SixWorlds from '@/components/SixWorlds'
import HtmlLang from '@/components/HtmlLang'

export const metadata: Metadata = {
  title: 'SIX WORLDS — A private gastronomic journey',
  description:
    'Six guests. Six worlds. One table. A four-hour journey through six territories — six dishes, twelve wines. Thursday and Friday nights only.',
  alternates: { canonical: '/en', languages: { es: '/', en: '/en' } },
  openGraph: {
    title: 'SIX WORLDS',
    description: 'A private gastronomic journey · 6 dishes · 12 wines · 6 guests · 4 hours',
    type: 'website',
  },
}

export default function Page() {
  return (
    <>
      <HtmlLang lang="en" />
      <SixWorlds lang="en" />
    </>
  )
}
