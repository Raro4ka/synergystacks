import './globals.css'
import { Nav, ProgressBar, BackToTop } from './components/ClientUI'
import { Background } from './components/Background'

export const metadata = {
  title: 'SynergyStacks — Evidence-Based Supplement Combinations',
  description: 'Every claim links to a study. SynergyStacks is a reference library of evidence-based supplement combinations — Carnitine × Caffeine, Creatine × Fenugreek, Berberine × Chromium, and more.',
  metadataBase: new URL('https://synergystacks.example'),
  openGraph: {
    type: 'website',
    siteName: 'SynergyStacks',
    title: 'SynergyStacks — Evidence-Based Supplement Combinations',
    description: 'One plus one equals three. The research-backed guide to supplement synergy.',
    url: 'https://synergystacks.example/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SynergyStacks — Evidence-Based Supplement Combinations',
    description: 'One plus one equals three. The research-backed guide to supplement synergy.',
  },
}

export const viewport = {
  themeColor: '#050605',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="glow"></div>
        <Background />
        <div className="grain" aria-hidden="true"></div>
        <ProgressBar />

        <Nav />

        <main>{children}</main>

        <footer>
<div className="foot-links">
  <a href="/">HOME</a>
  <a href="/goals">GOALS</a>
  <a href="/ingredients">INGREDIENTS</a>
  <a href="/mechanisms">MECHANISMS</a>
  <a href="/biomarkers">BIOMARKERS</a>
  <a href="/stacks">STACKS</a>
  <a href="/search">SEARCH</a>
  <a href="/about">ABOUT</a>
</div>
          SYNERGYSTACKS / EVIDENCE-BASED SUPPLEMENT COMBINATIONS
          <div className="disclaimer">
            This site is for educational purposes only and does not provide medical advice.
            Supplement effects vary between individuals. Consult a healthcare provider
            before starting any new supplement regimen. Some links may be affiliate links.
          </div>
        </footer>

        <BackToTop />
      </body>
    </html>
  )
}