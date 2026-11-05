export function Decide() {
  return (
    <section className="band" id="decide">
      <div className="wrapx">
        <div className="dd2">
          <div>
            <h2 className="h2">
              What changes your <em>EMI and eligibility</em>
            </h2>
            <p className="body" style={{ marginTop: '16px' }}>
              Five things move the figures in the calculators, and they are the same five that matter when you borrow.
            </p>
            <ul className="el">
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>The loan amount, because the EMI rises with the amount you borrow</span>
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>The interest rate you are offered</span>
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>The tenure, because a longer tenure lowers the EMI but raises total interest</span>
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Your monthly income</span>
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <span>Your existing monthly obligations</span>
              </li>
            </ul>
          </div>
          <div className="we on-navy">
            <p className="we-k">Worked example</p>
            <h3>Salaried applicant</h3>
            <dl className="we-r">
              <div>
                <dt>Monthly income</dt>
                <dd>₹2,00,000</dd>
              </div>
              <div>
                <dt>Monthly obligations</dt>
                <dd>₹30,000</dd>
              </div>
              <div>
                <dt>Rate of interest</dt>
                <dd>11% p.a.</dd>
              </div>
              <div>
                <dt>Tenure</dt>
                <dd>180 months</dd>
              </div>
              <div>
                <dt>EMI you can afford</dt>
                <dd>₹1,02,000</dd>
              </div>
            </dl>
            <div className="we-b">
              <span>Indicative loan amount</span>
              <strong>₹89,74,158</strong>
            </div>
            <p className="we-n">
              Indicative, from the eligibility calculator, assuming up to 60% of income after obligations goes to the
              EMI. The lender also checks the property value and your credit profile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
