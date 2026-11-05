export function Decide() {
  return (
    <section className="band" id="decide">
      <div className="wrapx">
        <div className="dd2">
          <div>
            <h2 className="h2">
              What decides your funding <em>amount</em>
            </h2>
            <p className="body" style={{ marginTop: '16px' }}>
              Infina funds the lower of 50% of the market value of the shares or the amount you owe your employer. These
              details set the figure.
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
                <span>The number of options you exercise</span>
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
                <span>Your exercise price and the current market price</span>
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
                <span>The tax rate on the perquisite, based on your income slab</span>
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
                <span>The tenure you choose, which sets the interest rate</span>
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
                <span>Your documents and credit history</span>
              </li>
            </ul>
          </div>
          <div className="we on-navy">
            <p className="we-k">Worked example</p>
            <h3>1,000 options for 180 days</h3>
            <dl className="we-r">
              <div>
                <dt>Current market price</dt>
                <dd>₹200</dd>
              </div>
              <div>
                <dt>Exercise price</dt>
                <dd>₹100</dd>
              </div>
              <div>
                <dt>Quantity</dt>
                <dd>1,000</dd>
              </div>
              <div>
                <dt>Tax rate</dt>
                <dd>30%</dd>
              </div>
              <div>
                <dt>Total payable to employer</dt>
                <dd>₹1,30,000</dd>
              </div>
              <div>
                <dt>Your contribution</dt>
                <dd>₹30,000</dd>
              </div>
              <div>
                <dt>Estimated cost of funding</dt>
                <dd>₹5,995</dd>
              </div>
            </dl>
            <div className="we-b">
              <span>Infina funding</span>
              <strong>₹1,00,000</strong>
            </div>
            <p className="we-n">
              Indicative, from the calculator above. The actual rate and fees can vary from one employer to another.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
