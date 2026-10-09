'use client'

import { Reveal } from './ClientUI'

export function MechanismPage({ slug, mechanism, biomarkers, ingredients, goals }) {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero" style={{ minHeight: 'auto', padding: '140px 0 60px' }}>
        <div className="container">
          <div className="crumbs">
            <a href="/">HOME</a>
            <span className="sep">/</span>
            <a href="/mechanisms">MECHANISMS</a>
            <span className="sep">/</span>
            <span className="cur">{mechanism.short.toUpperCase()}</span>
          </div>

          <div className="ing-hero">
            <div>
              <div className="kicker">
                <span className="dot"></span>
                {mechanism.category} · {mechanism.evidenceLevel}
              </div>
              <h1 style={{ fontSize: 'clamp(40px,6.5vw,84px)' }}>
                <span className="line"><span>{mechanism.label}</span></span>
              </h1>
              <p className="hero-copy">{mechanism.description}</p>

              {mechanism.evidenceNote && (
                <div className="mech-note">
                  <strong>Evidence note:</strong> {mechanism.evidenceNote}
                </div>
              )}

              <div className="ing-quick-facts">
                <div className="ing-fact">
                  <div className="ing-fact-label">EVIDENCE</div>
                  <div className={'ing-fact-value evidence-' + mechanism.evidenceLevel}>
                    {mechanism.evidenceLevel}
                  </div>
                </div>
                {ingredients && ingredients.length > 0 && (
                  <div className="ing-fact">
                    <div className="ing-fact-label">INGREDIENTS</div>
                    <div className="ing-fact-value">{ingredients.length}</div>
                  </div>
                )}
                {biomarkers && biomarkers.length > 0 && (
                  <div className="ing-fact">
                    <div className="ing-fact-label">BIOMARKERS</div>
                    <div className="ing-fact-value">{biomarkers.length}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BIOMARKERS ============ */}
      {biomarkers && biomarkers.length > 0 && (
        <section style={{ paddingTop: 0 }}>
          <div className="container">
            <Reveal>
              <h2 className="section-heading">What it <br /><span>changes.</span></h2>
            </Reveal>
            <Reveal delay={80}>
              <p style={{ maxWidth: 640, marginBottom: 40, color: 'var(--muted)', fontSize: 15, lineHeight: 1.7 }}>
                Activating this pathway affects the following measurable biomarkers.
              </p>
            </Reveal>
            <div className="bio-grid">
              {biomarkers.map((b, i) => (
                <Reveal key={b.slug} delay={i * 60}>
                  <a className="bio-card" href={`/biomarkers/${b.slug}`}>
                    <div className={'bio-direction dir-' + b.direction}>
                      {b.direction === 'higher-better' && '↑'}
                      {b.direction === 'lower-better' && '↓'}
                      {b.direction === 'target-range' && '↔'}
                    </div>
                    <div className="bio-label">{b.label}</div>
                    <div className="bio-unit">{b.unit}</div>
                    {b.normalRange && (
                      <div className="bio-range">{b.normalRange}</div>
                    )}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============ INGREDIENTS ============ */}
      {ingredients && ingredients.length > 0 && (
        <section>
          <div className="container">
            <Reveal>
              <h2 className="section-heading">What <br /><span>affects it.</span></h2>
            </Reveal>
            <Reveal delay={80}>
              <div className="ingredients-grid">
                {ingredients.map((ing, i) => (
                  <Reveal key={ing.slug} delay={i * 60}>
                    <a className="ingredient-card" href={`/ingredients/${ing.slug}`}>
                      <div className="ing-category">{ing.category}</div>
                      <div className="ing-label">{ing.label}</div>
                      <p className="ing-desc">{ing.description}</p>
                      <div className="ing-meta">
                        <span className={'evidence-' + ing.evidenceLevel}>
                          {ing.evidenceLevel}
                        </span>
                        {ing.priceBand && <span className="ing-price">{ing.priceBand}</span>}
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ============ GOALS ============ */}
      {goals && goals.length > 0 && (
        <section className="related">
          <div className="container">
            <Reveal>
              <div className="related-head">
                <h2>Contributes to <span>these goals.</span></h2>
                <a className="all-link" href="/goals">ALL GOALS →</a>
              </div>
            </Reveal>
            <div className="goals-grid">
              {goals.map((g, i) => (
                <Reveal key={g.slug} delay={i * 80}>
                  <a className="goal-card" href={`/goals/${g.slug}`}>
                    <div className="goal-icon">{g.icon}</div>
                    <div className="goal-label">{g.label}</div>
                    <p className="goal-desc">{g.description}</p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}