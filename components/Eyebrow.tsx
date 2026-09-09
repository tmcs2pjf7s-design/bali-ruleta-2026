/** Section index label, e.g. "01 — El viaje". */
export default function Eyebrow({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-[0.6rem] uppercase tracking-widest2 text-warmgrey">
      <span className="text-champ">{index}</span>
      <span className="h-px w-8 bg-line" />
      {children}
    </p>
  )
}
