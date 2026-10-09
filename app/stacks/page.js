import { stacks } from '../data/stacks'

export const metadata = {
  title: 'All Stacks — SynergyStacks',
  description: 'Every combination in the SynergyStacks database — with evidence grade and what was actually tested.',
}

export default function StacksIndexPage() {
  const items = Object.entries(stacks).map(([slug, s]) => ({ slug, ...s }))

  return (
    <>
      <section style={{ padding: '140px 0 40px' }}>
        <div className="container">
          <div className="crumbs">
            <a href="/">HOME</a>
            <span className="sep">/</span>
            <span className="cur">STACKS</span>
          </div>
          <div className="kicker"><span className="dot"></span>DATABASE · {items.length} STACKS</div>
          <h1 style={{ fontSize: 'clamp(40px,6.5vw,90px)' }}>
            <span className="line"><span>ALL</span></span>
            <span className="line"><span className="lime">STACKS.</span></span>
          </h1>
          <p className="hero-copy">
            Every combination we publish. Each entry shows the grade, what was tested,
            and what still needs evidence. Nothing is claimed beyond what the studies show.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="stacks-grid">
            {items.map((s, i) => (
              <a key={s.slug} className="stack-card" href={`/stack/${s.slug}`}>
                <div className="cat">{s.kicker?.split('·')[0]?.trim() || 'STACK'}</div>
                <div className="formula" dangerouslySetInnerHTML={{ __html: s.synergy?.result || s.metaTitle }} />
                <p className="desc">{s.metaDescription}</p>
                <span className={'evidence' + (s.evidence?.grade ? ' grade-' + s.evidence.grade : '')}>
                  {s.evidence?.label || 'UNGRADED'}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}