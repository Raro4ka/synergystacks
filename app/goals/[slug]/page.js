import { notFound } from 'next/navigation'
import { categories } from '../../data/categories'
import { mechanisms } from '../../data/mechanisms'
import { ingredients } from '../../data/ingredients'
import { biomarkers } from '../../data/biomarkers'
import { GoalPage } from '../../components/GoalPage'

export function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const goal = categories[slug]
  if (!goal) return { title: 'Not found — SynergyStacks' }
  return {
    title: `${goal.label} — SynergyStacks`,
    description: goal.description,
  }
}

export default async function GoalRoute({ params }) {
  const { slug } = await params
  const goal = categories[slug]
  if (!goal) notFound()

  // Pathways = mechanisms
  const pathways = (goal.pathways || [])
    .map((mSlug) => mechanisms[mSlug] ? { slug: mSlug, ...mechanisms[mSlug] } : null)
    .filter(Boolean)

  // Biomarkers touched by these pathways (deduped)
  const bioSet = new Map()
  pathways.forEach((p) => {
    (p.biomarkers || []).forEach((bSlug) => {
      if (biomarkers[bSlug] && !bioSet.has(bSlug)) {
        bioSet.set(bSlug, { slug: bSlug, ...biomarkers[bSlug] })
      }
    })
  })
  const relatedBiomarkers = Array.from(bioSet.values())

  // Ingredients that affect any of these pathways (deduped)
  const pathwaySlugs = pathways.map((p) => p.slug)
  const ingSet = new Map()
  Object.entries(ingredients).forEach(([iSlug, ing]) => {
    if ((ing.affects || []).some((a) => pathwaySlugs.includes(a))) {
      ingSet.set(iSlug, { slug: iSlug, ...ing })
    }
  })
  const relatedIngredients = Array.from(ingSet.values())

  return (
    <GoalPage
      slug={slug}
      goal={goal}
      pathways={pathways}
      biomarkers={relatedBiomarkers}
      ingredients={relatedIngredients}
    />
  )
}