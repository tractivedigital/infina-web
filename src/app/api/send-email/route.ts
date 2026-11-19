import { guardJson, json, text } from '@/lib/server/api-guard';
import { deliverSubmission } from '@/lib/server/delivery';
import { validatePartnerApplication, type PartnerApplication } from '@/lib/partner';

/**
 * Receives Channel Partner / DSA applications from /channel-partner (the path the original page posted to).
 * Validated applications are forwarded by `deliverSubmission` (see lib/server/delivery.ts).
 */
export async function POST(request: Request) {
  const guard = await guardJson(request, { route: 'partner', limit: 5 });
  if (!guard.ok) return guard.response;
  const body = guard.body;

  // Spam trap (hidden "website" field).
  if (text(body.website)) return json({ ok: true }, 202);

  const application: PartnerApplication = {
    fullname: text(body.fullname, 100),
    mobile: text(body.mobile, 20),
    email: text(body.email, 254),
    location: text(body.location, 120),
    entity: text(body.entity, 60),
    product: text(body.product, 80),
    consent: body.consent === true,
  };
  const errors = validatePartnerApplication(application);
  if (Object.keys(errors).length > 0) {
    return json({ error: 'Please check the highlighted details.', errors }, 422);
  }

  try {
    await deliverSubmission({
      type: 'partner-application',
      page: '/channel-partner',
      receivedAt: new Date().toISOString(),
      data: { ...application },
    });
  } catch (error) {
    console.error('[forms] partner application delivery failed:', error);
    return json({ error: 'Unable to submit the application.' }, 502);
  }
  return json({ ok: true }, 202);
}
