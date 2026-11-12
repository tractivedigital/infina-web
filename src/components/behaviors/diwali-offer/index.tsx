'use client';

import { useEffect } from 'react';

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'click_id', 'publisher_id'];
const REVEAL =
  '.blk,.fest-card,.apply-head,.apply-card,.plans .plan,.rows li,.dw-steps li,.how h2,.how .eyebrow,.dw-trust li';

type DataLayerWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };

/**
 * Diwali LAS offer page. Wires the apply links (UTM pass-through + tracking), the hero image placement on phones,
 * the pinned CTA, the lead form, the info modals, the portfolio slider and the scroll-reveal / counter animations.
 * Everything is additive: with JavaScript off the page renders fully and stays readable.
 */
export function DiwaliOfferBehavior() {
  useEffect(() => {
    const ctrl = new AbortController();
    const { signal } = ctrl;
    const w = window as DataLayerWindow;
    const wrapper = document.querySelector<HTMLElement>('[data-page="diwali-las"]');
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cleanups: Array<() => void> = [];
    const qs = new URLSearchParams(location.search);
    const push = (event: Record<string, unknown>) => {
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push(event);
    };

    // The page's CSS keys its reveal states off a `js` class (on <html> in the source document).
    wrapper?.classList.add('js');
    cleanups.push(() => wrapper?.classList.remove('js'));

    // Apply links: forward campaign parameters and report clicks.
    document.querySelectorAll<HTMLAnchorElement>('a[data-apply]').forEach((a) => {
      const base = a.getAttribute('href');
      if (!base) return;
      try {
        const url = new URL(base);
        UTM_KEYS.forEach((k) => {
          const v = qs.get(k);
          if (v) url.searchParams.set(k, v);
        });
        a.setAttribute('href', url.toString());
        cleanups.push(() => a.setAttribute('href', base));
      } catch {
        /* relative or invalid href: leave it as is */
      }
      a.addEventListener(
        'click',
        () => {
          push({
            event: 'Apply_Click',
            click_id: qs.get('click_id') || '',
            publisher_id: qs.get('publisher_id') || '',
            utm_campaign: qs.get('utm_campaign') || '',
          });
          w.gtag?.('event', 'Apply_Click', {
            click_id: qs.get('click_id') || '',
            publisher_id: qs.get('publisher_id') || '',
          });
        },
        { signal },
      );
    });

    // Hero image sits beside the copy on desktop and above it on phones.
    const mq = matchMedia('(max-width: 767px)');
    const himg = document.getElementById('himg');
    const hbody = document.getElementById('hbody');
    const oh = document.getElementById('oh');
    if (himg && hbody && oh) {
      const place = () =>
        mq.matches ? hbody.insertBefore(himg, hbody.firstChild) : oh.insertBefore(himg, oh.firstChild);
      place();
      mq.addEventListener('change', place, { signal });
      cleanups.push(() => oh.insertBefore(himg, oh.firstChild));
    }

    // Pinned CTA: always visible on phones; on larger screens it slides up once the hero button is out of view.
    const pin = document.getElementById('pin');
    const firstCta = document.querySelector('.hero-cta');
    if (pin && firstCta) {
      const check = () => {
        const r = firstCta.getBoundingClientRect();
        pin.classList.toggle('hide', r.bottom > 0 && r.top < window.innerHeight);
      };
      check();
      window.addEventListener('scroll', check, { passive: true, signal });
      window.addEventListener('resize', check, { signal });
    } else {
      pin?.classList.remove('hide');
    }

    // Lead form (the original transmits nothing yet: it validates, tracks and shows the thank-you state).
    const form = document.getElementById('leadForm') as HTMLFormElement | null;
    form?.addEventListener(
      'submit',
      (e) => {
        e.preventDefault();
        const err = document.getElementById('fErr');
        if (!form.checkValidity()) {
          if (err) err.hidden = false;
          form.reportValidity();
          return;
        }
        if (err) err.hidden = true;
        // TODO: send the lead to the Infina endpoint here (same placeholder as the source page).
        push({ event: 'Lead_Form_Submit' });
        form.hidden = true;
        const ok = document.getElementById('fOk');
        if (ok) ok.hidden = false;

        if (!reduceMotion) {
          const card = document.querySelector('.apply-card');
          for (let k = 0; card && k < 18; k++) {
            const s = document.createElement('span');
            s.className = 'burst';
            const a = (Math.PI * 2 * k) / 18;
            const d = 70 + Math.random() * 80;
            s.style.setProperty('--bx', `${Math.cos(a) * d}px`);
            s.style.setProperty('--by', `${Math.sin(a) * d}px`);
            card.appendChild(s);
            setTimeout(() => s.remove(), 1200);
          }
        }
      },
      { signal },
    );

    // Info modals.
    const closeModal = (m: HTMLElement) => {
      m.hidden = true;
    };
    document.querySelectorAll<HTMLElement>('[data-open]').forEach((b) =>
      b.addEventListener(
        'click',
        () => {
          const target = document.getElementById(b.dataset.open ?? '');
          if (target) target.hidden = false;
        },
        { signal },
      ),
    );
    document.querySelectorAll<HTMLElement>('.modal').forEach((m) =>
      m.addEventListener(
        'click',
        (e) => {
          const t = e.target as HTMLElement;
          if (t === m || t.hasAttribute('data-close')) closeModal(m);
        },
        { signal },
      ),
    );
    document.addEventListener(
      'keydown',
      (e) => {
        if (e.key === 'Escape') document.querySelectorAll<HTMLElement>('.modal').forEach(closeModal);
      },
      { signal },
    );

    // Portfolio slider: shows the pledged value and the indicative eligible limit (50%).
    const money = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
    const slider = document.getElementById('ps') as HTMLInputElement | null;
    slider?.addEventListener(
      'input',
      () => {
        const pv = document.getElementById('pv');
        const el = document.getElementById('el');
        if (pv) pv.textContent = money.format(Number(slider.value));
        if (el) el.textContent = money.format(Number(slider.value) * 0.5);
      },
      { signal },
    );

    // Scroll-reveal.
    const items = [...document.querySelectorAll<HTMLElement>(REVEAL)];
    items.forEach((el) => {
      el.classList.add('rv');
      const sibling = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.style.setProperty('--d', `${Math.min(sibling, 4) * 0.09}s`);
    });
    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('in'));
      return () => {
        ctrl.abort();
        cleanups.forEach((fn) => fn());
      };
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((x) => {
          if (x.isIntersecting) {
            x.target.classList.add('in');
            io.unobserve(x.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    items.forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    // Decorative sparks / embers.
    const decorate = (parent: Element | null, cls: string, n: number, style: (s: HTMLSpanElement) => void) => {
      if (!parent) return;
      const made: HTMLSpanElement[] = [];
      for (let k = 0; k < n; k++) {
        const s = document.createElement('span');
        s.className = cls;
        s.setAttribute('aria-hidden', 'true');
        style(s);
        parent.appendChild(s);
        made.push(s);
      }
      cleanups.push(() => made.forEach((s) => s.remove()));
    };
    decorate(himg, 'spark', 9, (s) => {
      s.style.left = `${8 + Math.random() * 84}%`;
      s.style.top = `${4 + Math.random() * 60}%`;
      s.style.animationDelay = `${Math.random() * 3.2}s`;
      s.style.animationDuration = `${2.4 + Math.random() * 2}s`;
    });
    decorate(document.querySelector('.fest-card'), 'ember', 14, (s) => {
      s.style.left = `${4 + Math.random() * 92}%`;
      s.style.animationDelay = `${Math.random() * 7}s`;
      s.style.animationDuration = `${5 + Math.random() * 4}s`;
      s.style.setProperty('--dx', `${Math.random() * 40 - 20}px`);
    });

    // Count-up for the headline figures.
    document.querySelectorAll<HTMLElement>('.oh-tile .val').forEach((v) => {
      const node = v.firstChild;
      if (!node || node.nodeType !== 3) return;
      const source = node.nodeValue ?? '';
      const m = source.match(/[\d.]+/);
      if (!m || m.index === undefined) return;
      const end = parseFloat(m[0]);
      const dec = (m[0].split('.')[1] || '').length;
      const pre = source.slice(0, m.index);
      const suf = source.slice(m.index + m[0].length);
      let t0: number | null = null;
      let raf = 0;
      const step = (ts: number) => {
        if (t0 === null) t0 = ts;
        const p = Math.min((ts - t0) / 1300, 1);
        node.nodeValue = pre + (end * (1 - Math.pow(1 - p, 3))).toFixed(dec) + suf;
        if (p < 1) raf = requestAnimationFrame(step);
      };
      node.nodeValue = pre + (0).toFixed(dec) + suf;
      const timer = setTimeout(() => (raf = requestAnimationFrame(step)), 500);
      cleanups.push(() => {
        clearTimeout(timer);
        cancelAnimationFrame(raf);
        node.nodeValue = source;
      });
    });

    // Step list: travelling lamp + numbers that count up when their row is revealed.
    const steps = document.querySelector('.dw-steps');
    if (steps) {
      const lamp = document.createElement('span');
      lamp.className = 'lamp';
      lamp.setAttribute('aria-hidden', 'true');
      steps.appendChild(lamp);
      cleanups.push(() => lamp.remove());
    }
    document.querySelectorAll<HTMLElement>('.rows li .dw-n').forEach((n) => {
      const original = n.textContent ?? '';
      const end = parseInt(original, 10);
      const li = n.closest('li');
      if (!li || Number.isNaN(end)) return;
      let done = false;
      n.textContent = '00';
      const observer = new MutationObserver(() => {
        if (!li.classList.contains('in') || done) return;
        done = true;
        let t0: number | null = null;
        const step = (ts: number) => {
          if (t0 === null) t0 = ts;
          const p = Math.min((ts - t0) / 800, 1);
          n.textContent = `0${Math.round(end * p)}`.slice(-2);
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
      observer.observe(li, { attributes: true, attributeFilter: ['class'] });
      cleanups.push(() => {
        observer.disconnect();
        n.textContent = original;
      });
    });

    return () => {
      ctrl.abort();
      cleanups.forEach((fn) => fn());
    };
  }, []);
  return null;
}
