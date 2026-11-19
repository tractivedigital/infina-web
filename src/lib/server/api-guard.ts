import { NextResponse } from 'next/server';

/**
 * Shared request hardening for the form API routes: same-origin check, JSON content type, body size cap and a
 * per-IP rate limit. The rate limiter is in-memory, so it is per server instance (it slows bots down; put a WAF
 * or an API gateway limit in front for strict guarantees).
 */

const MAX_BODY_BYTES = 8_000;
const hits = new Map<string, number[]>();

const noStore = { 'Cache-Control': 'no-store' };

export const json = (body: unknown, status = 200) => NextResponse.json(body, { status, headers: noStore });

function clientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  return (forwarded?.split(',')[0] ?? request.headers.get('x-real-ip') ?? 'unknown').trim();
}

function sameOrigin(request: Request): boolean {
  const origin = request.headers.get('origin');
  if (!origin) return true; // non-browser clients send no Origin; browsers always do for cross-site POSTs
  const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host');
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

function limited(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= limit) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) for (const [k, v] of hits) if (v.every((t) => now - t >= windowMs)) hits.delete(k);
  return false;
}

export type GuardResult = { ok: true; body: Record<string, unknown> } | { ok: false; response: NextResponse };

/** Validates the request envelope and returns the parsed JSON object. */
export async function guardJson(
  request: Request,
  opts: { route: string; limit?: number; windowMs?: number },
): Promise<GuardResult> {
  if (!sameOrigin(request)) return { ok: false, response: json({ error: 'Forbidden' }, 403) };
  if (!(request.headers.get('content-type') ?? '').includes('application/json'))
    return { ok: false, response: json({ error: 'Unsupported content type' }, 415) };
  if (limited(`${opts.route}:${clientIp(request)}`, opts.limit ?? 10, opts.windowMs ?? 10 * 60_000))
    return { ok: false, response: json({ error: 'Too many requests. Please try again later.' }, 429) };

  const text = await request.text();
  if (text.length > MAX_BODY_BYTES) return { ok: false, response: json({ error: 'Request too large' }, 413) };
  try {
    const body: unknown = JSON.parse(text);
    if (typeof body !== 'object' || body === null || Array.isArray(body)) throw new Error('not an object');
    return { ok: true, body: body as Record<string, unknown> };
  } catch {
    return { ok: false, response: json({ error: 'Invalid JSON' }, 400) };
  }
}

/** Trims a value to a bounded string (never trust client-supplied lengths). */
export const text = (value: unknown, max = 200): string =>
  String(value ?? '')
    .trim()
    .slice(0, max);
