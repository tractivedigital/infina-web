import '@/styles/pages/blogs.css';
import { JsonLd } from '@/components/seo/JsonLd';
import { PageShell } from '@/components/layout/PageShell';
import { BlogFilterBehavior } from '@/components/behaviors/blog-filter';
import { structuredData } from './structured-data';
import { Hero } from './sections/Hero';
import { Articles } from './sections/Articles';
import { Topics } from './sections/Topics';
import { MostRead } from './sections/MostRead';
import { Next } from './sections/Next';

export function BlogsPage() {
  return (
    <PageShell page="blogs" review main={{ id: 'top', className: 'home' }}>
      <JsonLd data={structuredData} />
      <Hero />
      <Articles />
      <Topics />
      <MostRead />
      <Next />
      <BlogFilterBehavior />
    </PageShell>
  );
}
