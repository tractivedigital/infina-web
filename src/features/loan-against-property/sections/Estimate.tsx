export function Estimate() {
  return (
    <section className="sec" id="estimate">
      <div className="wrapx">
        <div className="sec-head">
          <h2 className="h2">
            Loan against property eligibility <em>calculator</em>
          </h2>
          <p className="body">
            Enter your profile, property and income for a quick, indicative estimate of your loan amount and monthly
            instalment.
          </p>
        </div>
        <div className="cx-cB">
          <div className="cx-pan">
            <div className="cx-cp cx-full" data-prod="lap" data-p="lap" id="cxp-lap">
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
