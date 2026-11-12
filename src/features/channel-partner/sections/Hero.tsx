import Image from 'next/image';

export function Hero() {
  return (
    <div id="top">
      <section className="hx" id="apply" aria-label="Infina Saathi channel partner application">
        <section className="hx-info">
          <div className="hx-eyebrow">CHANNEL PARTNER / DSA PROGRAMME</div>
          <h1>
            Infina
            <br />
            Saathi
            <span>.</span>
          </h1>
          <p className="hx-tagline">Your network. Our lending. One partnership that pays on every disbursal.</p>
          <Image
            className="hx-photo"
            src="/images/channel-partner/channel-partner-hero.jpg"
            alt="Channel partners reviewing a case together"
            width={900}
            height={945}
          />
          <div className="hx-badge hx-b1">
            <b>1</b>
            <span>
              You
              <br />
              refer
            </span>
          </div>
          <div className="hx-badge hx-b2">
            <b>2</b>
            <span>
              We
              <br />
              disburse
            </span>
          </div>
          <div className="hx-badge hx-b3">
            <b>3</b>
            <span>
              You earn, on every
              <br />
              disbursal
            </span>
          </div>
        </section>
        <section className="hx-form-panel">
          <div className="hx-form-eyebrow">CHANNEL PARTNER / DSA SIGN-UP</div>
          <h2>Start your Channel Partner / DSA application</h2>
          <form id="partner-form">
            <div className="hx-field">
              <label htmlFor="fullname">
                Full name <span className="hx-required">*</span>
              </label>
              <input id="fullname" required placeholder="Enter your full name" />
              <span className="hx-hint">As it appears on your PAN card</span>
            </div>
            <div className="hx-field">
              <label htmlFor="mobile">
                Mobile number <span className="hx-required">*</span>
              </label>
              <input
                id="mobile"
                required
                inputMode="numeric"
                pattern={'[0-9]{10}'}
                maxLength={10}
                placeholder="10-digit mobile number"
              />
            </div>
            <div className="hx-field">
              <label htmlFor="email">
                Email address <span className="hx-required">*</span>
              </label>
              <input id="email" required type="email" placeholder="you@example.com" />
            </div>
            <div className="hx-field hx-full">
              <label htmlFor="location">
                City <span className="hx-required">*</span>
              </label>
              <input id="location" required placeholder="City, State" />
            </div>
            <div className="hx-field hx-full">
              <label htmlFor="entity">
                Entity type <span className="hx-required">*</span>
              </label>
              <select id="entity" required defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                <option>Individual</option>
                <option>HUF</option>
                <option>Partnership Firm</option>
                <option>LLP</option>
                <option>Private Ltd.</option>
                <option>Public Ltd.</option>
              </select>
            </div>
            <div className="hx-field">
              <label htmlFor="product">
                Product <span className="hx-required">*</span>
              </label>
              <select id="product" required defaultValue="">
                <option value="" disabled>
                  Select product
                </option>
                <option>Loan Against Securities (LAS)</option>
                <option>Loan Against Property (LAP)</option>
                <option>Both</option>
              </select>
            </div>
            <div className="hx-field hx-full" style={{ flexDirection: 'row', alignItems: 'flex-start', gap: '10px' }}>
              <input
                type="checkbox"
                id="consent"
                required
                style={{ width: '18px', height: '18px', marginTop: '3px', flexShrink: '0' }}
              />
              <label htmlFor="consent" style={{ fontWeight: '400', fontSize: '13px', lineHeight: '1.5' }}>
                I have read and agree to the{' '}
                <a href="/privacy-policy" rel="noopener">
                  Privacy Policy
                </a>
                .
              </label>
            </div>
            <div className="hx-field hx-submit-inline">
              <button type="submit">
                Submit application <span className="hx-arrow">→</span>
              </button>
            </div>
            <div className="hx-submit-area">
              <p className="hx-next">
                <strong>Takes about 2 minutes.</strong> Our Relationship Manager will contact you within 1–2 business
                days.
              </p>
              <div className="hx-consent">
                By submitting, you agree to be contacted by Infina regarding this application and consent to our Privacy
                Policy.
                <br />
                <span className="hx-tc">*Terms and Conditions Apply.</span>
              </div>
            </div>
          </form>
        </section>
      </section>
    </div>
  );
}
