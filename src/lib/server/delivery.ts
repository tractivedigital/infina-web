import { createHmac } from 'node:crypto';

/**
 * Forwards a validated form submission to the place Infina wants it (CRM, Power Automate, Zapier, Make, a mail
 * relay…). Configure it with environment variables:
 *
 *   FORM_WEBHOOK_URL     HTTPS endpoint that receives the JSON below via POST.
 *   FORM_WEBHOOK_SECRET  Optional. When set, requests carry `X-Infina-Signature: sha256=<hex HMAC of the body>`.
 *
 * Without FORM_WEBHOOK_URL nothing can be forwarded: the submission is written to the server log (so it is not
 * lost) and `delivered` is false. Set the variable in production before launch.
 */

export type SubmissionType = 'lead' | 'campaign-lead' | 'partner-application';

export interface Submission {
  type: SubmissionType;
  /** Page the visitor submitted from. */
  page: string;
  receivedAt: string;
  data: Record<string, string | boolean>;
}

export async function deliverSubmission(submission: Submission): Promise<{ delivered: boolean }> {
  const url = process.env.FORM_WEBHOOK_URL;
  if (!url) {
    console.error('[forms] FORM_WEBHOOK_URL is not set. Submission NOT forwarded:', JSON.stringify(submission));
    return { delivered: false };
  }
  const body = JSON.stringify(submission);
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  const secret = process.env.FORM_WEBHOOK_SECRET;
  if (secret) headers['X-Infina-Signature'] = `sha256=${createHmac('sha256', secret).update(body).digest('hex')}`;

  const response = await fetch(url, { method: 'POST', headers, body, signal: AbortSignal.timeout(8000) });
  if (!response.ok) throw new Error(`Form webhook responded ${response.status}`);
  return { delivered: true };
}
