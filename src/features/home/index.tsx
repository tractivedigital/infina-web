import '@/styles/v2/home.css';
import { JsonLd } from '@/components/seo/JsonLd';
import { V2Page } from '@/components/v2/V2Page';
import { structuredData } from './structured-data';
import { SiteNav } from './sections/SiteNav';
import { Hero } from './sections/Hero';
import { Products } from './sections/Products';
import { WhoWeServe } from './sections/WhoWeServe';
import { Calculator } from './sections/Calculator';
import { Process } from './sections/Process';
import { SmarterPartner } from './sections/SmarterPartner';
import { Compare } from './sections/Compare';
import { Potential } from './sections/Potential';
import { HeritageBand } from './sections/HeritageBand';
import { Faq } from './sections/Faq';
import { FinalCta } from './sections/FinalCta';
import { SiteFooter } from './sections/SiteFooter';

export function HomePage() {
  return (
    <V2Page page="home">
      <JsonLd data={structuredData} />
      <SiteNav />
      <main>
        <Hero />
        <Products />
        <WhoWeServe />
        <Calculator />
        <Process />
        <SmarterPartner />
        <Compare />
        <Potential />
        <HeritageBand />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </V2Page>
  );
}
