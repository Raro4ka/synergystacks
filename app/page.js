import { Reveal, Counter, ParallaxVisual, SpotlightCard, FAQ } from './components/ClientUI'

const homeFaq = [
  {
    q: 'Is this site medical advice?',
    a: [
      'No. <strong>SynergyStacks is an educational reference, not a medical service.</strong> We translate published research into plain language and explain mechanisms.',
      'Before starting any supplement regimen — especially if you take prescription medication — talk to a qualified healthcare provider.'
    ]
  },
  {
    q: 'What do the grades (A / B / C) mean?',
    a: [
      '<strong>Grade A</strong> — multiple randomized controlled trials or a meta-analysis confirm the effect.',
      '<strong>Grade B</strong> — human data exists but is limited, or the mechanism is well-established but clinical outcomes are still being measured.',
      '<strong>Grade C</strong> — some evidence supports the effect, but results are inconsistent.'
    ]
  },
  {
    q: 'Do you earn money from this site?',
    a: [
      'Yes. Some links to supplement products are <strong>affiliate links</strong> — if you buy through them, we may receive a commission at no extra cost to you.',
      'This never affects which stacks we cover or how we grade them. Read our full disclosure on the <a href="/about">About page</a>.'
    ]
  }
]

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="kicker"><span className="dot"></span>EVIDENCE-BASED COMBINATIONS</div>
              <h1>
                <span className="line"><span>ONE PLUS</span></span>
                <span className="line"><span className="lime">ONE EQUALS</span></span>
                <span className="line"><span>THREE.</span></span>
              </h1>
              <p className="hero-copy">
                Most supplements are sold alone. But the research keeps showing
                the same thing: <strong>the right combination outperforms
                the sum of its parts.</strong> We read the studies, extract the
                mechanisms, and explain exactly <em>why</em> certain pairs work
                better together — with the numbers to back it up.
              </p>
              <div className="hero-meta">
                <div className="stat">
                  <div className="num"><Counter to={25} /></div>
                  <div className="lbl">STUDIES CITED</div>
                </div>
                <div className="stat">
                  <div className="num"><Counter to={5} /></div>
                  <div className="lbl">SYNERGY PAIRS</div>
                </div>
                <div className="stat">
                  <div className="num"><Counter to={4} /></div>
                  <div className="lbl">CATEGORIES</div>
                </div>
              </div>
            </div>
            <ParallaxVisual />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal>
            <div className="manifesto">
              <p>
                A supplement doesn&apos;t work in a vacuum. It works through a pathway.
                <strong>And when two compounds hit different points of the same
                pathway — or two complementary pathways — the effect compounds.</strong>
                That&apos;s synergy. Not marketing. Physiology.
              </p>
              <p className="sub">
                SynergyStacks is a reference library. Every claim links to a study.
                Every mechanism is explained. Every grade is earned — not bought.
              </p>
            </div>
          </Reveal>

          <div className="stacks-grid">
            <Reveal delay={0}>
              <a className="stack-card" href="/stack/carnitine-caffeine">
                <div className="cat">WEIGHT LOSS</div>
                <div className="formula">L-CARNITINE <em>×</em> CAFFEINE</div>
                <p className="desc">
                  Caffeine stimulates muscle carnitine retention. Carnitine delivers
                  fatty acids to mitochondria. Two pathways, one result.
                </p>
                <span className="evidence">GRADE A · HUMAN RCT</span>
              </a>
            </Reveal>

            <Reveal delay={80}>
              <a className="stack-card" href="/stack/creatine-fenugreek">
                <div className="cat">PERFORMANCE</div>
                <div className="formula">CREATINE <em>×</em> FENUGREEK</div>
                <p className="desc">
                  Fenugreek acts as an insulin mimetic, enhancing creatine uptake
                  without the 70 g of dextrose. Same results, less sugar.
                </p>
                <span className="evidence">GRADE A · HUMAN RCT</span>
              </a>
            </Reveal>

            <Reveal delay={160}>
              <a className="stack-card" href="/stack/berberine-chromium">
                <div className="cat">METABOLIC</div>
                <div className="formula">BERBERINE <em>×</em> CHROMIUM</div>
                <p className="desc">
                  AMPK activation meets insulin signaling enhancement.
                  −2.35 kg fat mass and +28% insulin sensitivity in 12 weeks.
                </p>
                <span className="evidence">GRADE A · HUMAN RCT</span>
              </a>
            </Reveal>

            <Reveal delay={0}>
              <a className="stack-card" href="/stack/cistanche-eurycoma">
                <div className="cat">TESTOSTERONE</div>
                <div className="formula">CISTANCHE <em>×</em> EURYCOMA</div>
                <p className="desc">
                  GnRH &amp; aromatase — mechanism preview. Animal data only.
                  Anecdotal bloodwork suggests potential, but human RCT pending.
                </p>
                <span className="evidence grade-b">GRADE B · ANIMAL + MECHANISTIC</span>
              </a>
            </Reveal>

            <Reveal delay={80}>
              <div className="stack-card" style={{ opacity: 0.55, cursor: 'default' }}>
                <div className="cat">PERFORMANCE</div>
                <div className="formula">BETA-ALANINE <em>×</em> BICARB</div>
                <p className="desc">
                  Beta-alanine buffers H+ inside the muscle. Bicarbonate buffers
                  H+ outside. Together they cover both compartments.
                </p>
                <span className="evidence grade-b">GRADE B · COMING SOON</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal>
            <h2 className="section-heading">How we<br /><span>grade.</span></h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="method-grid">
              <div className="method-card">
                <div className="grade a">GRADE A</div>
                <h4>Human RCT or meta-analysis</h4>
                <p>Multiple randomized controlled trials or a meta-analysis confirm the combination effect. Mechanism is understood.</p>
              </div>
              <div className="method-card">
                <div className="grade b">GRADE B</div>
                <h4>Strong mechanistic signal</h4>
                <p>Human data exists but is limited (small n, single study), or mechanism is well-established but clinical outcomes still being measured.</p>
              </div>
              <div className="method-card">
                <div className="grade c">GRADE C</div>
                <h4>Emerging or mixed</h4>
                <p>Some evidence supports the combination, but results are inconsistent or populations are narrow. Worth watching.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal>
            <h2 className="section-heading">Frequently<br /><span>asked.</span></h2>
          </Reveal>
          <Reveal delay={80}>
            <FAQ items={homeFaq} />
          </Reveal>
        </div>
      </section>
    </>
  )
}