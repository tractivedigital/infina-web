'use client';

import { useEffect, useState } from 'react';
import { ArrowRightIcon } from '@/components/icons';

export interface StickyCtaProps {
  href: string;
  label: string;
}

/**
 * Eligibility bar pinned to the bottom on phones. It appears once the hero form has scrolled
 * out of view and hides again when the footer is on screen.
 */
export function StickyCta({ href, label }: StickyCtaProps) {
  const [pastForm, setPastForm] = useState(false);
  const [atFooter, setAtFooter] = useState(false);

  useEffect(() => {
    const form = document.getElementById('heroform');
    const footer = document.querySelector('footer');
    if (!('IntersectionObserver' in window)) return;
    const observers: IntersectionObserver[] = [];
    if (form) {
      const o = new IntersectionObserver(([e]) => setPastForm(!e.isIntersecting && e.boundingClientRect.top < 0));
      o.observe(form);
      observers.push(o);
    }
    if (footer) {
      const o = new IntersectionObserver(([e]) => setAtFooter(e.isIntersecting));
      o.observe(footer);
      observers.push(o);
    }
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className={`sb${pastForm && !atFooter ? ' on' : ''}`} id="sb">
      <a className="btn" href={href}>
        {label} <ArrowRightIcon />
      </a>
    </div>
  );
}
