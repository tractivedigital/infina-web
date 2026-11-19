import '@/styles/pages/diwali-las.css';
import { JsonLd } from '@/components/seo/JsonLd';
import { Sprite } from './sections/Sprite';
import { PageShell } from '@/components/layout/PageShell';
import { DiwaliOfferBehavior } from '@/components/behaviors/diwali-offer';
import { structuredData } from './structured-data';
import { OhBand } from './sections/OhBand';
import { DwWrap } from './sections/DwWrap';
import { Blk } from './sections/Blk';
import { Fest } from './sections/Fest';
import { Blk2 } from './sections/Blk2';
import { How } from './sections/How';
import { Apply } from './sections/Apply';
import { Dis } from './sections/Dis';
import { Pin } from './sections/Pin';

export function DiwaliLasPage() {
  return (
    <PageShell page="diwali-las" afterHeader={<Sprite />} main={{ id: 'top', className: 'home cpg' }}>
      <JsonLd data={structuredData} />
      <OhBand />
      <DwWrap />
      <Blk />
      <Fest />
      <Blk2 />
      <How />
      <Apply />
      <Dis />
      <Pin />
      <DiwaliOfferBehavior />
    </PageShell>
  );
}
