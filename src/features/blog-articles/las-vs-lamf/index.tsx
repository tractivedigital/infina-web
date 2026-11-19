import '@/styles/pages/blog-las-vs-lamf.css';
import { JsonLd } from '@/components/seo/JsonLd';
import { PageShell } from '@/components/layout/PageShell';
import { FaqAccordionBehavior } from '@/components/behaviors/faq';
import { ArticleBehavior } from '@/components/behaviors/article';
import { structuredData } from './structured-data';
import { Article } from './sections/Article';
import { More } from './sections/More';
import { Next } from '@/components/sections/Next';

export function BlogLasVsLamfPage() {
  return (
    <PageShell page="blog-las-vs-lamf" main={{ id: 'top', className: 'home' }}>
      <JsonLd data={structuredData} />
      <Article />
      <More />
      <Next />
      <ArticleBehavior />
      <FaqAccordionBehavior />
    </PageShell>
  );
}
