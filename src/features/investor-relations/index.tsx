import '@/styles/pages/investor-relations.css';
import { JsonLd } from '@/components/seo/JsonLd';
import { PageShell } from '@/components/layout/PageShell';
import { InvestorTabsBehavior } from '@/components/behaviors/investor-tabs';
import { structuredData } from './structured-data';
import { Intro } from './sections/Intro';
import { Content } from './sections/Content';

export function InvestorRelationsPage() {
  return (
    <PageShell page="investor-relations" main={{ id: 'top', className: 'home' }}>
      <JsonLd data={structuredData} />
      <Intro />
      <Content />
      <InvestorTabsBehavior />
    </PageShell>
  );
}
