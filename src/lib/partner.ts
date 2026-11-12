import { MOBILE_PATTERN } from './validation';

/** Channel partner / DSA application, as posted by the form on /channel-partner. */
export interface PartnerApplication {
  fullname: string;
  mobile: string;
  email: string;
  location: string;
  entity: string;
  product: string;
  consent: boolean;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validatePartnerApplication(a: PartnerApplication): Partial<Record<keyof PartnerApplication, string>> {
  const errors: Partial<Record<keyof PartnerApplication, string>> = {};
  if (a.fullname.trim().length < 2) errors.fullname = 'Please enter your full name.';
  if (!MOBILE_PATTERN.test(a.mobile.trim())) errors.mobile = 'Please enter a valid 10 digit mobile number.';
  if (!EMAIL_PATTERN.test(a.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!a.location.trim()) errors.location = 'Please enter your city and state.';
  if (!a.entity) errors.entity = 'Please select your entity type.';
  if (!a.product) errors.product = 'Please select a product.';
  if (!a.consent) errors.consent = 'Please accept to continue.';
  return errors;
}
