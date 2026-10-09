/* =========================================================
   SYNERGYSTACKS — CATEGORIES (goals)
   Each category = what the user actually wants.
   Linked to mechanisms (pathways) — not directly to ingredients.
   ========================================================= */

export const categories = {

  /* ==================== BODY COMPOSITION ==================== */

  'fat-loss': {
    label: 'Fat Loss',
    short: 'Fat Loss',
    group: 'body-comp',
    order: 1,
    inNav: true,
    icon: '🔥',
    description: 'Reducing body fat while preserving muscle. Achieved through a combination of energy deficit, fat oxidation, and metabolic support.',
    pathways: ['ampk-activation', 'thermogenesis', 'insulin-sensitivity', 'fatty-acid-transport', 'lipolysis'],
  },

  'muscle-gain': {
    label: 'Muscle Gain',
    short: 'Muscle',
    group: 'body-comp',
    order: 2,
    inNav: true,
    icon: '💪',
    description: 'Building lean body mass through training, protein synthesis, and anabolic support.',
    pathways: ['mtor-signaling', 'atp-production', 'phosphocreatine-resynthesis', 'insulin-sensitivity'],
  },

  'metabolic-health': {
    label: 'Metabolic Health',
    short: 'Metabolic',
    group: 'body-comp',
    order: 3,
    inNav: true,
    icon: '⚖️',
    description: 'Blood sugar control, insulin sensitivity, and long-term metabolic resilience.',
    pathways: ['ampk-activation', 'insulin-sensitivity', 'nf-kb-inhibition'],
  },

  /* ==================== PERFORMANCE ==================== */

  'endurance': {
    label: 'Endurance',
    short: 'Endurance',
    group: 'performance',
    order: 10,
    inNav: true,
    icon: '🏃',
    description: 'Sustained aerobic capacity — VO2max, time to exhaustion, and lactate threshold.',
    pathways: ['nitric-oxide-production', 'mitochondrial-biogenesis', 'atp-production', 'fatty-acid-transport', 'adenosine-antagonism'],
  },

  'strength': {
    label: 'Strength',
    short: 'Strength',
    group: 'performance',
    order: 11,
    inNav: true,
    icon: '🏋️',
    description: 'Maximal force production — 1RM, power output, neuromuscular efficiency.',
    pathways: ['atp-production', 'phosphocreatine-resynthesis', 'mtor-signaling'],
  },

  'power': {
    label: 'Power & Explosiveness',
    short: 'Power',
    group: 'performance',
    order: 12,
    inNav: false,
    icon: '⚡',
    description: 'Explosive force — peak power, vertical jump, sprint speed.',
    pathways: ['phosphocreatine-resynthesis', 'atp-production'],
  },

  'recovery': {
    label: 'Recovery',
    short: 'Recovery',
    group: 'performance',
    order: 13,
    inNav: true,
    icon: '🔄',
    description: 'Faster recovery between sessions — reduced soreness, restored glycogen, lower inflammation.',
    pathways: ['glycogen-resynthesis', 'nf-kb-inhibition', 'cortisol-modulation'],
  },

  /* ==================== HORMONAL ==================== */

  'testosterone': {
    label: 'Testosterone',
    short: 'Testosterone',
    group: 'hormonal',
    order: 20,
    inNav: true,
    icon: '⚡',
    description: 'Supporting healthy testosterone production through the HPG axis and aromatase regulation.',
    pathways: ['gnrh-lh-signaling', 'aromatase-inhibition', 'leydig-cell-function', 'shbg-modulation'],
  },

  'libido': {
    label: 'Libido & Sexual Health',
    short: 'Libido',
    group: 'hormonal',
    order: 21,
    inNav: true,
    icon: '❤️',
    description: 'Sexual desire, erectile function, and overall sexual well-being.',
    pathways: ['nitric-oxide-production', 'cgmp-pathway', 'dopamine-signaling', 'gnrh-lh-signaling'],
  },

  'fertility': {
    label: 'Fertility',
    short: 'Fertility',
    group: 'hormonal',
    order: 22,
    inNav: false,
    icon: '🌱',
    description: 'Sperm health, motility, and reproductive function.',
    pathways: ['leydig-cell-function', 'gnrh-lh-signaling'],
  },

  'stress-management': {
    label: 'Stress Management',
    short: 'Stress',
    group: 'hormonal',
    order: 23,
    inNav: true,
    icon: '🧘',
    description: 'Lower cortisol, better stress response, calmer baseline.',
    pathways: ['cortisol-modulation', 'gabaergic-activity'],
  },

  'thyroid': {
    label: 'Thyroid Function',
    short: 'Thyroid',
    group: 'hormonal',
    order: 24,
    inNav: false,
    icon: '🦋',
    description: 'T3/T4 production and metabolic rate.',
    pathways: [],
  },

  /* ==================== COGNITION ==================== */

  'cognition': {
    label: 'Cognition',
    short: 'Cognition',
    group: 'cognitive',
    order: 30,
    inNav: true,
    icon: '🧠',
    description: 'Overall brain function — attention, processing speed, mental clarity.',
    pathways: ['acetylcholine-signaling', 'dopamine-signaling', 'nitric-oxide-production', 'nrf2-activation'],
  },

  'memory': {
    label: 'Memory',
    short: 'Memory',
    group: 'cognitive',
    order: 31,
    inNav: true,
    icon: '📚',
    description: 'Short-term and long-term memory retention and recall.',
    pathways: ['acetylcholine-signaling', 'glutamate-modulation', 'nmda-receptor-modulation', 'ampa-receptor-modulation'],
  },

  'focus': {
    label: 'Focus & Attention',
    short: 'Focus',
    group: 'cognitive',
    order: 32,
    inNav: true,
    icon: '🎯',
    description: 'Sustained attention, working memory, and task engagement.',
    pathways: ['dopamine-signaling', 'adenosine-antagonism', 'acetylcholine-signaling'],
  },

  'mood': {
    label: 'Mood',
    short: 'Mood',
    group: 'cognitive',
    order: 33,
    inNav: true,
    icon: '☀️',
    description: 'Emotional balance, motivation, and overall sense of well-being.',
    pathways: ['serotonin-modulation', 'dopamine-signaling', 'cortisol-modulation'],
  },

  'motivation': {
    label: 'Motivation & Drive',
    short: 'Motivation',
    group: 'cognitive',
    order: 34,
    inNav: false,
    icon: '🚀',
    description: 'Drive to initiate and sustain goal-directed behavior.',
    pathways: ['dopamine-signaling'],
  },

  'creativity': {
    label: 'Creativity',
    short: 'Creativity',
    group: 'cognitive',
    order: 35,
    inNav: false,
    icon: '🎨',
    description: 'Divergent thinking, idea generation, cognitive flexibility.',
    pathways: ['dopamine-signaling', 'acetylcholine-signaling'],
  },

  /* ==================== SLEEP / RELAXATION ==================== */

  'sleep': {
    label: 'Sleep',
    short: 'Sleep',
    group: 'recovery-state',
    order: 40,
    inNav: true,
    icon: '😴',
    description: 'Sleep quality, latency, and depth.',
    pathways: ['gabaergic-activity', 'serotonin-modulation', 'cortisol-modulation'],
  },

  'relaxation': {
    label: 'Relaxation & Calm',
    short: 'Calm',
    group: 'recovery-state',
    order: 41,
    inNav: false,
    icon: '🌿',
    description: 'Daytime calm without sedation.',
    pathways: ['gabaergic-activity'],
  },

  /* ==================== LONG-TERM HEALTH ==================== */

  'longevity': {
    label: 'Longevity',
    short: 'Longevity',
    group: 'healthspan',
    order: 50,
    inNav: true,
    icon: '⏳',
    description: 'Healthspan extension — slower aging, better biomarkers, resilience.',
    pathways: ['nrf2-activation', 'autophagy-modulation', 'sirtuin-activation', 'mitochondrial-biogenesis', 'nf-kb-inhibition'],
  },

  'inflammation-control': {
    label: 'Inflammation Control',
    short: 'Anti-Inflammatory',
    group: 'healthspan',
    order: 51,
    inNav: true,
    icon: '🛡️',
    description: 'Lowering chronic inflammation — CRP, IL-6, TNF-α.',
    pathways: ['nrf2-activation', 'nf-kb-inhibition', 'heme-oxygenase-1'],
  },

  'cardiovascular-health': {
    label: 'Cardiovascular Health',
    short: 'Cardio',
    group: 'healthspan',
    order: 52,
    inNav: true,
    icon: '❤️‍🩹',
    description: 'Heart and blood vessel health — blood pressure, lipids, endothelial function.',
    pathways: ['nitric-oxide-production', 'angiotensin-conversion-inhibition', 'nf-kb-inhibition'],
  },

  'immunity': {
    label: 'Immunity',
    short: 'Immunity',
    group: 'healthspan',
    order: 53,
    inNav: true,
    icon: '🦠',
    description: 'Immune resilience — fighting infections, balanced inflammatory response.',
    pathways: ['immune-modulation', 'microbiome-modulation', 'nrf2-activation'],
  },

  'gut-health': {
    label: 'Gut Health',
    short: 'Gut',
    group: 'healthspan',
    order: 54,
    inNav: true,
    icon: '🥗',
    description: 'Digestive function, microbiome balance, gut barrier integrity.',
    pathways: ['microbiome-modulation', 'intestinal-barrier-function'],
  },

  'skin-health': {
    label: 'Skin, Hair & Nails',
    short: 'Beauty',
    group: 'healthspan',
    order: 55,
    inNav: true,
    icon: '✨',
    description: 'Skin elasticity, hydration, hair quality, nail strength.',
    pathways: ['collagen-synthesis', 'nrf2-activation'],
  },

  'joint-health': {
    label: 'Joint Health',
    short: 'Joints',
    group: 'healthspan',
    order: 56,
    inNav: false,
    icon: '🦴',
    description: 'Joint comfort, cartilage health, mobility.',
    pathways: ['collagen-synthesis', 'nf-kb-inhibition'],
  },

  'bone-health': {
    label: 'Bone Health',
    short: 'Bones',
    group: 'healthspan',
    order: 57,
    inNav: false,
    icon: '💀',
    description: 'Bone mineral density and fracture resistance.',
    pathways: ['bone-mineralization'],
  },

  'brain-health': {
    label: 'Brain Health (long-term)',
    short: 'Brain Longevity',
    group: 'healthspan',
    order: 58,
    inNav: false,
    icon: '🧬',
    description: 'Long-term neurological protection — neuroinflammation, oxidative stress.',
    pathways: ['nrf2-activation', 'nf-kb-inhibition', 'mitochondrial-biogenesis'],
  },

}

/* Group labels for /goals page — display only */
export const categoryGroups = {
  'body-comp':      { label: 'Body Composition',          order: 1 },
  'performance':    { label: 'Performance',               order: 2 },
  'hormonal':       { label: 'Hormonal',                  order: 3 },
  'cognitive':      { label: 'Cognition & Mood',          order: 4 },
  'recovery-state': { label: 'Sleep & Relaxation',        order: 5 },
  'healthspan':     { label: 'Long-Term Health',          order: 6 },
}

/* Helper: categories shown in the top nav, in order */
export function navCategories() {
  return Object.entries(categories)
    .filter(([_, c]) => c.inNav)
    .sort((a, b) => a[1].order - b[1].order)
    .map(([slug, c]) => ({ slug, label: c.label, icon: c.icon }))
}

/* Helper: get a category's mechanisms as full objects */
export function getCategoryPathways(slug, mechanisms) {
  const cat = categories[slug]
  if (!cat) return []
  return (cat.pathways || [])
    .map((mSlug) => mechanisms[mSlug] ? { slug: mSlug, ...mechanisms[mSlug] } : null)
    .filter(Boolean)
}