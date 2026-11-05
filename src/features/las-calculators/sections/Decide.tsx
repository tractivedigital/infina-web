export function Decide() {
  return (
    <section className="band" id="decide">
      <div className="wrapx">
        <div className="dd2">
          <div>
            <h2 className="h2">
              What changes the <em>interest</em> you pay
            </h2>
            <p className="body" style={{ marginTop: '16px' }}>
              Four things move the figure in the calculator, and they are the same four that matter when you borrow.
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
                <span>The loan amount, because interest is charged on the amount you borrow</span>
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
                <span>The annual rate of interest you are offered</span>
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
                <span>The tenure, because total interest grows with every month</span>
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
                  The type of security you pledge, which sets how much you can borrow
                  <span className="cf">To confirm</span>
                </span>
              </li>
            </ul>
          </div>
          <div className="we on-navy">
            <p className="we-k">Worked example</p>
            <h3>₹10 lakh for 6 months</h3>
            <dl className="we-r">
              <div>
                <dt>Loan amount</dt>
                <dd>₹10,00,000</dd>
              </div>
              <div>
                <dt>Tenure</dt>
                <dd>6 months</dd>
              </div>
              <div>
                <dt>Rate of interest</dt>
                <dd>10.5% p.a.</dd>
              </div>
              <div>
                <dt>Monthly interest</dt>
                <dd>₹8,750</dd>
              </div>
              <div>
                <dt>Total interest</dt>
                <dd>₹52,500</dd>
              </div>
            </dl>
            <div className="we-b">
              <span>Total payable at maturity</span>
              <strong>₹10,52,500</strong>
            </div>
            <p className="we-n">
              Indicative, using the interest-only structure in the calculator. The principal is due at maturity. Actual
              terms depend on credit approval and the securities pledged.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
