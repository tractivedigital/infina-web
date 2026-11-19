import '@/styles/pages/contact.css';
import { JsonLd } from '@/components/seo/JsonLd';
import { PageShell } from '@/components/layout/PageShell';
import { structuredData } from './structured-data';
import { Intro } from './sections/Intro';
import { Content } from './sections/Content';

export function ContactPage() {
  return (
    <PageShell page="contact" main={{ id: 'top', className: 'home' }}>
      <JsonLd data={structuredData} />
      <Intro />
      <Content />
    </PageShell>
  );
}
