import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

const routes = [
  '/',
  '/about',
  '/loan-against-securities',
  '/las-calculators',
  '/loan-against-property',
  '/lap-calculators',
  '/esop-financing',
  '/esop-calculators',
  '/corporate-real-estate',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route === '/' ? '' : route}`,
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));
}
