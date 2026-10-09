'use client'

import { useEffect, useRef } from 'react'

export function Background() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !canvas.getContext) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)')
    if (reduceMotion && reduceMotion.matches) return

    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let W = 0, H = 0, parts = [], running = true, raf

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      W = canvas.width = Math.floor(window.innerWidth * dpr)
      H = canvas.height = Math.floor(window.innerHeight * dpr)
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      const count = Math.min(60, Math.max(20, Math.round(window.innerWidth / 24)))
      parts = []
      for (let i = 0; i < count; i++) {
        parts.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: (Math.random() * 1.4 + 0.5) * dpr,
          vx: (Math.random() - 0.5) * 0.15 * dpr,
          vy: (Math.random() - 0.5) * 0.15 * dpr,
          a: Math.random() * 0.45 + 0.15,
        })
      }
    }

    function draw() {
      if (!running) return
      ctx.clearRect(0, 0, W, H)
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = W; else if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H; else if (p.y > H) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(185,255,0,' + p.a + ')'
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    function onMotionChange() {
      if (reduceMotion.matches) { running = false; ctx.clearRect(0, 0, W, H) }
      else if (!running) { running = true; draw() }
    }
    if (reduceMotion && reduceMotion.addEventListener) {
      reduceMotion.addEventListener('change', onMotionChange)
    }

    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      if (reduceMotion && reduceMotion.removeEventListener) {
        reduceMotion.removeEventListener('change', onMotionChange)
      }
    }
  }, [])

  return <canvas id="bg" ref={canvasRef} aria-hidden="true" />
}