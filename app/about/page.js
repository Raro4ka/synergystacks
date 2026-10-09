'use client'

import { Reveal } from '../components/ClientUI'

export default function AboutPage() {
  return (
    <>
      <section style={{ padding: '140px 0 40px' }}>
        <div className="container">
          <div className="crumbs">
            <a href="/">HOME</a>
            <span className="sep">/</span>
            <span className="cur">ABOUT</span>
          </div>
          <div className="kicker"><span className="dot"></span>ABOUT & METHODOLOGY</div>
          <h1 style={{ textTransform: 'uppercase' }}>
            <span className="line"><span>WHY THIS</span></span>
            <span className="line"><span className="lime">EXISTS.</span></span>
          </h1>
          <p className="hero-copy" style={{ fontSize: 'clamp(17px,2.2vw,20px)', maxWidth: 640, color: '#c8d0c8' }}>
            The supplement industry runs on hype. <strong style={{ color: 'var(--lime)' }}>SynergyStacks runs on citations.</strong> Every stack we publish is built the same way: read the studies, extract the mechanism, grade the evidence honestly, and tell you what we actually know — and what we don&apos;t.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 60 }}>
        <div className="container">
          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
              <div>
                <h3 style={{ fontSize: 'clamp(20px,2.8vw,26px)', fontWeight: 900, letterSpacing: '-.02em', margin: '0 0 16px', textTransform: 'uppercase' }}>
                  The <span style={{ color: 'var(--lime)' }}>principle.</span>
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--muted)', margin: '0 0 16px' }}>
                  Most supplement reviews ask &quot;does X work?&quot; That&apos;s the wrong question. The interesting question is <strong style={{ color: '#c8d0c8' }}>&quot;does X work better with Y?&quot;</strong> — because biology rarely operates through single compounds.
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--muted)', margin: '0 0 16px' }}>
                  Caffeine stimulates muscle carnitine retention. Fenugreek mimics insulin. Berberine activates AMPK. Eurycoma inhibits aromatase. In each case, the combination does something neither compound can do alone.
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--muted)', margin: '0 0 16px' }}>
                  We&apos;re not trying to sell you a miracle. We&apos;re trying to explain <em style={{ color: 'var(--lime)', fontStyle: 'normal', fontWeight: 800 }}>why</em> certain pairs work — and give you the tools to evaluate new ones yourself.
                </p>
              </div>

              <div style={{ position: 'relative', border: '1px solid #262e26', borderRadius: 24, padding: '36px 32px', background: 'linear-gradient(160deg,#0d120d,#0a0d0a)', overflow: 'hidden' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', border: '1px solid #b9ff0040', background: 'radial-gradient(circle at 40% 35%,#1a241a,#0a0d0a)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, fontWeight: 900, color: 'var(--lime)', fontSize: 20, letterSpacing: 1 }}>SS</div>
                <h4 style={{ fontSize: 20, fontWeight: 900, margin: '0 0 6px' }}>The SynergyStacks editorial</h4>
                <p style={{ fontSize: 11, fontWeight: 900, letterSpacing: 2, color: 'var(--lime)', margin: '0 0 20px', textTransform: 'uppercase' }}>Independent · Self-funded · Non-medical</p>
                <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.75, margin: '0 0 14px' }}>
                  We&apos;re a small editorial project focused on supplement research. No medical credentials to wave around — just a commitment to reading primary literature, citing sources, and refusing to publish claims we can&apos;t back with data.
                </p>
                <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.75, margin: '0 0 14px' }}>
                  We believe in finding the intersection between rigorous science and real-world experience. Randomized controlled trials tell us what works on average, in controlled conditions. But anecdotal reports, bloodwork from enthusiasts, and mechanistic reasoning often point us toward combinations that haven&apos;t been formally studied yet — and that&apos;s where the most interesting questions live.
                </p>
                <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                  Every stack we publish is graded honestly. When the human data is strong, we say so. When it&apos;s limited to animals or case reports, we say that too.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <h2 className="section-heading">The <span>method.</span></h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="method-grid">
              <div className="method-card">
                <div className="grade a">STEP 01</div>
                <h4>Mechanism first</h4>
                <p>We don&apos;t start with &quot;does it work?&quot; We start with &quot;how would it work?&quot; If we can&apos;t explain the biological pathway in plain language, we don&apos;t have a stack yet.</p>
              </div>
              <div className="method-card">
                <div className="grade a">STEP 02</div>
                <h4>Human data preferred</h4>
                <p>Every claim on this site traces back to a human RCT, meta-analysis, observational study, or — when human data is absent — a clearly labeled animal study or documented case report. We never present animal data as if it were human evidence.</p>
              </div>
              <div className="method-card">
                <div className="grade a">STEP 03</div>
                <h4>Combination-specific</h4>
                <p>We look for studies where the <strong>combination</strong> was tested — not just the ingredients separately. If a stack is only supported by &quot;X works and Y works,&quot; that&apos;s a Grade B at best.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="method-grid" style={{ marginTop: 18 }}>
              <div className="method-card">
                <div className="grade a">STEP 04</div>
                <h4>Honest grading</h4>
                <p>Grade A = multiple RCTs or meta-analysis. Grade B = strong mechanism, limited human data. Grade C = emerging signal, inconsistent results. Mechanism Preview = animal data only, human RCT pending. We label all four clearly.</p>
              </div>
              <div className="method-card">
                <div className="grade a">STEP 05</div>
                <h4>Reversible conclusions</h4>
                <p>If new data contradicts what we published, we update the page and note the change. Science moves. So should we. Every page carries a &quot;last reviewed&quot; date.</p>
              </div>
              <div className="method-card">
                <div className="grade b">WHAT WE DON&apos;T DO</div>
                <h4>No shortcuts</h4>
                <p>No brand deals. No &quot;sponsored by&quot; posts. No claims we can&apos;t cite. No &quot;proprietary blends&quot; worship. No doctor-washing with fake credentials. No presenting animal data as human evidence without a clear label.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <h2 className="section-heading">Full <span>disclosure.</span></h2>
          </Reveal>

          <Reveal>
            <div className="disclosure" style={{ maxWidth: 900, margin: '0 auto 20px' }}>
              <h4>How we make money</h4>
              <p><strong>Affiliate commissions.</strong> When you click a &quot;VIEW&quot; button and purchase a product, we may receive a small commission from the retailer. This costs you nothing extra. It&apos;s how the site stays online.</p>
              <p>We only link to products we would personally consider using, and we don&apos;t accept payment to include a product in a stack. If we ever run a sponsored placement, it will be marked clearly and won&apos;t affect the grade we assign.</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="disclosure" style={{ maxWidth: 900, margin: '0 auto 20px' }}>
              <h4>What we are not</h4>
              <p><strong>Not a medical service.</strong> We don&apos;t diagnose, treat, or prescribe. Nothing on this site is medical advice. If you take prescription medication, are pregnant or breastfeeding, or have a chronic health condition, talk to a qualified healthcare provider before starting any supplement.</p>
              <p><strong>Not a supplement seller.</strong> We don&apos;t sell anything directly. We&apos;re an editorial reference, not a store.</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="disclosure" style={{ maxWidth: 900, margin: '0 auto' }}>
              <h4>Corrections</h4>
              <p>Found a mistake? A misquoted study? A claim you think is overstated? Email us at <strong>corrections@synergystacks.example</strong>. We take every correction seriously and update the site when warranted.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="newsletter">
        <div className="container">
          <div className="newsletter-inner">
            <Reveal>
              <h2>New stacks,<br /><span>no spam.</span></h2>
              <p className="lead">One email when we publish a new stack. That&apos;s it. No promos, no &quot;urgent offers,&quot; no drip sequences.</p>
            </Reveal>
            <Reveal delay={80}>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="your@email.com" aria-label="Email address" />
                <button type="submit">SUBSCRIBE →</button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}