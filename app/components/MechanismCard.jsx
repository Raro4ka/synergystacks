'use client'

import { Reveal } from './ClientUI'

export function MechanismCard({ slug, mechanism }) {
  return (
    <Reveal>
      <a className="mech-card" href={`/mechanisms/${slug}`}>
        <div className={'mech-evidence evidence-' + mechanism.evidenceLevel}>
          {mechanism.evidenceLevel}
        </div>
        <div className="mech-short">{mechanism.short}</div>
        <div className="mech-label">{mechanism.label}</div>
        <p className="mech-desc">{mechanism.description}</p>
        <div className="mech-meta">
          {mechanism.biomarkers && mechanism.biomarkers.length > 0 && (
            <span className="mech-count">{mechanism.biomarkers.length} biomarkers</span>
          )}
        </div>
      </a>
    </Reveal>
  )
}