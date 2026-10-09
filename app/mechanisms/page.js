import { mechanisms, mechanismCategories } from '../data/mechanisms'
import { MechanismExplorer } from '../components/MechanismExplorer'

export const metadata = {
  title: 'Mechanism Database',
  description:
    'Explore biological pathways tracked by SynergyStacks — hormonal, metabolic, neurotransmitter, cellular — with evidence level and linked biomarkers.',
  alternates: {
    canonical: '/mechanisms/',
  },
}

export default function MechanismsIndexPage() {
  const total = Object.keys(mechanisms).length

  const categories = new Set(
    Object.values(mechanisms).map((m) => m.category || 'other')
  )

  return (
    <>
      <section className="ix-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">HOME</a>
            <span className="sep" aria-hidden="true">/</span>
            <span className="cur" aria-current="page">MECHANISMS</span>
          </nav>

          <div className="kicker">
            <span className="dot" />
            DATABASE · {total} PATHWAYS
          </div>

          <h1 className="ix-page-title">
            <span className="line"><span>HOW IT</span></span>
            <span className="line"><span className="lime">WORKS.</span></span>
          </h1>

          <p className="hero-copy ix-hero-copy">
            Every biological pathway in the database. Each entry links
            to the biomarkers it affects and the ingredients that
            influence it. Evidence labels describe how strong the
            human data is — not how strong a mechanism sounds.
          </p>

          <div className="ix-overview" aria-label="Database overview">
            <div className="ix-overview-item">
              <strong>{total}</strong>
              <span>PATHWAYS</span>
            </div>
            <div className="ix-overview-item">
              <strong>{categories.size}</strong>
              <span>CATEGORIES</span>
            </div>
            <div className="ix-overview-item">
              <strong>OPEN</strong>
              <span>REFERENCE LIBRARY</span>
            </div>
          </div>
        </div>
      </section>

      <section className="ix-catalog-section">
        <div className="container">
          <div className="ix-section-heading">
            <div>
              <div className="ix-eyebrow">EXPLORE THE DATABASE</div>
              <h2>Find a <span>pathway.</span></h2>
            </div>
            <a className="ix-method-link" href="/about/">
              How we evaluate evidence <span aria-hidden="true">↗</span>
            </a>
          </div>

          <MechanismExplorer mechanisms={mechanisms} />
        </div>
      </section>
    </>
  )
}