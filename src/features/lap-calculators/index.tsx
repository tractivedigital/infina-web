import '@/styles/pages/lap-calc.css';
import { JsonLd } from '@/components/seo/JsonLd';
import { PageShell } from '@/components/layout/PageShell';
import { CalculatorBehavior } from '@/components/behaviors/calculators';
import { structuredData } from './structured-data';
import { Hero } from './sections/Hero';
import { Calculator } from './sections/Calculator';
import { What } from './sections/What';
import { Offer } from './sections/Offer';
import { Trust } from '@/components/sections/Trust';
import { Why } from './sections/Why';
import { Decide } from './sections/Decide';
import { Compare } from './sections/Compare';
import { How } from './sections/How';
import { Safety } from '@/components/sections/Safety';
import { Faqs } from './sections/Faqs';
import { Next } from './sections/Next';

export function LapCalcPage() {
  return (
    <PageShell
      page="lap-calc"
      review
      main={{ id: 'top', className: 'home' }}
      stickyCta={{ href: '#calculator', label: 'Use the calculator' }}
    >
      <JsonLd data={structuredData} />
      <Hero />
      <Calculator />
      <What />
      <Offer />
      <Trust />
      <Why />
      <Decide />
      <Compare />
      <How />
      <Safety />
      <Faqs />
      <Next />
      <CalculatorBehavior variant="lap-calc" />
    </PageShell>
  );
}
