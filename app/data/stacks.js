/* =========================================================
   SYNERGYSTACKS — DATA  (cleaned version)
   Each stack is a plain object. StackPage renders it.

   NEW FIELDS (additive, old renderer keeps working):
   - id, updated
   - evidence  { grade: 'a'|'b'|'c', label, combinationTested }
   - tags      { ingredients, goals, mechanisms, biomarkers }  -> used by search / category pages
   - research items: verified: true|false
        true  = I opened the source this session and the claim matches
        false = NOT yet checked against the source. Do not publish as "confirmed".
   - disclosure (affiliate text, show at the TOP of every stack page)

   GRADE SCALE (matches the homepage "How we grade"):
   A = several human RCTs / meta-analysis of the COMBINATION itself
   B = human data on the combination exists but is limited (one study / small n)
   C = early or indirect: tiny studies, mixed results, or mechanism-only
   No stack currently qualifies for A. That is fine — say so.
   ========================================================= */

export const AFFILIATE_DISCLOSURE =
  'Some links on this page are affiliate links. If you buy through them, SynergyStacks may earn a commission at no extra cost to you. This never changes how we grade evidence. Educational information only — not medical advice.';

export const gradeScale = {
  a: 'Human RCTs or a meta-analysis of the combination itself.',
  b: 'Human data on the combination, but limited (single study or small sample).',
  c: 'Early or indirect evidence: tiny studies, mixed results, or mechanism only.',
};

export const stacks = {

  /* ===================== 1. L-CARNITINE × CAFFEINE ===================== */
  'carnitine-caffeine': {
    id: 'carnitine-caffeine',
    updated: '2026-10-09',
    metaTitle: 'L-Carnitine × Caffeine — SynergyStacks',
    metaDescription: 'Two small human studies suggest carnitine plus caffeine beats either alone for endurance. Here is what they show, and what is still unproven.',
    disclosure: AFFILIATE_DISCLOSURE,

    evidence: { grade: 'c', label: 'GRADE C · SMALL HUMAN STUDIES', combinationTested: 'preliminary' },
    tags: {
      ingredients: ['l-carnitine', 'caffeine'],
      goals: ['fat-loss', 'endurance'],
      mechanisms: ['fatty-acid-transport', 'adenosine-antagonism'],
      biomarkers: ['resting-metabolic-rate'],
    },

    crumbs: [
      { href: '/', label: 'HOME' },
      { href: '/goals/fat-loss', label: 'FAT LOSS' },
      { label: 'L-CARNITINE × CAFFEINE' },
    ],

    kicker: 'WEIGHT LOSS / GRADE C · PRELIMINARY',
    hero: {
      lines: ['ENERGY', 'MEETS', 'DRIVE.'],
      limeLine: 1,
      copy: 'L-carnitine is part of how fatty acids get into mitochondria. Caffeine is one of the best-studied performance aids. Two small human studies tested them together and both lean the same way — but both are small, and the mechanism that would explain it is still being argued over. This is a lead worth knowing about, not a proven fat-loss stack.',
      ctaHref: 'https://fas.st/FJLBW',
      ctaLabel: 'VIEW L-CARNITINE',
    },

    mechanics: {
      heading: 'Not magic.',
      headingLime: 'Mechanics.',
      items: [
        { number: '01 / CARNITINE', title: 'Fat transport', text: 'Carnitine helps shuttle long-chain fatty acids into mitochondria. Taking more does not automatically raise muscle carnitine — in research, that took months of daily dosing alongside a large carbohydrate load.' },
        { number: '02 / CAFFEINE', title: 'Training stimulus', text: 'Caffeine can improve endurance performance and modestly raises resting energy use for a few hours after a dose.' },
        { number: '03 / COMBO', title: 'A signal, not proof', text: 'Two small trials (5 and 15 athletes) report the combination did better than either alone on endurance measures. Small samples mean the result could easily shrink or vanish in larger studies.' },
      ],
    },

    coffee: {
      heading: 'Coffee.',
      headingLime: 'Or coffee + carnitine?',
      panels: [
        {
          variant: 'plain',
          label: 'CAFFEINE ALONE',
          title: 'Caffeine',
          sub: 'Measured in humans',
          stats: [
            { label: 'Resting energy use', value: '+3–4% (100 mg)' },
            { label: 'Duration', value: '~150 min' },
            { label: 'Endurance', value: 'Improved at 5 mg/kg' },
            { label: 'Blood fatty acids', value: 'Increased' },
          ],
        },
        {
          variant: 'plus',
          label: 'CAFFEINE + CARNITINE',
          title: 'Caffeine + L-Carnitine',
          sub: 'Hypothesis · limited data',
          stats: [
            { label: 'Resting energy use', value: 'Not measured' },
            { label: 'Endurance', value: 'Better than either alone (2 small studies)' },
            { label: 'Muscle carnitine', value: 'Unproven · disputed' },
            { label: 'Fat burning', value: 'Suggested, not shown' },
            { label: 'Evidence level', value: 'Preliminary' },
          ],
        },
      ],
      footer: '<strong>Measured:</strong> in <a href="https://doi.org/10.3177/jnsv.47.378" target="_blank" rel="noopener noreferrer">Cha et al. (2001)</a> the caffeine + carnitine mixture gave the longest endurance time of four conditions — in five athletes. <strong>Hypothesis:</strong> caffeine might help carnitine enter muscle (<a href="https://doi.org/10.14814/phy2.15615" target="_blank" rel="noopener noreferrer">Wall et al., 2023</a>), but that study measured blood carnitine during an IV infusion, not muscle, and a published <a href="https://doi.org/10.14814/phy2.15736" target="_blank" rel="noopener noreferrer">letter</a> disputes the interpretation (the authors <a href="https://doi.org/10.14814/phy2.15796" target="_blank" rel="noopener noreferrer">replied</a>). No study has measured the energy-expenditure effect of the combination.',
    },

    research: {
      heading: 'The research.',
      headingLime: 'What we checked.',
      groups: [
        {
          title: 'CARNITINE + CAFFEINE — HUMAN STUDIES',
          items: [
            {
              title: 'Effects of carnitine coingested caffeine on carnitine metabolism and endurance capacity in athletes',
              authors: 'Cha Y.S., Choi S.K., Suh H., Lee S.N., Cho D., Lim K. — J Nutr Sci Vitaminol, 2001;47(6):378–384. PMID: 11922111. Randomized, double-blind, n=5 male rugby athletes, cycle ergometer.',
              finding: 'Caffeine alone had a <i>small</i> effect on endurance time; carnitine alone <b>significantly increased</b> it; the caffeine + carnitine mixture had <b>greater effects than control, caffeine, or carnitine alone</b>. The abstract does not state the doses. With n=5 this is a pilot-sized result.',
              doi: 'https://doi.org/10.3177/jnsv.47.378',
              verified: true,
            },
            {
              title: 'Synergistic Effect of L-Carnitine and Caffeine Supplements on Physiological Variables Corresponding to Anaerobic Threshold in Elite Male Karate',
              authors: 'Iranian sports-physiology journal (author list and year not confirmed; no DOI found). Crossover: 15 elite karate athletes, four sessions one week apart — placebo, caffeine 5 mg/kg, L-carnitine 3 g, or both.',
              finding: 'The authors report the combination improved oxygen-consumption values at the anaerobic threshold and conclude caffeine\'s endurance effect may be amplified by carnitine. Only the abstract was checked; full numbers not verified.',
              doi: 'https://asp.journals.umz.ac.ir/article_2822.html',
              verified: true,
            },
          ],
        },
        {
          title: 'MECHANISM — DOES CAFFEINE HELP CARNITINE INTO MUSCLE? (CONTESTED)',
          items: [
            {
              title: 'Caffeine ingestion stimulates plasma carnitine clearance in humans',
              authors: 'Wall B.T., Machin D., Dunlop M.V., Stephens F.B. — Physiol Rep, 2023;11(4):e15615.',
              finding: 'During a 5-hour <b>intravenous</b> carnitine infusion, high-dose caffeine was followed by plasma carnitine ~15% lower in the final 90 minutes, which the authors read as faster uptake into tissue. <b>Muscle carnitine was not measured.</b>',
              doi: 'https://doi.org/10.14814/phy2.15615',
              verified: true,
            },
            {
              title: 'Does caffeine truly raise muscle carnitine in humans? (Letter to the Editor)',
              authors: 'Constantin-Teodosiu D. — Physiol Rep, 2023. DOI: 10.14814/phy2.15736.',
              finding: 'Argues the data do not show extra muscle uptake and calls the basis for the idea <b>uncertain</b>.',
              doi: 'https://doi.org/10.14814/phy2.15736',
              verified: true,
            },
            {
              title: 'Reply to LTE: Does caffeine truly raise muscle carnitine in humans?',
              authors: 'Wall B.T., Stephens F.B. — Physiol Rep, 2023;11(17):e15796.',
              finding: 'The authors acknowledge they did not measure muscle carnitine and argue by analogy to earlier insulin-infusion work (~15% higher plasma clearance went with ~15% higher muscle carnitine).',
              doi: 'https://doi.org/10.14814/phy2.15796',
              verified: true,
            },
          ],
        },
        {
          title: 'CARNITINE ALONE — CONTEXT (NOT A TEST OF THE COMBINATION)',
          items: [
            {
              title: 'Skeletal muscle carnitine loading increases energy expenditure, modulates fuel metabolism gene networks and prevents body fat accumulation in humans',
              authors: 'Stephens F.B., Wall B.T., Marimuthu K., Shannon C.E., Constantin-Teodosiu D., Macdonald I.A., Greenhaff P.L. — J Physiol, 2013;591(18):4655–4666.',
              finding: '12 weeks of daily L-carnitine <b>plus a large carbohydrate load</b> raised muscle total carnitine by 20%, long-chain acyl-CoA by 200% and whole-body energy expenditure by <i>6%</i>; the control group did not change. <b>No caffeine was used.</b> This protocol is not the same as taking a tablet on its own.',
              doi: 'https://doi.org/10.1113/jphysiol.2013.255364',
              verified: true,
            },
            {
              title: 'The supplementation of L-carnitine does not promote alterations in the resting metabolic rate and in the use of energetic substrates in physically active individuals',
              authors: 'Faria Coelho C., Mota J.F., Ravagnani F.C.P., Burini R.C. — Arq Bras Endocrinol Metab, 2010;54(1):37–44.',
              finding: 'Counter-evidence: in physically active people, 30 days of L-carnitine supplementation produced <b>no significant change</b> in resting metabolic rate versus placebo.',
              doi: 'https://doi.org/10.1590/S0004-27302010000100008',
              verified: false,
            },
            {
              title: 'L-carnitine supplementation and weight loss — systematic review and meta-analysis of 37 randomized controlled trials',
              authors: 'Talenezhad N. et al. — Clin Nutr ESPEN, 2020;37:9–23. PMID: 32359762.',
              finding: 'Reports a statistically significant but <b>small average weight reduction</b> across trials. Effects on body fat specifically are less clear. This is carnitine alone, not the combination.',
              doi: 'https://doi.org/10.1016/j.clnesp.2020.03.008',
              verified: false,
            },
          ],
        },
        {
          title: 'CAFFEINE ALONE',
          items: [
            {
              title: 'Caffeine as a lipolytic food component increases endurance performance in rats and athletes',
              authors: 'Ryu S. et al. — J Nutr Sci Vitaminol, 2001;47(2):139–146.',
              finding: 'In athletes, 5 mg/kg of caffeine an hour before exercise lowered the respiratory exchange ratio, <b>raised blood free fatty acids</b> and <b>increased time to exhaustion</b>.',
              doi: 'https://doi.org/10.3177/jnsv.47.139',
              verified: true,
            },
            {
              title: 'Normal caffeine consumption: influence on thermogenesis and daily energy expenditure in lean and postobese human volunteers',
              authors: 'Dulloo A.G., Geissler C.A., Horton T., Collins A., Miller D.S. — Am J Clin Nutr, 1989;49(1):44–50.',
              finding: 'Reported resting metabolic rate up about 3–4% after a 100 mg dose, and 8–11% energy-expenditure increase over a day of repeated 100 mg doses. (Percentages only — we do not convert these to calories.)',
              doi: 'https://doi.org/10.1093/ajcn/49.1.44',
              verified: false,
            },
          ],
        },
      ],
    },

    synergy: {
      left: 'L-CARNITINE',
      leftSub: 'fat<br>transport',
      right: 'CAFFEINE',
      rightSub: 'training<br>stimulus',
      result: 'L-CARNITINE <span>×</span> CAFFEINE',
    },

    pivotal: {
      number: 5,
      label: 'HOW SMALL IS SMALL?',
      paragraphs: [
        'Five male rugby athletes. Randomized, double-blind, four conditions: water, caffeine, carnitine, and both.',
        'The combination gave the longest endurance time. With five people, treat that as a lead worth testing — a second small study (15 karate athletes) points the same way, but nobody has run a large trial.',
      ],
      source: 'Cha Y.S. et al., J Nutr Sci Vitaminol. 2001;47(6):378–384. PMID: 11922111. <a href="https://doi.org/10.3177/jnsv.47.378" target="_blank" rel="noopener noreferrer">https://doi.org/10.3177/jnsv.47.378</a>',
    },

    faq: [
      {
        q: 'What dose was used?',
        a: [
          'The Cha et al. (2001) abstract does not state doses, so we do not quote any for it. The karate study reports <strong>L-carnitine 3 g and caffeine 5 mg/kg</strong> in a single session.',
          'Those are research conditions, not recommendations. Caffeine tolerance varies a lot — talk to a doctor if you have a heart condition, anxiety, or take medication.',
        ],
      },
      {
        q: 'Will a carnitine tablet raise my fat burning?',
        a: [
          'Not proven. The 6% energy-expenditure result (Stephens et al., 2013) came from <strong>12 weeks of daily carnitine taken with a large carbohydrate load</strong> that raises insulin. A 1,000 mg tablet taken on its own has not been shown to reproduce that.',
          'Meta-analyses of carnitine alone report small average weight changes, and the effect on body fat is unclear.',
        ],
      },
      {
        q: 'Does caffeine really help carnitine get into muscle?',
        a: [
          'It is a hypothesis. One IV-infusion study saw faster plasma carnitine clearance with high-dose caffeine, but muscle carnitine was not measured, and a published letter questions the interpretation. We list both sides in the research section.',
        ],
      },
    ],

    related: [
      { href: '/stack/berberine-chromium', cat: 'METABOLIC', formula: 'BERBERINE <em>×</em> CHROMIUM', desc: 'A different route: insulin sensitivity and AMPK rather than fat transport. One 3-ingredient RCT.', evidence: 'GRADE C · 3-INGREDIENT RCT', grade: 'c' },
      { href: '/stack/creatine-fenugreek', cat: 'PERFORMANCE', formula: 'CREATINE <em>×</em> FENUGREEK', desc: 'Not weight loss, but a similar idea: help a compound reach muscle without a big sugar load.', evidence: 'GRADE B · SINGLE HUMAN RCT', grade: 'b' },
    ],

    products: {
      heading: 'Choose your',
      headingLime: 'format.',
      groups: [
        {
          items: [
            { brand: 'NOW FOODS', title: 'L-CARNITINE', dose: '1,000 MG • 100 TABLETS', href: 'https://fas.st/FJLBW', note: 'Simple, high-dose. 4.7★ from 16,000+ ratings.', tag: 'BEST VALUE' },
            { brand: 'NUTRICOST', title: 'L-CARNITINE TARTRATE', dose: '500 MG • 120 CAPSULES', href: 'https://fas.st/RJDky', note: 'Tartrate form. Capsule format, easier to swallow.' },
            { brand: 'NOW FOODS', title: 'L-CARNITINE PURE POWDER', dose: '85 G • 3 OZ', href: 'https://fas.st/QFKmJB', note: 'Raw powder. Cheapest per gram.', tag: 'CHEAPEST/DOSE' },
          ],
        },
      ],
      footer: '<strong>How to choose:</strong> <em>Tablets</em> — cheapest, but some people find them hard to swallow. <em>Capsules</em> — same dose, easier format, slightly more expensive. <em>Powder</em> — cheapest per gram, but you need a scale and it tastes bitter. <strong>Note:</strong> none of these products reproduces the carbohydrate-loading protocol used in the carnitine research above.',
    },
  },

  /* ===================== 2. CREATINE × FENUGREEK ===================== */
  'creatine-fenugreek': {
    id: 'creatine-fenugreek',
    updated: '2026-10-09',
    metaTitle: 'Creatine × Fenugreek — SynergyStacks',
    metaDescription: 'One 8-week trial found creatine plus fenugreek worked about as well as creatine plus 70 g dextrose. What it shows and what it does not.',
    disclosure: AFFILIATE_DISCLOSURE,

    evidence: { grade: 'b', label: 'GRADE B · SINGLE HUMAN RCT', combinationTested: 'one-trial' },
    tags: {
      ingredients: ['creatine', 'fenugreek'],
      goals: ['muscle-gain', 'strength'],
      mechanisms: ['insulin-sensitivity', 'mtor-signaling'],
      biomarkers: ['lean-mass', 'one-rm'],
    },

    crumbs: [
      { href: '/', label: 'HOME' },
      { href: '/goals/muscle-gain', label: 'MUSCLE GAIN' },
      { label: 'CREATINE × FENUGREEK' },
    ],

    kicker: 'PERFORMANCE / GRADE B · SINGLE HUMAN RCT',
    hero: {
      lines: ['MUSCLE', 'WITHOUT', 'SUGAR.'],
      limeLine: 1,
      copy: 'Creatine works. The classic way to help it along is a big dose of dextrose to spike insulin. In one 8-week trial of 47 trained men, creatine plus fenugreek extract produced upper-body strength and body-composition gains <strong>as effectively</strong> as creatine plus 70 g of dextrose — with a lower creatine dose and no dextrose. It is one study, so we call it promising, not settled.',
      ctaHref: 'https://fas.st/58s82',
      ctaLabel: 'VIEW CREATINE',
    },

    mechanics: {
      heading: 'The insulin',
      headingLime: 'idea.',
      items: [
        { number: '01 / CREATINE', title: 'Insulin helps', text: 'Insulin enhances creatine uptake into muscle, which is why classic protocols add a large carbohydrate dose.' },
        { number: '02 / DEXTROSE', title: 'The old solution', text: 'The traditional approach pairs creatine with about 70 g of dextrose. It works, but it is a lot of sugar per dose.' },
        { number: '03 / FENUGREEK', title: 'The hypothesis', text: 'Fenugreek contains 4-hydroxyisoleucine, which stimulated insulin release in lab studies. The trial measured strength and body composition, not muscle creatine, so the uptake mechanism is still a hypothesis.' },
      ],
    },

    table: {
      heading: 'Head to',
      headingLime: 'head.',
      headers: ['Group', 'What they took (daily)', 'Result, per the authors'],
      rows: [
        {
          cells: [
            { html: 'Placebo<br><span class="note">Dextrose only</span>', class: 'compound' },
            { html: '70 g dextrose' },
            { html: 'Reference group', class: 'delta' },
          ],
        },
        {
          cells: [
            { html: 'Creatine + dextrose<br><span class="note">Classic protocol</span>', class: 'compound' },
            { html: '5 g creatine + 70 g dextrose' },
            { html: 'Significant gains', class: 'delta' },
          ],
        },
        {
          winner: true,
          cells: [
            { html: 'Creatine + fenugreek<br><span class="note">The alternative</span>', class: 'compound' },
            { html: '3.5 g creatine + 900 mg fenugreek extract' },
            { html: 'Gains as effective as the dextrose group', class: 'delta' },
          ],
        },
      ],
      footer: '<strong>Key takeaway:</strong> the authors concluded creatine plus fenugreek had a significant impact on upper-body strength and body composition <em>as effectively as</em> creatine plus dextrose. Caveats: 47 men, 8 weeks, one lab. The groups also differed in creatine dose (3.5 g vs 5 g), and muscle creatine itself was not measured, so the "better uptake" explanation is a hypothesis.',
    },

    research: {
      heading: 'The research.',
      headingLime: 'What we checked.',
      groups: [
        {
          title: 'CREATINE + FENUGREEK — HUMAN RCT',
          items: [
            {
              title: 'Effects of Combined Creatine Plus Fenugreek Extract vs. Creatine Plus Carbohydrate Supplementation on Resistance Training Adaptations',
              authors: 'Taylor L., Poole C., Pena E., Lewing M., Kreider R., Foster C., Wilborn C. — J Sports Sci Med, 2011;10(2):254–260. PMID: 24149869. 47 resistance-trained men, 4 sessions/week for 8 weeks.',
              finding: 'Groups: 70 g dextrose placebo, 5 g creatine + 70 g dextrose, or 3.5 g creatine + 900 mg fenugreek extract. Creatine + fenugreek had a <b>significant impact on upper-body strength and body composition as effectively as</b> creatine + dextrose. The authors suggest fenugreek <i>may</i> be a way to enhance creatine uptake without large amounts of simple carbohydrate.',
              doi: 'https://pubmed.ncbi.nlm.nih.gov/24149869/',
              verified: true,
            },
          ],
        },
        {
          title: 'FENUGREEK — INSULIN-RELEASE MECHANISM',
          items: [
            {
              title: '4-Hydroxyisoleucine: experimental evidence of its insulinotropic and antidiabetic properties',
              authors: 'Broca C., Gross R., Petit P., Sauvaire Y. et al. — Am J Physiol, 1999;277(4):E617–E623. (First author to be confirmed against PubMed.)',
              finding: 'Reports that 4-hydroxyisoleucine from fenugreek stimulates insulin release from rat pancreas and human islets in a glucose-dependent way. Lab evidence — not a test of creatine uptake in people.',
              doi: 'https://doi.org/10.1152/ajpendo.1999.277.4.E617',
              verified: false,
            },
            {
              title: 'Fenugreek and muscle strength (secondary source)',
              authors: 'Examine.com evidence summary, 2025. Secondary source — verify the underlying meta-analysis before relying on it.',
              finding: 'Summarizes a 2024 meta-analysis reporting fenugreek extracts raised total testosterone but had no statistically significant effect on muscle strength in men — i.e. fenugreek alone is not clearly ergogenic.',
              doi: 'https://examine.com/faq/can-fenugreek-help-with-muscle-strength/',
              verified: false,
            },
          ],
        },
        {
          title: 'CREATINE ALONE — FOUNDATION',
          items: [
            {
              title: 'International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine',
              authors: 'ISSN position stand (see journal for authors and year; an earlier version: Buford et al., J Int Soc Sports Nutr, 2007;4:6).',
              finding: 'The society\'s position: creatine monohydrate is among the most effective supplements for high-intensity exercise capacity and lean mass during training.',
              doi: 'https://doi.org/10.1186/1550-2783-4-6',
              verified: false,
            },
          ],
        },
      ],
    },

    synergy: {
      left: 'CREATINE',
      leftSub: 'muscle<br>fuel',
      right: 'FENUGREEK',
      rightSub: 'insulin<br>signal',
      result: 'CREATINE <span>×</span> FENUGREEK',
    },

    pivotal: {
      number: 47,
      label: 'THE ONE TRIAL',
      paragraphs: [
        'Forty-seven resistance-trained men, eight weeks, three groups: dextrose placebo, creatine + 70 g dextrose, or creatine + 900 mg fenugreek extract.',
        'Fenugreek + creatine matched the dextrose version on upper-body strength and body composition. It is the only controlled test of this combination we found, and no one has yet replicated it.',
      ],
      source: 'Taylor L. et al., J Sports Sci Med. 2011;10(2):254–260. PMID: 24149869. <a href="https://pubmed.ncbi.nlm.nih.gov/24149869/" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/24149869/</a>',
    },

    faq: [
      {
        q: 'Do I still need a loading phase?',
        a: [
          'The trial used <strong>3.5 g of creatine daily</strong> with 900 mg of fenugreek extract for 8 weeks. It did not compare loading against no loading, so it cannot answer this either way.',
        ],
      },
      {
        q: 'How much fenugreek do I need?',
        a: [
          'The paper reports <strong>900 mg of fenugreek extract per day</strong>. Products vary in how they are standardized, so check the label — and treat this as the research dose, not a prescription.',
        ],
      },
      {
        q: 'Is this proven?',
        a: [
          'One randomized trial supports it and nobody has replicated it. That is why this stack is Grade B and not A.',
        ],
      },
    ],

    related: [
      { href: '/stack/carnitine-caffeine', cat: 'WEIGHT LOSS', formula: 'L-CARNITINE <em>×</em> CAFFEINE', desc: 'A similar "help a compound reach muscle" theme, with weaker evidence so far.', evidence: 'GRADE C · SMALL HUMAN STUDIES', grade: 'c' },
      { href: '/stack/berberine-chromium', cat: 'METABOLIC', formula: 'BERBERINE <em>×</em> CHROMIUM', desc: 'Another insulin-focused stack, tested as a three-ingredient formula.', evidence: 'GRADE C · 3-INGREDIENT RCT', grade: 'c' },
      { href: '/stack/cistanche-eurycoma', cat: 'TESTOSTERONE', formula: 'CISTANCHE <em>×</em> EURYCOMA', desc: 'Different goal. A mechanism-first idea where the combination has never been tested.', evidence: 'PREVIEW · UNTESTED COMBINATION', grade: 'c' },
    ],

    products: {
      heading: 'Choose your',
      headingLime: 'format.',
      groups: [
        {
          groupTitle: 'Creatine',
          items: [
            { brand: 'OPTIMUM NUTRITION', title: 'MICRONIZED CREATINE POWDER', dose: '600 G • 1.32 LB', href: 'https://fas.st/58s82', note: 'Micronized. 4.7★ from 13,000+ ratings.', tag: 'BEST VALUE' },
            { brand: 'CALIFORNIA GOLD NUTRITION', title: 'PURE CREATINE MONOHYDRATE', dose: '454 G • 1 LB', href: 'https://fas.st/h3yvVc', note: 'Unflavored. 4.8★ from 41,000+ ratings.' },
          ],
        },
        {
          groupTitle: 'Fenugreek',
          items: [
            { brand: 'SWANSON VITAMINS', title: 'FENUGREEK EXTRACT', dose: '500 MG • 90 CAPSULES', href: 'https://fas.st/L0jHC', note: 'Extract form. Concentrated.' },
            { brand: 'NOW FOODS', title: 'FENUGREEK', dose: '500 MG • 100 VEG CAPSULES', href: 'https://fas.st/mExHE', note: 'Whole herb. 4.6★ from 7,800+ ratings.', tag: 'WHOLE HERB' },
          ],
        },
      ],
    },
  },

  /* ===================== 3. BERBERINE × CHROMIUM ===================== */
  'berberine-chromium': {
    id: 'berberine-chromium',
    updated: '2026-10-09',
    metaTitle: 'Berberine × Chromium — SynergyStacks',
    metaDescription: 'A 12-week trial of a berberine + white mulberry + chromium formula in adults with obesity — and why it cannot prove synergy.',
    disclosure: AFFILIATE_DISCLOSURE,

    evidence: { grade: 'c', label: 'GRADE C · 3-INGREDIENT RCT', combinationTested: 'formula-only' },
    tags: {
      ingredients: ['berberine', 'chromium', 'white-mulberry'],
      goals: ['fat-loss', 'metabolic-health'],
      mechanisms: ['ampk-activation', 'insulin-sensitivity'],
      biomarkers: ['homa-ir', 'hba1c', 'visceral-fat', 'body-fat'],
    },

    crumbs: [
      { href: '/', label: 'HOME' },
      { href: '/goals/fat-loss', label: 'FAT LOSS' },
      { label: 'BERBERINE × CHROMIUM' },
    ],

    kicker: 'METABOLIC / GRADE C · 3-INGREDIENT RCT',
    hero: {
      lines: ['AMPK', 'MEETS', 'INSULIN.'],
      limeLine: 1,
      copy: 'One 12-week, double-blind trial gave 93 adults with obesity a fixed formula of <strong>berberine + white mulberry leaf extract + chromium picolinate</strong> or a placebo. The formula improved body composition and insulin sensitivity. But there were no single-ingredient groups, so the trial cannot say which ingredient did what — or whether they work better together than apart.',
      ctaHref: 'https://fas.st/cyH5nJ',
      ctaLabel: 'VIEW BERBERINE',
    },

    mechanics: {
      heading: 'Two pathways.',
      headingLime: 'One formula.',
      items: [
        { number: '01 / BERBERINE', title: 'AMPK activator', text: 'Berberine activates AMPK, an enzyme involved in cellular energy balance, and has human data of its own on blood sugar.' },
        { number: '02 / CHROMIUM', title: 'Insulin signaling', text: 'Chromium picolinate is widely used for insulin action. Effects on weight in trials are modest.' },
        { number: '03 / MULBERRY', title: 'The third ingredient', text: 'The trial formula also contained white mulberry leaf extract (a source of DNJ, which slows carbohydrate digestion). It is part of the result, so this page cannot attribute it to berberine and chromium alone.' },
      ],
    },

    table: {
      heading: 'Clinical',
      headingLime: 'outcomes.',
      headers: ['Metric', 'Change vs. placebo', '95% CI'],
      rows: [
        {
          cells: [
            { html: 'BMI<br><span class="note">Body mass index</span>', class: 'compound' },
            { html: '−1.24 kg/m²', class: 'delta' },
            { html: '−2.15 to −0.33' },
          ],
        },
        {
          cells: [
            { html: 'Total fat mass<br><span class="note">Verified in the paper</span>', class: 'compound' },
            { html: '−2.35 kg', class: 'delta' },
            { html: '−4.12 to −0.58' },
          ],
        },
        {
          winner: true,
          cells: [
            { html: 'Visceral fat<br><span class="note">Units as reported</span>', class: 'compound' },
            { html: '−0.92 units', class: 'delta' },
            { html: '−1.74 to −0.10' },
          ],
        },
        {
          cells: [
            { html: 'Insulin sensitivity<br><span class="note">Matsuda index, ratio</span>', class: 'compound' },
            { html: '×1.28', class: 'delta' },
            { html: '1.14–1.44' },
          ],
        },
      ],
      footer: '<strong>Key takeaway:</strong> the full formula beat placebo on body composition and insulin sensitivity. The paper itself notes that cross-trial comparisons cannot show the formula beats berberine alone or reveal each ingredient\'s contribution. Participants were adults aged 33–68 with obesity and no diagnosed chronic disease, in one hospital in Athens. Only the −2.35 kg fat-mass figure has been re-checked against the paper this session; check the others before quoting them.',
    },

    research: {
      heading: 'The research.',
      headingLime: 'What we checked.',
      groups: [
        {
          title: 'THE FORMULA — HUMAN RCT',
          items: [
            {
              title: 'Effects of Berberine, White Mulberry Leaf Extract and Chromium Picolinate on Body Composition and Insulin Resistance in Adults with Obesity: A Randomized Controlled Trial',
              authors: 'Xenos K. et al. — Nutrients, 2026;18(17):2801. 93 randomized (46 active, 47 placebo), 12 weeks, double-blind, placebo-controlled. Athens Euroclinic Hospital.',
              finding: 'Daily dose: berberine HCl 1,000 mg, white mulberry leaf extract 400 mg (20 mg DNJ), chromium picolinate providing 80 μg elemental chromium, taken in two doses before main meals. The active formula beat placebo across the pre-specified endpoints. <b>No single-ingredient arms</b>, so individual contributions cannot be separated.',
              doi: 'https://doi.org/10.3390/nu18172801',
              verified: true,
            },
          ],
        },
        {
          title: 'BERBERINE ALONE',
          items: [
            {
              title: 'Berberine in the treatment of type 2 diabetes mellitus: a systemic review and meta-analysis',
              authors: 'Yin J., Xing H., Ye J. — Evid Based Complement Alternat Med, 2012;2012:591654.',
              finding: 'Berberine reduced fasting and post-meal glucose and HbA1c in people with type 2 diabetes.',
              doi: 'https://doi.org/10.1155/2012/591654',
              verified: false,
            },
          ],
        },
      ],
    },

    synergy: {
      left: 'BERBERINE',
      leftSub: 'AMPK<br>activation',
      right: 'CHROMIUM',
      rightSub: 'insulin<br>signaling',
      result: 'BERBERINE <span>×</span> CHROMIUM',
    },

    pivotal: {
      number: 93,
      label: 'THE ONE TRIAL',
      paragraphs: [
        'Ninety-three adults with obesity. Twelve weeks. Double-blind, placebo-controlled. The active group took one formula containing three ingredients.',
        'The formula beat placebo — but a trial without single-ingredient groups cannot show synergy. That is why this stack is Grade C.',
      ],
      source: 'Xenos K. et al., Nutrients. 2026;18(17):2801. <a href="https://doi.org/10.3390/nu18172801" target="_blank" rel="noopener noreferrer">https://doi.org/10.3390/nu18172801</a>',
    },

    faq: [
      {
        q: 'What doses were used in the trial?',
        a: [
          'Berberine HCl <strong>1,000 mg/day</strong>, white mulberry leaf extract 400 mg/day and chromium providing <strong>80 μg elemental chromium/day</strong>, in two doses before meals.',
          'The chromium products linked on this page are 200 mcg per capsule, so they are <strong>not</strong> the same dose as the trial.',
        ],
      },
      {
        q: 'Can berberine interact with medications?',
        a: [
          '<strong>Yes — this is important.</strong> Berberine can inhibit liver enzymes that process many drugs (including CYP3A4), which may raise blood levels of some medications such as statins and immunosuppressants.',
          'It can also add to the effect of diabetes medication and risk low blood sugar. <strong>Talk to your doctor before combining berberine with any prescription drug.</strong>',
        ],
      },
    ],

    related: [
      { href: '/stack/carnitine-caffeine', cat: 'WEIGHT LOSS', formula: 'L-CARNITINE <em>×</em> CAFFEINE', desc: 'A fat-transport angle instead of insulin signaling. Small studies, early evidence.', evidence: 'GRADE C · SMALL HUMAN STUDIES', grade: 'c' },
      { href: '/stack/cistanche-eurycoma', cat: 'TESTOSTERONE', formula: 'CISTANCHE <em>×</em> EURYCOMA', desc: 'Metabolic health and testosterone are linked, but this stack has no combination data at all.', evidence: 'PREVIEW · UNTESTED COMBINATION', grade: 'c' },
    ],

    products: {
      heading: 'Choose your',
      headingLime: 'format.',
      groups: [
        {
          groupTitle: 'Berberine',
          items: [
            { brand: 'NATURAL FACTORS', title: 'WELLBETX BERBERINE', dose: '500 MG • 120 VEG CAPSULES', href: 'https://fas.st/cyH5nJ', note: '4.7★ from 49,600+ ratings.', tag: 'BEST VALUE' },
            { brand: 'SOLARAY', title: 'VITAL EXTRACTS BERBERINE', dose: '500 MG • 60 VEG CAPSULES', href: 'https://fas.st/U_3qhi', note: 'Extract form. 4.8★ from 11,900+ ratings.' },
            { brand: 'CALIFORNIA GOLD NUTRITION', title: 'BERBERINE HCL', dose: '500 MG • 120 VEG CAPSULES', href: 'https://fas.st/ZGUjK', note: 'HCl form. 4.7★ from 1,800+ ratings.' },
          ],
        },
        {
          groupTitle: 'Chromium',
          items: [
            { brand: 'NOW FOODS', title: 'CHROMIUM PICOLINATE', dose: '200 MCG • 250 VEG CAPSULES', href: 'https://fas.st/-DyVyh', note: 'Picolinate form. 4.8★ from 12,000+ ratings.' },
            { brand: 'MRM NUTRITION', title: 'CHROMIUM PICOLINATE', dose: '200 MCG • 100 VEGAN CAPSULES', href: 'https://fas.st/4N8QS', note: 'Vegan capsules. 4.7★ from 29,300+ ratings.' },
            { brand: 'NOW FOODS', title: 'GTF CHROMIUM', dose: '200 MCG • 250 TABLETS', href: 'https://fas.st/M1qac', note: 'GTF form. 4.7★ from 8,100+ ratings.' },
          ],
        },
      ],
    },
  },

  /* ===================== 4. CISTANCHE × EURYCOMA ===================== */
  'cistanche-eurycoma': {
    id: 'cistanche-eurycoma',
    updated: '2026-10-09',
    metaTitle: 'Cistanche × Eurycoma — SynergyStacks',
    metaDescription: 'GnRH meets aromatase inhibition — a mechanism preview. The combination has never been tested.',
    disclosure: AFFILIATE_DISCLOSURE,

    evidence: { grade: 'c', label: 'PREVIEW · UNTESTED COMBINATION', combinationTested: 'never' },
    tags: {
      ingredients: ['cistanche', 'eurycoma-longifolia', 'zinc', 'vitamin-d3'],
      goals: ['testosterone', 'libido'],
      mechanisms: ['gnrh-lh-signaling', 'aromatase-inhibition', 'leydig-cell-function'],
      biomarkers: ['total-testosterone', 'free-testosterone', 'lh', 'estradiol'],
    },

    crumbs: [
      { href: '/', label: 'HOME' },
      { href: '/goals/testosterone', label: 'TESTOSTERONE' },
      { label: 'CISTANCHE × EURYCOMA' },
    ],

    kicker: 'TESTOSTERONE / MECHANISM PREVIEW',
    hero: {
      lines: ['MAKE IT.', 'DON\'T LOSE', 'IT.'],
      limeLine: 1,
      copy: 'Cistanche raised LH and testosterone in rats, through the brain\'s GnRH signal. Eurycoma has human trials showing higher testosterone and lab evidence that it inhibits aromatase. One idea makes the signal, the other limits the loss. But the human evidence is limited, the combination has never been tested, and we grade this stack accordingly.',
      ctaHref: 'https://fas.st/h1JT2m',
      ctaLabel: 'VIEW CISTANCHE',
    },

    disclaimerBanner: {
      tag: '⚠ MECHANISM PREVIEW — COMBINATION UNTESTED',
      text: '<strong>This stack is different from our others.</strong> Cistanche has animal data and a described mechanism (GnRH → LH), but <strong>no human RCT with testosterone as the primary outcome</strong>. Eurycoma has human trials showing testosterone increases — but the <strong>combination</strong> has never been tested in a single study. What follows is a hypothesis built on mechanism, not a proven protocol.',
    },

    mechanics: {
      heading: 'The',
      headingLime: 'mechanism.',
      items: [
        { number: '01 / CISTANCHE', title: 'Signals the brain', text: 'In rat studies, Cistanche extract raised LH and testosterone, with authors attributing it to increased hypothalamic GnRH secretion. <strong>Rodent data only.</strong>' },
        { number: '02 / EURYCOMA', title: 'Blocks the loss', text: 'Eurycomanone from Eurycoma longifolia inhibited aromatase (the enzyme converting testosterone to estradiol) in lab work, and Eurycoma extracts raised testosterone in human trials. <strong>Evidence quality varies — see the notes below.</strong>' },
        { number: '03 / COMBO', title: 'Signal + retention', text: 'The hypothesis: one raises the production signal, the other reduces conversion to estrogen. <strong>Never tested as a combination in a controlled study.</strong>' },
      ],
    },

    research: {
      heading: 'What we',
      headingLime: 'know.',
      groups: [
        {
          title: 'CISTANCHE — ANIMAL DATA ONLY',
          items: [
            {
              title: 'Cistanche tubulosa ethanol extract mediates rat sex hormone levels by induction of testicular steroidogenic enzymes',
              authors: 'Wang T. et al. — Pharm Biol, 2016;54(3):481–487. PMID: 26004585.',
              finding: 'Extract increased <b>serum testosterone, LH, and FSH</b> in non-castrated male rats; the authors suggest a central mechanism via GnRH. <i>Rodent model — not human data.</i>',
              doi: 'https://pubmed.ncbi.nlm.nih.gov/26004585/',
              verified: false,
            },
            {
              title: 'The role of Cistanches Herba and its ingredients in improving reproductive outcomes: A comprehensive review',
              authors: 'Li Z. et al. — Phytomedicine, 2024. PMID: 38718638.',
              finding: 'Review of bioactive compounds (echinacoside, verbascoside, salidroside) and effects on gonadal function. The review notes <i>high-quality clinical studies are required</i>.',
              doi: 'https://pubmed.ncbi.nlm.nih.gov/38718638/',
              verified: false,
            },
          ],
        },
        {
          title: 'EURYCOMA — HUMAN DATA',
          items: [
            {
              title: 'Eurycoma longifolia (Jack) Improves Serum Total Testosterone in Men: A Systematic Review and Meta-Analysis of Clinical Trials',
              authors: 'Leisegang K. et al. — Medicina (Kaunas), 2022;58(8):1047. PMID: 36013514.',
              finding: 'Meta-analysis reporting <b>higher total testosterone</b> with Eurycoma supplementation. <i>Note: publication bias and industry funding were flagged.</i>',
              doi: 'https://doi.org/10.3390/medicina58081047',
              verified: false,
            },
            {
              title: 'Effect of Eurycoma longifolia standardised aqueous root extract (Physta®) on testosterone levels and quality of life in ageing male subjects: a randomised, double-blind, placebo-controlled multicentre study',
              authors: 'Chinnappan S.M. et al. — Food Nutr Res, 2021;65. PMID: 34262417.',
              finding: 'RCT in older men with low testosterone; 200 mg/day for 12 weeks reported to <b>raise total testosterone vs. placebo</b>. Likely industry-funded — check funding and numbers in the paper before quoting.',
              doi: 'https://doi.org/10.29219/fnr.v65.5647',
              verified: false,
            },
            {
              title: 'Standardised water-soluble extract of Eurycoma longifolia, Tongkat ali, as testosterone booster for managing men with late-onset hypogonadism?',
              authors: 'Tambi M.I. et al. — Andrologia, 2012;44(Suppl 1):226–230. PMID: 21671978.',
              finding: 'Open-label study (no placebo group) of 200 mg standardized extract for one month in men with late-onset hypogonadism, reporting higher testosterone and symptom scores. Weaker design than an RCT.',
              doi: 'https://doi.org/10.1111/j.1439-0272.2011.01168.x',
              verified: false,
            },
          ],
        },
        {
          title: 'EURYCOMA — MECHANISM (LAB)',
          items: [
            {
              title: 'Eurycomanone, the major quassinoid in Eurycoma longifolia root extract increases spermatogenesis by inhibiting the activity of phosphodiesterase and aromatase in steroidogenesis',
              authors: 'Low B.S. et al. — J Ethnopharmacol, 2013;149(1):201–207. PMID: 23810842.',
              finding: 'Eurycomanone <b>inhibited aromatase and phosphodiesterase activity</b> in lab models. This is the mechanistic basis for the "less conversion to estrogen" idea — not a direct human measurement.',
              doi: 'https://doi.org/10.1016/j.jep.2013.06.023',
              verified: false,
            },
          ],
        },
        {
          title: 'ZINC & VITAMIN D — THE FOUNDATION',
          items: [
            {
              title: 'Correlation between serum zinc and testosterone: A systematic review',
              authors: 'Te L. et al. — J Trace Elem Med Biol, 2023;75:127103.',
              finding: 'Zinc deficiency is linked to lower testosterone and supplementation helps mainly in <b>zinc-deficient</b> people.',
              doi: 'https://doi.org/10.1016/j.jtemb.2022.127103',
              verified: false,
            },
            {
              title: 'Association between vitamin D and testosterone levels: a systematic review and meta-analysis',
              authors: 'Lerchbaum E. et al. — Clin Endocrinol, 2017;86(3):341–348.',
              finding: 'Vitamin D deficiency is associated with lower testosterone; supplementation appears to matter mainly in <b>deficient</b> people.',
              doi: 'https://doi.org/10.1111/cen.13254',
              verified: false,
            },
          ],
        },
      ],
    },

    synergy: {
      left: 'CISTANCHE',
      leftSub: 'GnRH<br>signaling',
      right: 'EURYCOMA',
      rightSub: 'aromatase<br>inhibitor',
      result: 'CISTANCHE <span>×</span> EURYCOMA',
    },

    pivotal: {
      number: 105,
      label: 'HONEST ASSESSMENT',
      paragraphs: [
        'The Eurycoma Physta® trial (105 men, 12 weeks, double-blind) is the strongest human evidence in this stack — and it is about Eurycoma alone. Cistanche has promising animal data but <b>no human RCT with testosterone as the primary outcome</b>.',
        'The <b>combination</b> has never been tested in a single study. The synergy is hypothesized from mechanisms, not demonstrated.',
      ],
      source: 'Eurycoma: Chinnappan S.M. et al., Food Nutr Res. 2021;65. PMID: 34262417. <a href="https://doi.org/10.29219/fnr.v65.5647" target="_blank" rel="noopener noreferrer">https://doi.org/10.29219/fnr.v65.5647</a>',
    },

    faq: [
      {
        q: 'Is this stack proven in humans?',
        a: [
          '<strong>No.</strong> Eurycoma has several human studies showing testosterone increases (with caveats about design and funding). Cistanche has animal data and no human testosterone RCT. The <strong>combination</strong> has never been tested.',
          'We grade it as a <strong>Mechanism Preview</strong>.',
        ],
      },
      {
        q: 'What is the proposed mechanism?',
        a: [
          'Two different points of the same pathway:',
          '<strong>Cistanche</strong> — in rats, raised hypothalamic GnRH signaling and downstream LH, the signal that drives testosterone production.',
          '<strong>Eurycoma</strong> — in lab work, inhibited aromatase, the enzyme that converts testosterone to estradiol.',
        ],
      },
      {
        q: 'Where do zinc and vitamin D fit in?',
        a: [
          'They are the <strong>foundation</strong>: deficiency in either can lower testosterone, and supplementation helps mainly if you are deficient.',
          '<strong>Zinc:</strong> helps only if you are low. <strong>Vitamin D:</strong> supplementation helps mainly when blood levels are low. Get them tested before buying anything else.',
        ],
      },
      {
        q: 'Should I take this if my testosterone is normal?',
        a: [
          'Probably not a priority. If your labs are normal and you feel fine, the likely benefit is small.',
          'If you have symptoms of low testosterone (fatigue, low libido, poor recovery) and labs confirm it, talk to a doctor before self-treating with supplements.',
        ],
      },
    ],

    related: [
      { comingSoon: true, cat: 'TESTOSTERONE', formula: 'ZINC <em>×</em> VITAMIN D3', desc: 'The foundation. Only matters if you are deficient.', evidence: 'COMING SOON' },
      { href: '/stack/berberine-chromium', cat: 'METABOLIC', formula: 'BERBERINE <em>×</em> CHROMIUM', desc: 'Metabolic health and testosterone are linked. One 3-ingredient RCT.', evidence: 'GRADE C · 3-INGREDIENT RCT', grade: 'c' },
      { href: '/stack/creatine-fenugreek', cat: 'PERFORMANCE', formula: 'CREATINE <em>×</em> FENUGREEK', desc: 'Different goal. A single human RCT.', evidence: 'GRADE B · SINGLE HUMAN RCT', grade: 'b' },
    ],

    products: {
      heading: 'Choose your',
      headingLime: 'format.',
      groups: [
        {
          groupTitle: 'Cistanche',
          items: [
            { brand: 'LIFE EXTENSION', title: 'STANDARDIZED CISTANCHE', dose: '500 MG • 30 VEG CAPSULES', href: 'https://fas.st/h1JT2m', note: 'Standardized extract. 4.6★ from 836 ratings.', tag: 'BEST VALUE' },
            { brand: 'HUMANX', title: 'CISTANCHE+', dose: '30 CAPSULES', href: 'https://fas.st/hjTiXB', note: 'Enhanced formula. 4.5★ from 68 ratings.' },
          ],
        },
        {
          groupTitle: 'Tongkat Ali (Eurycoma)',
          items: [
            { brand: 'SOLARAY', title: 'TONGKAT ALI', dose: '400 MG • 60 VEG CAPSULES', href: 'https://fas.st/q9ckQ', note: '4.6★ from 11,500+ ratings.', tag: 'STANDARDIZED' },
            { brand: 'SWANSON VITAMINS', title: 'TONGKAT ALI', dose: '400 MG • 120 VEGAN CAPSULES', href: 'https://fas.st/IQhrTE', note: 'Larger bottle. 4.6★ from 2,200+ ratings.' },
            { brand: 'EVLUTION NUTRITION', title: 'TONGKAT ALI COMPLEX', dose: '60 VEGGIE CAPSULES', href: 'https://fas.st/Qq0td', note: 'Complex formula. 4.6★ from 4,200+ ratings.' },
          ],
        },
      ],
    },
  },
}


/* =========================================================
   HELPERS  (plain functions — no setup needed)
   ========================================================= */

/* Search index built from the data itself. Every new stack, ingredient,
   goal, mechanism or biomarker you add to `tags` shows up automatically. */
export function buildSearchIndex(data = stacks) {
  const entries = []
  const seen = new Set()
  const add = (type, key, label, slug) => {
    const id = type + ':' + key
    if (seen.has(id)) return
    seen.add(id)
    entries.push({ type, key, label, slug })
  }
  Object.entries(data).forEach(([slug, s]) => {
    entries.push({
      type: 'stack',
      key: slug,
      label: (s.metaTitle || slug).replace(' — SynergyStacks', ''),
      slug,
      grade: s.evidence ? s.evidence.grade : null,
    })
    const t = s.tags || {}
    ;['ingredients', 'goals', 'mechanisms', 'biomarkers'].forEach((kind) => {
      ;(t[kind] || []).forEach((k) => add(kind.slice(0, -1), k, k.replace(/-/g, ' '), slug))
    })
  })
  return entries
}

/* To-do list for the citation check: every source not yet verified. */
export function listUnverified(data = stacks) {
  const out = []
  Object.entries(data).forEach(([slug, s]) => {
    ;((s.research && s.research.groups) || []).forEach((g) =>
      g.items.forEach((it) => {
        if (!it.verified) out.push({ stack: slug, title: it.title, doi: it.doi })
      })
    )
  })
  return out
}