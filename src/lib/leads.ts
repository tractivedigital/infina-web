import { withBase } from '@/lib/base-path';
import type { LeadInput } from './validation';

/** Sends a lead enquiry to the internal API route. Throws on a non-2xx response. */
export async function submitLead(lead: LeadInput): Promise<void> {
  const res = await fetch(withBase('/api/leads'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(lead),
  });
  if (!res.ok) throw new Error(`Lead submission failed (${res.status})`);
}
