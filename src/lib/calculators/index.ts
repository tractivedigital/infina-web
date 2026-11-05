/**
 * Pure calculation functions for every Infina calculator. They have no DOM or React
 * dependencies so they can be unit-tested and reused by any UI.
 */
import { amountInWords, formatRupees as R, numberToWords } from './format';

export * from './format';

/** Keys a calculator panel can write into the DOM (`data-o`) and its captions (`data-w`). */
export interface CalculatorOutput {
  [key: string]: string | Record<string, string> | undefined;
  words?: Record<string, string>;
}
export type Values = Record<string, number>;

/** Loan against securities: interest-only servicing. */
export function lasInterest(v: Values): CalculatorOutput {
  const monthly = (v.amt * v.roi) / 1200;
  const totalInterest = monthly * v.ten;
  const span = v.ten % 12 === 0 ? `${v.ten / 12} ${v.ten === 12 ? 'Year' : 'Years'}` : `${v.ten} Months`;
  return {
    big: R(monthly),
    p: R(v.amt),
    ti: R(totalInterest),
    til: `Total Interest (${span})`,
    tp: R(v.amt + totalInterest),
    words: {
      amt: amountInWords(v.amt),
      ten: v.ten >= 1 && v.ten <= 36 ? numberToWords(Math.round(v.ten)) + (v.ten === 1 ? ' Month' : ' Months') : '',
    },
  };
}

/** Loan-to-value ceilings used by the LAS eligibility calculator. */
export const LAS_LTV = { shares: 0.5, equityFunds: 0.5, debtFunds: 0.85 } as const;

/** Maximum loan against a portfolio of shares, equity funds and debt funds. */
export const lasEligibleAmount = (v: Values): number =>
  v.sh * LAS_LTV.shares + v.eq * LAS_LTV.equityFunds + v.db * LAS_LTV.debtFunds;

export function lasEligibility(v: Values): CalculatorOutput {
  const a = v.sh * LAS_LTV.shares;
  const b = v.eq * LAS_LTV.equityFunds;
  const c = v.db * LAS_LTV.debtFunds;
  return {
    big: R(a + b + c),
    a: R(a),
    b: R(b),
    c: R(c),
    tv: R(v.sh + v.eq + v.db),
    words: { sh: amountInWords(v.sh), eq: amountInWords(v.eq), db: amountInWords(v.db) },
  };
}

/** ESOP funding: cost breakup and tiered interest. */
const ESOP_SLABS: ReadonlyArray<readonly [from: number, to: number, rate: number]> = [
  [0, 30, 0.085],
  [30, 90, 0.09],
  [90, 180, 0.095],
  [180, 365, 0.105],
];
export function esopFunding(v: Values): CalculatorOutput {
  const exerciseCost = v.ex * v.qty; // A
  const perquisiteTax = Math.max(0, v.cmp - v.ex) * v.qty * (v.tax / 100); // B
  const payable = exerciseCost + perquisiteTax; // C
  const funding = Math.min(0.5 * v.cmp * v.qty, payable); // D
  const contribution = payable - funding; // E
  let interest = 0;
  for (const [from, to, rate] of ESOP_SLABS)
    interest += (funding * rate * Math.max(0, Math.min(v.days, to) - from)) / 365;
  const cost = funding > 0 ? interest + funding * 0.0025 * 1.18 + 1179 : 0;
  return { big: R(funding), C: R(payable), E: R(contribution), cost: R(cost) };
}

/** Standard reducing-balance EMI. */
export function lapEmi(v: Values): CalculatorOutput {
  const r = v.roi / 1200;
  const n = v.ten;
  const emi = r > 0 ? (v.amt * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : v.amt / n;
  const totalInterest = emi * n - v.amt;
  const years = n / 12;
  return {
    big: R(emi),
    p: R(v.amt),
    ti: R(totalInterest),
    tp: R(v.amt + totalInterest),
    words: {
      amt: amountInWords(v.amt),
      ten: n >= 1 && Number.isInteger(years) ? `${years} ${years === 1 ? 'year' : 'years'}` : '',
    },
  };
}

/** Share of net monthly income that can service a loan against property. */
export const LAP_EMI_CAPACITY = 0.6;

/** Loan a given monthly income can support (present value of the affordable EMI). */
export const lapEligibleAmount = (v: Values): number => {
  const emi = LAP_EMI_CAPACITY * Math.max(0, v.inc - v.obl);
  const r = v.roi / 1200;
  return r > 0 ? (emi * (1 - Math.pow(1 + r, -v.ten))) / r : emi * v.ten;
};

export function lapEligibility(v: Values): CalculatorOutput {
  const emi = LAP_EMI_CAPACITY * Math.max(0, v.inc - v.obl);
  return {
    big: R(lapEligibleAmount(v)),
    emi: R(emi),
    words: {
      inc: amountInWords(v.inc),
      obl: amountInWords(v.obl),
      ten: v.ten % 12 === 0 && v.ten > 0 ? `${v.ten / 12} ${v.ten === 12 ? 'year' : 'years'}` : '',
    },
  };
}

export type CalculatorKind = 'las' | 'las-eligibility' | 'esop' | 'lap-emi' | 'lap-eligibility';

export const CALCULATORS: Record<CalculatorKind, (v: Values) => CalculatorOutput> = {
  las: lasInterest,
  'las-eligibility': lasEligibility,
  esop: esopFunding,
  'lap-emi': lapEmi,
  'lap-eligibility': lapEligibility,
};
