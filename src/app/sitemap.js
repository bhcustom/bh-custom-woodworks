import { services } from './data/services';

export default async function sitemap() {
  const baseUrl = 'https://bhcustomwoodworks.com';

  // Base routes
  const routes = [
    { url: '' },
    { url: '/our-story' },
    { url: '/shop' },
    { url: '/quote' },
    { url: '/contact' },
    { url: '/shipping-policy' },
    { url: '/privacy-policy' },
    { url: '/terms-of-service' },
  ].map((route) => ({
    url: `${baseUrl}${route.url}`,
  }));

  // Service routes
  const serviceRoutes = Object.keys(services).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
  }));

  return [...routes, ...serviceRoutes];
}
