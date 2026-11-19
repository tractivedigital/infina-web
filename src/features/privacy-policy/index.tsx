import '@/styles/pages/privacy-policy.css';
import { JsonLd } from '@/components/seo/JsonLd';
import { PageShell } from '@/components/layout/PageShell';
import { LegalTocBehavior } from '@/components/behaviors/legal-toc';
import { structuredData } from './structured-data';
import { Intro } from './sections/Intro';
import { Content } from './sections/Content';

export function PrivacyPolicyPage() {
  return (
    <PageShell page="privacy-policy" main={{ id: 'top', className: 'home' }}>
      <JsonLd data={structuredData} />
      <Intro />
      <Content />
      <LegalTocBehavior />
    </PageShell>
  );
}
