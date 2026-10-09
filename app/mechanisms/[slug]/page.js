import { notFound } from 'next/navigation'
import { mechanisms } from '../../data/mechanisms'
import { biomarkers } from '../../data/biomarkers'
import { ingredients } from '../../data/ingredients'
import { categories } from '../../data/categories'
import { MechanismPage } from '../../components/MechanismPage'

export function generateStaticParams() {
  return Object.keys(mechanisms).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const mech = mechanisms[slug]
  if (!mech) return { title: 'Not found — SynergyStacks' }
  return {
    title: `${mech.label} — SynergyStacks`,
    description: mech.description,
  }
}

export default async function MechanismRoute({ params }) {
  const { slug } = await params
  const mech = mechanisms[slug]
  if (!mech) notFound()

  // Biomarkers this mechanism affects
  const affectedBiomarkers = (mech.biomarkers || [])
    .map((bSlug) => biomarkers[bSlug] ? { slug: bSlug, ...biomarkers[bSlug] } : null)
    .filter(Boolean)

  // Ingredients that affect this mechanism
  const affectingIngredients = Object.entries(ingredients)
    .filter(([_, ing]) => (ing.affects || []).includes(slug))
    .map(([ingSlug, ing]) => ({ slug: ingSlug, ...ing }))

  // Goals this mechanism contributes to
  const contributedGoals = (mech.contributesTo || [])
    .map((gSlug) => categories[gSlug] ? { slug: gSlug, ...categories[gSlug] } : null)
    .filter(Boolean)

  return (
    <MechanismPage
      slug={slug}
      mechanism={mech}
      biomarkers={affectedBiomarkers}
      ingredients={affectingIngredients}
      goals={contributedGoals}
    />
  )
}