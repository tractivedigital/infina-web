import '@/styles/pages/channel-partner.css';
import { JsonLd } from '@/components/seo/JsonLd';
import { PageShell } from '@/components/layout/PageShell';
import { PartnerFormBehavior } from '@/components/behaviors/partner-form';
import { structuredData } from './structured-data';
import { Hero } from './sections/Hero';
import { Why } from './sections/Why';
import { Eligibility } from './sections/Eligibility';
import { Process } from './sections/Process';
import { FooterCta } from './sections/FooterCta';

export function ChannelPartnerPage() {
  return (
    <PageShell page="channel-partner" main={{ className: 'home cpg' }}>
      <JsonLd data={structuredData} />
      <Hero />
      <Why />
      <Eligibility />
      <Process />
      <FooterCta />
      <PartnerFormBehavior />
    </PageShell>
  );
}
