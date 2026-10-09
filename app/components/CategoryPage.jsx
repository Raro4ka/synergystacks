'use client'

import { Reveal, ParallaxVisual } from './ClientUI'

export function CategoryPage({ title, titleLime, kicker, copy, crumbs, stacks }) {
  return (
    <>
      <section className="hero" style={{ minHeight: 'auto', padding: '140px 0 40px' }}>
        <div className="container">
          <div className="crumbs">
            {crumbs.map((c, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                {c.href ? <a href={c.href}>{c.label}</a> : <span className="cur">{c.label}</span>}
                {i < crumbs.length - 1 && <span className="sep">/</span>}
              </span>
            ))}
          </div>
          <div className="kicker"><span className="dot"></span>{kicker}</div>
          <h1 style={{ fontSize: 'clamp(40px,6.5vw,90px)' }}>
            <span className="line"><span>{title}</span></span>
            <span className="line"><span className="lime">{titleLime}</span></span>
          </h1>
          <p className="hero-copy">{copy}</p>
        </div>
      </section>

      <section style={{ paddingTop: 60 }}>
        <div className="container">
          <div className="stacks-grid">
            {stacks.map((s, i) => {
              const inner = (
                <>
                  <div className="cat">{s.cat}</div>
                  <div className="formula" dangerouslySetInnerHTML={{ __html: s.formula }} />
                  <p className="desc">{s.desc}</p>
                  <span className={'evidence' + (s.grade ? ' grade-' + s.grade : '')}>{s.evidence}</span>
                </>
              )
              return (
                <Reveal key={i} delay={i * 80}>
                  {s.comingSoon ? (
                    <div className="stack-card" style={{ opacity: 0.55, cursor: 'default' }}>{inner}</div>
                  ) : (
                    <a className="stack-card" href={s.href}>{inner}</a>
                  )}
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}