'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { heroSlides, type HeroPage } from '@/config/hero-slides';
import './hero-carousel.css';
import './hero-fold.css';

const INTERVAL_MS = 6000;

/**
 * The hero's text column as a slide show. Slide 1 is the page's original hero copy (passed as children, so it stays
 * server-rendered and is the only <h1>); three more slides follow it. The background artwork and the eligibility
 * form beside it never change. Slides sit in one grid cell, so the hero keeps a constant height.
 * Auto-advances every 6 s (0.6 s cross-fade); pauses while hovered or focused, in a hidden tab or off-screen.
 */
export function HeroCopyCarousel({ page, children }: { page: HeroPage; children: ReactNode }) {
  const extra = heroSlides[page];
  const count = extra.length + 1;
  const [index, setIndex] = useState(0);
  const [held, setHeld] = useState(false);
  const [visible, setVisible] = useState(true);
  const [tabVisible, setTabVisible] = useState(true);
  const root = useRef<HTMLDivElement>(null);

  const go = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);

  useEffect(() => {
    const onVisibility = () => setTabVisible(document.visibilityState === 'visible');
    document.addEventListener('visibilitychange', onVisibility);
    const el = root.current;
    const io =
      el && 'IntersectionObserver' in window
        ? new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.2 })
        : null;
    if (el && io) io.observe(el);
    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      io?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (held || !visible || !tabVisible) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [held, visible, tabVisible, count, index]);

  return (
    <div
      ref={root}
      className="hv-copy hs"
      role="group"
      aria-roledescription="carousel"
      aria-label="Highlights"
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={() => setHeld(false)}
    >
      <div className="hs-stack" aria-live={held ? 'polite' : 'off'}>
        <div
          className="hs-slide"
          data-active={index === 0}
          inert={index !== 0}
          role="group"
          aria-roledescription="slide"
          aria-label={`1 of ${count}`}
        >
          {children}
        </div>
        {extra.map((s, i) => (
          <div
            key={s.title}
            className="hs-slide"
            data-active={index === i + 1}
            inert={index !== i + 1}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 2} of ${count}`}
          >
            <h2 className="hs-title">{s.title}</h2>
            <p className="sub">{s.text}</p>
            <div className="hs-actions">
              {s.ctas.map((c) => (
                <Link key={c.href} className="hs-cta" href={c.href}>
                  {c.label}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="hs-ctrl">
        <div className="hs-dots">
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              type="button"
              className="hs-dot"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
