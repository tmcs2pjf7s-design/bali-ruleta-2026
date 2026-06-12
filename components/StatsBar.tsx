'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { label: 'Casos activos',   value: 10,  suffix: '' },
  { label: 'Pistas ocultas',  value: 38,  suffix: '' },
  { label: 'Sospechosos',     value: 22,  suffix: '' },
  { label: 'Años de historia',value: 25,  suffix: '+' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref   = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / 40
    const id = setInterval(() => {
      start = Math.min(start + step, target)
      setCount(Math.round(start))
      if (start >= target) clearInterval(id)
    }, 30)
    return () => clearInterval(id)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border-y border-white/5 my-16">
      {STATS.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * .12 }}
          className="bg-obsidian px-8 py-6 text-center"
        >
          <div className="font-serif text-3xl font-bold text-gold-DEFAULT mb-1">
            <Counter target={s.value} suffix={s.suffix} />
          </div>
          <div className="text-[.6rem] tracking-[.2em] uppercase text-dim">
            {s.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
