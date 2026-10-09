'use client'

import { Reveal } from './ClientUI'

export function BiomarkerCard({ slug, biomarker }) {
  const dirLabel =
    biomarker.direction === 'higher-better' ? '↑' :
    biomarker.direction === 'lower-better'  ? '↓' :
    '↔'

  return (
    <Reveal>
      <a className="bio-card" href={`/biomarkers/${slug}`}>
        <div className={'bio-direction dir-' + biomarker.direction}>
          {dirLabel}
        </div>
        <div className="bio-label">{biomarker.label}</div>
        <div className="bio-unit">{biomarker.unit}</div>
        {biomarker.normalRange && (
          <div className="bio-range">{biomarker.normalRange}</div>
        )}
      </a>
    </Reveal>
  )
}