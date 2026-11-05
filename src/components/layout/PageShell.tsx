import type { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { StickyCta, type StickyCtaProps } from './StickyCta';

interface PageShellProps {
  /** Key used to scope page-specific CSS (`[data-page="…"]`). */
  page: string;
  /** Marks pages that still carry "To confirm" review badges (`.review .cf`). */
  review?: boolean;
  main: { id: string; className?: string };
  stickyCta?: StickyCtaProps;
  children: ReactNode;
}

/** Common page frame: header, <main>, optional mobile sticky CTA and footer. */
export function PageShell({ page, review, main, stickyCta, children }: PageShellProps) {
  return (
    <div data-page={page} className={review ? 'review' : undefined}>
      <Header />
      <main id={main.id} className={main.className}>
        {children}
      </main>
      {stickyCta && <StickyCta {...stickyCta} />}
      <Footer />
    </div>
  );
}
