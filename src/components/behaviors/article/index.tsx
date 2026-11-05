'use client';

import { useEffect } from 'react';

/** Blog article: the table of contents starts expanded on desktop screens (>= 960px). */
export function ArticleBehavior() {
  useEffect(() => {
    const toc = document.getElementById('toc') as HTMLDetailsElement | null;
    if (toc && window.matchMedia('(min-width:960px)').matches) toc.open = true;
  }, []);
  return null;
}
