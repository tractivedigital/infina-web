import { withBase } from '@/lib/base-path';
export function Apply() {
  return (
    <section className="apply" id="apply" aria-labelledby="ap">
      <div className="dw-wrap">
        <div className="apply-head">
          <p className="eyebrow">Diwali special offer</p>
          <h2 id="ap">
            Apply for <span className="hl">Loan Against Securities.</span>
          </h2>
          <p className="dw-sub">Share your details and our relationship manager will get in touch.</p>
        </div>
        <div className="apply-card">
          <form id="leadForm" noValidate>
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
            />
            <div className="f-grid">
              <label className="f">
                <span>Full name *</span>
                <input name="name" type="text" autoComplete="name" required placeholder="Enter full name" />
              </label>{' '}
              <label className="f">
                <span>Mobile number *</span>
                <input
                  name="mobile"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  required
                  pattern={'[6-9][0-9]{9}'}
                  maxLength={10}
                  placeholder="10-digit mobile number"
                />
              </label>{' '}
              <label className="f">
                <span>Email ID *</span>
                <input name="email" type="email" autoComplete="email" required placeholder="name@example.com" />
              </label>{' '}
              <label className="f">
                <span>Estimated portfolio value</span>
                <select name="portfolio">
                  <option value="">Select portfolio value</option>
                  <option>₹1 Lakh to ₹5 Lakhs</option>
                  <option>₹5 Lakhs to ₹25 Lakhs</option>
                  <option>₹25 Lakhs to ₹1 Crore</option>
                  <option>₹1 Crore+</option>
                </select>
              </label>{' '}
              <label className="f f-full">
                <span>Primary asset type *</span>
                <select name="asset" required>
                  <option value="">Select primary collateral</option>
                  <option>Mutual funds</option>
                  <option>Listed equity shares</option>
                  <option>REITs and InvITs</option>
                  <option>Bonds and debentures</option>
                </select>
              </label>
            </div>
            <label className="consent">
              <input type="checkbox" name="consent" required />
              <span>
                I agree to be contacted by Infina Finance Pvt. Ltd. about this offer.{' '}
                <a href={withBase('/privacy-policy')}>Privacy Policy</a>
              </span>
            </label>{' '}
            <button type="submit" className="dw-btn apply-btn">
              Submit application
            </button>
            <p className="f-err" id="fErr" role="alert" hidden>
              Please fill in all fields correctly.
            </p>
          </form>
          <div className="f-ok" id="fOk" hidden>
            <h3>Application received.</h3>
            <p>Thank you. Our relationship manager will contact you shortly.</p>
            <a
              className="dw-btn m-btn"
              style={{ marginTop: '16px' }}
              href="https://www.digilas.infina.co.in/?code=festive999"
              data-apply=""
              rel="noopener"
            >
              Continue to Infina
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
