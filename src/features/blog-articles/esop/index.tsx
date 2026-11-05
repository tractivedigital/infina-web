import '@/styles/pages/blog-esop.css';
import { JsonLd } from '@/components/seo/JsonLd';
import { PageShell } from '@/components/layout/PageShell';
import { ArticleBehavior } from '@/components/behaviors/article';
import { structuredData } from './structured-data';
import { Article } from './sections/Article';
import { More } from './sections/More';
import { Next } from '@/components/sections/Next';

export function BlogEsopPage() {
  return (
    <PageShell page="blog-esop" review main={{ id: 'top', className: 'home' }}>
      <JsonLd data={structuredData} />
      <Article />
      <More />
      <Next />
      <ArticleBehavior />
    </PageShell>
  );
}
