/** Formatting + parsing helpers shared by every calculator. */

const ONES = [
  '',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
  'Eleven',
  'Twelve',
  'Thirteen',
  'Fourteen',
  'Fifteen',
  'Sixteen',
  'Seventeen',
  'Eighteen',
  'Nineteen',
] as const;
const TENS = ['', '', 'Twenty', 'Thirty'] as const;

/** Indian-grouped rupee string, e.g. 2500000 -> "₹25,00,000". */
export const formatRupees = (n: number): string => '₹' + Math.round(n).toLocaleString('en-IN');

/** Indian-grouped plain number, e.g. 2500000 -> "25,00,000". */
export const formatIndian = (n: number): string => n.toLocaleString('en-IN');

/** Parses a user-typed value ("25,00,000", "₹ 10.5") into a number; invalid input becomes 0. */
export const parseNumber = (value: unknown): number => parseFloat(String(value).replace(/[^0-9.]/g, '')) || 0;

/** Spells numbers below 40 ("Twelve"), used for tenure captions. */
export const numberToWords = (n: number): string =>
  n < 20 ? ONES[n] : TENS[Math.floor(n / 10)] + (n % 10 ? ' ' + ONES[n % 10] : '');

/** Short amount caption: 2500000 -> "25 Lakh", 5e7 -> "5 Crore". */
export const amountInWords = (a: number): string => {
  if (a >= 1e7) return `${+(a / 1e7).toFixed(2)} Crore`;
  if (a >= 1e5) return `${+(a / 1e5).toFixed(2)} Lakh`;
  if (a >= 1e3) return `${+(a / 1e3).toFixed(1)} K`;
  return '';
};
