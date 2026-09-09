/** Section index label, e.g. "— 01 · The Journey". */
export default function Eyebrow({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-[0.6rem] uppercase tracking-widest2 text-gold">
      <span className="text-gold/50">— {index}</span>
      <span className="h-px w-6 bg-gold/40" />
      {children}
    </p>
  )
}
