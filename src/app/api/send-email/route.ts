import { NextResponse } from 'next/server';
import { validatePartnerApplication, type PartnerApplication } from '@/lib/partner';

/**
 * Receives Channel Partner / DSA applications from /channel-partner.
 *
 * TODO: deliver the validated application to the partnerships team (SMTP / CRM). The original page posted
 * to the same path; until a transport is configured the application is validated and acknowledged only.
 */
export async function POST(request: Request) {
  let body: Partial<PartnerApplication>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
  const application: PartnerApplication = {
    fullname: String(body.fullname ?? ''),
    mobile: String(body.mobile ?? ''),
    email: String(body.email ?? ''),
    location: String(body.location ?? ''),
    entity: String(body.entity ?? ''),
    product: String(body.product ?? ''),
    consent: body.consent === true,
  };
  const errors = validatePartnerApplication(application);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: 'Please check the highlighted details.', errors }, { status: 422 });
  }
  return NextResponse.json({ ok: true }, { status: 202 });
}
