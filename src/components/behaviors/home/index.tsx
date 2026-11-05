'use client';

import { useEffect } from 'react';
import { SERVICES } from '@/features/home/services-data';

/** Home page: services picker (tabs + detail panel) and the hero artwork scaler. */
export function HomeBehavior() {
  useEffect(() => {
    const ctrl = new AbortController();
    const { signal } = ctrl;

    // ---- services picker ----
    const panel = document.getElementById('obfg');
    const backgrounds = [...document.querySelectorAll<HTMLElement>('.ob-bg')];
    const tabs = [...document.querySelectorAll<HTMLElement>('.ob-tab')];
    const pick = (i: number, focus = false) => {
      const s = SERVICES[i];
      tabs.forEach((t, j) => {
        t.setAttribute('aria-selected', String(j === i));
        t.tabIndex = j === i ? 0 : -1;
      });
      backgrounds.forEach((g, j) => g.classList.toggle('on', j === i));
      if (panel) {
        panel.innerHTML =
          `<span class="ob-tile">${s.iconSvg}<i class="dot"></i></span><h3>${s.title}</h3><p>${s.description}</p>` +
          '<a class="btn out-w" href="#">Learn more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>';
      }
      if (focus) tabs[i].focus();
    };
    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => pick(i), { signal });
      tab.addEventListener(
        'mouseenter',
        () => {
          if (matchMedia('(hover:hover)').matches) pick(i);
        },
        { signal },
      );
      tab.addEventListener(
        'keydown',
        (e) => {
          let j: number | null = null;
          if (e.key === 'ArrowDown' || e.key === 'ArrowRight') j = (i + 1) % tabs.length;
          if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') j = (i + tabs.length - 1) % tabs.length;
          if (e.key === 'Home') j = 0;
          if (e.key === 'End') j = tabs.length - 1;
          if (j !== null) {
            e.preventDefault();
            pick(j, true);
          }
        },
        { signal },
      );
    });
    pick(0);

    // ---- hero art scaling ----
    const hero = document.getElementById('hero');
    const stage = document.getElementById('artStage');
    let observer: ResizeObserver | undefined;
    if (hero && stage) {
      const fit = () => {
        const w = hero.clientWidth;
        const h = hero.clientHeight;
        const phone = w < 960;
        const scale = phone ? Math.max(w / 1600, (h * 0.62) / 600) : Math.max(w / 1600, h / 600);
        stage.style.transform = `scale(${scale})`;
        stage.style.top = `${phone ? h - 600 * scale : 0}px`;
      };
      fit();
      window.addEventListener('resize', fit, { signal });
      observer = new ResizeObserver(fit);
      observer.observe(hero);
    }
    return () => {
      ctrl.abort();
      observer?.disconnect();
    };
  }, []);
  return null;
}
