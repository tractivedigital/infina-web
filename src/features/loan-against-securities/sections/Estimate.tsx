import Link from 'next/link';

export function Estimate() {
  return (
    <section className="sec" id="estimate">
      <div className="wrapx">
        <div className="sec-head">
          <h2 className="h2">
            Estimate your loan <em>before you apply</em>
          </h2>
          <p className="body">Try your own numbers for a quick, indicative estimate. No sign-up needed.</p>
        </div>
        <div className="cx-cB">
          <div className="cx-pan">
            <div className="cx-cp cx-full" data-prod="las" data-p="las" id="cxp-las">
              <div className="cx-ins">
                <div className="cx-fl">
                  <div className="cx-fl-h">
                    <label htmlFor="f1">Loan Amount</label>
                    <div className="cx-inp">
                      <b>₹</b>
                      <input
                        id="f1"
                        type="text"
                        inputMode="decimal"
                        autoComplete="off"
                        data-k="amt"
                        defaultValue="25,00,000"
                      />
                    </div>
                  </div>
                  <p className="cx-wd" data-w="amt" aria-live="polite" />
                  <input
                    className="cx-rg"
                    type="range"
                    data-k="amt"
                    aria-label="Loan Amount"
                    min="25000"
                    max="50000000"
                    step="25000"
                    defaultValue="2500000"
                  />
                  <div className="cx-rm">
                    <span>₹25 K</span>
                    <span>₹5 CRORE</span>
                  </div>
                </div>
                <div className="cx-fl">
                  <div className="cx-fl-h">
                    <label htmlFor="f2">Tenure</label>
                    <div className="cx-inp">
                      <input
                        id="f2"
                        type="text"
                        inputMode="decimal"
                        autoComplete="off"
                        data-k="ten"
                        defaultValue="12"
                      />
                    </div>
                  </div>
                  <p className="cx-wd" data-w="ten" aria-live="polite" />
                  <input
                    className="cx-rg"
                    type="range"
                    data-k="ten"
                    aria-label="Tenure"
                    min="1"
                    max="36"
                    step="1"
                    defaultValue="12"
                  />
                  <div className="cx-rm">
                    <span>1 month</span>
                    <span>36 month</span>
                  </div>
                </div>
                <div className="cx-fl">
                  <div className="cx-fl-h">
                    <label htmlFor="f3">Rate of Interest</label>
                    <div className="cx-inp">
                      <input
                        id="f3"
                        type="text"
                        inputMode="decimal"
                        autoComplete="off"
                        data-k="roi"
                        defaultValue="10.50"
                      />
                      <b>% p.a.</b>
                    </div>
                  </div>
                </div>
                <div className="cx-ltv">
                  <p className="cx-kd-t">Indicative Loan-to-Value (LTV)</p>
                  <dl>
                    <div>
                      <dt>Listed Equity Shares</dt>
                      <dd>Up to 50%</dd>
                    </div>
                    <div>
                      <dt>Mutual Funds (Equity)</dt>
                      <dd>Up to 50%</dd>
                    </div>
                    <div>
                      <dt>Mutual Funds (Debt)</dt>
                      <dd>Up to 85%</dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="cx-res">
                <div className="cx-r-l">Monthly Interest</div>
                <div className="cx-r-n" data-o="big">
                  ₹0
                </div>
                <dl className="cx-r-rows">
                  <div>
                    <dt>Principal Amount</dt>
                    <dd data-o="p" />
                  </div>
                  <div>
                    <dt data-o="til">Total Interest (1 Year)</dt>
                    <dd data-o="ti" />
                  </div>
                  <div>
                    <dt>Total Payable</dt>
                    <dd data-o="tp" />
                  </div>
                </dl>
                <a className="cx-btn" href="#heroform">
                  Apply for LAS{' '}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <Link className="cx-lnk" href="/las-calculators">
                  Open the full calculator
                </Link>
              </div>
              <p className="cx-note">
                *Results are indicative and calculated using an interest-only servicing structure. The principal amount
                remains due at maturity. Actual loan terms, applicable interest, LTV, and processing fees are subject to
                credit approval, the type of securities pledged, and prevailing market conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
