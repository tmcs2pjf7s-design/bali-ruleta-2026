/**
 * Cinematic atmosphere layers: film grain, vignette and a slow warm glow.
 * Purely decorative — no client JS needed.
 */
export default function Ambience() {
  return (
    <>
      <div id="amb-glow" aria-hidden />
      <div id="amb-grain" aria-hidden />
      <div id="amb-vignette" aria-hidden />
    </>
  )
}
