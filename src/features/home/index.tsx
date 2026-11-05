import '@/styles/pages/home.css';
import { PageShell } from '@/components/layout/PageShell';
import { CalculatorBehavior } from '@/components/behaviors/calculators';
import { HomeBehavior } from '@/components/behaviors/home';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { Estimate } from './sections/Estimate';
import { How } from './sections/How';
import { Why } from './sections/Why';
import { Who } from './sections/Who';
import { About } from './sections/About';
import { Faqs } from './sections/Faqs';

export function HomePage() {
  return (
    <PageShell page="home" main={{ id: 'top', className: 'home' }}>
      <Hero />
      <Services />
      <Estimate />
      <How />
      <Why />
      <Who />
      <About />
      <Faqs />
      <CalculatorBehavior />
      <HomeBehavior />
    </PageShell>
  );
}
