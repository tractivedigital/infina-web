import '@/styles/v2/esop.css';
import { JsonLd } from '@/components/seo/JsonLd';
import { V2Page } from '@/components/v2/V2Page';
import { structuredData } from './structured-data';
import { SiteNav } from './sections/SiteNav';
import { PageDock } from './sections/PageDock';
import { Hero } from './sections/Hero';
import { Calculator } from './sections/Calculator';
import { WhatIs } from './sections/WhatIs';
import { WhoWeFund } from './sections/WhoWeFund';
import { LenderBand } from '@/components/v2/sections/LenderBand';
import { Why } from './sections/Why';
import { WhatDecides } from './sections/WhatDecides';
import { HowToApply } from './sections/HowToApply';
import { Charges } from './sections/Charges';
import { Compare } from './sections/Compare';
import { Eligibility } from './sections/Eligibility';
import { ThingsToKnow } from '@/components/v2/sections/ThingsToKnow';
import { Faq } from './sections/Faq';
import { FinalCta } from './sections/FinalCta';
import { SiteFooter } from '@/components/v2/sections/SiteFooter';

export function EsopPage() {
  return (
    <V2Page page="esop">
      <JsonLd data={structuredData} />
      <SiteNav />
      <PageDock />
      <main>
        <Hero />
        <Calculator />
        <WhatIs />
        <WhoWeFund />
        <LenderBand />
        <Why />
        <WhatDecides />
        <HowToApply />
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
