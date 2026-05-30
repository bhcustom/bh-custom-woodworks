import { services } from './data/services';

export default async function sitemap() {
  const baseUrl = 'https://bhcustomwoodworks.com';

  // Base routes
  const routes = [
    { url: '', changeFrequency: 'weekly', priority: 1.0 },
    { url: '/our-story', changeFrequency: 'monthly', priority: 0.7 },
    { url: '/shop', changeFrequency: 'weekly', priority: 0.9 },
    { url: '/quote', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/contact', changeFrequency: 'monthly', priority: 0.7 },
    { url: '/shipping-policy', changeFrequency: 'yearly', priority: 0.3 },
    { url: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
    { url: '/terms-of-service', changeFrequency: 'yearly', priority: 0.3 },
  ].map((route) => ({
    url: `${baseUrl}${route.url}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Service routes
  const serviceRoutes = Object.keys(services).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...routes, ...serviceRoutes];
}
