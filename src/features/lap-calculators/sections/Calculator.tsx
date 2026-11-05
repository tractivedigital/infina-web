import Link from 'next/link';

export function Calculator() {
  return (
    <section className="sec" id="calculator" aria-label="Calculators">
      <div className="wrapx">
        <h2 className="sr">EMI and eligibility calculators</h2>
        <div className="cx-cB" data-tabs="">
          <div className="cx-tabs" role="tablist">
            <button role="tab" data-t="emi" id="cxt-emi" aria-controls="cxp-emi" aria-selected="true">
              EMI calculator
            </button>
            <button role="tab" data-t="elig" id="cxt-elig" aria-controls="cxp-elig" aria-selected="false">
              Eligibility calculator
            </button>
          </div>
          <div className="cx-pan">
            <div
              className="cx-cp cx-full"
              data-prod="emi"
              data-p="emi"
              role="tabpanel"
              id="cxp-emi"
              aria-labelledby="cxt-emi"
            >
              <div className="cx-ins">
                <div className="cx-fl">
                  <div className="cx-fl-h">
                    <label htmlFor="p1">Loan Amount</label>
                    <div className="cx-inp">
                      <b>₹</b>
                      <input
                        id="p1"
                        type="text"
                        inputMode="decimal"
                        autoComplete="off"
                        data-k="amt"
                        defaultValue="50,00,000"
                      />
                    </div>
                  </div>
                  <p className="cx-wd" data-w="amt" aria-live="polite" />
                  <input
                    className="cx-rg"
                    type="range"
                    data-k="amt"
                    aria-label="Loan Amount"
                    min="2000000"
                    max="100000000"
                    step="100000"
                    defaultValue="5000000"
                  />
                  <div className="cx-rm">
                    <span>₹20 LAKH</span>
                    <span>₹10 CRORE</span>
                  </div>
                </div>
                <div className="cx-fl">
                  <div className="cx-fl-h">
                    <label htmlFor="p2">Tenure</label>
                    <div className="cx-inp">
                      <input
                        id="p2"
                        type="text"
                        inputMode="decimal"
                        autoComplete="off"
                        data-k="ten"
                        defaultValue="180"
                      />
                      <b>months</b>
                    </div>
                  </div>
                  <p className="cx-wd" data-w="ten" aria-live="polite" />
                  <input
                    className="cx-rg"
                    type="range"
                    data-k="ten"
                    aria-label="Tenure"
                    min="36"
                    max="180"
                    step="12"
                    defaultValue="180"
                  />
                  <div className="cx-rm">
                    <span>36 months</span>
                    <span>180 months</span>
                  </div>
                </div>
                <div className="cx-fl">
                  <div className="cx-fl-h">
                    <label htmlFor="p3">Rate of Interest</label>
                    <div className="cx-inp">
                      <input
                        id="p3"
                        type="text"
                        inputMode="decimal"
                        autoComplete="off"
                        data-k="roi"
                        defaultValue="11.00"
                      />
                      <b>% p.a.</b>
                    </div>
                  </div>
                  <p className="cx-wd" data-w="roi" aria-live="polite" />
                </div>
              </div>
              <div className="cx-res">
                <div className="cx-r-l">Monthly EMI</div>
                <div className="cx-r-n" data-o="big">
                  ₹0
                </div>
                <dl className="cx-r-rows">
                  <div>
                    <dt>Principal Amount</dt>
                    <dd data-o="p" />
                  </div>
                  <div>
                    <dt>Total Interest</dt>
                    <dd data-o="ti" />
                  </div>
                  <div>
                    <dt>Total Payable</dt>
                    <dd data-o="tp" />
                  </div>
                </dl>
                <Link className="cx-btn" data-cta="emi" href="/loan-against-property#heroform">
                  Apply for ₹0{' '}
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
                </Link>
                <Link className="cx-lnk" href="/loan-against-property">
                  See the loan against property product
                </Link>
              </div>
              <p className="cx-note">
                *Results are indicative. They use a standard reducing balance EMI. Actual rate, loan amount, charges and
                terms depend on documentation, the property valuation and credit approval.
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
                    <label htmlFor="q1">Monthly income</label>
                    <div className="cx-inp">
                      <b>₹</b>
                      <input
                        id="q1"
                        type="text"
                        inputMode="decimal"
                        autoComplete="off"
                        data-k="inc"
                        defaultValue="2,00,000"
                      />
                    </div>
                  </div>
                  <p className="cx-wd" data-w="inc" aria-live="polite" />
                </div>
                <div className="cx-fl">
                  <div className="cx-fl-h">
                    <label htmlFor="q2">Monthly obligations</label>
                    <div className="cx-inp">
                      <b>₹</b>
                      <input
                        id="q2"
                        type="text"
                        inputMode="decimal"
                        autoComplete="off"
                        data-k="obl"
                        defaultValue="30,000"
                      />
                    </div>
                  </div>
                  <p className="cx-wd" data-w="obl" aria-live="polite" />
                </div>
                <p className="cx-hint">
                  Obligations are the EMIs and other fixed payments you already make each month.
                </p>
                <div className="cx-fl">
                  <div className="cx-fl-h">
                    <label htmlFor="q3">Tenure</label>
                    <div className="cx-inp">
                      <input
                        id="q3"
                        type="text"
                        inputMode="decimal"
                        autoComplete="off"
                        data-k="ten"
                        defaultValue="180"
                      />
                      <b>months</b>
                    </div>
                  </div>
                  <p className="cx-wd" data-w="ten" aria-live="polite" />
                  <input
                    className="cx-rg"
                    type="range"
                    data-k="ten"
                    aria-label="Tenure"
                    min="36"
                    max="180"
                    step="12"
                    defaultValue="180"
                  />
                  <div className="cx-rm">
                    <span>36 months</span>
                    <span>180 months</span>
                  </div>
                </div>
                <div className="cx-fl">
                  <div className="cx-fl-h">
                    <label htmlFor="q4">Rate of Interest</label>
                    <div className="cx-inp">
                      <input
                        id="q4"
                        type="text"
                        inputMode="decimal"
                        autoComplete="off"
                        data-k="roi"
                        defaultValue="11.00"
                      />
                      <b>% p.a.</b>
                    </div>
                  </div>
                  <p className="cx-wd" data-w="roi" aria-live="polite" />
                </div>
              </div>
              <div className="cx-res">
                <div className="cx-r-l">Eligible Loan Amount</div>
                <div className="cx-r-n" data-o="big">
                  ₹0
                </div>
                <dl className="cx-r-rows">
                  <div>
                    <dt>Monthly EMI you can afford</dt>
                    <dd data-o="emi" />
                  </div>
                </dl>
                <Link className="cx-btn" data-cta="elig" href="/loan-against-property#heroform">
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
                </Link>
                <button className="cx-lnk cx-lbtn" type="button" data-use="">
                  Calculate EMI on this amount
                </button>
              </div>
              <p className="cx-note">
                *Indicative. The calculator assumes your EMI can be up to 60% of your income after existing obligations.
                The lender also checks the property value, the property type and your credit profile, so your final loan
                amount can be lower.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
