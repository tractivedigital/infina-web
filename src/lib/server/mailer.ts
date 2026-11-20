import nodemailer, { type Transporter } from 'nodemailer';

/**
 * Sends form submissions by e-mail through Gmail SMTP.
 *
 *   SMTP_USER          Gmail / Google Workspace address that sends the mail.
 *   SMTP_APP_PASSWORD  A Google "App password" for that account (2-step verification must be on), not the login password.
 *   MAIL_TO            Recipient. Defaults to connect@infina.in.
 *   MAIL_FROM_NAME     Optional display name. Defaults to "Infina Website".
 *   SMTP_HOST / SMTP_PORT / SMTP_SECURE  Only for testing against another server. Default: smtp.gmail.com, 465, true.
 */

const DEFAULT_TO = 'connect@infina.in';

let transporter: Transporter | null = null;

export function isMailConfigured(): boolean {
  return Boolean(process.env.SMTP_USER && process.env.SMTP_APP_PASSWORD);
}

function getTransporter(): Transporter {
  transporter ??= nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_SECURE !== 'false',
    auth: { user: process.env.SMTP_USER, pass: (process.env.SMTP_APP_PASSWORD ?? '').replace(/\s+/g, '') },
    connectionTimeout: 8000,
    greetingTimeout: 8000,
    socketTimeout: 12000,
  });
  return transporter;
}

const escapeHtml = (v: string) =>
  v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
/** Header values must be a single line. */
const oneLine = (v: string) => v.replace(/[\r\n]+/g, ' ').trim();

export interface MailInput {
  subject: string;
  /** Ordered label / value pairs shown in the mail body. */
  fields: Array<[label: string, value: string]>;
  replyTo?: string;
}

export async function sendFormMail({ subject, fields, replyTo }: MailInput): Promise<void> {
  const user = process.env.SMTP_USER as string;
  const to = process.env.MAIL_TO || DEFAULT_TO;
  const name = oneLine(process.env.MAIL_FROM_NAME || 'Infina Website').replace(/"/g, '');
  const rows = fields.filter(([, v]) => v !== '');

  await getTransporter().sendMail({
    from: `"${name}" <${user}>`,
    to,
    subject: oneLine(subject),
    ...(replyTo ? { replyTo: oneLine(replyTo) } : {}),
    text: rows.map(([k, v]) => `${k}: ${v}`).join('\n'),
    html:
      `<table cellpadding="8" cellspacing="0" style="border-collapse:collapse;font:14px Arial,sans-serif">` +
      rows
        .map(
          ([k, v]) =>
            `<tr><td style="border:1px solid #ddd;background:#f6f8fb;font-weight:600">${escapeHtml(k)}</td>` +
            `<td style="border:1px solid #ddd">${escapeHtml(v)}</td></tr>`,
        )
        .join('') +
      `</table>`,
  });
}
