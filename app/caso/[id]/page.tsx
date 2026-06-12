import { notFound } from 'next/navigation'
import { getCaseBySlug } from '@/data/cases'
import CasePageClient from '@/components/CasePageClient'
import CASES from '@/data/cases'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return CASES.map(c => ({ id: c.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const caso = getCaseBySlug(id)
  if (!caso) return {}
  return {
    title:       `${caso.title} — CRIMS`,
    description: caso.heroDesc,
  }
}

export default async function CasePage({ params }: Props) {
  const { id } = await params
  const caso = getCaseBySlug(id)
  if (!caso) notFound()

  return <CasePageClient caso={caso} />
}
