'use client'

import { Reveal } from './ClientUI'

export function IngredientPage({ slug, ingredient, mechanisms, stacks }) {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero" style={{ minHeight: 'auto', padding: '140px 0 60px' }}>
        <div className="container">
          <div className="crumbs">
            <a href="/">HOME</a>
            <span className="sep">/</span>
            <a href="/ingredients">INGREDIENTS</a>
            <span className="sep">/</span>
            <span className="cur">{ingredient.label.toUpperCase()}</span>
          </div>

          <div className="ing-hero">
            <div>
              <div className="kicker">
                <span className="dot"></span>
                {ingredient.category} · {ingredient.evidenceLevel}
              </div>
              <h1 style={{ fontSize: 'clamp(40px,6.5vw,84px)' }}>
                <span className="line"><span>{ingredient.label}</span></span>
              </h1>
              <p className="hero-copy">{ingredient.description}</p>

              <div className="ing-quick-facts">
                <div className="ing-fact">
                  <div className="ing-fact-label">EVIDENCE</div>
                  <div className={'ing-fact-value evidence-' + ingredient.evidenceLevel}>
                    {ingredient.evidenceLevel}
                  </div>
                </div>
                {ingredient.priceBand && (
                  <div className="ing-fact">
                    <div className="ing-fact-label">PRICE</div>
                    <div className="ing-fact-value">{ingredient.priceBand}</div>
                  </div>
                )}
                {ingredient.availability && ingredient.availability.length > 0 && (
                  <div className="ing-fact">
                    <div className="ing-fact-label">AVAILABLE AT</div>
                    <div className="ing-fact-value">
                      {ingredient.availability.join(', ')}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FORMS ============ */}
      {ingredient.forms && ingredient.forms.length > 0 && (
        <section style={{ paddingTop: 0 }}>
          <div className="container">
            <Reveal>
              <h2 className="section-heading">Available <br /><span>forms.</span></h2>
            </Reveal>
            <Reveal delay={80}>
              <div className="forms-grid">
                {ingredient.forms.map((form, i) => (
                  <div className="form-card" key={i}>
                    <div className="form-index">{String(i + 1).padStart(2, '0')}</div>
                    <div className="form-name">{form}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ============ MECHANISMS ============ */}
      {mechanisms && mechanisms.length > 0 && (
        <section>
          <div className="container">
            <Reveal>
              <h2 className="section-heading">How it <br /><span>works.</span></h2>
            </Reveal>
            <Reveal delay={80}>
              <p style={{ maxWidth: 640, marginBottom: 40, color: 'var(--muted)', fontSize: 15, lineHeight: 1.7 }}>
                {ingredient.label} affects the following biological pathways. Click any mechanism to see everything else that affects it.
              </p>
            </Reveal>
            <div className="mech-grid">
              {mechanisms.map((m, i) => (
                <Reveal key={m.slug} delay={i * 60}>
                  <a className="mech-card" href={`/mechanisms/${m.slug}`}>
                    <div className={'mech-evidence evidence-' + m.evidenceLevel}>
                      {m.evidenceLevel}
                    </div>
                    <div className="mech-label">{m.label}</div>
                    <div className="mech-short">{m.short}</div>
                    <p className="mech-desc">{m.description}</p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============ STACKS ============ */}
      {stacks && stacks.length > 0 && (
        <section className="related">
          <div className="container">
            <Reveal>
              <div className="related-head">
                <h2>Used in <span>these stacks.</span></h2>
                <a className="all-link" href="/">ALL STACKS →</a>
              </div>
            </Reveal>
            <div className="related-grid">
              {stacks.map((s, i) => (
                <Reveal key={s.slug} delay={i * 80}>
                  <a className="stack-card" href={`/stack/${s.slug}`}>
                    <div className="cat">{s.cat}</div>
                    <div className="formula" dangerouslySetInnerHTML={{ __html: s.formula }} />
                    <p className="desc">{s.desc}</p>
                    <span className={'evidence' + (s.grade ? ' grade-' + s.grade : '')}>{s.evidence}</span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============ NOT IN ANY STACK YET ============ */}
      {(!stacks || stacks.length === 0) && (
        <section>
          <div className="container">
            <div className="empty-state">
              <div className="empty-tag">NOT YET IN A STACK</div>
              <p>This ingredient is not currently part of any published stack. It appears here for reference — check back as we add more combinations.</p>
            </div>
          </div>
        </section>
      )}
    </>
  )
}