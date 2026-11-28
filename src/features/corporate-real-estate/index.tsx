import '@/styles/v2/cre.css';
import { JsonLd } from '@/components/seo/JsonLd';
import { V2Page } from '@/components/v2/V2Page';
import { structuredData } from './structured-data';
import { SiteNav } from './sections/SiteNav';
import { PageDock } from './sections/PageDock';
import { Hero } from './sections/Hero';
import { WhatIs } from './sections/WhatIs';
import { LifecycleStory } from './sections/LifecycleStory';
import { Solutions } from './sections/Solutions';
import { LenderBand } from '@/components/v2/sections/LenderBand';
import { Why } from './sections/Why';
import { WhatItPaysFor } from './sections/WhatItPaysFor';
import { HowToApply } from './sections/HowToApply';
import { Charges } from './sections/Charges';
import { Compare } from './sections/Compare';
import { Eligibility } from './sections/Eligibility';
import { ThingsToKnow } from '@/components/v2/sections/ThingsToKnow';
import { Faq } from './sections/Faq';
import { FinalCta } from './sections/FinalCta';
import { SiteFooter } from '@/components/v2/sections/SiteFooter';

export function CrePage() {
  return (
    <V2Page page="cre">
      <JsonLd data={structuredData} />
      <SiteNav />
      <PageDock />
      <main>
        <Hero />
        <WhatIs />
        <LifecycleStory />
        <Solutions />
        <LenderBand />
        <Why />
        <WhatItPaysFor />
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
