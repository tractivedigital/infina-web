'use client';

import { useEffect } from 'react';

const TOPICS = ['las', 'lap', 'esop', 'cre'];

/** Blog index: topic chips filter the article cards, the "latest" feature and the result count. */
export function BlogFilterBehavior() {
  useEffect(() => {
    const ctrl = new AbortController();
    const { signal } = ctrl;
    const chips = [...document.querySelectorAll<HTMLElement>('.bl-chip')];
    const cards = [...document.querySelectorAll<HTMLElement>('.bl-card')];
    const feature = document.getElementById('bl-feat');
    const count = document.getElementById('bl-count');

    const apply = (filter: string, updateUrl: boolean) => {
      chips.forEach((c) => c.setAttribute('aria-pressed', String(c.dataset.f === filter)));
      let shown = 0;
      cards.forEach((card) => {
        // On "all", the newest article (index 0) is shown as the feature instead of in the grid.
        const show = filter === 'all' ? card.dataset.i !== '0' : card.dataset.c === filter;
        card.hidden = !show;
        if (show) shown++;
      });
      if (feature) feature.hidden = filter !== 'all';
      const total = filter === 'all' ? shown + 1 : shown;
      if (count) count.textContent = `Showing ${total} ${total === 1 ? 'article' : 'articles'}`;
      if (updateUrl) {
        try {
          history.replaceState(null, '', filter === 'all' ? location.pathname + location.search : `#${filter}`);
        } catch {
          /* history unavailable: ignore */
        }
      }
    };

    chips.forEach((chip) => chip.addEventListener('click', () => apply(chip.dataset.f ?? 'all', true), { signal }));
    document
      .querySelectorAll<HTMLElement>('[data-go]')
      .forEach((a) => a.addEventListener('click', () => apply(a.dataset.go ?? 'all', true), { signal }));
    const hash = location.hash.slice(1);
    apply(TOPICS.includes(hash) ? hash : 'all', false);
    return () => ctrl.abort();
  }, []);
  return null;
}
