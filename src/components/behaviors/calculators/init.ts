import {
  CALCULATORS,
  formatIndian,
  formatRupees,
  lapEligibleAmount,
  lasEligibleAmount,
  parseNumber,
  type CalculatorKind,
  type Values,
} from '@/lib/calculators';

export type CalculatorVariant = 'default' | 'las-calc' | 'lap-calc';

/** Inputs whose text box mirrors the slider value verbatim (no Indian grouping). */
const PLAIN_KEYS = ['days', 'ten', 'tax', 'roi'];

function kindFor(variant: CalculatorVariant, prod: string): CalculatorKind {
  if (prod === 'esop') return 'esop';
  if (prod === 'emi') return 'lap-emi';
  if (prod === 'elig') return variant === 'lap-calc' ? 'lap-eligibility' : 'las-eligibility';
  if (prod === 'lap') return 'lap-eligibility';
  return 'las';
}

const textInput = (scope: ParentNode, key: string) =>
  scope.querySelector<HTMLInputElement>(`input[type=text][data-k="${key}"]`);
const numberIn = (scope: ParentNode, key: string) => parseNumber(textInput(scope, key)?.value ?? 0);

function bindPanel(root: HTMLElement, variant: CalculatorVariant, signal: AbortSignal) {
  const kind = kindFor(variant, root.dataset.prod ?? '');
  const inputs = [...root.querySelectorAll<HTMLInputElement>('[data-k]')];
  const read = (): Values => {
    const v: Values = {};
    inputs.forEach((i) => {
      if (i.type !== 'range') v[i.dataset.k as string] = parseNumber(i.value);
    });
    return v;
  };
  const update = () => {
    const out = CALCULATORS[kind](read());
    root.querySelectorAll<HTMLElement>('[data-o]').forEach((el) => {
      const value = out[el.dataset.o as string];
      if (typeof value === 'string') el.textContent = value;
    });
    root.querySelectorAll<HTMLElement>('[data-w]').forEach((el) => {
      el.textContent = out.words?.[el.dataset.w as string] ?? '';
    });
  };
  inputs.forEach((input) => {
    const key = input.dataset.k as string;
    input.addEventListener(
      'input',
      () => {
        if (input.type === 'range') {
          const box = textInput(root, key);
          if (box) box.value = PLAIN_KEYS.includes(key) ? input.value : formatIndian(+input.value);
        } else {
          const slider = root.querySelector<HTMLInputElement>(`input[type=range][data-k="${key}"]`);
          if (slider) slider.value = String(parseNumber(input.value));
        }
        update();
      },
      { signal },
    );
    if (input.type === 'text') {
      input.addEventListener(
        'blur',
        () => {
          if (!PLAIN_KEYS.includes(key) && key !== 'qty') input.value = formatIndian(parseNumber(input.value));
        },
        { signal },
      );
    }
  });
  update();
}

function bindTabs(group: HTMLElement, signal: AbortSignal) {
  const tabs = [...group.querySelectorAll<HTMLElement>('[role=tab]')];
  const panels = [...group.querySelectorAll<HTMLElement>('[data-p]')];
  tabs.forEach((tab, i) => {
    tab.tabIndex = i ? -1 : 0;
    tab.addEventListener(
      'keydown',
      (e) => {
        let n: number | null = null;
        if (e.key === 'ArrowRight') n = (i + 1) % tabs.length;
        if (e.key === 'ArrowLeft') n = (i + tabs.length - 1) % tabs.length;
        if (e.key === 'Home') n = 0;
        if (e.key === 'End') n = tabs.length - 1;
        if (n !== null) {
          e.preventDefault();
          tabs[n].focus();
          tabs[n].click();
        }
      },
      { signal },
    );
    tab.addEventListener(
      'click',
      () => {
        tabs.forEach((t) => {
          t.setAttribute('aria-selected', String(t === tab));
          t.tabIndex = t === tab ? 0 : -1;
        });
        panels.forEach((p) => {
          p.hidden = p.dataset.p !== tab.dataset.t;
        });
      },
      { signal },
    );
  });
}

/** Sets an input's text value and notifies the panel so sliders and results update. */
function setInput(scope: ParentNode, key: string, value: string) {
  const el = textInput(scope, key);
  if (!el) return;
  el.value = value;
  el.dispatchEvent(new Event('input', { bubbles: true }));
}

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

/** "Use this amount" buttons on the standalone calculator pages. */
function bindUseButtons(variant: CalculatorVariant, signal: AbortSignal) {
  document.querySelectorAll<HTMLElement>('[data-use]').forEach((btn) =>
    btn.addEventListener(
      'click',
      () => {
        if (variant === 'las-calc') {
          const elig = document.querySelector('#cxp-elig') as ParentNode;
          const amt = clamp(
            Math.floor(
              lasEligibleAmount({ sh: numberIn(elig, 'sh'), eq: numberIn(elig, 'eq'), db: numberIn(elig, 'db') }) /
                25000,
            ) * 25000,
            25000,
            5e7,
          );
          document.getElementById('cxt-las')?.click();
          setInput(document.querySelector('#cxp-las') as ParentNode, 'amt', formatIndian(amt));
          document.getElementById('cxt-las')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else if (variant === 'lap-calc') {
          const elig = document.querySelector('#cxp-elig') as ParentNode;
          const loan = lapEligibleAmount({
            inc: numberIn(elig, 'inc'),
            obl: numberIn(elig, 'obl'),
            ten: numberIn(elig, 'ten'),
            roi: numberIn(elig, 'roi'),
          });
          const amt = clamp(Math.floor(loan / 1e5) * 1e5, 2e6, 1e8);
          const emi = document.querySelector('#cxp-emi') as ParentNode;
          document.getElementById('cxt-emi')?.click();
          setInput(emi, 'ten', String(numberIn(elig, 'ten')));
          setInput(emi, 'roi', textInput(elig, 'roi')?.value ?? '');
          setInput(emi, 'amt', formatIndian(amt));
          document.getElementById('cxt-emi')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      },
      { signal },
    ),
  );
}

/** Keeps the "Apply" buttons' label and query string in step with the calculator inputs. */
function bindCtaLinks(variant: CalculatorVariant, signal: AbortSignal) {
  const first = variant === 'las-calc' ? '#cxp-las' : '#cxp-emi';
  const B = document.querySelector<HTMLAnchorElement>(`${first} [data-cta]`);
  const E = document.querySelector<HTMLAnchorElement>('#cxp-elig [data-cta]');
  if (!B || !E) return;
  const arrow = B.querySelector('svg')?.outerHTML ?? '';
  const set = (a: HTMLAnchorElement, label: string, qs: Record<string, string | number>) => {
    const url = new URL(a.dataset.base ?? (a.dataset.base = a.getAttribute('href') ?? ''), location.href);
    Object.entries(qs).forEach(([k, v]) => url.searchParams.set(k, String(v)));
    a.setAttribute('href', url.toString());
    a.innerHTML = `${label} ${arrow}`;
  };
  const run = () => {
    const bp = document.querySelector(first) as ParentNode;
    const ep = document.querySelector('#cxp-elig') as ParentNode;
    const amt = numberIn(bp, 'amt');
    const ten = numberIn(bp, 'ten');
    let eligible: number;
    if (variant === 'las-calc') {
      set(B, `Apply for ${formatRupees(amt)}`, {
        source: 'las-calculator',
        amount: Math.round(amt),
        tenure: Math.round(ten),
      });
      eligible = Math.round(
        lasEligibleAmount({ sh: numberIn(ep, 'sh'), eq: numberIn(ep, 'eq'), db: numberIn(ep, 'db') }),
      );
      set(E, eligible > 0 ? `Apply for up to ${formatRupees(eligible)}` : 'Apply now', {
        source: 'las-eligibility',
        eligible,
      });
    } else {
      set(B, `Apply for ${formatRupees(amt)}`, {
        source: 'lap-calculator',
        amount: Math.round(amt),
        tenure: Math.round(ten),
        rate: numberIn(bp, 'roi'),
      });
      eligible = Math.round(
        lapEligibleAmount({
          inc: numberIn(ep, 'inc'),
          obl: numberIn(ep, 'obl'),
          ten: numberIn(ep, 'ten'),
          roi: numberIn(ep, 'roi'),
        }),
      );
      set(E, eligible > 0 ? `Apply for up to ${formatRupees(eligible)}` : 'Apply now', {
        source: 'lap-eligibility',
        eligible,
      });
    }
  };
  document.addEventListener('input', run, { signal });
  document.addEventListener('click', () => setTimeout(run, 0), { signal });
  run();
}

/** Wires every calculator on the page. Returns a cleanup function. */
export function initCalculators(variant: CalculatorVariant): () => void {
  const ctrl = new AbortController();
  const { signal } = ctrl;
  document.querySelectorAll<HTMLElement>('.cx-cp').forEach((root) => bindPanel(root, variant, signal));
  document.querySelectorAll<HTMLElement>('[data-tabs]').forEach((g) => bindTabs(g, signal));
  if (variant !== 'default') {
    bindUseButtons(variant, signal);
    bindCtaLinks(variant, signal);
  }
  return () => ctrl.abort();
}
