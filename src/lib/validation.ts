/** Lead-form validation shared by the browser form and the API route. */

export interface LeadInput {
  name: string;
  mobile: string;
  interest: string;
  consent: boolean;
  source?: string;
  /** Campaign forms collect an email address too. */
  email?: string;
  /** Extra campaign fields (portfolio value, asset type, UTM parameters…). */
  details?: Record<string, string>;
  /** Hidden spam-trap field: must stay empty. */
  website?: string;
}

export type LeadErrors = Partial<Record<'name' | 'mobile' | 'consent', string>>;

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Indian mobile numbers: ten digits starting 6-9. */
export const MOBILE_PATTERN = /^[6-9][0-9]{9}$/;

export function validateLead(input: Pick<LeadInput, 'name' | 'mobile' | 'consent'>): LeadErrors {
  const errors: LeadErrors = {};
  if (input.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!MOBILE_PATTERN.test(input.mobile.replace(/\s/g, '')))
    errors.mobile = 'Please enter a valid 10 digit mobile number.';
  if (!input.consent) errors.consent = 'Please accept to continue.';
  return errors;
}
