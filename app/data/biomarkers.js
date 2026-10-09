/* =========================================================
   SYNERGYSTACKS — BIOMARKERS
   Measurable outcomes from blood tests, DEXA, VO2 tests.
   Users search by "how to lower CRP" — this is their entry point.

   IMPORTANT: slug must match what mechanisms.js references.
   ========================================================= */

export const biomarkers = {

  /* ==================== HORMONAL ==================== */

  'total-testosterone': {
    label: 'Total Testosterone',
    short: 'Total T',
    category: 'hormonal',
    unit: 'ng/dL',
    direction: 'higher-better',
    normalRange: '300–1000 ng/dL (adult male)',
    description: 'The primary male sex hormone. Total includes both bound and free fractions.',
  },

  'free-testosterone': {
    label: 'Free Testosterone',
    short: 'Free T',
    category: 'hormonal',
    unit: 'pg/mL',
    direction: 'higher-better',
    normalRange: '9–30 pg/mL (adult male)',
    description: 'The unbound, biologically active fraction of testosterone. More relevant than total for tissue effects.',
  },

  'lh': {
    label: 'Luteinizing Hormone',
    short: 'LH',
    category: 'hormonal',
    unit: 'mIU/mL',
    direction: 'target-range',
    normalRange: '1.7–8.6 mIU/mL',
    description: 'Pituitary signal that drives testosterone production in Leydig cells.',
  },

  'fsh': {
    label: 'Follicle-Stimulating Hormone',
    short: 'FSH',
    category: 'hormonal',
    unit: 'mIU/mL',
    direction: 'target-range',
    normalRange: '1.5–12.4 mIU/mL',
    description: 'Pituitary signal for spermatogenesis.',
  },

  'estradiol': {
    label: 'Estradiol (E2)',
    short: 'E2',
    category: 'hormonal',
    unit: 'pg/mL',
    direction: 'target-range',
    normalRange: '10–40 pg/mL (adult male)',
    description: 'The primary estrogen. Both too high and too low cause problems in men.',
  },

  'shbg': {
    label: 'Sex Hormone Binding Globulin',
    short: 'SHBG',
    category: 'hormonal',
    unit: 'nmol/L',
    direction: 'target-range',
    normalRange: '10–57 nmol/L',
    description: 'Protein that binds testosterone, making it inactive.',
  },

  'psa': {
    label: 'Prostate-Specific Antigen',
    short: 'PSA',
    category: 'hormonal',
    unit: 'ng/mL',
    direction: 'lower-better',
    normalRange: '<4.0 ng/mL',
    description: 'Prostate health marker. Elevated by testosterone therapy and prostate issues.',
  },

  'cortisol': {
    label: 'Cortisol',
    short: 'Cortisol',
    category: 'hormonal',
    unit: 'μg/dL',
    direction: 'target-range',
    normalRange: '6–23 μg/dL (morning)',
    description: 'Primary stress hormone. Chronic elevation impairs recovery, sleep, and testosterone.',
  },

  'dheas': {
    label: 'DHEA-S',
    short: 'DHEA-S',
    category: 'hormonal',
    unit: 'μg/dL',
    direction: 'target-range',
    normalRange: 'varies by age',
    description: 'Adrenal androgen precursor. Declines with age.',
  },

  'igf1': {
    label: 'IGF-1',
    short: 'IGF-1',
    category: 'hormonal',
    unit: 'ng/mL',
    direction: 'target-range',
    normalRange: 'varies by age',
    description: 'Growth hormone mediator. Relevant for muscle growth and aging.',
  },

  'tsh': {
    label: 'TSH',
    short: 'TSH',
    category: 'hormonal',
    unit: 'mIU/L',
    direction: 'target-range',
    normalRange: '0.4–4.0 mIU/L',
    description: 'Thyroid-stimulating hormone. First-line marker for thyroid function.',
  },

  't3-free': {
    label: 'Free T3',
    short: 'fT3',
    category: 'hormonal',
    unit: 'pg/mL',
    direction: 'target-range',
    normalRange: '2.3–4.2 pg/mL',
    description: 'Active thyroid hormone. Drives metabolic rate.',
  },

  't4-free': {
    label: 'Free T4',
    short: 'fT4',
    category: 'hormonal',
    unit: 'ng/dL',
    direction: 'target-range',
    normalRange: '0.8–1.8 ng/dL',
    description: 'Thyroid hormone precursor.',
  },

  'prolactin': {
    label: 'Prolactin',
    short: 'Prolactin',
    category: 'hormonal',
    unit: 'ng/mL',
    direction: 'target-range',
    normalRange: '4–15 ng/mL (men)',
    description: 'Pituitary hormone. Elevated prolactin suppresses testosterone.',
  },

  /* ==================== METABOLIC ==================== */

  'hba1c': {
    label: 'HbA1c',
    short: 'HbA1c',
    category: 'metabolic',
    unit: '%',
    direction: 'lower-better',
    normalRange: '<5.7%',
    description: '3-month average blood glucose. The gold standard for long-term glycemic control.',
  },

  'fasting-glucose': {
    label: 'Fasting Glucose',
    short: 'Glucose',
    category: 'metabolic',
    unit: 'mg/dL',
    direction: 'lower-better',
    normalRange: '70–99 mg/dL',
    description: 'Blood sugar after an overnight fast.',
  },

  'fasting-insulin': {
    label: 'Fasting Insulin',
    short: 'Insulin',
    category: 'metabolic',
    unit: 'μIU/mL',
    direction: 'lower-better',
    normalRange: '2–8 μIU/mL',
    description: 'The most sensitive early marker of insulin resistance.',
  },

  'homa-ir': {
    label: 'HOMA-IR',
    short: 'HOMA-IR',
    category: 'metabolic',
    unit: 'index',
    direction: 'lower-better',
    normalRange: '<2.0',
    description: 'Calculated index of insulin resistance from fasting glucose and insulin.',
  },

  'resting-metabolic-rate': {
    label: 'Resting Metabolic Rate',
    short: 'RMR',
    category: 'metabolic',
    unit: 'kcal/day',
    direction: 'higher-better',
    normalRange: 'varies by body composition',
    description: 'Calories burned at rest. Higher = faster metabolism.',
  },

  /* ==================== BODY COMPOSITION ==================== */

  'body-fat': {
    label: 'Body Fat Percentage',
    short: 'Body Fat',
    category: 'body-comp',
    unit: '%',
    direction: 'target-range',
    normalRange: '10–20% (men), 18–28% (women)',
    description: 'Percentage of total mass that is fat.',
  },

  'visceral-fat': {
    label: 'Visceral Fat',
    short: 'Visceral Fat',
    category: 'body-comp',
    unit: 'units or cm²',
    direction: 'lower-better',
    normalRange: '<100 cm² (DEXA)',
    description: 'Fat around internal organs. The metabolically dangerous kind.',
  },

  'lean-mass': {
    label: 'Lean Body Mass',
    short: 'Lean Mass',
    category: 'body-comp',
    unit: 'kg',
    direction: 'higher-better',
    normalRange: 'varies',
    description: 'Everything that is not fat — muscle, bone, water, organs.',
  },

  'waist-circumference': {
    label: 'Waist Circumference',
    short: 'Waist',
    category: 'body-comp',
    unit: 'cm',
    direction: 'lower-better',
    normalRange: '<94 cm (men), <80 cm (women)',
    description: 'Simple proxy for visceral fat and metabolic risk.',
  },

  /* ==================== PERFORMANCE ==================== */

  'vo2max': {
    label: 'VO2max',
    short: 'VO2max',
    category: 'performance',
    unit: 'mL/kg/min',
    direction: 'higher-better',
    normalRange: '35–55 mL/kg/min (trained adults)',
    description: 'Maximum rate of oxygen consumption during exercise. The gold standard of aerobic capacity.',
  },

  'time-to-exhaustion': {
    label: 'Time to Exhaustion',
    short: 'TTE',
    category: 'performance',
    unit: 'minutes',
    direction: 'higher-better',
    normalRange: 'varies by protocol',
    description: 'How long a subject can sustain a fixed workload before failure.',
  },

  'lactate-threshold': {
    label: 'Lactate Threshold',
    short: 'LT',
    category: 'performance',
    unit: '% VO2max or mmol/L',
    direction: 'higher-better',
    normalRange: 'varies',
    description: 'The exercise intensity at which lactate starts accumulating faster than it clears.',
  },

  'one-rm': {
    label: 'One-Rep Max',
    short: '1RM',
    category: 'performance',
    unit: 'kg',
    direction: 'higher-better',
    normalRange: 'varies',
    description: 'The maximum weight that can be lifted for a single repetition.',
  },

  'peak-power': {
    label: 'Peak Power',
    short: 'Peak Power',
    category: 'performance',
    unit: 'watts',
    direction: 'higher-better',
    normalRange: 'varies',
    description: 'Maximum explosive power output. Measured via Wingate test or vertical jump.',
  },

  'vertical-jump': {
    label: 'Vertical Jump',
    short: 'Vert',
    category: 'performance',
    unit: 'cm or inches',
    direction: 'higher-better',
    normalRange: 'varies',
    description: 'Field test for lower-body explosive power.',
  },

  'grip-strength': {
    label: 'Grip Strength',
    short: 'Grip',
    category: 'performance',
    unit: 'kg',
    direction: 'higher-better',
    normalRange: 'varies by age',
    description: 'Hand dynamometer measure. Correlates with overall strength and mortality.',
  },

  /* ==================== INFLAMMATION ==================== */

  'crp': {
    label: 'C-Reactive Protein',
    short: 'CRP',
    category: 'inflammation',
    unit: 'mg/L',
    direction: 'lower-better',
    normalRange: '<1.0 mg/L (low CV risk)',
    description: 'General inflammation marker. Elevated in chronic disease and cardiovascular risk.',
  },

  'il-6': {
    label: 'Interleukin-6',
    short: 'IL-6',
    category: 'inflammation',
    unit: 'pg/mL',
    direction: 'lower-better',
    normalRange: '<5 pg/mL',
    description: 'Pro-inflammatory cytokine. Chronically elevated in obesity and aging.',
  },

  'tnf-alpha': {
    label: 'TNF-α',
    short: 'TNF-α',
    category: 'inflammation',
    unit: 'pg/mL',
    direction: 'lower-better',
    normalRange: '<8.1 pg/mL',
    description: 'Master inflammatory cytokine. Elevated in chronic disease.',
  },

  'homocysteine': {
    label: 'Homocysteine',
    short: 'Hcy',
    category: 'inflammation',
    unit: 'μmol/L',
    direction: 'lower-better',
    normalRange: '<15 μmol/L',
    description: 'Amino acid linked to cardiovascular risk. Lowered by B12, folate, B6.',
  },

  /* ==================== CARDIOVASCULAR ==================== */

  'blood-pressure-systolic': {
    label: 'Systolic Blood Pressure',
    short: 'SBP',
    category: 'cardio',
    unit: 'mmHg',
    direction: 'lower-better',
    normalRange: '<120 mmHg',
    description: 'Peak pressure during heart contraction.',
  },

  'blood-pressure-diastolic': {
    label: 'Diastolic Blood Pressure',
    short: 'DBP',
    category: 'cardio',
    unit: 'mmHg',
    direction: 'lower-better',
    normalRange: '<80 mmHg',
    description: 'Pressure between heartbeats.',
  },

  'resting-heart-rate': {
    label: 'Resting Heart Rate',
    short: 'RHR',
    category: 'cardio',
    unit: 'bpm',
    direction: 'lower-better',
    normalRange: '50–70 bpm',
    description: 'Heartbeats per minute at rest. Lower = better cardiovascular fitness.',
  },

  'hdl': {
    label: 'HDL Cholesterol',
    short: 'HDL',
    category: 'cardio',
    unit: 'mg/dL',
    direction: 'higher-better',
    normalRange: '>40 mg/dL (men)',
    description: 'Good cholesterol. Higher is protective.',
  },

  'ldl': {
    label: 'LDL Cholesterol',
    short: 'LDL',
    category: 'cardio',
    unit: 'mg/dL',
    direction: 'lower-better',
    normalRange: '<100 mg/dL (optimal)',
    description: 'Bad cholesterol. Primary target for cardiovascular risk reduction.',
  },

  'triglycerides': {
    label: 'Triglycerides',
    short: 'Trig',
    category: 'cardio',
    unit: 'mg/dL',
    direction: 'lower-better',
    normalRange: '<150 mg/dL',
    description: 'Blood fats. Elevated in metabolic syndrome and high carb intake.',
  },

  /* ==================== RECOVERY / STRESS ==================== */

  'creatine-kinase': {
    label: 'Creatine Kinase',
    short: 'CK',
    category: 'recovery',
    unit: 'U/L',
    direction: 'lower-better',
    normalRange: '30–200 U/L',
    description: 'Muscle damage marker. Rises after intense training, falls with recovery.',
  },

  'muscle-soreness': {
    label: 'Muscle Soreness (DOMS)',
    short: 'DOMS',
    category: 'recovery',
    unit: 'scale 1–10',
    direction: 'lower-better',
    normalRange: 'varies',
    description: 'Delayed onset muscle soreness. Subjective measure of exercise-induced damage.',
  },

  'sleep-quality': {
    label: 'Sleep Quality',
    short: 'Sleep',
    category: 'recovery',
    unit: 'PSQI score',
    direction: 'lower-better',
    normalRange: '<5 (good sleep)',
    description: 'Pittsburgh Sleep Quality Index. Subjective measure used in many studies.',
  },

  'hrv': {
    label: 'Heart Rate Variability',
    short: 'HRV',
    category: 'recovery',
    unit: 'ms',
    direction: 'higher-better',
    normalRange: 'varies',
    description: 'Variation in time between heartbeats. Higher = better recovery and autonomic balance.',
  },

  /* ==================== COGNITIVE ==================== */

  'bdnf': {
    label: 'BDNF',
    short: 'BDNF',
    category: 'cognitive',
    unit: 'ng/mL',
    direction: 'higher-better',
    normalRange: 'varies',
    description: 'Brain-derived neurotrophic factor. Supports neuron growth and synaptic plasticity.',
  },

  'reaction-time': {
    label: 'Reaction Time',
    short: 'RT',
    category: 'cognitive',
    unit: 'ms',
    direction: 'lower-better',
    normalRange: '200–300 ms',
    description: 'How fast a subject responds to a stimulus.',
  },

  'memory-score': {
    label: 'Memory Test Score',
    short: 'Memory',
    category: 'cognitive',
    unit: 'composite',
    direction: 'higher-better',
    normalRange: 'varies',
    description: 'Various standardized memory tests (RAVLT, WMS, etc.).',
  },

  'attention-score': {
    label: 'Attention Test Score',
    short: 'Attention',
    category: 'cognitive',
    unit: 'composite',
    direction: 'higher-better',
    normalRange: 'varies',
    description: 'Sustained attention and vigilance tests (e.g., Stroop, CPT).',
  },

  /* ==================== SKIN / BEAUTY ==================== */

  'skin-elasticity': {
    label: 'Skin Elasticity',
    short: 'Skin Elasticity',
    category: 'skin',
    unit: 'cutometer',
    direction: 'higher-better',
    normalRange: 'varies by age',
    description: 'Measured by cutometer. Higher = firmer, more youthful skin.',
  },

  'skin-hydration': {
    label: 'Skin Hydration',
    short: 'Hydration',
    category: 'skin',
    unit: 'corneometer',
    direction: 'higher-better',
    normalRange: 'varies',
    description: 'Measured by corneometer. Reflects water content in outer skin layer.',
  },

  /* ==================== ADD NEW BIOMARKERS BELOW ==================== */

  // 'apo-b': { label: 'ApoB', category: 'cardio', ... },
  // 'lp-a': { label: 'Lp(a)', category: 'cardio', ... },
  // 'ferritin': { label: 'Ferritin', category: 'metabolic', ... },
  // 'ggt': { label: 'GGT', category: 'metabolic', ... },
  // 'alt': { label: 'ALT', category: 'metabolic', ... },
  // 'ast': { label: 'AST', category: 'metabolic', ... },
  // 'uric-acid': { ... },
  // 'c-peptide': { ... },
  // 'leptin': { ... },
  // 'adiponectin': { ... },
  // 'vitamin-d-25oh': { label: 'Vitamin D 25(OH)', category: 'vitamin', ... },
  // 'b12-serum': { ... },
  // 'folate-serum': { ... },
  // 'magnesium-rbc': { ... },
  // 'zinc-serum': { ... },

}

/* Category labels for grouping on /biomarkers page */
export const biomarkerCategories = {
  'hormonal':      { label: 'Hormonal',                order: 1 },
  'metabolic':     { label: 'Metabolic',               order: 2 },
  'body-comp':     { label: 'Body Composition',        order: 3 },
  'performance':   { label: 'Performance',             order: 4 },
  'inflammation':  { label: 'Inflammation',            order: 5 },
  'cardio':        { label: 'Cardiovascular',          order: 6 },
  'recovery':      { label: 'Recovery & Stress',       order: 7 },
  'cognitive':     { label: 'Cognitive',               order: 8 },
  'skin':          { label: 'Skin',                    order: 9 },
}

/* Helper: get all biomarkers in a category */
export function biomarkersByCategory(cat) {
  return Object.entries(biomarkers)
    .filter(([_, b]) => b.category === cat)
    .map(([slug, b]) => ({ slug, ...b }))
}

/* Helper: get all biomarkers that a mechanism affects */
export function biomarkersForMechanism(mechanism) {
  return (mechanism.biomarkers || [])
    .map((slug) => biomarkers[slug] ? { slug, ...biomarkers[slug] } : null)
    .filter(Boolean)
}