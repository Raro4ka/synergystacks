'use client'

import { Reveal, Counter, ParallaxVisual, FAQ } from './ClientUI'
import { AFFILIATE_DISCLOSURE } from '../data/stacks'

export function StackPage({ data }) {
  const disclosure = data.disclosure || AFFILIATE_DISCLOSURE

  return (
    <>
      {/* ============ AFFILIATE DISCLOSURE (top of page) ============ */}
      <div className="stack-disclosure">
        <div className="container">
          <p>{disclosure}</p>
        </div>
      </div>

      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="container">
          <div className="crumbs" style={{ marginBottom: 20 }}>
            {data.crumbs.map((c, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                {c.href ? <a href={c.href}>{c.label}</a> : <span className="cur">{c.label}</span>}
                {i < data.crumbs.length - 1 && <span className="sep">/</span>}
              </span>
            ))}
          </div>
          <div className="hero-grid">
            <div>
              <div className="kicker"><span className="dot"></span>{data.kicker}</div>
              <h1>
                {data.hero.lines.map((line, i) => (
                  <span className="line" key={i}>
                    <span className={i === data.hero.limeLine ? 'lime' : ''}>{line}</span>
                  </span>
                ))}
              </h1>
              <p className="hero-copy" dangerouslySetInnerHTML={{ __html: data.hero.copy }} />
              <a className="cta cta-hero" href={data.hero.ctaHref} target="_blank" rel="nofollow sponsored noopener noreferrer">
                {data.hero.ctaLabel} <span>→</span>
              </a>
            </div>
            <ParallaxVisual />
          </div>
        </div>
      </section>

      {/* ============ DISCLAIMER BANNER (if any) ============ */}
      {data.disclaimerBanner && (
        <section style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className="container">
            <Reveal>
              <div className="disclaimer-banner">
                <div className="db-tag">{data.disclaimerBanner.tag}</div>
                <p dangerouslySetInnerHTML={{ __html: data.disclaimerBanner.text }} />
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ============ MECHANICS ============ */}
      {data.mechanics && (
        <section>
          <div className="container">
            <Reveal>
              <h2 className="section-heading">
                {data.mechanics.heading} <br /><span>{data.mechanics.headingLime}</span>
              </h2>
            </Reveal>
            <div className="cards">
              {data.mechanics.items.map((item, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="card">
                    <div className="number">{item.number}</div>
                    <h3>{item.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============ COFFEE COMPARE (carnitine only) ============ */}
      {data.coffee && (
        <section className="coffee-compare">
          <div className="container">
            <Reveal>
              <h2 className="section-heading">
                {data.coffee.heading} <br /><span>{data.coffee.headingLime}</span>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <div className="coffee-split">
                {data.coffee.panels.map((panel, i) => (
                  <div className={'coffee-panel' + (panel.variant === 'plus' ? ' coffee-plus' : '')} key={i}>
                    <div className="cup-wrap">
                      <svg viewBox="0 0 120 120" aria-hidden="true">
                        <path className="cup-body" d="M28 35h64v35c0 18-12 30-32 30s-32-12-32-30V35z" />
                        <path className="cup-body" d="M92 45h8c8 0 14 6 14 14s-6 14-14 14h-8" />
                        <path className="cup-liquid" d="M32 40h56v8c0 2-2 4-4 4H36c-2 0-4-2-4-4v-8z" />
                        {panel.variant === 'plus' ? (
                          <>
                            <path className="cup-steam" d="M50 22c0 6 4 6 4 12M60 20c0 6 4 6 4 12M70 22c0 6 4 6 4 12" />
                            <circle className="cup-spark" cx="45" cy="15" r="1.5" />
                            <circle className="cup-spark" cx="75" cy="12" r="1.5" />
                            <circle className="cup-spark" cx="60" cy="8" r="1" />
                          </>
                        ) : null}
                      </svg>
                      <span className="cup-label">{panel.label}</span>
                    </div>
                    <h4>{panel.title}</h4>
                    <p className="sub">{panel.sub}</p>
                    {panel.stats.map((s, j) => (
                      <div className="coffee-stat" key={j}>
                        <span className="label">{s.label}</span>
                        <span className={'value ' + (panel.variant === 'plus' ? 'hot' : 'dim')}>{s.value}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </Reveal>
            {data.coffee.footer && (
              <Reveal delay={120}>
                <div className="calorie-footer" dangerouslySetInnerHTML={{ __html: data.coffee.footer }} />
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* ============ TABLE (creatine, berberine) ============ */}
      {data.table && (
        <section>
          <div className="container">
            <Reveal>
              <h2 className="section-heading">
                {data.table.heading} <br /><span>{data.table.headingLime}</span>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <div className="calorie-wrapper">
                <table className="calorie-table">
                  <thead>
                    <tr>
                      {data.table.headers.map((h, i) => <th key={i}>{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {data.table.rows.map((row, i) => (
                      <tr key={i} className={row.winner ? 'winner' : ''}>
                        {row.cells.map((cell, j) => (
                          <td key={j} className={cell.class || ''} dangerouslySetInnerHTML={{ __html: cell.html }} />
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
            {data.table.footer && (
              <Reveal delay={120}>
                <div className="calorie-footer" dangerouslySetInnerHTML={{ __html: data.table.footer }} />
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* ============ RESEARCH LIBRARY ============ */}
      {data.research && (
        <section>
          <div className="container">
            <Reveal>
              <h2 className="section-heading">
                {data.research.heading} <br /><span>{data.research.headingLime}</span>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <div className="research-library">
                {data.research.groups.map((group, gi) => (
                  <div className="research-group" key={gi}>
                    <div className="research-group-title">{group.title}</div>
                    {group.items.map((item, ii) => (
                      <div className="research-item" key={ii}>
                        <div className="research-index">{String(ii + 1).padStart(2, '0')}</div>
                        <div>
                          <div className="research-verify">
                            {item.verified ? (
                              <span className="verify verified">✓ VERIFIED</span>
                            ) : (
                              <span className="verify unverified">⚠ NOT YET VERIFIED</span>
                            )}
                          </div>
                          <h4>{item.title}</h4>
                          <p className="authors">{item.authors}</p>
                          <p className="finding" dangerouslySetInnerHTML={{ __html: item.finding }} />
                          {item.doi && (
                            <a className="doi" href={item.doi} target="_blank" rel="noopener noreferrer">{item.doi}</a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ============ SYNERGY ============ */}
      {data.synergy && (
        <section className="synergy">
          <div className="container">
            <Reveal>
              <h2 className="section-heading">Two elements. <br /><span>One mode.</span></h2>
            </Reveal>
            <Reveal delay={80}>
              <div className="synergy-grid">
                <div>
                  <div className="molecule">{data.synergy.left}</div>
                  <p dangerouslySetInnerHTML={{ __html: data.synergy.leftSub }} />
                </div>
                <div className="synergy-plus" aria-hidden="true">+</div>
                <div>
                  <div className="molecule">{data.synergy.right}</div>
                  <p dangerouslySetInnerHTML={{ __html: data.synergy.rightSub }} />
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="synergy-result" dangerouslySetInnerHTML={{ __html: data.synergy.result }} />
            </Reveal>
          </div>
        </section>
      )}

      {/* ============ PIVOTAL STUDY ============ */}
      {data.pivotal && (
        <section>
          <div className="container">
            <div className="research">
              <Reveal>
                <div className="research-box">
                  <div className="number">{data.pivotal.label}</div>
                  <div className="big-number"><Counter to={data.pivotal.number} /></div>
                  {data.pivotal.paragraphs.map((p, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                  <p className="source" dangerouslySetInnerHTML={{ __html: data.pivotal.source }} />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* ============ FAQ ============ */}
      {data.faq && data.faq.length > 0 && (
        <section>
          <div className="container">
            <Reveal>
              <h2 className="section-heading">Questions. <br /><span>Answered.</span></h2>
            </Reveal>
            <Reveal delay={80}>
              <FAQ items={data.faq} />
            </Reveal>
          </div>
        </section>
      )}

      {/* ============ RELATED STACKS ============ */}
      {data.related && data.related.length > 0 && (
        <section className="related">
          <div className="container">
            <Reveal>
              <div className="related-head">
                <h2>Related <span>stacks.</span></h2>
              </div>
            </Reveal>
            <div className="related-grid">
              {data.related.map((r, i) => {
                const inner = (
                  <>
                    <div className="cat">{r.cat}</div>
                    <div className="formula" dangerouslySetInnerHTML={{ __html: r.formula }} />
                    <p className="desc">{r.desc}</p>
                    <span className={'evidence' + (r.grade ? ' grade-' + r.grade : '')}>{r.evidence}</span>
                  </>
                )
                return (
                  <Reveal key={i} delay={i * 80}>
                    {r.comingSoon ? (
                      <div className="stack-card" style={{ opacity: 0.55, cursor: 'default' }}>{inner}</div>
                    ) : (
                      <a className="stack-card" href={r.href}>{inner}</a>
                    )}
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ============ PRODUCTS ============ */}
      {data.products && (
        <section className="product">
          <div className="container">
            <Reveal>
              <h2 className="section-heading">
                {data.products.heading} <br /><span>{data.products.headingLime}</span>
              </h2>
            </Reveal>
            {data.products.groups.map((group, gi) => (
              <div key={gi}>
                {group.groupTitle && (
                  <h3 style={{ fontSize: 14, fontWeight: 900, letterSpacing: 2, color: 'var(--muted)', margin: gi === 0 ? '0 0 18px' : '40px 0 18px', textTransform: 'uppercase', textAlign: 'center' }}>
                    {group.groupTitle}
                  </h3>
                )}
                <div className="product-grid">
                  {group.items.map((p, pi) => (
                    <Reveal key={pi} delay={pi * 80}>
                      <div className="product-mini">
                        {p.tag && <span className="p-tag">{p.tag}</span>}
                        <div className="p-brand">{p.brand}</div>
                        <div className="p-title">{p.title}</div>
                        <div className="p-dose">{p.dose}</div>
                        <a className="cta" href={p.href} target="_blank" rel="nofollow sponsored noopener noreferrer">
                          VIEW <span>→</span>
                        </a>
                        <p className="p-note">{p.note}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
            {data.products.footer && (
              <Reveal delay={120}>
                <div className="calorie-footer" style={{ marginTop: 40 }} dangerouslySetInnerHTML={{ __html: data.products.footer }} />
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* ============ LAST UPDATED ============ */}
      {data.updated && (
        <div className="stack-updated">
          <div className="container">
            <p>Last reviewed: <time dateTime={data.updated}>{data.updated}</time></p>
          </div>
        </div>
      )}
    </>
  )
}