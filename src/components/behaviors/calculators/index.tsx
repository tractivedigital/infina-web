'use client';

import { useEffect } from 'react';
import { initCalculators, type CalculatorVariant } from './init';

/**
 * Progressive enhancement for the server-rendered calculator markup:
 * wires inputs, sliders, tabs and apply-links using the pure functions in `@/lib/calculators`.
 */
export function CalculatorBehavior({ variant = 'default' }: { variant?: CalculatorVariant }) {
  useEffect(() => initCalculators(variant), [variant]);
  return null;
}
