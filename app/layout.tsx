import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Test Cleaning Seattle - Professional Cleaning Services in Seattle, WA',
  description: 'Premier cleaning services in Seattle, WA. Residential and commercial cleaning with exceptional quality and reliability. Get your free quote today!',
  keywords: 'cleaning services Seattle, house cleaning Seattle, commercial cleaning Seattle WA, maid service Seattle',
  authors: [{ name: 'Test Cleaning Seattle' }],
  creator: 'Test Cleaning Seattle',
  publisher: 'Test Cleaning Seattle',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://testcleaningseattle.com'),
  openGraph: {
    title: 'Test Cleaning Seattle - Professional Cleaning Services',
    description: 'Premier cleaning services in Seattle, WA. Residential and commercial cleaning with exceptional quality and reliability.',
    url: 'https://testcleaningseattle.com',
    siteName: 'Test Cleaning Seattle',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test Cleaning Seattle - Professional Cleaning Services',
    description: 'Premier cleaning services in Seattle, WA. Residential and commercial cleaning with exceptional quality and reliability.',
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
        <link rel="canonical" href="https://testcleaningseattle.com" />
      </head>
      <body>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}