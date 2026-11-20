import { createHmac } from 'node:crypto';
import { isMailConfigured, sendFormMail } from './mailer';

/**
 * Delivers a validated form submission. Two channels, both optional, configured with environment variables:
 *
 *   E-mail (Gmail SMTP)  SMTP_USER, SMTP_APP_PASSWORD, MAIL_TO (default connect@infina.in). See ./mailer.ts.
 *   Webhook              FORM_WEBHOOK_URL (HTTPS, JSON POST) and optional FORM_WEBHOOK_SECRET
 *                        (`X-Infina-Signature: sha256=<hex HMAC of the body>`). Useful for a CRM.
 *
 * Every configured channel is tried; the submission counts as delivered when at least one succeeds. If none is
 * configured the submission is written to the server log (so it is not lost) and `delivered` is false.
 */

export type SubmissionType = 'lead' | 'campaign-lead' | 'partner-application';

export interface Submission {
  type: SubmissionType;
  /** Page the visitor submitted from. */
  page: string;
  receivedAt: string;
  data: Record<string, string | boolean>;
}

const SUBJECTS: Record<SubmissionType, string> = {
  lead: 'New eligibility enquiry',
  'campaign-lead': 'New Diwali offer application',
  'partner-application': 'New channel partner application',
};

const LABELS: Record<string, string> = {
  name: 'Name',
  fullname: 'Full name',
  mobile: 'Mobile',
  email: 'Email',
  location: 'Location',
  entity: 'Entity type',
  product: 'Product',
  interest: 'Interested in',
  portfolio: 'Portfolio',
  asset: 'Asset',
  consent: 'Consent given',
  utm_source: 'UTM source',
  utm_medium: 'UTM medium',
  utm_campaign: 'UTM campaign',
  utm_content: 'UTM content',
  click_id: 'Click ID',
  publisher_id: 'Publisher ID',
};

async function viaMail(submission: Submission): Promise<void> {
  const { data } = submission;
  const who = String(data.name ?? data.fullname ?? '').trim();
  const fields: Array<[string, string]> = Object.entries(data).map(([k, v]) => [
    LABELS[k] ?? k,
    typeof v === 'boolean' ? (v ? 'Yes' : 'No') : String(v),
  ]);
  fields.push(['Submitted from', submission.page], ['Received at', submission.receivedAt]);
  const email = typeof data.email === 'string' ? data.email : '';
  await sendFormMail({
    subject: `${SUBJECTS[submission.type]}${who ? ` - ${who}` : ''}`,
    fields,
    replyTo: email || undefined,
  });
}

async function viaWebhook(submission: Submission, url: string): Promise<void> {
  const body = JSON.stringify(submission);
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  const secret = process.env.FORM_WEBHOOK_SECRET;
  if (secret) headers['X-Infina-Signature'] = `sha256=${createHmac('sha256', secret).update(body).digest('hex')}`;
  const response = await fetch(url, { method: 'POST', headers, body, signal: AbortSignal.timeout(8000) });
  if (!response.ok) throw new Error(`Form webhook responded ${response.status}`);
}

export async function deliverSubmission(submission: Submission): Promise<{ delivered: boolean }> {
  const webhookUrl = process.env.FORM_WEBHOOK_URL;
  const channels: Array<{ name: string; run: Promise<void> }> = [];
  if (isMailConfigured()) channels.push({ name: 'mail', run: viaMail(submission) });
  if (webhookUrl) channels.push({ name: 'webhook', run: viaWebhook(submission, webhookUrl) });

  if (channels.length === 0) {
    console.error(
      '[forms] No delivery channel configured (SMTP_* / FORM_WEBHOOK_URL). NOT forwarded:',
      JSON.stringify(submission),
    );
    return { delivered: false };
  }
  const results = await Promise.allSettled(channels.map((c) => c.run));
  results.forEach((r, i) => {
    if (r.status === 'rejected') console.error(`[forms] ${channels[i].name} delivery failed:`, r.reason);
  });
  if (results.every((r) => r.status === 'rejected')) throw new Error('All delivery channels failed');
  return { delivered: true };
}
