'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

/* ============ NAV (client — burger, scroll hide, active link) ============ */
export function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)
  const navRef = useRef(null)

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY
      if (y > lastY.current && y > 400) setHidden(true)
      else setHidden(false)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    function onDocClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  const isActive = (href) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(href + '/')
  }

  const links = [
  { href: '/', label: 'Home' },
  { href: '/goals', label: 'Goals' },
  { href: '/ingredients', label: 'Ingredients' },
  { href: '/mechanisms', label: 'Mechanisms' },
  { href: '/biomarkers', label: 'Biomarkers' },
  { href: '/stacks', label: 'Stacks' },
    { href: '/search', label: '🔍' },   
  { href: '/about', label: 'About' },
]

  return (
    <nav ref={navRef} className={'nav' + (hidden ? ' hide' : '') + (open ? ' open' : '')} aria-label="Main navigation">
      <a className="brand" href="/">
        <i aria-hidden="true"></i>
        <span>SYNERGYSTACKS</span>
      </a>
      <button
        className={'burger' + (open ? ' open' : '')}
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open ? 'true' : 'false'}
        onClick={(e) => { e.stopPropagation(); setOpen(!open) }}
      >
        <span></span><span></span><span></span>
      </button>
      <div className="links">
        {links.map((l) => (
          <a
            key={l.href}
            className={'link' + (isActive(l.href) ? ' active' : '')}
            href={l.href}
            aria-current={isActive(l.href) ? 'page' : undefined}
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

/* ============ PROGRESS BAR ============ */
export function ProgressBar() {
  const ref = useRef(null)

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      const pct = max > 0 ? (doc.scrollTop / max) : 0
      if (ref.current) ref.current.style.width = (pct * 100) + '%'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <div ref={ref} className="progress" aria-hidden="true"></div>
}

/* ============ BACK TO TOP ============ */
export function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > 600)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={'to-top' + (show ? ' show' : '')}
      type="button"
      aria-label="Back to top"
      onClick={handleClick}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}

/* ============ REVEAL (scroll animation wrapper) ============ */
export function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    if (!('IntersectionObserver' in window)) { setShown(true); return }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setTimeout(() => setShown(true), delay)
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' })
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={(shown ? 'reveal in ' : 'reveal ') + className}>
      {children}
    </div>
  )
}

/* ============ COUNTER (animated number) ============ */
export function Counter({ to, duration = 1200 }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    if (!('IntersectionObserver' in window)) { setValue(to); return }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting || started.current) return
        started.current = true
        const start = performance.now()
        function step(now) {
          const p = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setValue(Math.round(to * eased))
          if (p < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
        obs.unobserve(e.target)
      })
    }, { threshold: 0.6 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [to, duration])

  return <span ref={ref}>{value}</span>
}

/* ============ FAQ (accordion) ============ */
export function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <div className="faq">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={i} className={'faq-item' + (isOpen ? ' open' : '')}>
            <button
              className="faq-q"
              type="button"
              aria-expanded={isOpen ? 'true' : 'false'}
              onClick={() => toggle(i)}
            >
              <span>{item.q}</span>
              <span className="sign" aria-hidden="true"></span>
            </button>
            <div className="faq-a">
              {item.a.map((p, j) => (
                <p key={j} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ============ SPOTLIGHT CARD (mousemove highlight) ============ */
export function SpotlightCard({ children, className = '' }) {
  const ref = useRef(null)

  function handleMove(e) {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--mx', (e.clientX - r.left) + 'px')
    ref.current.style.setProperty('--my', (e.clientY - r.top) + 'px')
  }

  return (
    <div ref={ref} className={className} onPointerMove={handleMove}>
      {children}
    </div>
  )
}

/* ============ PARALLAX VISUAL (hero sphere) ============ */
export function ParallaxVisual() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    if (!window.matchMedia || !matchMedia('(pointer:fine)').matches) return
    let tx = 0, ty = 0, cx = 0, cy = 0
    let raf

    function onMove(e) {
      tx = (e.clientX / window.innerWidth - 0.5) * 2
      ty = (e.clientY / window.innerHeight - 0.5) * 2
    }
    function loop() {
      cx += (tx - cx) * 0.06
      cy += (ty - cy) * 0.06
      if (ref.current) {
        ref.current.style.transform = 'translate3d(' + (cx * 14) + 'px,' + (cy * 14) + 'px,0)'
      }
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('pointermove', onMove)
    loop()
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="visual">
      <div className="visual-inner" ref={ref}>
        <div className="energy-line"></div>
        <div className="ring r1"></div>
        <div className="ring r2"></div>
        <div className="ring r3"></div>
        <div className="core"></div>
      </div>
    </div>
  )
}