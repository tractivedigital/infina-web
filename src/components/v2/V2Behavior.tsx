'use client';

import { useEffect } from 'react';
import { BASE_PATH } from '@/lib/base-path';
import { submitLead } from '@/lib/leads';
import { validateLead } from '@/lib/validation';
import type { LeadResult, PageScript, SubmitLead } from './sandbox';

export type V2PageKey = 'home' | 'las' | 'esop' | 'lap' | 'cre';

/** One lazy chunk per page: the interaction script is only downloaded by the page that uses it. */
const scripts: Record<V2PageKey, () => Promise<{ default: PageScript }>> = {
  home: () => import('./scripts/home'),
  las: () => import('./scripts/las'),
  esop: () => import('./scripts/esop'),
  lap: () => import('./scripts/lap'),
  cre: () => import('./scripts/cre'),
};

/**
 * Skip the 3D background on devices with data saver on or little memory. The pages already have a plain gradient
 * fallback (`no-webgl`) and every control still works without it. Reduced motion is handled inside the page
 * scripts: they draw a still frame and jump straight to each end state.
 */
function wantsLightweight(): boolean {
  const nav = navigator as Navigator & { connection?: { saveData?: boolean }; deviceMemory?: number };
  return nav.connection?.saveData === true || (nav.deviceMemory !== undefined && nav.deviceMemory <= 2);
}

const submit: SubmitLead = async ({ name, mobile, interest, website }): Promise<LeadResult> => {
  const lead = {
    name,
    mobile,
    interest,
    consent: true,
    source: window.location.pathname.replace(BASE_PATH, '') || '/',
    website: website ?? '',
  };
  if (validateLead(lead).mobile) return { ok: false, error: 'Enter a valid 10-digit mobile number.' };
  try {
    await submitLead(lead);
    return { ok: true };
  } catch {
    return { ok: false, error: 'Something went wrong. Please try again.' };
  }
};

/**
 * Starts the page's interactions (scroll animations, calculators, 3D background, forms) after the server-rendered
 * markup has hydrated. Renders nothing. Stops everything when the visitor leaves the page.
 */
export function V2Behavior({ page }: { page: V2PageKey }) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(`[data-page="v2-${page}"]`);
    if (!root) return;
    let cancelled = false;
    let dispose: (() => void) | undefined;

    (async () => {
      const [{ runInSandbox }, mod, THREE] = await Promise.all([
        import('./sandbox'),
        scripts[page](),
        wantsLightweight() ? Promise.resolve(undefined) : import('three'),
      ]);
      if (cancelled) return;
      dispose = runInSandbox(root, THREE, mod.default, submit);
    })().catch((error) => console.error('[v2] page script failed:', error));

    return () => {
      cancelled = true;
      dispose?.();
    };
  }, [page]);

  return null;
}
