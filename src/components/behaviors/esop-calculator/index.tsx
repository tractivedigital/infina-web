'use client';

import { useEffect } from 'react';
import { initEsopCalculator } from './init';

/** Enhances the server-rendered ESOP funding calculator with live results and Excel export. */
export function EsopCalculatorBehavior() {
  useEffect(() => initEsopCalculator(), []);
  return null;
}
