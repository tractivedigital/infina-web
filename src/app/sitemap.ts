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
  '/blogs',
  '/blogs/corporate-real-estate-finance-explained-a-complete-guide-for-developers-70092',
  '/blogs/what-is-esop-financing-and-why-do-employees-need-it-99f6f',
  '/blogs/how-loan-against-property-works-in-india-process-interest-rates-eligibility-benefits',
  '/blogs/loan-against-property-vs-personal-loan---which-is-better',
  '/blogs/what-is-loan-against-securities-and-how-it-works-in-india-a-complete-guide',
  '/blogs/loan-against-shares-vs-loan-against-mutual-funds-which-is-right-for-you',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route === '/' ? '' : route}`,
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));
}
