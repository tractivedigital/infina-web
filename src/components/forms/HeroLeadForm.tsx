'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowRightIcon } from '@/components/icons';
import { siteConfig } from '@/config/site';
import { submitLead } from '@/lib/leads';
import { validateLead, type LeadErrors } from '@/lib/validation';

interface HeroLeadFormProps {
  /** The page-specific select (e.g. "I want to borrow against"). */
  interest: { label: string; name: string; options: string[] };
  /** `privacy` shows the consent sentence with a Privacy Policy link. */
  consent: 'privacy' | 'basic';
  /** Optional fine print rendered under the submit button (home page). */
  finePrint?: string;
  /** Markup of the success heading: the home page uses an <h3>, product pages a styled <p>. */
  doneHeading?: 'p' | 'h3';
}

/** "Check your eligibility" form shown under the hero on product pages. */
export function HeroLeadForm({ interest, consent, finePrint, doneHeading = 'p' }: HeroLeadFormProps) {
  const pathname = usePathname();
  const [errors, setErrors] = useState<LeadErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [failed, setFailed] = useState(false);
  const doneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (submitted) doneRef.current?.focus();
  }, [submitted]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lead = {
      name: String(data.get('name') ?? ''),
      mobile: String(data.get('mobile') ?? ''),
      interest: String(data.get(interest.name) ?? ''),
      consent: data.get('consent') === 'on',
      source: pathname,
    };
    const found = validateLead(lead);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = (['name', 'mobile', 'consent'] as const).find((k) => found[k]);
      const ids = { name: 'hb-name', mobile: 'hb-mob', consent: 'hb-ok' } as const;
      if (first) document.getElementById(ids[first])?.focus();
      return;
    }
    try {
      await submitLead(lead);
      setFailed(false);
      setSubmitted(true);
    } catch {
      setFailed(true);
    }
  };

  const fieldProps = (id: string, error?: string) => ({
    id,
    'aria-invalid': error ? true : false,
    'aria-describedby': error ? `${id}-e` : undefined,
  });

  if (submitted) {
    return (
      <div className="hv-bar hv-done" id="heroready" role="status" tabIndex={-1} ref={doneRef}>
        {doneHeading === 'h3' ? <h3>Thanks for reaching out.</h3> : <p className="hv-dh">Thanks for reaching out.</p>}
        <p>We will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form className="hv-bar" id="heroform" noValidate aria-label="Check your eligibility" onSubmit={onSubmit}>
      <p className="hv-bt">Check your eligibility</p>
      <div className="hv-f">
        <div className="ld-fl">
          <label htmlFor="hb-name">Name</label>
          <input {...fieldProps('hb-name', errors.name)} name="name" type="text" autoComplete="name" required />
          <p className="ld-err" id="hb-name-e" role="alert">
            {errors.name}
          </p>
        </div>
      </div>
      <div className="hv-f">
        <div className="ld-fl">
          <label htmlFor="hb-mob">Mobile</label>
          <div className="ld-mob">
            <b>+91</b>
            <input
              {...fieldProps('hb-mob', errors.mobile)}
              name="mobile"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              maxLength={10}
              required
            />
          </div>
          <p className="ld-err" id="hb-mob-e" role="alert">
            {errors.mobile}
          </p>
        </div>
      </div>
      <div className="hv-f">
        <div className="ld-fl">
          <label htmlFor="hb-int">{interest.label}</label>
          <select id="hb-int" name={interest.name} defaultValue={interest.options[0]}>
            {interest.options.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="hv-ck2">
        <label className="ld-ck">
          <input {...fieldProps('hb-ok', errors.consent)} type="checkbox" name="consent" required />
          <span>
            {consent === 'privacy' ? (
              <>
                I agree to Infina contacting me about this enquiry and have read the{' '}
                <a href={siteConfig.privacyPolicyUrl} target="_blank" rel="noopener">
                  Privacy Policy
                </a>
                .
              </>
            ) : (
              'I accept to share my information.'
            )}
          </span>
        </label>
        <p className="ld-err" id="hb-ok-e" role="alert">
          {errors.consent}
        </p>
      </div>
      {failed && (
        <p className="ld-err" role="alert">
          Something went wrong. Please try again.
        </p>
      )}
      <button className="btn" type="submit">
        Check Eligibility <ArrowRightIcon />
      </button>
      {finePrint && <p className="hv-fine">{finePrint}</p>}
    </form>
  );
}
