import { NextResponse } from 'next/server';
import { validateLead, type LeadInput } from '@/lib/validation';

/**
 * Receives "Check your eligibility" enquiries.
 *
 * TODO: forward the validated lead to the CRM / lead endpoint (the original static pages
 * contained the same TODO). Until then the lead is validated and acknowledged only.
 */
export async function POST(request: Request) {
  let body: Partial<LeadInput>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
  const lead = {
    name: String(body.name ?? ''),
    mobile: String(body.mobile ?? ''),
    interest: String(body.interest ?? ''),
    consent: body.consent === true,
    source: body.source ? String(body.source) : undefined,
  };
  const errors = validateLead(lead);
  if (Object.keys(errors).length > 0) return NextResponse.json({ errors }, { status: 422 });
  return NextResponse.json({ ok: true }, { status: 202 });
}
