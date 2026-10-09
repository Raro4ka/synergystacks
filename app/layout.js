import './globals.css'
import { Nav, ProgressBar, BackToTop } from './components/ClientUI'

// Когда купишь домен — замени это на свой (например https://synergystacks.com)
const SITE_URL = 'https://synergystacks.pages.dev'

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'SynergyStacks — Supplement Research Library',
    template: '%s | SynergyStacks',
  },

  description:
    'A reference library of supplement ingredients, biological pathways, and combinations — with the evidence behind each claim and the gaps that remain.',

  applicationName: 'SynergyStacks',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    siteName: 'SynergyStacks',
    title: 'SynergyStacks — Supplement Research Library',
    description:
      'Explore supplement ingredients, biological pathways, and the evidence behind common combinations.',
    url: SITE_URL,
    locale: 'en_US',
  },

  twitter: {
    card: 'summary',
    title: 'SynergyStacks — Supplement Research Library',
    description:
      'Explore supplement ingredients, research findings and biological pathways.',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export const viewport = {
  themeColor: '#050605',
  width: 'device-width',
  initialScale: 1,
}

const footerLinks = [
  ['HOME', '/'],
  ['GOALS', '/goals/'],
  ['INGREDIENTS', '/ingredients/'],
  ['MECHANISMS', '/mechanisms/'],
  ['BIOMARKERS', '/biomarkers/'],
  ['STACKS', '/stacks/'],
  ['SEARCH', '/search/'],
  ['ABOUT', '/about/'],
]

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>

        <div className="glow" aria-hidden="true" />
        <div className="grain" aria-hidden="true" />

        <Nav />
        <ProgressBar />

        <main id="main-content">{children}</main>

        <footer>
          <nav className="foot-links" aria-label="Footer navigation">
            {footerLinks.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>

          <div className="footer-brand">
            SYNERGYSTACKS / SUPPLEMENT RESEARCH LIBRARY
          </div>

          <div className="disclaimer">
            Educational reference only — not medical advice. Consult a
            qualified healthcare professional before starting any supplement,
            especially if you take prescription medication, are pregnant, or
            have a medical condition. Some product links may be affiliate
            links.
          </div>
        </footer>

        <BackToTop />
      </body>
    </html>
  )
}