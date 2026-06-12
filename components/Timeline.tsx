'use client'

import { motion } from 'framer-motion'
import type { TimelineEvent } from '@/data/cases'

interface Props {
  events: TimelineEvent[]
  color:  string
}

export default function Timeline({ events, color }: Props) {
  return (
    <div className="relative pl-6">
      {/* Vertical line */}
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/8" />

      <div className="space-y-6">
        {events.map((ev, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * .08 }}
            className="relative"
          >
            {/* Dot */}
            <div
              className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center"
              style={{
                borderColor: ev.key ? color : 'rgba(255,255,255,.15)',
                background:  ev.key ? `${color}20` : 'transparent',
                boxShadow:   ev.key ? `0 0 10px ${color}40` : 'none',
              }}
            >
              {ev.key && (
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
              )}
            </div>

            <div className={`pl-2 ${ev.key ? '' : 'opacity-70'}`}>
              <p
                className="text-[.6rem] font-bold tracking-[.15em] uppercase mb-1"
                style={{ color: ev.key ? color : 'rgba(255,255,255,.35)' }}
              >
                {ev.time}
              </p>
              <p className="text-sm text-cream/80 leading-relaxed">{ev.event}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
