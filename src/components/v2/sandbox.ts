/**
 * Runs a prototype interaction script (components/v2/scripts/*) for one page and undoes everything it did when the
 * visitor leaves. The scripts were written as plain browser scripts: they query `document`, add listeners to `window`,
 * and start animation loops. Instead of editing those ~30 KB scripts, each global they use is passed in as a parameter:
 *
 *  - `document` is scoped to the page wrapper (`body` and `documentElement` are the wrapper, so classes the script
 *    adds, such as `is-loaded` and `no-webgl`, stay inside this page);
 *  - `window`, timers, animation frames and observers are recorded, so `dispose()` removes listeners, cancels frames
 *    and stops loops. Nothing keeps running or leaks across client-side navigation.
 */

type Fn = (...args: never[]) => unknown;
export type LeadResult = { ok: true } | { ok: false; error: string };
export type SubmitLead = (lead: {
  name: string;
  mobile: string;
  interest: string;
  website?: string;
}) => Promise<LeadResult>;
export type PageScript = (...args: unknown[]) => void;

export function runInSandbox(
  root: HTMLElement,
  THREE: unknown,
  script: PageScript,
  submitLead: SubmitLead,
): () => void {
  let disposed = false;
  const disposers: Array<() => void> = [];
  const frames = new Set<number>();
  const timeouts = new Set<number>();
  const intervals = new Set<number>();

  const requestAnimationFrame = (cb: FrameRequestCallback): number => {
    if (disposed) return 0;
    const id = window.requestAnimationFrame((t) => {
      frames.delete(id);
      if (!disposed) cb(t);
    });
    frames.add(id);
    return id;
  };
  const cancelAnimationFrame = (id: number) => {
    frames.delete(id);
    window.cancelAnimationFrame(id);
  };
  const setTimeout = (cb: (...a: unknown[]) => void, ms?: number, ...args: unknown[]): number => {
    const id = window.setTimeout(() => {
      timeouts.delete(id);
      if (!disposed) cb(...args);
    }, ms);
    timeouts.add(id);
    return id;
  };
  const clearTimeout = (id?: number) => {
    if (id !== undefined) timeouts.delete(id);
    window.clearTimeout(id);
  };
  const setInterval = (cb: (...a: unknown[]) => void, ms?: number, ...args: unknown[]): number => {
    const id = window.setInterval(() => {
      if (!disposed) cb(...args);
    }, ms);
    intervals.add(id);
    return id;
  };
  const clearInterval = (id?: number) => {
    if (id !== undefined) intervals.delete(id);
    window.clearInterval(id);
  };

  const listen =
    (target: EventTarget) =>
    (type: string, fn: EventListenerOrEventListenerObject, opts?: boolean | AddEventListenerOptions) => {
      target.addEventListener(type, fn, opts);
      disposers.push(() => target.removeEventListener(type, fn, opts));
    };
  const addEventListener = listen(window);
  const removeEventListener = (
    type: string,
    fn: EventListenerOrEventListenerObject,
    opts?: boolean | EventListenerOptions,
  ) => window.removeEventListener(type, fn, opts);

  // Observers are tracked so they stop watching when the page is left.
  const observers: Array<{ disconnect(): void }> = [];
  // A class mixin must accept `any[]` constructor arguments, hence the two lint exceptions.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const track = <C extends new (...args: any[]) => { disconnect(): void }>(Base: C) =>
    class Tracked extends Base {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      constructor(...args: any[]) {
        super(...args);
        observers.push(this);
      }
    };
  const IntersectionObserver = track(window.IntersectionObserver);
  const ResizeObserver = track(window.ResizeObserver);

  const doc = new Proxy(document, {
    get(target, prop) {
      switch (prop) {
        case 'body':
        case 'documentElement':
          return root;
        case 'querySelector':
          return (s: string) => root.querySelector(s);
        case 'querySelectorAll':
          return (s: string) => root.querySelectorAll(s);
        case 'getElementById':
          return (id: string) => root.querySelector(`#${CSS.escape(id)}`);
        case 'addEventListener':
          return listen(target);
        default: {
          const v = Reflect.get(target, prop, target);
          return typeof v === 'function' ? (v as Fn).bind(target) : v;
        }
      }
    },
    set(target, prop, value) {
      Reflect.set(target, prop, value, target);
      return true;
    },
  });

  // Values the script stores on `window` (for example a handle to a canvas) stay local to this page.
  const local = new Map<PropertyKey, unknown>();
  const win = new Proxy(window, {
    get(target, prop) {
      if (prop === 'THREE') return THREE;
      if (prop === 'document') return doc;
      if (local.has(prop)) return local.get(prop);
      if (prop === 'addEventListener') return addEventListener;
      if (prop === 'removeEventListener') return removeEventListener;
      if (prop === 'requestAnimationFrame') return requestAnimationFrame;
      if (prop === 'cancelAnimationFrame') return cancelAnimationFrame;
      if (prop === 'setTimeout') return setTimeout;
      if (prop === 'setInterval') return setInterval;
      const v = Reflect.get(target, prop, target);
      return typeof v === 'function' ? (v as Fn).bind(target) : v;
    },
    set(_target, prop, value) {
      local.set(prop, value);
      return true;
    },
  });

  script(
    THREE,
    win,
    doc,
    requestAnimationFrame,
    cancelAnimationFrame,
    setTimeout,
    clearTimeout,
    setInterval,
    clearInterval,
    addEventListener,
    removeEventListener,
    IntersectionObserver,
    ResizeObserver,
    submitLead,
  );

  return () => {
    disposed = true;
    disposers.splice(0).forEach((d) => d());
    frames.forEach((id) => window.cancelAnimationFrame(id));
    timeouts.forEach((id) => window.clearTimeout(id));
    intervals.forEach((id) => window.clearInterval(id));
    frames.clear();
    timeouts.clear();
    intervals.clear();
    observers.splice(0).forEach((o) => o.disconnect());
  };
}
