'use client';

import { useEffect } from 'react';

/**
 * FAQ accordion: every question starts closed and opening one closes the others.
 * Works on the native <details> elements inside the section with id="faqs", so the answers stay readable
 * (and crawlable) when JavaScript is unavailable.
 */
export function FaqAccordionBehavior() {
  useEffect(() => {
    const scope = document.getElementById('faqs');
    if (!scope) return;
    const ctrl = new AbortController();
    const items = [...scope.querySelectorAll<HTMLDetailsElement>('details')];
    items.forEach((item) =>
      item.addEventListener(
        'toggle',
        () => {
          if (!item.open) return;
          items.forEach((other) => {
            if (other !== item) other.open = false;
          });
        },
        { signal: ctrl.signal },
      ),
    );
    return () => ctrl.abort();
  }, []);
  return null;
}
