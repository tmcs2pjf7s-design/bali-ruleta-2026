'use client'

import { useEffect } from 'react'

export default function GlobalEffects() {
  useEffect(() => {
    const cursor     = document.getElementById('g-cursor')!
    const cursorRing = document.getElementById('g-cursor-ring')!
    let rx = 0, ry = 0

    const onMove = (e: MouseEvent) => {
      cursor.style.left     = e.clientX + 'px'
      cursor.style.top      = e.clientY + 'px'
      requestAnimationFrame(() => {
        rx += (e.clientX - rx) * 0.12
        ry += (e.clientY - ry) * 0.12
        cursorRing.style.left = rx + 'px'
        cursorRing.style.top  = ry + 'px'
      })
    }

    const onDown  = () => cursor.style.transform = 'translate(-50%,-50%) scale(1.6)'
    const onUp    = () => cursor.style.transform = 'translate(-50%,-50%) scale(1)'

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup',   onUp)
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup',   onUp)
    }
  }, [])

  return (
    <>
      <div id="g-cursor" />
      <div id="g-cursor-ring" />
      <div id="g-grain" />
      <div id="g-vignette" />
      <div id="g-scanlines" />
    </>
  )
}
