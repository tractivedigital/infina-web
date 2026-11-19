import { guardJson, json, text } from '@/lib/server/api-guard';
import { deliverSubmission } from '@/lib/server/delivery';
import { EMAIL_PATTERN, validateLead } from '@/lib/validation';

/** Extra campaign fields accepted from the Diwali offer form (anything else is dropped). */
const DETAIL_KEYS = [
  'portfolio',
  'asset',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'click_id',
  'publisher_id',
];

/**
 * Receives "Check your eligibility" enquiries (product pages and home) and the Diwali offer applications.
 * Validated leads are forwarded by `deliverSubmission` (see lib/server/delivery.ts for the configuration).
 */
export async function POST(request: Request) {
  const guard = await guardJson(request, { route: 'leads' });
  if (!guard.ok) return guard.response;
  const body = guard.body;

  // Spam trap: real visitors never fill the hidden "website" field. Pretend success, deliver nothing.
  if (text(body.website)) return json({ ok: true }, 202);

  const lead = {
    name: text(body.name, 100),
    mobile: text(body.mobile, 20),
    interest: text(body.interest, 120),
    consent: body.consent === true,
    source: text(body.source, 200),
  };
  const errors: Record<string, string> = { ...validateLead(lead) };
  const email = text(body.email, 254);
  if (email && !EMAIL_PATTERN.test(email)) errors.email = 'Please enter a valid email address.';
  if (Object.keys(errors).length > 0) return json({ errors }, 422);

  const details: Record<string, string> = {};
  const rawDetails =
    typeof body.details === 'object' && body.details !== null ? (body.details as Record<string, unknown>) : {};
  for (const key of DETAIL_KEYS) {
    const value = text(rawDetails[key], 120);
    if (value) details[key] = value;
  }

  try {
    await deliverSubmission({
      type: lead.source.startsWith('/diwali') ? 'campaign-lead' : 'lead',
      page: lead.source,
      receivedAt: new Date().toISOString(),
      data: {
        name: lead.name,
        mobile: lead.mobile,
        ...(email ? { email } : {}),
        interest: lead.interest,
        consent: true,
        ...details,
      },
    });
  } catch (error) {
    console.error('[forms] lead delivery failed:', error);
    return json({ error: 'We could not submit your details right now. Please try again.' }, 502);
  }
  return json({ ok: true }, 202);
}
