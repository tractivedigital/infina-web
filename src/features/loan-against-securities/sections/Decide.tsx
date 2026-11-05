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
              Your limit is a share of the market value of the securities you pledge. These factors set the figure.
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
                <span>The market value of the securities you pledge</span>
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
                <span>
                  The type of security, because the loan to value limit differs for shares, equity funds, debt funds and
                  bonds
                  <span className="cf">To confirm</span>
                </span>
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
                <span>The loan amount you ask for</span>
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
                <span>The tenure you choose</span>
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
                <span>Your profile and the documents you submit</span>
              </li>
            </ul>
          </div>
          <div className="we on-navy">
            <p className="we-k">Worked example</p>
            <h3>₹25 lakh for 12 months</h3>
            <dl className="we-r">
              <div>
                <dt>Loan amount</dt>
                <dd>₹25,00,000</dd>
              </div>
              <div>
                <dt>Tenure</dt>
                <dd>12 months</dd>
              </div>
              <div>
                <dt>Rate of interest</dt>
                <dd>10.5% p.a.</dd>
              </div>
              <div>
                <dt>Monthly interest</dt>
                <dd>₹21,875</dd>
              </div>
              <div>
                <dt>Total interest</dt>
                <dd>₹2,62,500</dd>
              </div>
            </dl>
            <div className="we-b">
              <span>Total payable at maturity</span>
              <strong>₹27,62,500</strong>
            </div>
            <p className="we-n">
              Indicative, using the interest-only structure in the calculator above. The principal is due at maturity.
              Actual terms depend on credit approval and the securities pledged.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
