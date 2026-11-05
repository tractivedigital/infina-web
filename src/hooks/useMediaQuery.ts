'use client';

import { useSyncExternalStore } from 'react';

/** Subscribes to a CSS media query. Returns `false` during SSR and the first hydration pass. */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (notify) => {
      const mq = window.matchMedia(query);
      mq.addEventListener('change', notify);
      return () => mq.removeEventListener('change', notify);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}
