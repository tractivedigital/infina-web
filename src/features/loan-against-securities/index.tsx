import '@/styles/v2/las.css';
import { JsonLd } from '@/components/seo/JsonLd';
import { V2Page } from '@/components/v2/V2Page';
import { structuredData } from './structured-data';
import { SiteNav } from './sections/SiteNav';
import { PageDock } from './sections/PageDock';
import { Hero } from './sections/Hero';
import { Story } from './sections/Story';
import { Benefits } from './sections/Benefits';
import { Estimate } from './sections/Estimate';
import { Securities } from './sections/Securities';
import { Charges } from './sections/Charges';
import { Compare } from './sections/Compare';
import { Eligibility } from './sections/Eligibility';
import { ThingsToKnow } from '@/components/v2/sections/ThingsToKnow';
import { Faq } from './sections/Faq';
import { FinalCta } from './sections/FinalCta';
import { SiteFooter } from '@/components/v2/sections/SiteFooter';

export function LasPage() {
  return (
    <V2Page page="las">
      <JsonLd data={structuredData} />
      <SiteNav />
      <PageDock />
      <main>
        <Hero />
        <Story />
        <Benefits />
        <Estimate />
        <Securities />
        <Charges />
        <Compare />
        <Eligibility />
        <ThingsToKnow />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </V2Page>
  );
}
