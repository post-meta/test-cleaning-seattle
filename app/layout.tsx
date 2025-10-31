import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Test Cleaning Seattle - Professional House & Office Cleaning Services',
  description: 'Trusted cleaning services in Seattle, WA. Professional house cleaning, office cleaning, and commercial cleaning. Licensed, insured, and locally owned. Free estimates available.',
  keywords: 'Seattle cleaning service, house cleaning Seattle, office cleaning, commercial cleaning, residential cleaning, maid service Seattle, professional cleaners',
  openGraph: {
    title: 'Test Cleaning Seattle - Professional Cleaning Services',
    description: 'Reliable cleaning services for homes and offices in Seattle, Washington. Licensed and insured professional cleaners.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Test Cleaning Seattle'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test Cleaning Seattle - Professional Cleaning Services',
    description: 'Trusted cleaning services in Seattle, WA. Professional house and office cleaning with free estimates.'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="US-WA" />
        <meta name="geo.placename" content="Seattle" />
        <meta name="geo.position" content="47.6062;-122.3321" />
        <meta name="ICBM" content="47.6062, -122.3321" />
        <link rel="canonical" href="https://testcleaningseattle.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <header>
          <nav role="navigation" aria-label="Main navigation">
            {/* Navigation will be implemented in components */}
          </nav>
        </header>
        <main role="main">
          {children}
        </main>
        <footer role="contentinfo">
          {/* Footer will be implemented in components */}
        </footer>
      </body>
    </html>
  )
}