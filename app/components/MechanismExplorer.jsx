'use client'

import { useEffect, useMemo, useState } from 'react'

const CATEGORY_LABELS = {
  hormonal: 'Hormonal',
  metabolic: 'Metabolic',
  neurotransmitter: 'Neurotransmitter',
  cellular: 'Cellular',
  vascular: 'Vascular',
  structural: 'Structural',
  gut: 'Gut',
  immune: 'Immune',
  other: 'Other Pathways',
}

const EVIDENCE_LABELS = {
  established: 'Established',
  supported: 'Supported',
  emerging: 'Emerging',
  theoretical: 'Theoretical',
}

const EVIDENCE_ORDER = {
  established: 0,
  supported: 1,
  emerging: 2,
  theoretical: 3,
}

const STORAGE_KEY = 'synergystacks:mech-favorites:v1'

function normalize(value) {
  return String(value ?? '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
}

function getCategoryLabel(category) {
  return CATEGORY_LABELS[category] || category || 'Other Pathways'
}

function getSearchText(slug, mech) {
  return normalize(
    [
      slug,
      mech.label,
      mech.short,
      mech.description,
      getCategoryLabel(mech.category),
      ...(mech.synonyms || []),
      ...(mech.biomarkers || []),
    ].join(' ')
  )
}

export function MechanismExplorer({ mechanisms }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [evidence, setEvidence] = useState('all')
  const [sort, setSort] = useState('name')
  const [favoritesOnly, setFavoritesOnly] = useState(false)
  const [favorites, setFavorites] = useState([])
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [ready, setReady] = useState(false)

  const entries = useMemo(
    () => Object.entries(mechanisms || {}),
    [mechanisms]
  )

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      const parsed = saved ? JSON.parse(saved) : []
      if (Array.isArray(parsed)) {
        setFavorites(parsed.filter((item) => typeof item === 'string'))
      }
    } catch {
      /* storage unavailable */
    } finally {
      setReady(true)
    }
  }, [])

  useEffect(() => {
    if (!ready) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
    } catch {
      /* session-only */
    }
  }, [favorites, ready])

  const categories = useMemo(() => {
    const available = new Set(
      entries.map(([, item]) => item.category || 'other')
    )

    return Object.keys(CATEGORY_LABELS)
      .filter((key) => available.has(key))
      .map((key) => ({
        value: key,
        label: CATEGORY_LABELS[key],
      }))
      .concat(
        [...available]
          .filter((key) => !CATEGORY_LABELS[key])
          .sort()
          .map((key) => ({ value: key, label: key }))
      )
  }, [entries])

  const filtered = useMemo(() => {
    const term = normalize(query)

    const result = entries.filter(([slug, item]) => {
      if (term && !getSearchText(slug, item).includes(term)) return false
      if (category !== 'all' && (item.category || 'other') !== category) return false
      if (evidence !== 'all' && item.evidenceLevel !== evidence) return false
      if (favoritesOnly && !favorites.includes(slug)) return false
      return true
    })

    result.sort(([slugA, a], [slugB, b]) => {
      if (sort === 'evidence') {
        const diff =
          (EVIDENCE_ORDER[a.evidenceLevel] ?? 99) -
          (EVIDENCE_ORDER[b.evidenceLevel] ?? 99)
        if (diff !== 0) return diff
      }
      if (sort === 'biomarkers') {
        const diff = (b.biomarkers?.length || 0) - (a.biomarkers?.length || 0)
        if (diff !== 0) return diff
      }
      if (sort === 'category') {
        const diff = getCategoryLabel(a.category).localeCompare(
          getCategoryLabel(b.category)
        )
        if (diff !== 0) return diff
      }
      return a.label.localeCompare(b.label) || slugA.localeCompare(slugB)
    })

    return result
  }, [entries, query, category, evidence, sort, favoritesOnly, favorites])

  const hasFilters =
    query !== '' ||
    category !== 'all' ||
    evidence !== 'all' ||
    favoritesOnly

  function resetFilters() {
    setQuery('')
    setCategory('all')
    setEvidence('all')
    setSort('name')
    setFavoritesOnly(false)
  }

  function toggleFavorite(slug) {
    setFavorites((current) =>
      current.includes(slug)
        ? current.filter((item) => item !== slug)
        : [...current, slug]
    )
  }

  return (
    <div className="ingredient-explorer">
      <div className="ix-toolbar">
        <label className="ix-search">
          <span className="ix-search-icon" aria-hidden="true">⌕</span>
          <span className="ix-sr-only">Search mechanisms</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search mechanisms, biomarkers, categories..."
            autoComplete="off"
          />
          {query && (
            <button
              type="button"
              className="ix-clear"
              onClick={() => setQuery('')}
              aria-label="Clear search"
            >×</button>
          )}
        </label>

        <button
          type="button"
          className={'ix-filter-toggle' + (filtersOpen ? ' is-active' : '')}
          onClick={() => setFiltersOpen((v) => !v)}
          aria-expanded={filtersOpen}
          aria-controls="mechanism-filters"
        >
          <span aria-hidden="true">☷</span>
          Filters
        </button>
      </div>

      <div
        id="mechanism-filters"
        className={'ix-filters' + (filtersOpen ? ' is-open' : '')}
      >
        <label className="ix-field">
          <span>Category</span>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="all">All categories</option>
            {categories.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <label className="ix-field">
          <span>Evidence level</span>
          <select
            value={evidence}
            onChange={(event) => setEvidence(event.target.value)}
          >
            <option value="all">All levels</option>
            {Object.entries(EVIDENCE_LABELS).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </label>

        <label className="ix-field">
          <span>Sort by</span>
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
          >
            <option value="name">Name: A–Z</option>
            <option value="evidence">Evidence level</option>
            <option value="biomarkers">Number of biomarkers</option>
            <option value="category">Category</option>
          </select>
        </label>

        <label className="ix-field">
          <span>&nbsp;</span>
          <button
            type="button"
            className={'ix-favorites-toggle' + (favoritesOnly ? ' is-active' : '')}
            onClick={() => setFavoritesOnly((v) => !v)}
            aria-pressed={favoritesOnly}
            style={{ minHeight: 45, justifyContent: 'center', border: '1px solid #252d25', borderRadius: 10, background: '#0b0e0b', padding: '0 12px' }}
          >
            <span aria-hidden="true">{favoritesOnly ? '★' : '☆'}</span>
            Favorites
            <span className="ix-favorite-count">{favorites.length}</span>
          </button>
        </label>
      </div>

      <div className="ix-secondary-toolbar">
        <div className="ix-results" aria-live="polite" aria-atomic="true">
          <strong>{filtered.length}</strong>{' '}
          {filtered.length === 1 ? 'pathway' : 'pathways'} found
        </div>

        {hasFilters && (
          <button
            type="button"
            className="ix-reset"
            onClick={resetFilters}
          >
            Reset filters
          </button>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="ix-grid">
          {filtered.map(([slug, mech]) => {
            const isFavorite = favorites.includes(slug)
            const level = mech.evidenceLevel || 'unrated'
            const biomarkers = mech.biomarkers || []

            return (
              <article className="ix-card" key={slug}>
                <div className="ix-card-top">
                  <span className="ix-category">
                    {getCategoryLabel(mech.category)}
                  </span>
                  <button
                    type="button"
                    className={'ix-star' + (isFavorite ? ' is-active' : '')}
                    onClick={() => toggleFavorite(slug)}
                    aria-label={
                      isFavorite
                        ? `Remove ${mech.label} from favorites`
                        : `Add ${mech.label} to favorites`
                    }
                    aria-pressed={isFavorite}
                  >
                    {isFavorite ? '★' : '☆'}
                  </button>
                </div>

                <h2 className="ix-card-title">
                  <a href={`/mechanisms/${slug}/`}>
                    {mech.label}
                    <span aria-hidden="true"> ↗</span>
                  </a>
                </h2>

                {mech.short && (
                  <div className="ix-mini-label" style={{ marginTop: 0, marginBottom: 8 }}>
                    {mech.short}
                  </div>
                )}

                <p className="ix-description">
                  {mech.description || 'Description not yet available.'}
                </p>

                {biomarkers.length > 0 && (
                  <div className="ix-mechanisms">
                    <span className="ix-mini-label">BIOMARKERS</span>
                    <div className="ix-tags">
                      {biomarkers.slice(0, 3).map((bio) => (
                        <span className="ix-tag" key={bio}>
                          {bio.replaceAll('-', ' ')}
                        </span>
                      ))}
                      {biomarkers.length > 3 && (
                        <span className="ix-tag ix-tag-more">
                          +{biomarkers.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="ix-card-bottom">
                  <span className={`ix-evidence evidence-${level}`}>
                    <span className="ix-evidence-dot" />
                    {EVIDENCE_LABELS[level] || 'Not rated'}
                  </span>
                </div>
              </article>
            )
          })}
        </div>
      ) : (
        <div className="ix-empty">
          <span className="ix-empty-icon" aria-hidden="true">⌕</span>
          <h2>No pathways found</h2>
          <p>Try a different search term or remove one of the filters.</p>
          <button
            type="button"
            className="ix-reset-button"
            onClick={resetFilters}
          >
            Clear all filters
          </button>
        </div>
      )}

      <p className="ix-disclaimer">
        Evidence labels reflect the state of the SynergyStacks database
        — they are editorial classifications, not a replacement for
        reading the primary literature for a specific outcome.
      </p>
    </div>
  )
}