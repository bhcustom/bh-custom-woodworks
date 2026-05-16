import { services } from './data/services';

export default async function sitemap() {
  const baseUrl = 'https://bhcustomwoodworking.com';

  // Base routes
  const routes = [
    '',
    '/our-story',
    '/shop',
    '/quote',
    '/shipping-policy',
    '/privacy-policy',
    '/terms-of-service',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  // Service routes
  const serviceRoutes = Object.keys(services).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...serviceRoutes];
}
