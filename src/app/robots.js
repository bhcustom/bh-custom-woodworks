export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://bhcustomwoodworks.com/sitemap.xml',
  }
}
