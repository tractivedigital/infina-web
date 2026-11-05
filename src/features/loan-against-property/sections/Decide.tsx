export function Decide() {
  return (
    <section className="band" id="decide">
      <div className="wrapx">
        <div className="dd2">
          <div>
            <h2 className="h2">
              What decides your loan <em>amount</em>
            </h2>
            <p className="body" style={{ marginTop: '16px' }}>
              Your loan amount depends on what your property is worth and on how much monthly repayment your income can
              support. These factors set the figure.
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
                <span>The market value of the property</span>
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
                <span>The type of property: residential, commercial or industrial</span>
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
                <span>Your monthly income, as salaried or self-employed</span>
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
                <span>The interest rate and the tenure you choose</span>
              </li>
            </ul>
          </div>
          <div className="we on-navy">
            <p className="we-k">Worked example</p>
            <h3>₹2 crore property, salaried applicant</h3>
            <dl className="we-r">
              <div>
                <dt>Market value of property</dt>
                <dd>₹2,00,00,000</dd>
              </div>
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
                <dt>Monthly instalment (EMI)</dt>
                <dd>₹1,02,000</dd>
              </div>
            </dl>
            <div className="we-b">
              <span>Final loan amount</span>
              <strong>₹89,74,158</strong>
            </div>
            <p className="we-n">
              Indicative, from the calculator above. Final rates, loan amount and terms depend on documentation, the
              property valuation and credit approval.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
