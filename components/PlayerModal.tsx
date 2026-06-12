'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useAtom } from 'jotai'
import { playerAtom } from '@/lib/store'

const PLAYERS = [
  { name: 'Ruslan',  emoji: '🐒' },
  { name: 'Anabel', emoji: '💅' },
]

interface Props {
  open:    boolean
  onClose: (player: { name: string; emoji: string }) => void
}

export default function PlayerModal({ open, onClose }: Props) {
  const [, setPlayer] = useAtom(playerAtom)

  const select = (p: typeof PLAYERS[0]) => {
    setPlayer(p)
    onClose(p)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9800] bg-black/85 backdrop-blur-sm flex items-center justify-center p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: .9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: .95, y: 8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="bg-surface border border-border rounded-sm p-8 w-full max-w-sm text-center"
          >
            <p className="text-[.58rem] tracking-[.28em] uppercase text-dim mb-4">
              ¿Quién investiga?
            </p>
            <h2 className="font-serif text-2xl font-bold text-cream mb-8">
              Selecciona el detective
            </h2>

            <div className="flex gap-3">
              {PLAYERS.map(p => (
                <button
                  key={p.name}
                  onClick={() => select(p)}
                  className="flex-1 group flex flex-col items-center gap-3 p-5 rounded-sm border border-white/8 bg-white/[.02] hover:border-gold-DEFAULT/35 hover:bg-white/[.04] transition-all duration-200"
                >
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-200">
                    {p.emoji}
                  </span>
                  <span className="text-sm font-semibold text-cream group-hover:text-white transition-colors">
                    {p.name}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
