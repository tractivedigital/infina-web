'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState, type PointerEvent } from 'react';
import { banners, type BannerPage } from '@/config/banners';
import { BannerArt } from './BannerArt';
import './banner-carousel.css';

const INTERVAL_MS = 6000;
const SWIPE_PX = 40;

/**
 * Auto-advancing banner carousel.
 * - Advances every 6s; pauses on hover, keyboard focus, when the tab is hidden or the carousel is off-screen.
 * - A visible Pause/Play button (WCAG 2.2.2), previous/next buttons, slide dots and swipe on touch screens.
 * - Honors `prefers-reduced-motion` by switching slides instantly instead of sliding (it still advances, and the
 *   Pause button stays available).
 * - Every slide is rendered on the server, so the content is crawlable and readable without JavaScript.
 */
export function BannerCarousel({ page }: { page: BannerPage }) {
  const { label, slides } = banners[page];
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [held, setHeld] = useState(false);
  const [visible, setVisible] = useState(true);
  const [tabVisible, setTabVisible] = useState(true);
  const root = useRef<HTMLElement>(null);
  const startX = useRef<number | null>(null);
  const count = slides.length;

  const go = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);

  useEffect(() => {
    const onVisibility = () => setTabVisible(document.visibilityState === 'visible');
    document.addEventListener('visibilitychange', onVisibility);
    const el = root.current;
    const io =
      el && 'IntersectionObserver' in window
        ? new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.25 })
        : null;
    if (el && io) io.observe(el);
    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      io?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!playing || held || !visible || !tabVisible) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [playing, held, visible, tabVisible, count, index]);

  const onPointerDown = (e: PointerEvent) => {
    startX.current = e.clientX;
  };
  const onPointerUp = (e: PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > SWIPE_PX) go(index + (dx < 0 ? 1 : -1));
  };

  return (
    <div className="wrapx bnr-wrap">
      <section
        ref={root}
        className="bnr"
        aria-roledescription="carousel"
        aria-label={label}
        onMouseEnter={() => setHeld(true)}
        onMouseLeave={() => setHeld(false)}
        onFocus={() => setHeld(true)}
        onBlur={() => setHeld(false)}
      >
        <div
          className="bnr-viewport"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => (startX.current = null)}
        >
          <div
            className="bnr-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
            aria-live={playing && !held ? 'off' : 'polite'}
          >
            {slides.map((s, i) => (
              <div
                key={s.title}
                className="bnr-slide"
                data-tone={s.tone}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}`}
                inert={i !== index}
              >
                <div className="bnr-copy">
                  <p className="bnr-eyebrow">{s.eyebrow}</p>
                  <p className="bnr-title">{s.title}</p>
                  <p className="bnr-text">{s.text}</p>
                  <Link className="bnr-cta" href={s.cta.href}>
                    {s.cta.label}
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
                </div>
                <BannerArt name={s.art} className="bnr-art" />
              </div>
            ))}
          </div>
        </div>
        <div className="bnr-ctrl">
          <button
            type="button"
            className="bnr-btn"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? 'Pause automatic slide show' : 'Start automatic slide show'}
          >
            {playing ? (
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5l11 7-11 7z" />
              </svg>
            )}
          </button>
          <div className="bnr-dots">
            {slides.map((s, i) => (
              <button
                key={s.title}
                type="button"
                className="bnr-dot"
                aria-label={`Go to slide ${i + 1}: ${s.eyebrow}`}
                aria-current={i === index ? 'true' : undefined}
                onClick={() => go(i)}
              />
            ))}
          </div>
          <div className="bnr-arrows">
            <button type="button" className="bnr-btn" onClick={() => go(index - 1)} aria-label="Previous slide">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            <button type="button" className="bnr-btn" onClick={() => go(index + 1)} aria-label="Next slide">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
