'use client';

import { useEffect } from 'react';

/** Previous/next buttons and dot indicators for the "securities you can pledge" scroller. */
export function PledgeCarouselBehavior() {
  useEffect(() => {
    const track = document.getElementById('paTrack');
    if (!track) return;
    const ctrl = new AbortController();
    const { signal } = ctrl;
    const dots = [...document.querySelectorAll<HTMLElement>('#paDots span')];
    const cards = [...track.children] as HTMLElement[];
    const offset = (c: HTMLElement) => c.offsetLeft - track.offsetLeft - 16;
    const current = () => {
      let best = 0;
      let min = Infinity;
      cards.forEach((c, i) => {
        const d = Math.abs(offset(c) - track.scrollLeft);
        if (d < min) {
          min = d;
          best = i;
        }
      });
      return best;
    };
    const go = (i: number) =>
      track.scrollTo({ left: offset(cards[Math.max(0, Math.min(cards.length - 1, i))]), behavior: 'smooth' });
    track.addEventListener(
      'scroll',
      () => {
        const n = current();
        dots.forEach((d, i) => d.classList.toggle('on', i === n));
      },
      { passive: true, signal },
    );
    document.getElementById('paPrev')?.addEventListener('click', () => go(current() - 1), { signal });
    document.getElementById('paNext')?.addEventListener('click', () => go(current() + 1), { signal });
    return () => ctrl.abort();
  }, []);
  return null;
}
