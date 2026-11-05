import Link from 'next/link';

export function Estimate() {
  return (
    <section className="sec" id="estimate">
      <div className="wrapx">
        <div className="sec-head">
          <h2 className="h2">
            Estimate before you <em>apply</em>
          </h2>
          <p className="body">Try your own numbers for a quick, indicative estimate. No sign-up needed.</p>
        </div>
        <div className="cx-cB" data-tabs="">
          <div className="cx-tabs" role="tablist">
            <button role="tab" data-t="las" id="cxt-las" aria-controls="cxp-las" aria-selected="true">
              LAS EMI Calculator
            </button>
            <button role="tab" data-t="esop" id="cxt-esop" aria-controls="cxp-esop" aria-selected="false">
              ESOP Funding Calculator
            </button>
            <button role="tab" data-t="lap" id="cxt-lap" aria-controls="cxp-lap" aria-selected="false">
              LAP Loan Eligibility Calculator
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
            <div
              className="cx-cp cx-full"
              data-prod="esop"
              data-p="esop"
              role="tabpanel"
              id="cxp-esop"
              aria-labelledby="cxt-esop"
              hidden
            >
              <div className="cx-ins">
                <div className="cx-fl">
                  <div className="cx-fl-h">
                    <label htmlFor="f4">Current Market Price (CMP)</label>
                    <div className="cx-inp">
                      <b>₹</b>
                      <input
                        id="f4"
                        type="text"
                        inputMode="decimal"
                        autoComplete="off"
                        data-k="cmp"
                        defaultValue="200"
                      />
                    </div>
                  </div>
                </div>
                <div className="cx-fl">
                  <div className="cx-fl-h">
                    <label htmlFor="f5">Exercise Price</label>
                    <div className="cx-inp">
                      <b>₹</b>
                      <input
                        id="f5"
                        type="text"
                        inputMode="decimal"
                        autoComplete="off"
                        data-k="ex"
                        defaultValue="100"
                      />
                    </div>
                  </div>
                </div>
                <div className="cx-fl">
                  <div className="cx-fl-h">
                    <label htmlFor="f6">Exercise Quantity</label>
                    <div className="cx-inp">
                      <b>#</b>
                      <input
                        id="f6"
                        type="text"
                        inputMode="decimal"
                        autoComplete="off"
                        data-k="qty"
                        defaultValue="1000"
                      />
                    </div>
                  </div>
                </div>
                <div className="cx-fl">
                  <div className="cx-fl-h">
                    <label htmlFor="f7">Loan Tenure</label>
                    <div className="cx-inp">
                      <input
                        id="f7"
                        type="text"
                        inputMode="decimal"
                        autoComplete="off"
                        data-k="days"
                        defaultValue="180"
                      />
                      <b>days</b>
                    </div>
                  </div>
                  <input
                    className="cx-rg"
                    type="range"
                    data-k="days"
                    aria-label="Loan Tenure"
                    min="1"
                    max="365"
                    step="1"
                    defaultValue="180"
                  />
                  <div className="cx-rm">
                    <span>1 day</span>
                    <span>365 days</span>
                  </div>
                </div>
                <div className="cx-fl">
                  <div className="cx-fl-h">
                    <label htmlFor="f8">Tax Rate</label>
                    <div className="cx-inp">
                      <input
                        id="f8"
                        type="text"
                        inputMode="decimal"
                        autoComplete="off"
                        data-k="tax"
                        defaultValue="30"
                      />
                      <b>%</b>
                    </div>
                  </div>
                  <input
                    className="cx-rg"
                    type="range"
                    data-k="tax"
                    aria-label="Tax Rate"
                    min="30"
                    max="39"
                    step="9"
                    defaultValue="30"
                  />
                  <div className="cx-rm">
                    <span>30%</span>
                    <span>39%</span>
                  </div>
                  <p className="cx-hint">Select your tax rate based on your income slab under the New Tax Regime.</p>
                </div>
                <details className="cx-kd">
                  <summary>Key Details and Interest Rate Slabs</summary>
                  <p className="cx-kd-t">Key Details</p>
                  <dl>
                    <div>
                      <dt>Infina Funding</dt>
                      <dd>Lower of 50% CMP or employer payable</dd>
                    </div>
                    <div>
                      <dt>Documentation Charges</dt>
                      <dd>Rs 999+18% GST</dd>
                    </div>
                    <div>
                      <dt>Processing Fees</dt>
                      <dd>0.25% of funding + 18% GST</dd>
                    </div>
                    <div>
                      <dt>Brokerage*</dt>
                      <dd>0.08% + applicable taxes</dd>
                    </div>
                  </dl>
                  <p className="cx-kd-t">Interest Rate Slabs</p>
                  <dl>
                    <div>
                      <dt>0 – 30 days</dt>
                      <dd>8.50% p.a.</dd>
                    </div>
                    <div>
                      <dt>31 – 90 days</dt>
                      <dd>9.00% p.a.</dd>
                    </div>
                    <div>
                      <dt>91 – 180 days</dt>
                      <dd>9.50% p.a.</dd>
                    </div>
                    <div>
                      <dt>181 – 365 days</dt>
                      <dd>10.50% p.a.</dd>
                    </div>
                  </dl>
                </details>
              </div>
              <div className="cx-res">
                <div className="cx-r-l">D. Infina Funding</div>
                <div className="cx-r-n" data-o="big">
                  ₹0
                </div>
                <dl className="cx-r-rows">
                  <div>
                    <dt>C. Total Payable to Employer</dt>
                    <dd data-o="C" />
                  </div>
                  <div>
                    <dt>E. Employee Contribution</dt>
                    <dd data-o="E" />
                  </div>
                  <div>
                    <dt>Estimated Cost of Funding</dt>
                    <dd data-o="cost" />
                  </div>
                </dl>
                <a className="cx-btn" href="#heroform">
                  Apply Now{' '}
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
                <a className="cx-lnk" href="/esop-calculators">
                  Open the full calculator
                </a>
              </div>
              <p className="cx-note">
                Please note that the above-mentioned processing fee and rate of interest are for calculation purposes
                only. The actual rates and fees may vary from one corporate to another. Infina Finance is not a broker,
                sale of shares is executed through our empanelled brokers.
              </p>
            </div>
            <div
              className="cx-cp cx-full"
              data-prod="lap"
              data-p="lap"
              role="tabpanel"
              id="cxp-lap"
              aria-labelledby="cxt-lap"
              hidden
            >
              <div className="cx-ins">
                <div className="cx-fl">
                  <label htmlFor="f9">Type of Profile</label>
                  <select id="f9" className="cx-sel" data-k="prof" data-sel="1">
                    <option value="s">Salaried</option>
                    <option value="e">Self Employed</option>
                  </select>
                  <p className="cx-hint">Select your profile type</p>
                </div>
                <div className="cx-fl">
                  <label htmlFor="f10">Nature of Property</label>
                  <select id="f10" className="cx-sel" data-k="prop" data-sel="1">
                    <option value="r">Residential</option>
                    <option value="c">Commercial</option>
                    <option value="i">Industrial</option>
                  </select>
                  <p className="cx-hint">Select the type of your property</p>
                </div>
                <div className="cx-fl">
                  <div className="cx-fl-h">
                    <label htmlFor="f11">Market Value of Property</label>
                    <div className="cx-inp">
                      <b>₹</b>
                      <input
                        id="f11"
                        type="text"
                        inputMode="decimal"
                        autoComplete="off"
                        data-k="mv"
                        defaultValue="2,00,00,000"
                      />
                    </div>
                  </div>
                  <p className="cx-hint">Enter the market value of your property</p>
                </div>
                <div className="cx-fl">
                  <div className="cx-fl-h">
                    <label htmlFor="f12">Monthly Income</label>
                    <div className="cx-inp">
                      <b>₹</b>
                      <input
                        id="f12"
                        type="text"
                        inputMode="decimal"
                        autoComplete="off"
                        data-k="inc"
                        defaultValue="2,00,000"
                      />
                    </div>
                  </div>
                  <p className="cx-hint">Enter your total monthly income</p>
                </div>
                <div className="cx-fl">
                  <div className="cx-fl-h">
                    <label htmlFor="f13">Monthly Obligation</label>
                    <div className="cx-inp">
                      <b>₹</b>
                      <input
                        id="f13"
                        type="text"
                        inputMode="decimal"
                        autoComplete="off"
                        data-k="obl"
                        defaultValue="30,000"
                      />
                    </div>
                  </div>
                  <p className="cx-hint">Enter your monthly financial obligations</p>
                </div>
                <div className="cx-fl">
                  <div className="cx-fl-h">
                    <label htmlFor="f14">Interest Rate</label>
                    <div className="cx-inp">
                      <input
                        id="f14"
                        type="text"
                        inputMode="decimal"
                        autoComplete="off"
                        data-k="roi"
                        defaultValue="11"
                      />
                      <b>%</b>
                    </div>
                  </div>
                  <p className="cx-hint">Enter the interest rate per annum</p>
                </div>
                <div className="cx-fl">
                  <div className="cx-fl-h">
                    <label htmlFor="f15">Tenure</label>
                    <div className="cx-inp">
                      <input
                        id="f15"
                        type="text"
                        inputMode="decimal"
                        autoComplete="off"
                        data-k="ten"
                        defaultValue="180"
                      />
                      <b>months</b>
                    </div>
                  </div>
                  <input
                    className="cx-rg"
                    type="range"
                    data-k="ten"
                    aria-label="Tenure"
                    min="12"
                    max="180"
                    step="12"
                    defaultValue="180"
                  />
                  <div className="cx-rm">
                    <span>12 months</span>
                    <span>180 months</span>
                  </div>
                  <p className="cx-hint">Select the loan tenure in months</p>
                </div>
              </div>
              <div className="cx-res">
                <div className="cx-r-l">Final Loan Amount</div>
                <div className="cx-r-n" data-o="big">
                  ₹0
                </div>
                <dl className="cx-r-rows">
                  <div>
                    <dt>Equated Monthly Installment (EMI)</dt>
                    <dd data-o="emi" />
                  </div>
                </dl>
                <a className="cx-btn" href="#heroform">
                  Apply Now{' '}
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
                <Link className="cx-lnk" href="/loan-against-property#lap-eligibility">
                  Open the full calculator
                </Link>
              </div>
              <p className="cx-note">
                Final interest rates may vary subject to documentation and customer profile. The values, calculations,
                and results provided are for informational purposes only and may vary based on Infina&apos;s applicable
                parameters and policies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
