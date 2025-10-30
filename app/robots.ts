export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://test-cleaning-seattle.vercel.app/sitemap.xml',
  }
}