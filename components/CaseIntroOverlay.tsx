'use client'

import { useEffect, useRef, useCallback } from 'react'
import type { Case } from '@/data/cases'

interface Props {
  caso:     Case
  onDone:   () => void
  onSkip:   () => void
}

const DURATION = 10000

export default function CaseIntroOverlay({ caso, onDone, onSkip }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const afRef = useRef<number>(0)
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([])

  const cleanup = useCallback(() => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
    cancelAnimationFrame(afRef.current)
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      speechSynthesis.cancel()
    }
  }, [])

  const handleSkip = useCallback(() => {
    cleanup()
    onSkip()
  }, [cleanup, onSkip])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    canvas.width  = window.innerWidth
    canvas.height = window.innerHeight

    // ── Particles ──
    type Particle = Record<string, number>
    const particles: Particle[] = []
    const W = canvas.width, H = canvas.height

    const initParticles = () => {
      if (caso.effect === 'rain' || caso.effect === 'heavy_rain') {
        const n = caso.effect === 'heavy_rain' ? 220 : 130
        for (let i = 0; i < n; i++) particles.push({
          x: Math.random() * W, y: Math.random() * H - H,
          sp: 7 + Math.random() * 9 + (caso.effect === 'heavy_rain' ? 6 : 0),
          len: 12 + Math.random() * 22, op: .08 + Math.random() * .2, t: 0,
        })
      } else if (caso.effect === 'embers') {
        for (let i = 0; i < 90; i++) particles.push({
          x: Math.random() * W, y: H + Math.random() * 100,
          vx: (Math.random() - .5) * 1.4, vy: -.6 - Math.random() * 2.4,
          sz: 1 + Math.random() * 3, op: .6 + Math.random() * .4,
          life: Math.random(), t: 1,
        })
      } else if (caso.effect === 'sparks') {
        for (let i = 0; i < 70; i++) particles.push({
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - .5) * 1.5, vy: (Math.random() - .5) * 1.5,
          sz: .8 + Math.random() * 2.5, op: Math.random(), life: Math.random(), t: 2,
        })
      } else if (caso.effect === 'dust') {
        for (let i = 0; i < 55; i++) particles.push({
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - .5) * .4, vy: -.1 - Math.random() * .35,
          sz: .8 + Math.random() * 2.5, op: .04 + Math.random() * .14, t: 3,
        })
      } else if (caso.effect === 'fog') {
        for (let i = 0; i < 10; i++) particles.push({
          x: Math.random() * W, y: H * .35 + Math.random() * H * .65,
          vx: .25 + Math.random() * .4, sz: 140 + Math.random() * 220,
          op: .02 + Math.random() * .06, t: 4,
        })
      } else if (caso.effect === 'stars') {
        for (let i = 0; i < 130; i++) particles.push({
          x: Math.random() * W, y: Math.random() * H,
          sz: .4 + Math.random() * 1.8, op: Math.random(), tw: Math.random() * Math.PI * 2, t: 5,
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      const now = Date.now()
      for (const p of particles) {
        ctx.save()
        if (p.t === 0) { // rain
          p.y += p.sp; p.x += p.sp * .12
          if (p.y > H) { p.y = -p.len; p.x = Math.random() * W }
          ctx.strokeStyle = `rgba(180,210,255,${p.op})`
          ctx.lineWidth = .7
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x + p.len * .12, p.y + p.len); ctx.stroke()
        } else if (p.t === 1) { // embers
          p.x += p.vx + Math.sin(now * .001 + p.life * 10) * .3; p.y += p.vy; p.life += .004
          if (p.y < -10 || p.life > 1) { p.y = H + 10; p.x = Math.random() * W; p.life = 0; p.op = .5 + Math.random() * .5 }
          ctx.fillStyle = `rgba(255,${60 + Math.floor(p.life * 140)},0,${p.op * (1 - p.life)})`
          ctx.beginPath(); ctx.arc(p.x, p.y, p.sz * (1 - p.life * .5), 0, Math.PI * 2); ctx.fill()
        } else if (p.t === 2) { // sparks
          p.x += p.vx; p.y += p.vy; p.life += .008
          if (p.life > 1) { p.life = 0; p.x = Math.random() * W; p.y = Math.random() * H }
          const so = p.op * Math.sin(p.life * Math.PI)
          ctx.fillStyle = `rgba(255,${160 + Math.floor(p.life * 80)},40,${so * .8})`
          ctx.beginPath(); ctx.arc(p.x, p.y, p.sz, 0, Math.PI * 2); ctx.fill()
        } else if (p.t === 3) { // dust
          p.x += p.vx + Math.sin(now * .0004 + p.op * 80) * .18; p.y += p.vy
          if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W }
          ctx.fillStyle = `rgba(210,190,130,${p.op})`
          ctx.beginPath(); ctx.arc(p.x, p.y, p.sz, 0, Math.PI * 2); ctx.fill()
        } else if (p.t === 4) { // fog
          p.x += p.vx; if (p.x > W + p.sz) p.x = -p.sz
          const fg = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.sz)
          fg.addColorStop(0, `rgba(200,215,255,${p.op})`); fg.addColorStop(1, 'rgba(0,0,0,0)')
          ctx.fillStyle = fg; ctx.beginPath(); ctx.arc(p.x, p.y, p.sz, 0, Math.PI * 2); ctx.fill()
        } else if (p.t === 5) { // stars
          p.tw += .018
          const so = Math.max(0, (Math.sin(p.tw) * .5 + .5) * p.op)
          ctx.fillStyle = `rgba(255,255,255,${so})`
          ctx.beginPath(); ctx.arc(p.x, p.y, p.sz, 0, Math.PI * 2); ctx.fill()
        }
        ctx.restore()
      }
      afRef.current = requestAnimationFrame(draw)
    }

    initParticles()
    draw()

    // ── Sequence ──
    const content = contentRef.current!
    content.innerHTML = ''

    const add = (at: number, cls: string, txt: string) => {
      const id = setTimeout(() => {
        const el = document.createElement('div')
        el.className = cls
        el.textContent = txt
        content.appendChild(el)
      }, at)
      timersRef.current.push(id)
    }

    // Stamp
    add(0, 'intro-stamp', 'EXPEDIENTE CLASIFICADO')

    for (const s of caso.introSeq) {
      const cls = s.t === 'stamp' ? 'intro-stamp' : `intro-line type-${s.t}`
      if (s.t !== 'stamp') add(s.at, cls, s.txt)
    }

    // Narration at 2s
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      const id = setTimeout(() => {
        const u = new SpeechSynthesisUtterance(caso.narration)
        u.lang = 'es-ES'; u.rate = .82; u.pitch = .78; u.volume = .9
        const vs = speechSynthesis.getVoices()
        const v = vs.find(x => x.lang.startsWith('es') && /male/i.test(x.name)) || vs.find(x => x.lang.startsWith('es'))
        if (v) u.voice = v
        speechSynthesis.speak(u)
      }, 2000)
      timersRef.current.push(id)
    }

    // Auto-done
    const doneId = setTimeout(() => {
      cleanup()
      onDone()
    }, DURATION)
    timersRef.current.push(doneId)

    return cleanup
  }, [caso, cleanup, onDone])

  // Inline styles for intro elements (injected via useEffect DOM manipulation)
  useEffect(() => {
    const style = document.createElement('style')
    style.id = 'intro-styles'
    style.textContent = `
      .intro-stamp{
        font-size:clamp(.9rem,3vw,1.4rem);font-weight:900;letter-spacing:.35em;text-transform:uppercase;
        color:${caso.color};border:2px solid ${caso.color};padding:10px 24px;
        opacity:0;transform:scale(1.6) rotate(-4deg);
        animation:introStamp .55s cubic-bezier(.15,1.4,.35,1) forwards;
      }
      .intro-line{opacity:0;transform:translateY(18px);animation:introReveal .5s ease forwards;}
      .intro-line.type-location{font-size:.62rem;letter-spacing:.28em;text-transform:uppercase;color:rgba(255,255,255,.45);margin-top:28px;}
      .intro-line.type-victim{font-size:clamp(1.6rem,5vw,3rem);font-family:var(--font-playfair),serif;font-weight:700;color:#fff;margin-top:10px;line-height:1.1;}
      .intro-line.type-fact{font-size:.65rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.4);margin-top:8px;}
      .intro-line.type-evidence{font-size:.62rem;letter-spacing:.18em;text-transform:uppercase;color:${caso.color};margin-top:14px;padding:6px 16px;border:1px solid ${caso.color};}
      .intro-line.type-tagline{font-family:var(--font-playfair),serif;font-size:clamp(.9rem,2.5vw,1.3rem);font-style:italic;color:rgba(255,255,255,.65);margin-top:22px;}
      @keyframes introStamp{to{opacity:1;transform:scale(1) rotate(-3deg)}}
      @keyframes introReveal{to{opacity:1;transform:translateY(0)}}
    `
    if (!document.getElementById('intro-styles')) {
      document.head.appendChild(style)
    }
    return () => { document.getElementById('intro-styles')?.remove() }
  }, [caso.color])

  return (
    <div className="fixed inset-0 z-[9900] bg-black flex flex-col overflow-hidden">
      {/* Police light */}
      {caso.policeLight && (
        <div className="absolute top-0 left-0 right-0 h-[3px] z-10 animate-[policeLights_.6s_steps(1)_infinite]"
             style={{ background: 'linear-gradient(90deg,#0030ff 50%,#ff0000 50%)' }} />
      )}

      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Color vignette */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
           style={{ background: `radial-gradient(ellipse at 50% 100%,${caso.color}18,transparent 70%)` }} />

      {/* Background case number */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] pointer-events-none select-none font-serif font-black opacity-[.018]"
           style={{ fontSize: 'clamp(20vw,35vw,40vw)', lineHeight: 1, color: '#fff' }}>
        {String(caso.id + 1).padStart(2, '0')}
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-[2] flex-1 flex flex-col items-center justify-center p-10 text-center gap-0"
      />

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/8 z-[6]">
        <div
          className="h-full"
          style={{
            background: caso.color,
            width: '0%',
            animation: `introProgress ${DURATION}ms linear forwards`,
          }}
        />
        <style>{`@keyframes introProgress{to{width:100%}}`}</style>
      </div>

      {/* Skip */}
      <button
        onClick={handleSkip}
        className="absolute bottom-5 right-5 z-[7] bg-white/6 border border-white/14 text-white/40 text-[.62rem] tracking-[.18em] uppercase px-4 py-2 rounded-sm hover:bg-white/12 hover:text-white/80 transition-all font-sans"
      >
        Saltar ›
      </button>
    </div>
  )
}
