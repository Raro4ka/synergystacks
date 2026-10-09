
import { ingredients } from '../data/ingredients'
import { IngredientExplorer } from '../components/IngredientExplorer'

export const metadata = {
  title: 'Ingredient Database — SynergyStacks',
  description:
    'Explore supplements, their forms, biological pathways and evidence classifications. Search and compare ingredients in the SynergyStacks reference library.',
  alternates: {
    canonical: '/ingredients/',
  },
  openGraph: {
    title: 'Ingredient Database — SynergyStacks',
    description:
      'Explore the supplement ingredient database, related pathways and evidence classifications.',
    type: 'website',
    url: 'https://synergystacks.pages.dev/ingredients/',
  },
}

export default function IngredientsIndexPage() {
  const ingredientCount = Object.keys(ingredients).length
  const categoryCount = new Set(
    Object.values(ingredients).map(
      (item) => item.category || 'other'
    )
  ).size

  return (
    <>
      <section
        className="ix-hero"
        aria-labelledby="ingredients-heading"
      >
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">HOME</a>
            <span className="sep" aria-hidden="true">/</span>
            <span className="cur" aria-current="page">
              INGREDIENTS
            </span>
          </nav>

          <div className="kicker">
            <span className="dot" />
            RESEARCH REFERENCE · {ingredientCount} ENTRIES
          </div>

          <h1 id="ingredients-heading" className="ix-page-title">
            <span className="line"><span>THE</span></span>
            <span className="line">
              <span className="lime">INGREDIENT</span>
            </span>
            <span className="line"><span>DATABASE.</span></span>
          </h1>

          <p className="hero-copy ix-hero-copy">
            Explore compounds, compare available forms, and follow
            the connections between ingredients and biological
            pathways. Use the evidence classifications as a starting
            point for evaluating the research, not as a guarantee
            of an outcome.
          </p>

          <div className="ix-overview" aria-label="Database overview">
            <div className="ix-overview-item">
              <strong>{ingredientCount}</strong>
              <span>INGREDIENTS</span>
            </div>
            <div className="ix-overview-item">
              <strong>{categoryCount}</strong>
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
              <h2>Find your <span>compound.</span></h2>
            </div>

            <a className="ix-method-link" href="/about/">
              How we evaluate evidence <span aria-hidden="true">↗</span>
            </a>
          </div>

          <IngredientExplorer ingredients={ingredients} />
        </div>
      </section>
    </>
  )
}
