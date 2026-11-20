import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
  // UAT / staging builds set NEXT_PUBLIC_NOINDEX=1 so search engines ignore them.
  if (process.env.NEXT_PUBLIC_NOINDEX === '1') return { rules: { userAgent: '*', disallow: '/' } };
  return { rules: { userAgent: '*', allow: '/', disallow: '/api/' }, sitemap: `${siteConfig.url}/sitemap.xml` };
}
