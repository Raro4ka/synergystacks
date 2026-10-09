import { notFound } from 'next/navigation'
import { biomarkers } from '../../data/biomarkers'
import { mechanisms } from '../../data/mechanisms'
import { ingredients } from '../../data/ingredients'
import { BiomarkerPage } from '../../components/BiomarkerPage'

export function generateStaticParams() {
  return Object.keys(biomarkers).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const bio = biomarkers[slug]
  if (!bio) return { title: 'Not found — SynergyStacks' }
  return {
    title: `${bio.label} — SynergyStacks`,
    description: bio.description,
  }
}

export default async function BiomarkerRoute({ params }) {
  const { slug } = await params
  const bio = biomarkers[slug]
  if (!bio) notFound()

  // Mechanisms that affect this biomarker
  const affectingMechanisms = Object.entries(mechanisms)
    .filter(([_, m]) => (m.biomarkers || []).includes(slug))
    .map(([mSlug, m]) => ({ slug: mSlug, ...m }))

  // Ingredients that affect this biomarker (via mechanisms that affect it)
  const mechSlugs = affectingMechanisms.map((m) => m.slug)
  const affectingIngredients = Object.entries(ingredients)
    .filter(([_, ing]) => (ing.affects || []).some((a) => mechSlugs.includes(a)))
    .map(([iSlug, ing]) => ({ slug: iSlug, ...ing }))

  return (
    <BiomarkerPage
      slug={slug}
      biomarker={bio}
      mechanisms={affectingMechanisms}
      ingredients={affectingIngredients}
    />
  )
}