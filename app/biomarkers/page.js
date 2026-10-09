import { biomarkers, biomarkerCategories } from '../data/biomarkers'
import { BiomarkerCard } from '../components/BiomarkerCard'

export const metadata = {
  title: 'All Biomarkers — SynergyStacks',
  description: 'Every measurable outcome in the SynergyStacks database — testosterone, VO2max, CRP, and what affects them.',
}

export default function BiomarkersIndexPage() {
  const grouped = {}
  Object.entries(biomarkers).forEach(([slug, b]) => {
    const cat = b.category || 'other'
    if (!grouped[cat]) grouped[cat] = []
    grouped[cat].push([slug, b])
  })

  const cats = Object.entries(biomarkerCategories)
    .sort((a, b) => a[1].order - b[1].order)

  const total = Object.keys(biomarkers).length

  return (
    <>
      <section style={{ padding: '140px 0 40px' }}>
        <div className="container">
          <div className="crumbs">
            <a href="/">HOME</a>
            <span className="sep">/</span>
            <span className="cur">BIOMARKERS</span>
          </div>
          <div className="kicker"><span className="dot"></span>DATABASE · {total} MARKERS</div>
          <h1 style={{ fontSize: 'clamp(40px,6.5vw,90px)' }}>
            <span className="line"><span>WHAT YOU</span></span>
            <span className="line"><span className="lime">MEASURE.</span></span>
          </h1>
          <p className="hero-copy">
            Every measurable outcome we track — from blood tests to DEXA scans to VO2max.
            Got a lab result? Find what affects it.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 20 }}>
        <div className="container">
          {cats.map(([key, meta]) => {
            const items = grouped[key]
            if (!items || items.length === 0) return null
            return (
              <div key={key} style={{ marginBottom: 56 }}>
                <h2 className="ing-group-title">{meta.label}</h2>
                <div className="bio-grid">
                  {items.map(([slug, b]) => (
                    <BiomarkerCard key={slug} slug={slug} biomarker={b} />
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