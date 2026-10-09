import { categories, categoryGroups } from '../data/categories'
import { GoalCard } from '../components/GoalCard'

export const metadata = {
  title: 'All Goals — SynergyStacks',
  description: 'Every goal we track — fat loss, endurance, testosterone, cognition, longevity, and what pathways get you there.',
}

export default function GoalsIndexPage() {
  const grouped = {}
  Object.entries(categories).forEach(([slug, g]) => {
    const grp = g.group || 'other'
    if (!grouped[grp]) grouped[grp] = []
    grouped[grp].push([slug, g])
  })

  const groups = Object.entries(categoryGroups)
    .sort((a, b) => a[1].order - b[1].order)

  const total = Object.keys(categories).length

  return (
    <>
      <section style={{ padding: '140px 0 40px' }}>
        <div className="container">
          <div className="crumbs">
            <a href="/">HOME</a>
            <span className="sep">/</span>
            <span className="cur">GOALS</span>
          </div>
          <div className="kicker"><span className="dot"></span>DATABASE · {total} GOALS</div>
          <h1 style={{ fontSize: 'clamp(40px,6.5vw,90px)' }}>
            <span className="line"><span>WHAT DO YOU</span></span>
            <span className="line"><span className="lime">WANT?</span></span>
          </h1>
          <p className="hero-copy">
            Every goal in the database. Each entry links to the biological pathways that get you there,
            and the ingredients that influence those pathways.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 20 }}>
        <div className="container">
          {groups.map(([key, meta]) => {
            const items = grouped[key]
            if (!items || items.length === 0) return null
            return (
              <div key={key} style={{ marginBottom: 56 }}>
                <h2 className="ing-group-title">{meta.label}</h2>
                <div className="goals-grid">
                  {items.map(([slug, g]) => (
                    <GoalCard key={slug} slug={slug} goal={g} />
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