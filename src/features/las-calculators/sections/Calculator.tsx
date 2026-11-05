import Link from 'next/link';

export function Calculator() {
  return (
    <section className="sec" id="calculator" aria-label="Calculators">
      <div className="wrapx">
        <h2 className="sr">Interest and eligibility calculators</h2>
        <div className="cx-cB" data-tabs="">
          <div className="cx-tabs" role="tablist">
            <button role="tab" data-t="las" id="cxt-las" aria-controls="cxp-las" aria-selected="true">
              Interest calculator
            </button>
            <button role="tab" data-t="elig" id="cxt-elig" aria-controls="cxp-elig" aria-selected="false">
              Eligibility calculator
            </button>
          </div>
          <div className="cx-pan">
            <div
              className="cx-cp cx-full"
              data-prod="las"
              data-p="las"
              role="tabpanel"
              id="cxp-las"
              aria-labelledby="cxt-las"
            >
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
                <a className="cx-btn" data-cta="las" href="https://www.digilas.infina.co.in/signin/otp/">
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
                <Link className="cx-lnk" href="/loan-against-securities">
                  See the loan against securities product
                </Link>
              </div>
              <p className="cx-note">
                *Results are indicative and calculated using an interest-only servicing structure. The principal amount
                remains due at maturity. Actual loan terms, applicable interest, LTV, and processing fees are subject to
                credit approval, the type of securities pledged, and prevailing market conditions.
              </p>
            </div>
            <div
              className="cx-cp cx-full"
              data-prod="elig"
              data-p="elig"
              role="tabpanel"
              id="cxp-elig"
              aria-labelledby="cxt-elig"
              hidden
            >
              <div className="cx-ins">
                <div className="cx-fl">
                  <div className="cx-fl-h">
                    <label htmlFor="g1">Value of listed shares</label>
                    <div className="cx-inp">
                      <b>₹</b>
                      <input
                        id="g1"
                        type="text"
                        inputMode="decimal"
                        autoComplete="off"
                        data-k="sh"
                        defaultValue="10,00,000"
                      />
                    </div>
                  </div>
                  <p className="cx-wd" data-w="sh" aria-live="polite" />
                </div>
                <div className="cx-fl">
                  <div className="cx-fl-h">
                    <label htmlFor="g2">Value of equity mutual funds</label>
                    <div className="cx-inp">
                      <b>₹</b>
                      <input
                        id="g2"
                        type="text"
                        inputMode="decimal"
                        autoComplete="off"
                        data-k="eq"
                        defaultValue="5,00,000"
                      />
                    </div>
                  </div>
                  <p className="cx-wd" data-w="eq" aria-live="polite" />
                </div>
                <div className="cx-fl">
                  <div className="cx-fl-h">
                    <label htmlFor="g3">Value of debt mutual funds</label>
                    <div className="cx-inp">
                      <b>₹</b>
                      <input
                        id="g3"
                        type="text"
                        inputMode="decimal"
                        autoComplete="off"
                        data-k="db"
                        defaultValue="5,00,000"
                      />
                    </div>
                  </div>
                  <p className="cx-wd" data-w="db" aria-live="polite" />
                </div>
                <p className="cx-hint">
                  Enter the current market value of what you plan to pledge. Leave a field at 0 if you do not hold it.
                </p>
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
                <div className="cx-r-l">Eligible Loan Amount</div>
                <div className="cx-r-n" data-o="big">
                  ₹0
                </div>
                <dl className="cx-r-rows">
                  <div>
                    <dt>Listed shares (50%)</dt>
                    <dd data-o="a" />
                  </div>
                  <div>
                    <dt>Equity mutual funds (50%)</dt>
                    <dd data-o="b" />
                  </div>
                  <div>
                    <dt>Debt mutual funds (85%)</dt>
                    <dd data-o="c" />
                  </div>
                  <div>
                    <dt>Total portfolio value</dt>
                    <dd data-o="tv" />
                  </div>
                </dl>
                <a className="cx-btn" href="https://www.digilas.infina.co.in/signin/otp/" data-cta="elig">
                  Apply for up to ₹0{' '}
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
                <button className="cx-lnk cx-lbtn" type="button" data-use="">
                  Calculate interest on this amount
                </button>
              </div>
              <p className="cx-note">
                *Results are indicative and use the maximum loan to value shown for each type of security. Your actual
                limit depends on the securities Infina accepts, their market value on the day, and credit approval.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
