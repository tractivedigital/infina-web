import { formatRupees, parseNumber } from '@/lib/calculators/format';
import { esopBreakdown, type EsopBreakdown } from '@/lib/calculators/esop-breakdown';

const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;
const round2 = (n: number) => Math.round(n * 100) / 100;

/** Counts a value up/down to its new figure (400ms ease-out), as the original page did. */
function setAnimated(el: HTMLElement, next: number) {
  const prev = parseFloat(el.dataset.raw ?? '0');
  el.dataset.raw = String(next);
  const start = performance.now();
  const duration = 400;
  const step = (t: number) => {
    const p = Math.min((t - start) / duration, 1);
    el.textContent = formatRupees(prev + (next - prev) * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

async function exportToExcel(r: EsopBreakdown) {
  const XLSX = await import('xlsx');
  const rows: (string | number)[][] = [
    ['Infina ESOP Funding Calculator'],
    [],
    ['Inputs'],
    ['Current Market Price (CMP)', r.cmp],
    ['Exercise Price', r.ex],
    ['Exercise Quantity', r.qty],
    ['Loan Tenure (days)', r.hold],
    ['Tax Rate', `${r.taxPct}%`],
    [],
    ['Cost Breakup'],
    ['A. Exercise Cost (Exercise Price × Qty)', round2(r.A)],
    ['B. Perquisite Tax ((CMP − EP) × Qty × Tax Slab)', round2(r.B)],
    ['C. Total Payable to Employer (A + B)', round2(r.C)],
    ['D. Infina Funding (50% of CMP × Qty, capped at C)', round2(r.D)],
    ['E. Employee Contribution (C − D)', round2(r.E)],
    [],
    ['Interest Cost Breakup'],
    ['Estimated Interest (tiered slab basis)', round2(r.interest)],
    ['Processing Fees (0.25% × Infina Funding + 18% GST)', round2(r.processing)],
    ['Documentation Charges (flat, incl. GST)', round2(r.documentation)],
    ['Estimated Cost of Funding', round2(r.netCost)],
  ];
  const ws = XLSX.utils.aoa_to_sheet(rows);
  ws['!cols'] = [{ wch: 56 }, { wch: 16 }];
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'ESOP Calculation');
  XLSX.writeFile(wb, 'ESOP-Funding-Calculation.xlsx');
}

/** Wires the standalone ESOP funding calculator. Returns a cleanup function. */
export function initEsopCalculator(): () => void {
  const ctrl = new AbortController();
  const { signal } = ctrl;
  let last: EsopBreakdown | null = null;

  const calc = () => {
    const taxPct = parseFloat($<HTMLInputElement>('tax').value) || 30;
    const hold = parseInt($<HTMLInputElement>('hold').value, 10) || 0;
    const r = esopBreakdown({
      cmp: parseNumber($<HTMLInputElement>('cmp').value),
      ex: parseNumber($<HTMLInputElement>('ex').value),
      qty: parseNumber($<HTMLInputElement>('qty').value),
      taxPct,
      hold,
    });
    if (document.activeElement !== $('holdNum')) $<HTMLInputElement>('holdNum').value = String(hold);
    if (document.activeElement !== $('taxNum')) $<HTMLInputElement>('taxNum').value = String(taxPct);
    $('tenure-lbl').textContent = String(hold);
    $('tenure-lbl-2').textContent = String(hold);
    (['s1', 's2', 's3', 's4'] as const).forEach((id) => $(id).classList.toggle('active', r.activeSlabIds.includes(id)));
    $('slab-body').innerHTML = r.slabs
      .map(
        (s) =>
          `<tr class="active"><td>${s.label}</td><td>${(s.rate * 100).toFixed(2)}%</td><td>${s.days}</td><td>${formatRupees(s.interest)}</td></tr>`,
      )
      .join('');
    setAnimated($('o-proc'), r.processing);
    (['a', 'b', 'c', 'd', 'e'] as const).forEach((k, i) => setAnimated($(`o-${k}`), [r.A, r.B, r.C, r.D, r.E][i]));
    setAnimated($('o-int'), r.interest);
    setAnimated($('o-net'), r.netCost);
    $('o-doc').textContent = formatRupees(r.documentation);
    last = r;
  };

  ['cmp', 'ex', 'qty', 'hold', 'tax'].forEach((id) => {
    $(id).addEventListener('input', calc, { signal });
    $(id).addEventListener('change', calc, { signal });
  });

  const linkNumBox = (numId: string, sliderId: string) => {
    const num = $<HTMLInputElement>(numId);
    const slider = $<HTMLInputElement>(sliderId);
    num.addEventListener(
      'input',
      () => {
        const v = parseFloat(num.value);
        if (Number.isNaN(v)) return;
        slider.value = String(Math.min(Math.max(v, parseFloat(slider.min)), parseFloat(slider.max)));
        calc();
      },
      { signal },
    );
    num.addEventListener(
      'blur',
      () => {
        num.value = slider.value;
      },
      { signal },
    );
  };
  linkNumBox('holdNum', 'hold');
  linkNumBox('taxNum', 'tax');

  $('export-btn').addEventListener(
    'click',
    () => {
      if (last) void exportToExcel(last);
    },
    { signal },
  );
  document.querySelector<HTMLButtonElement>('#esopcalc .cta:not(.ghost)')?.addEventListener(
    'click',
    () => {
      const url = new URL('/esop-financing#heroform', location.href);
      url.searchParams.set('source', 'esop-calculator');
      location.href = url.toString();
    },
    { signal },
  );
  calc();
  return () => ctrl.abort();
}
