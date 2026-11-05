'use client';

import { useEffect } from 'react';

/** Scrolls a tab into the horizontal centre of its scroller (phone layouts). */
function centreInScroller(el: HTMLElement) {
  let p = el.parentElement;
  while (p && p !== document.body && p.scrollWidth <= p.clientWidth + 1) p = p.parentElement;
  if (p && p !== document.body) {
    const first = p.firstElementChild as HTMLElement | null;
    p.scrollTo({
      left: el.offsetLeft - (p.clientWidth - el.offsetWidth) / 2 - (first?.offsetLeft ?? 0) + (first?.offsetLeft ?? 0),
      behavior: 'auto',
    });
  }
}

/** Binds a roving-tabindex tablist; `onPick` lets callers add side effects (e.g. highlight spokes). */
function bindTablist(tabs: HTMLElement[], horizontal: boolean, signal: AbortSignal, onPick?: (i: number) => void) {
  const pick = (i: number, focus: boolean) => {
    tabs.forEach((t, k) => {
      const on = k === i;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(t.getAttribute('aria-controls') ?? '');
      if (panel) panel.hidden = !on;
    });
    onPick?.(i);
    if (focus) tabs[i].focus();
    if (window.innerWidth <= 960) centreInScroller(tabs[i]);
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => pick(i, false), { signal });
    tab.addEventListener(
      'keydown',
      (e) => {
        const n = tabs.length;
        let j: number | null = null;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') j = (i + 1) % n;
        else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') j = (i - 1 + n) % n;
        else if (e.key === 'Home') j = 0;
        else if (e.key === 'End') j = n - 1;
        if (j !== null) {
          e.preventDefault();
          pick(j, true);
        }
      },
      { signal },
    );
  });
  void horizontal;
  return pick;
}

/** About page: board/management tabs and the "hub" of leadership nodes. */
export function AboutTabsBehavior() {
  useEffect(() => {
    const ctrl = new AbortController();
    const { signal } = ctrl;
    bindTablist([...document.querySelectorAll<HTMLElement>('.r-tab')], false, signal);
    const spokes = [...document.querySelectorAll<SVGLineElement>('.h-spokes line')];
    const pickNode = bindTablist([...document.querySelectorAll<HTMLElement>('.h-node')], true, signal, (i) =>
      spokes.forEach((l) => l.classList.toggle('is-on', Number(l.getAttribute('data-k')) === i)),
    );
    pickNode(0, false);
    return () => ctrl.abort();
  }, []);
  return null;
}
