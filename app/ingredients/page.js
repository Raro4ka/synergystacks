import { ingredients } from '../data/ingredients'
import { IngredientCard } from '../components/IngredientCard'

export const metadata = {
  title: 'All Ingredients — SynergyStacks',
  description: 'Every compound in the SynergyStacks database — evidence level, forms, and links to mechanisms.',
}

const CATEGORY_ORDER = [
  { key: 'amino-acid',    label: 'Amino Acids & Derivatives' },
  { key: 'stimulant',     label: 'Stimulants' },
  { key: 'adaptogen',     label: 'Adaptogens' },
  { key: 'botanical',     label: 'Botanicals' },
  { key: 'mushroom',      label: 'Mushrooms' },
  { key: 'vitamin',       label: 'Vitamins' },
  { key: 'mineral',       label: 'Minerals' },
  { key: 'fatty-acid',    label: 'Fatty Acids' },
  { key: 'antioxidant',   label: 'Antioxidants' },
  { key: 'polyphenol',    label: 'Polyphenols' },
  { key: 'protein',       label: 'Proteins' },
]

export default function IngredientsIndexPage() {
  const grouped = {}
  Object.entries(ingredients).forEach(([slug, ing]) => {
    const cat = ing.category || 'other'
    if (!grouped[cat]) grouped[cat] = []
    grouped[cat].push([slug, ing])
  })

  return (
    <>
      <section style={{ padding: '140px 0 40px' }}>
        <div className="container">
          <div className="crumbs">
            <a href="/">HOME</a>
            <span className="sep">/</span>
            <span className="cur">INGREDIENTS</span>
          </div>
          <div className="kicker"><span className="dot"></span>DATABASE · {Object.keys(ingredients).length} COMPOUNDS</div>
          <h1 style={{ fontSize: 'clamp(40px,6.5vw,90px)' }}>
            <span className="line"><span>ALL</span></span>
            <span className="line"><span className="lime">INGREDIENTS.</span></span>
          </h1>
          <p className="hero-copy">
            Every compound in the database. Each entry links to the mechanisms it affects,
            the goals it serves, and the stacks it appears in. Evidence level is shown on every card.
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
                <div className="ingredients-grid">
                  {items.map(([slug, ing]) => (
                    <IngredientCard key={slug} slug={slug} ingredient={ing} />
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