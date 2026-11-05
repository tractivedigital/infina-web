import '@/styles/pages/blog-lap-how.css';
import { JsonLd } from '@/components/seo/JsonLd';
import { PageShell } from '@/components/layout/PageShell';
import { ArticleBehavior } from '@/components/behaviors/article';
import { structuredData } from './structured-data';
import { Article } from './sections/Article';
import { More } from './sections/More';
import { Next } from '@/components/sections/Next';

export function BlogLapHowPage() {
  return (
    <PageShell page="blog-lap-how" review main={{ id: 'top', className: 'home' }}>
      <JsonLd data={structuredData} />
      <Article />
      <More />
      <Next />
      <ArticleBehavior />
    </PageShell>
  );
}
