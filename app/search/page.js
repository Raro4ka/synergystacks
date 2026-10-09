'use client'

import { useState, useMemo } from 'react'
import { ingredients } from '../data/ingredients'
import { mechanisms } from '../data/mechanisms'
import { biomarkers } from '../data/biomarkers'
import { categories } from '../data/categories'
import { stacks } from '../data/stacks'

/* Build search index once from all data */
function buildIndex() {
  const items = []

  Object.entries(ingredients).forEach(([slug, i]) => {
    items.push({
      type: 'ingredient',
      slug,
      label: i.label,
      sub: i.short,
      desc: i.description,
      href: `/ingredients/${slug}`,
    })
  })

  Object.entries(mechanisms).forEach(([slug, m]) => {
    items.push({
      type: 'mechanism',
      slug,
      label: m.label,
      sub: m.short,
      desc: m.description,
      href: `/mechanisms/${slug}`,
    })
  })

  Object.entries(biomarkers).forEach(([slug, b]) => {
    items.push({
      type: 'biomarker',
      slug,
      label: b.label,
      sub: b.short,
      desc: b.description,
      href: `/biomarkers/${slug}`,
    })
  })

  Object.entries(categories).forEach(([slug, g]) => {
    items.push({
      type: 'goal',
      slug,
      label: g.label,
      sub: g.short,
      desc: g.description,
      href: `/goals/${slug}`,
    })
  })

  Object.entries(stacks).forEach(([slug, s]) => {
    items.push({
      type: 'stack',
      slug,
      label: s.synergy?.result?.replace(/<[^>]+>/g, '') || s.metaTitle?.replace(' — SynergyStacks', '') || slug,
      sub: s.evidence?.label || '',
      desc: s.metaDescription || '',
      href: `/stack/${slug}`,
    })
  })

  return items
}

const TYPE_LABEL = {
  ingredient: 'INGREDIENT',
  mechanism: 'MECHANISM',
  biomarker: 'BIOMARKER',
  goal: 'GOAL',
  stack: 'STACK',
}

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')

  const index = useMemo(buildIndex, [])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    let filtered = index
    if (typeFilter !== 'all') filtered = filtered.filter((r) => r.type === typeFilter)
    if (!q) return filtered
    return filtered.filter((r) =>
      r.label.toLowerCase().includes(q) ||
      (r.sub || '').toLowerCase().includes(q) ||
      (r.desc || '').toLowerCase().includes(q)
    )
  }, [query, typeFilter, index])

  return (
    <>
      <section style={{ padding: '140px 0 40px' }}>
        <div className="container">
          <div className="crumbs">
            <a href="/">HOME</a>
            <span className="sep">/</span>
            <span className="cur">SEARCH</span>
          </div>
          <div className="kicker"><span className="dot"></span>SEARCH · {index.length} ENTRIES</div>
          <h1 style={{ fontSize: 'clamp(40px,6.5vw,90px)' }}>
            <span className="line"><span>FIND</span></span>
            <span className="line"><span className="lime">ANYTHING.</span></span>
          </h1>
          <p className="hero-copy">
            Search across ingredients, mechanisms, biomarkers, goals, and stacks.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 20 }}>
        <div className="container">
          <input
            type="search"
            className="search-input"
            placeholder="Try: creatine, VO2max, fat loss, AMPK, testosterone..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />

          <div className="search-filters">
            <button
              type="button"
              className={'search-filter' + (typeFilter === 'all' ? ' active' : '')}
              onClick={() => setTypeFilter('all')}
            >
              All ({index.length})
            </button>
            {Object.entries(TYPE_LABEL).map(([type, label]) => {
              const count = index.filter((r) => r.type === type).length
              return (
                <button
                  key={type}
                  type="button"
                  className={'search-filter' + (typeFilter === type ? ' active' : '')}
                  onClick={() => setTypeFilter(type)}
                >
                  {label} ({count})
                </button>
              )
            })}
          </div>

          <div className="search-results">
            {results.length === 0 ? (
              <div className="empty-state">
                <div className="empty-tag">NO RESULTS</div>
                <p>Nothing matched your query. Try a different term.</p>
              </div>
            ) : (
              results.map((r) => (
                <a key={`${r.type}-${r.slug}`} className="search-result" href={r.href}>
                  <div className="search-result-type">{TYPE_LABEL[r.type]}</div>
                  <div className="search-result-body">
                    <div className="search-result-label">{r.label}</div>
                    {r.sub && <div className="search-result-sub">{r.sub}</div>}
                    {r.desc && <div className="search-result-desc">{r.desc}</div>}
                  </div>
                </a>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  )
}