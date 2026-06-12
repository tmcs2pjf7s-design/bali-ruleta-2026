import { motion } from 'framer-motion'
import Link from 'next/link'
import CASES from '@/data/cases'
import CaseCard from '@/components/CaseCard'
import StatsBar from '@/components/StatsBar'
import CaseCarousel from '@/components/CaseCarousel'
import SearchBar from '@/components/SearchBar'
import HomepageClient from '@/components/HomepageClient'

const featured = CASES[7] // Bretón — visual impact

export default function HomePage() {
  const solved  = CASES.filter(c => c.status === 'solved')
  const open    = CASES.filter(c => c.status === 'open')

  return (
    <main className="min-h-screen bg-obsidian">
      <HomepageClient featured={featured} cases={CASES} solved={solved} open={open} />
    </main>
  )
}
