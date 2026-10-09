'use client'

import { Reveal } from './ClientUI'

export function IngredientCard({ slug, ingredient }) {
  return (
    <Reveal>
      <a className="ingredient-card" href={`/ingredients/${slug}`}>
        <div className="ing-category">{ingredient.category}</div>
        <div className="ing-label">{ingredient.label}</div>
        {ingredient.description && (
          <p className="ing-desc">{ingredient.description}</p>
        )}
        <div className="ing-meta">
          <span className={'ing-evidence evidence-' + ingredient.evidenceLevel}>
            {ingredient.evidenceLevel}
          </span>
          {ingredient.forms && ingredient.forms.length > 0 && (
            <span className="ing-forms-count">
              {ingredient.forms.length} {ingredient.forms.length === 1 ? 'form' : 'forms'}
            </span>
          )}
          {ingredient.priceBand && (
            <span className="ing-price">{ingredient.priceBand}</span>
          )}
        </div>
      </a>
    </Reveal>
  )
}