export function Estimate() {
  return (
    <section className="sec" id="estimate">
      <div className="wrapx">
        <div className="sec-head">
          <h2 className="h2">
            ESOP financing <em>calculator</em>
          </h2>
          <p className="body">
            Enter your exercise details for a quick, indicative estimate of your funding. No sign-up needed.
          </p>
        </div>
        <div className="cx-cB">
          <div className="cx-pan">
            <div className="cx-cp cx-full" data-prod="esop" data-p="esop" id="cxp-esop">
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
              </div>
              <p className="cx-note">
                Please note that the above-mentioned processing fee and rate of interest are for calculation purposes
                only. The actual rates and fees may vary from one corporate to another. Infina Finance is not a broker,
                sale of shares is executed through our empanelled brokers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
