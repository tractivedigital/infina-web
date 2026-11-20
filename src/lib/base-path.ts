/**
 * Sub-path the site is served from (for example `/infina-new` on the UAT host). Empty in production.
 * Set `NEXT_PUBLIC_BASE_PATH` at build time; it must match `basePath` in next.config.ts.
 *
 * `next/link`, `next/image` and the files in /public are prefixed by Next.js itself. Plain `<a>`, `<img>`,
 * `fetch()` and data-driven URLs are not, so they go through `withBase()`.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Prefixes root-relative paths ("/docs/x.pdf") with the base path; absolute URLs and "#anchors" pass through. */
export function withBase(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  if (path === '/') return BASE_PATH || '/';
  return BASE_PATH + path;
}
