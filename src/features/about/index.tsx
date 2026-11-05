import '@/styles/pages/about.css';
import { JsonLd } from '@/components/seo/JsonLd';
import { PageShell } from '@/components/layout/PageShell';
import { AboutTabsBehavior } from '@/components/behaviors/about-tabs';
import { structuredData } from './structured-data';
import { Hero } from './sections/Hero';
import { Story } from './sections/Story';
import { Purpose } from './sections/Purpose';
import { Values } from './sections/Values';
import { Leadership } from './sections/Leadership';
import { Management } from './sections/Management';
import { Offices } from './sections/Offices';
import { Faqs } from './sections/Faqs';
import { Regulatory } from './sections/Regulatory';

export function AboutPage() {
  return (
    <PageShell page="about" review main={{ id: 'main', className: 'abp' }}>
      <JsonLd data={structuredData} />
      <Hero />
      <Story />
      <Purpose />
      <Values />
      <Leadership />
      <Management />
      <Offices />
      <Faqs />
      <Regulatory />
      <AboutTabsBehavior />
    </PageShell>
  );
}
