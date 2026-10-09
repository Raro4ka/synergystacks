import { notFound } from 'next/navigation'
import { stacks } from '../../data/stacks'
import { StackPage } from '../../components/StackPage'

export function generateStaticParams() {
  return Object.keys(stacks).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const stack = stacks[slug]
  if (!stack) return { title: 'Not found — SynergyStacks' }
  return {
    title: stack.metaTitle,
    description: stack.metaDescription,
  }
}

export default async function StackRoute({ params }) {
  const { slug } = await params
  const stack = stacks[slug]
  if (!stack) notFound()
  return <StackPage data={stack} />
}