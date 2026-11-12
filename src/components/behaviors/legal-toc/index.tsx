'use client';

import { useEffect } from 'react';

/** Legal pages: the contents list starts open on desktop (>= 960px) and highlights the section being read. */
export function LegalTocBehavior() {
  useEffect(() => {
    const toc = document.getElementById('lg-toc') as HTMLDetailsElement | null;
    if (toc && window.matchMedia('(min-width:960px)').matches) toc.open = true;

    const links = [...document.querySelectorAll<HTMLAnchorElement>('.lg-toc a')];
    const headings = links
      .map((a) => document.getElementById((a.getAttribute('href') ?? '').slice(1)))
      .filter((h): h is HTMLElement => !!h);
    if (!('IntersectionObserver' in window) || headings.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          links.forEach((a) => a.classList.toggle('on', a.getAttribute('href') === `#${e.target.id}`));
        });
      },
      { rootMargin: '-15% 0px -75% 0px' },
    );
    headings.forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, []);
  return null;
}
