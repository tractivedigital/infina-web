export function Decide() {
  return (
    <section className="band" id="decide">
      <div className="wrapx">
        <div className="dd2">
          <div>
            <h2 className="h2">
              What changes your <em>ESOP funding</em> cost
            </h2>
            <p className="body" style={{ marginTop: '16px' }}>
              Four things move the figures in the calculator, and they are the same four that matter when you exercise.
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
                <span>The market price against your exercise price, which sets the perquisite tax</span>
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
                <span>Your tax rate under the New Tax Regime</span>
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
                <span>The tenure, because interest is charged by the day across the slabs</span>
              </li>
            </ul>
          </div>
          <div className="we on-navy">
            <p className="we-k">Worked example</p>
            <h3>1,000 options, 180 days</h3>
            <dl className="we-r">
              <div>
                <dt>Market price (CMP)</dt>
                <dd>₹200</dd>
              </div>
              <div>
                <dt>Exercise price</dt>
                <dd>₹100</dd>
              </div>
              <div>
                <dt>Total payable to employer</dt>
                <dd>₹1,30,000</dd>
              </div>
              <div>
                <dt>Infina funding</dt>
                <dd>₹1,00,000</dd>
              </div>
              <div>
                <dt>Your contribution</dt>
                <dd>₹30,000</dd>
              </div>
            </dl>
            <div className="we-b">
              <span>Estimated cost of funding</span>
              <strong>₹5,995</strong>
            </div>
            <p className="we-n">
              Indicative, from the calculator above at a 30% tax rate. Cost of funding is interest of ₹4,521, processing
              fee of ₹295 and documentation charges of ₹1,179. Brokerage on sale is extra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
