import { mechanisms } from '../data/mechanisms'
import { MechanismCard } from '../components/MechanismCard'

export const metadata = {
  title: 'All Mechanisms — SynergyStacks',
  description: 'Every biological pathway in the SynergyStacks database — evidence level, biomarkers, and ingredients that affect it.',
}

const CATEGORY_ORDER = [
  { key: 'hormonal',        label: 'Hormonal' },
  { key: 'metabolic',       label: 'Metabolic' },
  { key: 'neurotransmitter', label: 'Neurotransmitter' },
  { key: 'cellular',        label: 'Cellular' },
  { key: 'vascular',        label: 'Vascular' },
  { key: 'structural',      label: 'Structural' },
  { key: 'gut',             label: 'Gut' },
  { key: 'immune',          label: 'Immune' },
]

export default function MechanismsIndexPage() {
  const grouped = {}
  Object.entries(mechanisms).forEach(([slug, m]) => {
    const cat = m.category || 'other'
    if (!grouped[cat]) grouped[cat] = []
    grouped[cat].push([slug, m])
  })

  const total = Object.keys(mechanisms).length

  return (
    <>
      <section style={{ padding: '140px 0 40px' }}>
        <div className="container">
          <div className="crumbs">
            <a href="/">HOME</a>
            <span className="sep">/</span>
            <span className="cur">MECHANISMS</span>
          </div>
          <div className="kicker"><span className="dot"></span>DATABASE · {total} PATHWAYS</div>
          <h1 style={{ fontSize: 'clamp(40px,6.5vw,90px)' }}>
            <span className="line"><span>HOW IT</span></span>
            <span className="line"><span className="lime">WORKS.</span></span>
          </h1>
          <p className="hero-copy">
            Every biological pathway we track. Each mechanism links to the biomarkers it affects,
            the goals it serves, and the ingredients that influence it. Evidence level is shown on every card.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 20 }}>
        <div className="container">
          {CATEGORY_ORDER.map(({ key, label }) => {
            const items = grouped[key]
            if (!items || items.length === 0) return null
            return (
              <div key={key} style={{ marginBottom: 56 }}>
                <h2 className="ing-group-title">{label}</h2>
                <div className="mech-grid">
                  {items.map(([slug, m]) => (
                    <MechanismCard key={slug} slug={slug} mechanism={m} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}