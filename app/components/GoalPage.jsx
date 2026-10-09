'use client'

import { Reveal } from './ClientUI'

export function GoalPage({ slug, goal, pathways, biomarkers, ingredients }) {
  return (
    <>
      <section className="hero" style={{ minHeight: 'auto', padding: '140px 0 60px' }}>
        <div className="container">
          <div className="crumbs">
            <a href="/">HOME</a>
            <span className="sep">/</span>
            <a href="/goals">GOALS</a>
            <span className="sep">/</span>
            <span className="cur">{goal.short.toUpperCase()}</span>
          </div>

          <div className="ing-hero">
            <div>
              <div className="kicker">
                <span className="dot"></span>
                GOAL · {goal.icon}
              </div>
              <h1 style={{ fontSize: 'clamp(40px,6.5vw,84px)' }}>
                <span className="line"><span>{goal.label}</span></span>
              </h1>
              <p className="hero-copy">{goal.description}</p>

              <div className="ing-quick-facts">
                {pathways && pathways.length > 0 && (
                  <div className="ing-fact">
                    <div className="ing-fact-label">PATHWAYS</div>
                    <div className="ing-fact-value">{pathways.length}</div>
                  </div>
                )}
                {biomarkers && biomarkers.length > 0 && (
                  <div className="ing-fact">
                    <div className="ing-fact-label">BIOMARKERS</div>
                    <div className="ing-fact-value">{biomarkers.length}</div>
                  </div>
                )}
                {ingredients && ingredients.length > 0 && (
                  <div className="ing-fact">
                    <div className="ing-fact-label">INGREDIENTS</div>
                    <div className="ing-fact-value">{ingredients.length}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {pathways && pathways.length > 0 && (
        <section style={{ paddingTop: 0 }}>
          <div className="container">
            <Reveal>
              <h2 className="section-heading">How you <br /><span>get there.</span></h2>
            </Reveal>
            <Reveal delay={80}>
              <p style={{ maxWidth: 640, marginBottom: 40, color: 'var(--muted)', fontSize: 15, lineHeight: 1.7 }}>
                These biological pathways drive progress toward {goal.label.toLowerCase()}.
              </p>
            </Reveal>
            <div className="mech-grid">
              {pathways.map((p, i) => (
                <Reveal key={p.slug} delay={i * 60}>
                  <a className="mech-card" href={`/mechanisms/${p.slug}`}>
                    <div className={'mech-evidence evidence-' + p.evidenceLevel}>
                      {p.evidenceLevel}
                    </div>
                    <div className="mech-short">{p.short}</div>
                    <div className="mech-label">{p.label}</div>
                    <p className="mech-desc">{p.description}</p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {biomarkers && biomarkers.length > 0 && (
        <section>
          <div className="container">
            <Reveal>
              <h2 className="section-heading">What to <br /><span>measure.</span></h2>
            </Reveal>
            <Reveal delay={80}>
              <p style={{ maxWidth: 640, marginBottom: 40, color: 'var(--muted)', fontSize: 15, lineHeight: 1.7 }}>
                Track these biomarkers to see if your progress is real.
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

      {ingredients && ingredients.length > 0 && (
        <section>
          <div className="container">
            <Reveal>
              <h2 className="section-heading">What <br /><span>helps.</span></h2>
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

      {(!pathways || pathways.length === 0) && (
        <section>
          <div className="container">
            <div className="empty-state">
              <div className="empty-tag">NO PATHWAYS YET</div>
              <p>No biological pathways are mapped to this goal yet. It appears here for reference — check back as the database grows.</p>
            </div>
          </div>
        </section>
      )}
    </>
  )
}