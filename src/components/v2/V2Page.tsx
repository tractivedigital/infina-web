import type { ReactNode } from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { V2Behavior, type V2PageKey } from './V2Behavior';

/** Self-hosted by Next.js at build time: no request to Google when a visitor opens the page. */
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-jakarta',
});

/**
 * Frame for the redesigned pages (home and the four product pages). The wrapper carries `data-page`, which scopes the
 * page stylesheet, and the font variable. Each page supplies its own header, sections and footer.
 */
export function V2Page({ page, children }: { page: V2PageKey; children: ReactNode }) {
  return (
    <div data-page={`v2-${page}`} className={jakarta.variable}>
      {/* Decorative layers: 3D background, scroll progress bar and pointer glow. */}
      <canvas id="stage" aria-hidden="true"></canvas>
      <div className="stage-fallback" aria-hidden="true"></div>
      <div className="progress" id="progress" aria-hidden="true"></div>
      <div className="cursor" id="cursor" aria-hidden="true"></div>
      {children}
      <V2Behavior page={page} />
    </div>
  );
}
