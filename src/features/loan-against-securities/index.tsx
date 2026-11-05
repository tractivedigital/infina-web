import '@/styles/pages/las.css';
import { JsonLd } from '@/components/seo/JsonLd';
import { PageShell } from '@/components/layout/PageShell';
import { CalculatorBehavior } from '@/components/behaviors/calculators';
import { PledgeCarouselBehavior } from '@/components/behaviors/pledge-carousel';
import { DocumentTabsBehavior } from '@/components/behaviors/document-tabs';
import { structuredData } from './structured-data';
import { Hero } from './sections/Hero';
import { Estimate } from './sections/Estimate';
import { What } from './sections/What';
import { Pledge } from './sections/Pledge';
import { Trust } from '@/components/sections/Trust';
import { Why } from './sections/Why';
import { Decide } from './sections/Decide';
import { How } from './sections/How';
import { Rates } from './sections/Rates';
import { Compare } from './sections/Compare';
import { Eligibility } from './sections/Eligibility';
import { Safety } from '@/components/sections/Safety';
import { Faqs } from './sections/Faqs';
import { Next } from './sections/Next';

export function LasPage() {
  return (
    <PageShell
      page="las"
      review
      main={{ id: 'top', className: 'home' }}
      stickyCta={{ href: '#heroform', label: 'Check Eligibility' }}
    >
      <JsonLd data={structuredData} />
      <Hero />
      <Estimate />
      <What />
      <Pledge />
      <Trust />
      <Why />
      <Decide />
      <How />
      <Rates />
      <Compare />
      <Eligibility />
      <Safety />
      <Faqs />
      <Next />
      <CalculatorBehavior />
      <PledgeCarouselBehavior />
      <DocumentTabsBehavior />
    </PageShell>
  );
}
