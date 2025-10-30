import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Test Cleaning Seattle - Professional Cleaning Services in Seattle, WA',
  description: 'Professional residential and commercial cleaning services in Seattle, Washington. Reliable, thorough, and affordable cleaning solutions for your home or business.',
  keywords: 'cleaning services, Seattle cleaning, residential cleaning, commercial cleaning, house cleaning, office cleaning, Washington',
  authors: [{ name: 'Test Cleaning Seattle' }],
  creator: 'Test Cleaning Seattle',
  publisher: 'Test Cleaning Seattle',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Test Cleaning Seattle - Professional Cleaning Services',
    description: 'Professional residential and commercial cleaning services in Seattle, WA',
    type: 'website',
    locale: 'en_US',
    siteName: 'Test Cleaning Seattle'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test Cleaning Seattle - Professional Cleaning Services',
    description: 'Professional residential and commercial cleaning services in Seattle, WA'
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}