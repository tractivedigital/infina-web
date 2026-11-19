import '@/styles/pages/blog-las-guide.css';
import { JsonLd } from '@/components/seo/JsonLd';
import { PageShell } from '@/components/layout/PageShell';
import { FaqAccordionBehavior } from '@/components/behaviors/faq';
import { ArticleBehavior } from '@/components/behaviors/article';
import { structuredData } from './structured-data';
import { Article } from './sections/Article';
import { More } from '@/components/sections/More';
import { Next } from '@/components/sections/Next';

export function BlogLasGuidePage() {
  return (
    <PageShell page="blog-las-guide" main={{ id: 'top', className: 'home' }}>
      <JsonLd data={structuredData} />
      <Article />
      <More />
      <Next />
      <ArticleBehavior />
      <FaqAccordionBehavior />
    </PageShell>
  );
}
