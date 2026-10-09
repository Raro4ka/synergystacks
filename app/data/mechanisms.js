/* =========================================================
   SYNERGYSTACKS — MECHANISMS (expanded)
   Biological pathways. Each mechanism links to biomarkers
   and contributes to goals. Ingredients reference these keys.
   ========================================================= */

export const mechanisms = {

  /* ==================== HORMONAL ==================== */

  'gnrh-lh-signaling': {
    label: 'GnRH → LH Signaling',
    short: 'GnRH/LH',
    category: 'hormonal',
    evidenceLevel: 'emerging',
    evidenceNote: 'Cistanche increases GnRH and LH in rodent models. Human data is limited to anecdotal bloodwork.',
    description: 'Hypothalamus releases GnRH → pituitary releases LH → Leydig cells produce testosterone.',
    biomarkers: ['lh', 'total-testosterone'],
    contributesTo: ['testosterone'],
  },

  'aromatase-inhibition': {
    label: 'Aromatase Inhibition',
    short: 'Aromatase',
    category: 'hormonal',
    evidenceLevel: 'supported',
    evidenceNote: 'Eurycomanone inhibits aromatase in vitro. Human RCTs show increased total testosterone.',
    description: 'Aromatase converts testosterone into estradiol. Inhibiting it keeps more testosterone as testosterone.',
    biomarkers: ['estradiol', 'total-testosterone', 'free-testosterone'],
    contributesTo: ['testosterone'],
  },

  'leydig-cell-function': {
    label: 'Leydig Cell Function',
    short: 'Leydig Cells',
    category: 'hormonal',
    evidenceLevel: 'supported',
    evidenceNote: 'Zinc and vitamin D support Leydig cell function, but only in deficient individuals.',
    description: 'Leydig cells are the testosterone factories in the testes.',
    biomarkers: ['total-testosterone', 'lh'],
    contributesTo: ['testosterone', 'fertility'],
  },

  'cortisol-modulation': {
    label: 'Cortisol Modulation',
    short: 'Cortisol',
    category: 'hormonal',
    evidenceLevel: 'supported',
    evidenceNote: 'Ashwagandha reduces serum cortisol in multiple human RCTs.',
    description: 'Chronic cortisol elevation impairs recovery, sleep, and testosterone. Adaptogens may modulate it.',
    biomarkers: ['cortisol', 'sleep-quality', 'total-testosterone'],
    contributesTo: ['stress-management', 'sleep', 'testosterone'],
  },

  'shbg-modulation': {
    label: 'SHBG Modulation',
    short: 'SHBG',
    category: 'hormonal',
    evidenceLevel: 'emerging',
    evidenceNote: 'Some botanicals and minerals may lower SHBG, increasing free testosterone.',
    description: 'SHBG binds testosterone, making it inactive. Lower SHBG = more free testosterone.',
    biomarkers: ['shbg', 'free-testosterone'],
    contributesTo: ['testosterone'],
  },

  'dht-conversion': {
    label: '5-Alpha Reductase / DHT',
    short: 'DHT',
    category: 'hormonal',
    evidenceLevel: 'emerging',
    evidenceNote: 'Some botanicals may inhibit 5-alpha reductase, reducing DHT. Evidence is preliminary.',
    description: 'Testosterone converts to DHT via 5-alpha reductase. Relevant for hair loss and prostate.',
    biomarkers: ['psa'],
    contributesTo: ['hair-health', 'prostate-health'],
  },

  /* ==================== METABOLIC ==================== */

  'ampk-activation': {
    label: 'AMPK Activation',
    short: 'AMPK',
    category: 'metabolic',
    evidenceLevel: 'established',
    evidenceNote: 'Activated by berberine in multiple human RCTs. Downstream effects on glucose uptake and fat oxidation are well-characterized.',
    description: 'AMPK is the cell\'s energy sensor. When activated, it mimics caloric restriction — boosting fat oxidation and glucose uptake.',
    biomarkers: ['fasting-glucose', 'hba1c', 'homa-ir'],
    contributesTo: ['fat-loss', 'insulin-sensitivity', 'longevity'],
  },

  'insulin-sensitivity': {
    label: 'Insulin Sensitivity',
    short: 'Insulin',
    category: 'metabolic',
    evidenceLevel: 'established',
    evidenceNote: 'Chromium, berberine, and fenugreek all improve insulin sensitivity in human trials.',
    description: 'Insulin sensitivity determines how efficiently cells absorb glucose.',
    biomarkers: ['fasting-insulin', 'homa-ir', 'hba1c'],
    contributesTo: ['fat-loss', 'metabolic-health', 'muscle-gain'],
  },

  'thermogenesis': {
    label: 'Thermogenesis',
    short: 'Thermogenesis',
    category: 'metabolic',
    evidenceLevel: 'established',
    evidenceNote: 'Caffeine and EGCG increase 24-h energy expenditure by ~4% in humans.',
    description: 'Thermogenesis is heat production by the body. Increasing it burns more calories at rest.',
    biomarkers: ['resting-metabolic-rate'],
    contributesTo: ['fat-loss'],
  },

  'fatty-acid-transport': {
    label: 'Fatty Acid Transport',
    short: 'FA Transport',
    category: 'metabolic',
    evidenceLevel: 'established',
    evidenceNote: 'L-carnitine shuttles long-chain fatty acids into mitochondria. Confirmed in human studies.',
    description: 'Long-chain fatty acids cannot enter mitochondria without carnitine.',
    biomarkers: ['resting-metabolic-rate'],
    contributesTo: ['fat-loss', 'endurance'],
  },

  'lipolysis': {
    label: 'Lipolysis',
    short: 'Lipolysis',
    category: 'metabolic',
    evidenceLevel: 'supported',
    evidenceNote: 'Caffeine and other stimulants increase lipolysis. Effect is transient.',
    description: 'Breakdown of stored fat into free fatty acids for energy.',
    biomarkers: [],
    contributesTo: ['fat-loss'],
  },

  'atp-production': {
    label: 'ATP Production',
    short: 'ATP',
    category: 'metabolic',
    evidenceLevel: 'established',
    evidenceNote: 'Creatine increases phosphocreatine stores, which regenerate ATP during high-intensity exercise.',
    description: 'ATP is the cell\'s energy currency. Creatine allows faster ATP regeneration.',
    biomarkers: ['one-rm', 'peak-power'],
    contributesTo: ['strength', 'power', 'muscle-gain'],
  },

  'phosphocreatine-resynthesis': {
    label: 'Phosphocreatine Resynthesis',
    short: 'PCr',
    category: 'metabolic',
    evidenceLevel: 'established',
    evidenceNote: 'Creatine supplementation increases muscle phosphocreatine by 20-40%.',
    description: 'Phosphocreatine is the fast-access energy reserve in muscle.',
    biomarkers: ['one-rm', 'peak-power'],
    contributesTo: ['strength', 'power'],
  },

  'glycogen-resynthesis': {
    label: 'Glycogen Resynthesis',
    short: 'Glycogen',
    category: 'metabolic',
    evidenceLevel: 'established',
    evidenceNote: 'Carbohydrate and certain supplements enhance muscle glycogen storage.',
    description: 'Replenishing muscle glycogen after exercise improves recovery.',
    biomarkers: ['time-to-exhaustion'],
    contributesTo: ['recovery', 'endurance'],
  },

  /* ==================== NEUROTRANSMITTER ==================== */

  'pde-inhibition': {
    label: 'Phosphodiesterase Inhibition',
    short: 'PDE',
    category: 'neurotransmitter',
    evidenceLevel: 'established',
    evidenceNote: 'Caffeine inhibits phosphodiesterase, which slows cAMP breakdown.',
    description: 'PDE breaks down cAMP. Inhibiting PDE = signals last longer.',
    biomarkers: [],
    contributesTo: ['focus', 'energy', 'fat-loss'],
  },

  'comt-inhibition': {
    label: 'COMT Inhibition',
    short: 'COMT',
    category: 'neurotransmitter',
    evidenceLevel: 'supported',
    evidenceNote: 'EGCG inhibits COMT in vitro. The EGCG + caffeine combination increases thermogenesis in humans.',
    description: 'COMT breaks down norepinephrine. Inhibiting it prolongs sympathetic activation.',
    biomarkers: [],
    contributesTo: ['focus', 'fat-loss', 'mood'],
  },

  'adenosine-antagonism': {
    label: 'Adenosine Antagonism',
    short: 'Adenosine',
    category: 'neurotransmitter',
    evidenceLevel: 'established',
    evidenceNote: 'Caffeine blocks adenosine receptors, increasing energy and alertness.',
    description: 'Adenosine makes you tired. Caffeine blocks it.',
    biomarkers: ['reaction-time'],
    contributesTo: ['focus', 'energy', 'endurance'],
  },

  'acetylcholine-signaling': {
    label: 'Acetylcholine Signaling',
    short: 'ACh',
    category: 'neurotransmitter',
    evidenceLevel: 'established',
    evidenceNote: 'Choline donors (alpha-GPC, citicoline) increase acetylcholine availability.',
    description: 'ACh drives neuromuscular junction signaling and memory formation.',
    biomarkers: ['memory-score', 'reaction-time'],
    contributesTo: ['cognition', 'memory', 'focus', 'muscle-contraction'],
  },

  'dopamine-signaling': {
    label: 'Dopamine Signaling',
    short: 'Dopamine',
    category: 'neurotransmitter',
    evidenceLevel: 'supported',
    evidenceNote: 'L-tyrosine, Rhodiola, and bromantane influence dopamine pathways.',
    description: 'Dopamine drives motivation, reward, and motor control.',
    biomarkers: [],
    contributesTo: ['motivation', 'focus', 'mood', 'endurance'],
  },

  'serotonin-modulation': {
    label: 'Serotonin Modulation',
    short: 'Serotonin',
    category: 'neurotransmitter',
    evidenceLevel: 'supported',
    evidenceNote: 'Some botanicals and 5-HTP influence serotonin. Evidence varies by compound.',
    description: 'Serotonin regulates mood, sleep, and appetite.',
    biomarkers: ['sleep-quality'],
    contributesTo: ['mood', 'sleep', 'appetite-control'],
  },

  'gabaergic-activity': {
    label: 'GABAergic Activity',
    short: 'GABA',
    category: 'neurotransmitter',
    evidenceLevel: 'supported',
    evidenceNote: 'L-theanine, ashwagandha, and bromantane influence GABA signaling.',
    description: 'GABA is the primary inhibitory neurotransmitter. It calms neural activity.',
    biomarkers: [],
    contributesTo: ['relaxation', 'sleep', 'stress-management'],
  },

  'glutamate-modulation': {
    label: 'Glutamate Modulation',
    short: 'Glutamate',
    category: 'neurotransmitter',
    evidenceLevel: 'supported',
    evidenceNote: 'Racetams and some nootropics modulate glutamate receptors.',
    description: 'Glutamate is the primary excitatory neurotransmitter. Key for learning and memory.',
    biomarkers: ['memory-score'],
    contributesTo: ['cognition', 'memory'],
  },

  'nmda-receptor-modulation': {
    label: 'NMDA Receptor Modulation',
    short: 'NMDA',
    category: 'neurotransmitter',
    evidenceLevel: 'emerging',
    evidenceNote: 'Some compounds modulate NMDA receptors. Clinical relevance varies.',
    description: 'NMDA receptors are critical for synaptic plasticity and memory.',
    biomarkers: [],
    contributesTo: ['cognition', 'memory'],
  },

  'ampa-receptor-modulation': {
    label: 'AMPA Receptor Modulation',
    short: 'AMPA',
    category: 'neurotransmitter',
    evidenceLevel: 'emerging',
    evidenceNote: 'Racetams and ampakines modulate AMPA receptors.',
    description: 'AMPA receptors mediate fast synaptic transmission.',
    biomarkers: ['memory-score'],
    contributesTo: ['cognition', 'memory'],
  },

  /* ==================== ENZYMATIC / CELLULAR ==================== */

  'nrf2-activation': {
    label: 'Nrf2 Activation',
    short: 'Nrf2',
    category: 'cellular',
    evidenceLevel: 'supported',
    evidenceNote: 'Curcumin, sulforaphane, and other phytochemicals activate Nrf2 in human studies.',
    description: 'Nrf2 is the master regulator of antioxidant enzymes (SOD, catalase, HO-1).',
    biomarkers: ['crp', 'il-6'],
    contributesTo: ['longevity', 'inflammation-control', 'brain-health'],
  },

  'nf-kb-inhibition': {
    label: 'NF-κB Inhibition',
    short: 'NF-κB',
    category: 'cellular',
    evidenceLevel: 'supported',
    evidenceNote: 'Curcumin, resveratrol, and omega-3 inhibit NF-κB in human studies.',
    description: 'NF-κB is a master inflammatory switch. Inhibiting it reduces chronic inflammation.',
    biomarkers: ['crp', 'il-6', 'tnf-alpha'],
    contributesTo: ['inflammation-control', 'recovery', 'longevity'],
  },

  'mtor-signaling': {
    label: 'mTOR Signaling',
    short: 'mTOR',
    category: 'cellular',
    evidenceLevel: 'established',
    evidenceNote: 'Leucine and resistance training activate mTOR. Key for muscle protein synthesis.',
    description: 'mTOR is the master switch for muscle growth and protein synthesis.',
    biomarkers: ['lean-mass'],
    contributesTo: ['muscle-gain', 'strength'],
  },

  'autophagy-modulation': {
    label: 'Autophagy',
    short: 'Autophagy',
    category: 'cellular',
    evidenceLevel: 'emerging',
    evidenceNote: 'Spermidine, urolithin A, and caloric restriction influence autophagy.',
    description: 'Autophagy is cellular cleanup — removing damaged components.',
    biomarkers: [],
    contributesTo: ['longevity', 'cellular-health'],
  },

  'mitochondrial-biogenesis': {
    label: 'Mitochondrial Biogenesis',
    short: 'Mito Biogenesis',
    category: 'cellular',
    evidenceLevel: 'supported',
    evidenceNote: 'PGC-1α activators (e.g., certain polyphenols, exercise) increase mitochondrial density.',
    description: 'Creating new mitochondria. Increases cellular energy capacity.',
    biomarkers: ['vo2max'],
    contributesTo: ['endurance', 'longevity', 'energy'],
  },

  'sirtuin-activation': {
    label: 'Sirtuin Activation',
    short: 'Sirtuins',
    category: 'cellular',
    evidenceLevel: 'emerging',
    evidenceNote: 'Resveratrol and NAD+ precursors influence sirtuins in animal models. Human data is mixed.',
    description: 'Sirtuins are longevity-associated proteins involved in DNA repair and metabolism.',
    biomarkers: [],
    contributesTo: ['longevity'],
  },

  'heme-oxygenase-1': {
    label: 'Heme Oxygenase-1 (HO-1)',
    short: 'HO-1',
    category: 'cellular',
    evidenceLevel: 'supported',
    evidenceNote: 'Synergistic induction by multi-ingredient formulas (e.g., Protandim) shown in vitro.',
    description: 'HO-1 is a cytoprotective enzyme with antioxidant and anti-inflammatory effects.',
    biomarkers: ['crp'],
    contributesTo: ['inflammation-control', 'longevity'],
  },

  /* ==================== VASCULAR ==================== */

  'nitric-oxide-production': {
    label: 'Nitric Oxide Production',
    short: 'NO',
    category: 'vascular',
    evidenceLevel: 'established',
    evidenceNote: 'Citrulline raises blood arginine and NO more efficiently than arginine itself [citation:9].',
    description: 'NO dilates blood vessels, improving blood flow to muscles and brain.',
    biomarkers: ['blood-pressure-systolic', 'vo2max'],
    contributesTo: ['endurance', 'pump', 'erectile-function', 'cognition'],
  },

  'cgmp-pathway': {
    label: 'cGMP Pathway',
    short: 'cGMP',
    category: 'vascular',
    evidenceLevel: 'established',
    evidenceNote: 'PDE5 inhibitors amplify cGMP signaling. Some natural compounds may have similar effects.',
    description: 'cGMP drives smooth muscle relaxation and vasodilation.',
    biomarkers: ['blood-pressure-systolic'],
    contributesTo: ['erectile-function', 'endurance'],
  },

  'angiotensin-conversion-inhibition': {
    label: 'ACE Inhibition',
    short: 'ACE',
    category: 'vascular',
    evidenceLevel: 'supported',
    evidenceNote: 'Certain peptides (e.g., from whey, fish) inhibit ACE in human studies.',
    description: 'ACE converts angiotensin I to angiotensin II, which raises blood pressure. Inhibiting it lowers BP.',
    biomarkers: ['blood-pressure-systolic', 'blood-pressure-diastolic'],
    contributesTo: ['cardiovascular-health'],
  },

  /* ==================== STRUCTURAL ==================== */

  'collagen-synthesis': {
    label: 'Collagen Synthesis',
    short: 'Collagen',
    category: 'structural',
    evidenceLevel: 'established',
    evidenceNote: 'Vitamin C is required for collagen synthesis. Collagen peptides + vitamin C improve skin elasticity in RCTs.',
    description: 'Building collagen for skin, joints, and connective tissue.',
    biomarkers: ['skin-elasticity'],
    contributesTo: ['skin-health', 'joint-health'],
  },

  'bone-mineralization': {
    label: 'Bone Mineralization',
    short: 'Bone',
    category: 'structural',
    evidenceLevel: 'established',
    evidenceNote: 'Calcium, vitamin D, vitamin K2, and magnesium are established for bone health.',
    description: 'Depositing minerals into bone matrix.',
    biomarkers: [],
    contributesTo: ['bone-health'],
  },

  /* ==================== GUT / IMMUNE ==================== */

  'microbiome-modulation': {
    label: 'Microbiome Modulation',
    short: 'Microbiome',
    category: 'gut',
    evidenceLevel: 'supported',
    evidenceNote: 'Probiotics and prebiotics (e.g., psyllium) modulate gut bacteria in human studies.',
    description: 'Influencing the composition and function of gut bacteria.',
    biomarkers: [],
    contributesTo: ['gut-health', 'immunity', 'mood'],
  },

  'intestinal-barrier-function': {
    label: 'Intestinal Barrier Function',
    short: 'Gut Barrier',
    category: 'gut',
    evidenceLevel: 'supported',
    evidenceNote: 'Glutamine, zinc, and certain probiotics support gut barrier integrity.',
    description: 'Maintaining the intestinal lining to prevent leaky gut.',
    biomarkers: [],
    contributesTo: ['gut-health', 'immunity'],
  },

  'immune-modulation': {
    label: 'Immune Modulation',
    short: 'Immunity',
    category: 'immune',
    evidenceLevel: 'supported',
    evidenceNote: 'Vitamin D, zinc, and beta-glucans modulate immune function.',
    description: 'Regulating immune response — not just boosting, but balancing.',
    biomarkers: ['crp', 'il-6'],
    contributesTo: ['immunity', 'inflammation-control'],
  },

  /* ==================== ADD NEW MECHANISMS BELOW ==================== */

  // 'bdnf-expression': { label: 'BDNF Expression', category: 'neurotrophic', ... },
  // 'ngf-expression': { label: 'NGF Expression', category: 'neurotrophic', ... },
  // 'neurogenesis': { label: 'Neurogenesis', category: 'neurotrophic', ... },
  // 'dopamine-synthesis': { label: 'Dopamine Synthesis (TH/AAAD)', category: 'neurotransmitter', ... },
  // 'mao-inhibition': { label: 'MAO Inhibition', category: 'enzymatic', ... },
  // 'coq10-synthesis': { label: 'CoQ10 Synthesis', category: 'cellular', ... },
  // 'carnitine-shuttle': { label: 'Carnitine Shuttle', category: 'metabolic', ... },
  // 'urea-cycle': { label: 'Urea Cycle', category: 'metabolic', ... },
  // 'creatine-kinase': { label: 'Creatine Kinase', category: 'metabolic', ... },
  // 'beta-alanine-carnosine': { label: 'Carnosine Synthesis', category: 'metabolic', ... },
  // 'sodium-bicarbonate-buffer': { label: 'Bicarbonate Buffering', category: 'metabolic', ... },
  // 'iron-metabolism': { label: 'Iron Metabolism', category: 'metabolic', ... },
  // 'thyroid-function': { label: 'Thyroid Function', category: 'hormonal', ... },
  // 'leptin-signaling': { label: 'Leptin Signaling', category: 'hormonal', ... },
  // 'ghrelin-modulation': { label: 'Ghrelin Modulation', category: 'hormonal', ... },
  // 'insulin-like-growth-factor': { label: 'IGF-1 Signaling', category: 'hormonal', ... },

}