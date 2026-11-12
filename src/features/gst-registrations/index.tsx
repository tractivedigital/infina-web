import '@/styles/pages/gst.css';
import { JsonLd } from '@/components/seo/JsonLd';
import { PageShell } from '@/components/layout/PageShell';
import { structuredData } from './structured-data';
import { Intro } from './sections/Intro';
import { Content } from './sections/Content';

export function GstPage() {
  return (
    <PageShell page="gst" review main={{ id: 'top', className: 'home' }}>
      <JsonLd data={structuredData} />
      <Intro />
      <Content />
    </PageShell>
  );
}
