'use client';

import { withBase } from '@/lib/base-path';
import { useEffect } from 'react';

const SUCCESS_TITLE = 'Application submitted successfully!';
const SUCCESS_MESSAGE =
  'Thank you for applying to become an Infina Channel Partner. Our Relationship Manager will contact you within 1–2 business days.';

/**
 * Channel partner page: submits the application form to /api/send-email.
 *
 * The page can also be embedded in a parent page (the original was an embedded widget); when it is, it keeps
 * posting its height / scroll / success messages to the parent. Opened directly, anchors scroll natively.
 */
export function PartnerFormBehavior() {
  useEffect(() => {
    const ctrl = new AbortController();
    const { signal } = ctrl;
    const embedded = window.parent !== window;
    const notify = (message: Record<string, unknown>) => window.parent.postMessage(message, '*');

    const form = document.querySelector<HTMLFormElement>('#partner-form');
    form?.addEventListener(
      'submit',
      async (e) => {
        e.preventDefault();
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }
        const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
        const label = button?.innerHTML ?? '';
        if (button) {
          button.disabled = true;
          button.innerHTML = 'Submitting...';
        }
        const value = (id: string) => (document.getElementById(id) as HTMLInputElement | HTMLSelectElement).value;
        const payload = {
          fullname: value('fullname').trim(),
          mobile: value('mobile').trim(),
          email: value('email').trim(),
          location: value('location').trim(),
          entity: value('entity'),
          product: value('product'),
          consent: (document.getElementById('consent') as HTMLInputElement).checked,
          website: (form.elements.namedItem('website') as HTMLInputElement | null)?.value ?? '',
        };
        try {
          const response = await fetch(withBase('/api/send-email'), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });
          const result: { error?: string } = await response.json().catch(() => ({}));
          if (!response.ok) throw new Error(result.error || 'Unable to submit the application.');
          form.reset();
          if (embedded) notify({ type: 'saathi-application-success', title: SUCCESS_TITLE, message: SUCCESS_MESSAGE });
          else alert(`${SUCCESS_TITLE}\n\n${SUCCESS_MESSAGE}`);
        } catch (error) {
          console.error('Application submission error:', error);
          alert('Sorry, we could not submit your application right now. Please try again.');
        } finally {
          if (button) {
            button.disabled = false;
            button.innerHTML = label;
          }
        }
      },
      { signal },
    );

    if (!embedded) return () => ctrl.abort();

    // Embedded mode: keep the parent frame informed (height, scroll requests).
    const sendHeight = () =>
      notify({
        type: 'saathi-height',
        height: Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight,
        ),
      });
    window.addEventListener('resize', sendHeight, { signal });
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(sendHeight) : null;
    observer?.observe(document.body);
    const timers = [0, 100, 500, 1000].map((ms) => window.setTimeout(sendHeight, ms));

    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
      link.addEventListener(
        'click',
        (event) => {
          const id = link.getAttribute('href');
          if (!id || id === '#') return;
          event.preventDefault();
          if (id === '#apply') {
            notify({ type: 'saathi-scroll-apply' });
            return;
          }
          const target = document.querySelector(id);
          if (!target) return;
          notify({ type: 'saathi-scroll', target: id, offset: target.getBoundingClientRect().top + window.scrollY });
        },
        { signal },
      );
    });
    return () => {
      ctrl.abort();
      observer?.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);
  return null;
}
