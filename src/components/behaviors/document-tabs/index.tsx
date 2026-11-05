'use client';

import { useEffect } from 'react';

/** "Documents required": tabs on desktop and a select on phones, both driving the same panels. */
export function DocumentTabsBehavior() {
  useEffect(() => {
    const group = document.getElementById('docs');
    if (!group) return;
    const ctrl = new AbortController();
    const { signal } = ctrl;
    const tabs = [...group.querySelectorAll<HTMLElement>('[role=tab]')];
    const panels = [...group.querySelectorAll<HTMLElement>('[role=tabpanel]')];
    const select = group.querySelector('select');
    const show = (i: number) => {
      tabs.forEach((t, j) => {
        t.setAttribute('aria-selected', String(j === i));
        t.tabIndex = j === i ? 0 : -1;
      });
      panels.forEach((p, j) => {
        p.hidden = j !== i;
      });
      if (select) select.value = String(i);
    };
    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => show(i), { signal });
      tab.addEventListener(
        'keydown',
        (e) => {
          let n: number | null = null;
          if (e.key === 'ArrowRight') n = (i + 1) % tabs.length;
          if (e.key === 'ArrowLeft') n = (i + tabs.length - 1) % tabs.length;
          if (e.key === 'Home') n = 0;
          if (e.key === 'End') n = tabs.length - 1;
          if (n !== null) {
            e.preventDefault();
            show(n);
            tabs[n].focus();
          }
        },
        { signal },
      );
    });
    select?.addEventListener('change', () => show(+select.value), { signal });
    return () => ctrl.abort();
  }, []);
  return null;
}
