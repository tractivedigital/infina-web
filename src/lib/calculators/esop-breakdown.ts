/** Detailed ESOP funding breakup used by the standalone ESOP calculator page. */

export interface EsopInputs {
  cmp: number;
  ex: number;
  qty: number;
  taxPct: number;
  hold: number;
}

export interface EsopSlabRow {
  id: string;
  label: string;
  rate: number;
  days: number;
  interest: number;
}

export interface EsopBreakdown extends EsopInputs {
  /** A. exercise cost */ A: number;
  /** B. perquisite tax */ B: number;
  /** C. total payable to employer */ C: number;
  /** D. Infina funding */ D: number;
  /** E. employee contribution */ E: number;
  documentation: number;
  processing: number;
  interest: number;
  netCost: number;
  slabs: EsopSlabRow[];
  /** Slabs touched by the chosen tenure (for highlighting). */
  activeSlabIds: string[];
}

/** Flat documentation charge: ₹999 + 18% GST. */
export const ESOP_DOCUMENTATION_CHARGE = 1179;

const SLABS = [
  { id: 's1', bucket: 30, rate: 0.085, label: '0–30 days' },
  { id: 's2', bucket: 60, rate: 0.09, label: '31–90 days' },
  { id: 's3', bucket: 90, rate: 0.095, label: '91–180 days' },
  { id: 's4', bucket: 185, rate: 0.105, label: '181–365 days' },
] as const;

export function esopBreakdown({ cmp, ex, qty, taxPct, hold }: EsopInputs): EsopBreakdown {
  const A = ex * qty;
  const B = Math.max(cmp - ex, 0) * qty * (taxPct / 100);
  const C = A + B;
  const D = Math.min(cmp * qty * 0.5, C);
  const E = Math.max(C - D, 0);
  const processing = D * 0.0025 * 1.18;

  let remaining = hold;
  let interest = 0;
  const slabs: EsopSlabRow[] = [];
  const activeSlabIds: string[] = [];
  for (const s of SLABS) {
    const used = Math.min(remaining, s.bucket);
    if (used > 0) {
      const amount = (D * s.rate * used) / 365;
      interest += amount;
      slabs.push({ id: s.id, label: s.label, rate: s.rate, days: used, interest: amount });
      activeSlabIds.push(s.id);
    }
    remaining = Math.max(remaining - used, 0);
  }
  return {
    cmp,
    ex,
    qty,
    taxPct,
    hold,
    A,
    B,
    C,
    D,
    E,
    documentation: ESOP_DOCUMENTATION_CHARGE,
    processing,
    interest,
    netCost: interest + processing + ESOP_DOCUMENTATION_CHARGE,
    slabs,
    activeSlabIds,
  };
}
