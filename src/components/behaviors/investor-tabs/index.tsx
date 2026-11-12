'use client';

import { useEffect } from 'react';

const HASH_TO_TAB: Record<string, number> = { '#financial-reporting': 0, '#policies': 1, '#statutory': 2 };

/** Investor relations: three tabs (arrow-key navigable) and per-panel group chips that filter the document lists. */
export function InvestorTabsBehavior() {
  useEffect(() => {
    const ctrl = new AbortController();
    const { signal } = ctrl;
    const tabs = [...document.querySelectorAll<HTMLElement>('.ir-t')];

    const select = (i: number) => {
      tabs.forEach((tab, k) => {
        tab.setAttribute('aria-selected', String(k === i));
        const panel = document.getElementById(`irp${k}`);
        if (panel) panel.hidden = k !== i;
      });
    };
    tabs.forEach((tab, k) => {
      tab.addEventListener('click', () => select(k), { signal });
      tab.addEventListener(
        'keydown',
        (e) => {
          const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
          if (!step) return;
          const j = (k + step + tabs.length) % tabs.length;
          select(j);
          tabs[j].focus();
          e.preventDefault();
        },
        { signal },
      );
    });

    document.querySelectorAll<HTMLElement>('.ir-c').forEach((chip) => {
      chip.addEventListener(
        'click',
        () => {
          const group = chip.getAttribute('data-g');
          const pane = chip.closest('[role=tabpanel]');
          if (!pane) return;
          pane
            .querySelectorAll<HTMLElement>('.ir-c')
            .forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
          pane.querySelectorAll<HTMLElement>('.ir-l').forEach((l) => {
            l.hidden = l.getAttribute('data-gl') !== group;
          });
        },
        { signal },
      );
    });

    const fromHash = () => {
      const i = HASH_TO_TAB[location.hash.toLowerCase()];
      if (i !== undefined) select(i);
    };
    fromHash();
    window.addEventListener('hashchange', fromHash, { signal });
    return () => ctrl.abort();
  }, []);
  return null;
}
