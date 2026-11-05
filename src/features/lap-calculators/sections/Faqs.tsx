import Link from 'next/link';

export function Faqs() {
  return (
    <section className="sec" id="faqs">
      <div className="wrapx">
        <div className="fq-w">
          <div className="sec-head">
            <h2 className="h2">
              Loan against property calculator <em>FAQs</em>
            </h2>
          </div>
          <div className="fq-l">
            <div className="fq-grp">
              <p className="fq-gl">Using the calculator</p>
              <details className="fq-d" open>
                <summary>
                  <h3>What is a loan against property calculator?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  It is a free tool that estimates the monthly EMI on a loan against property and how much you may be
                  able to borrow. Enter a loan amount, tenure and rate to see the EMI, or enter your income and
                  obligations to see an indicative loan amount.
                </p>
              </details>
              <details className="fq-d" open>
                <summary>
                  <h3>How is the EMI on a loan against property calculated?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  EMI = P × r × (1 + r)^n ÷ ((1 + r)^n − 1), where P is the loan amount, r is the monthly rate (annual
                  rate ÷ 12 ÷ 100) and n is the number of months. For ₹50,00,000 at 11% p.a. for 180 months, the EMI is
                  ₹56,830.
                </p>
              </details>
              <details className="fq-d" open>
                <summary>
                  <h3>Which interest rate does the calculator use?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  The calculators start at 11% p.a. so you can see a sample result. Change it to the rate you are
                  offered. Your actual rate depends on your profile, the property, the loan amount and the tenure, and
                  is stated in your sanction letter.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>Is this calculator free, and do I need to sign up?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  Yes, it is free and needs no sign-up, login or personal details. The results are indicative and are
                  not an offer of credit.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>How can I lower my EMI?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  A longer tenure lowers the EMI but raises the total interest you pay. A smaller loan amount or a lower
                  rate also lowers it. Try different tenures in the EMI calculator to see the trade-off.
                </p>
              </details>
            </div>
            <div className="fq-grp">
              <p className="fq-gl">Eligibility and LTV</p>
              <details className="fq-d">
                <summary>
                  <h3>
                    How is loan eligibility calculated?
                    <span className="cf">To confirm</span>
                  </h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  The eligibility calculator takes your monthly income, subtracts your existing monthly obligations, and
                  assumes up to 60% of that can go towards the new EMI
                  <span className="cf">To confirm</span>. It then works out the loan that EMI can repay at your chosen
                  rate and tenure. With ₹2,00,000 income, ₹30,000 obligations, 11% and 180 months, that is an EMI of
                  ₹1,02,000 and a loan of about ₹89,74,158.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>
                    What is the minimum loan amount and tenure?
                    <span className="cf">To confirm</span>
                  </h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>Loans start from ₹20 lakh. You can choose a tenure from 36 to 180 months.</p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>
                    What is the loan to value (LTV) ratio?
                    <span className="cf">To confirm</span>
                  </h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  Loan to value is the share of your property&apos;s value that you can borrow. It depends on the
                  property type and your profile, and your Infina team confirms the figure for your property.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>Does my property value change the result?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  The eligibility calculator is based on income, obligations, rate and tenure. When you apply, the
                  lender also values the property and applies a loan to value limit, so the final amount can be lower
                  than the calculator shows.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>How do my existing EMIs affect eligibility?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  Every rupee of existing monthly obligations reduces the EMI you can afford, and so the loan you can
                  get. Closing or reducing an existing loan before you apply can raise your eligible amount.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>Which properties can I mortgage?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  Residential properties such as villas, studio apartments, flats and duplexes. Commercial properties
                  such as offices, shops and warehouses. Industrial properties such as factories and manufacturing
                  units. Your Infina team confirms what is accepted for your property.
                </p>
              </details>
            </div>
            <div className="fq-grp">
              <p className="fq-gl">Cost and applying</p>
              <details className="fq-d">
                <summary>
                  <h3>Are fees and charges included in the calculator?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  No. The calculator shows EMI and interest only. Infina&apos;s fees and charges matrix lists a
                  processing fee of up to 3%, legal and tech fees per property and stamp duty at actuals. The full{' '}
                  <a href="/docs/lap-charges.pdf" target="_blank" rel="noopener">
                    list of charges
                  </a>{' '}
                  is available as a PDF.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>Can I repay early?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  Part payments of up to 25% in a financial year carry no charge. Part payment above 25% carries a 4%
                  charge on the excess, and full prepayment or foreclosure carries a 4% charge. Floating rate loans to
                  individuals for non-business use carry no prepayment charge.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>How do I apply for a loan against property?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  Share your name, mobile number and the loan amount you need. Infina then asks for your income and
                  property details and documents, values the property, and confirms your loan amount and terms once your
                  application is approved. You can read the <Link href="/loan-against-property">full product page</Link>{' '}
                  before you start.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
