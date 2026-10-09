'use client'

import { Reveal } from './ClientUI'

export function GoalCard({ slug, goal }) {
  return (
    <Reveal>
      <a className="goal-card" href={`/goals/${slug}`}>
        <div className="goal-icon">{goal.icon}</div>
        <div className="goal-label">{goal.label}</div>
        <p className="goal-desc">{goal.description}</p>
        {goal.pathways && goal.pathways.length > 0 && (
          <div className="goal-pathways">
            {goal.pathways.length} {goal.pathways.length === 1 ? 'pathway' : 'pathways'}
          </div>
        )}
      </a>
    </Reveal>
  )
}