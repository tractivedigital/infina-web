import '@/styles/pages/cookie-policy.css';
import { JsonLd } from '@/components/seo/JsonLd';
import { PageShell } from '@/components/layout/PageShell';
import { LegalTocBehavior } from '@/components/behaviors/legal-toc';
import { structuredData } from './structured-data';
import { Intro } from './sections/Intro';
import { Content } from './sections/Content';

export function CookiePolicyPage() {
  return (
    <PageShell page="cookie-policy" main={{ id: 'top', className: 'home' }}>
      <JsonLd data={structuredData} />
      <Intro />
      <Content />
      <LegalTocBehavior />
    </PageShell>
  );
}
