import '@/styles/pages/blog-cre.css';
import { JsonLd } from '@/components/seo/JsonLd';
import { PageShell } from '@/components/layout/PageShell';
import { ArticleBehavior } from '@/components/behaviors/article';
import { structuredData } from './structured-data';
import { Article } from './sections/Article';
import { More } from '@/components/sections/More';
import { Next } from '@/components/sections/Next';

export function BlogCrePage() {
  return (
    <PageShell page="blog-cre" review main={{ id: 'top', className: 'home' }}>
      <JsonLd data={structuredData} />
      <Article />
      <More />
      <Next />
      <ArticleBehavior />
    </PageShell>
  );
}
