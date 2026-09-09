import type { Metadata } from 'next'
import SixWorlds from '@/components/SixWorlds'

export const metadata: Metadata = {
  title: 'SIX WORLDS — Un viaje gastronómico privado',
  description:
    'Seis comensales. Seis mundos. Una mesa. Un viaje de cuatro horas por seis territorios — seis platos, doce vinos. Solo jueves y viernes por la noche.',
  alternates: { canonical: '/', languages: { es: '/', en: '/en' } },
  openGraph: {
    title: 'SIX WORLDS',
    description: 'Un viaje gastronómico privado · 6 platos · 12 vinos · 6 comensales · 4 horas',
    type: 'website',
  },
}

export default function Page() {
  return <SixWorlds lang="es" />
}
