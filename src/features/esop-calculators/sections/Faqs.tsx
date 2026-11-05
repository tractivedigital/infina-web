import Link from 'next/link';

export function Faqs() {
  return (
    <section className="sec" id="faqs">
      <div className="wrapx">
        <div className="fq-w">
          <div className="sec-head">
            <h2 className="h2">
              ESOP funding calculator <em>FAQs</em>
            </h2>
          </div>
          <div className="fq-l">
            <div className="fq-grp">
              <p className="fq-gl">Using the calculator</p>
              <details className="fq-d" open>
                <summary>
                  <h3>What is an ESOP funding calculator?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  It is a free tool that estimates the cash you need to exercise your vested employee stock options with
                  funding from Infina. It shows what you owe your employer, how much Infina can fund, your own
                  contribution and the cost of the funding.
                </p>
              </details>
              <details className="fq-d" open>
                <summary>
                  <h3>How does the ESOP funding calculator work?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  Enter the current market price (CMP), your exercise price, the number of options you are exercising,
                  the loan tenure in days and your tax rate. The calculator works out the exercise cost, the perquisite
                  tax, the total payable to your employer, the Infina funding, your contribution, and the interest, fees
                  and total cost of funding.
                </p>
              </details>
              <details className="fq-d" open>
                <summary>
                  <h3>How is the cost of exercising ESOPs calculated?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  Exercise cost is the exercise price multiplied by the number of options. Perquisite tax is (CMP minus
                  exercise price) multiplied by the quantity and your tax rate. The total payable to your employer is
                  the sum of the two.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>What is perquisite tax on ESOPs?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  When you exercise ESOPs, the difference between the market price and your exercise price is treated as
                  a perquisite and taxed as part of your salary income. Your employer usually deducts this tax, so you
                  pay it along with the exercise cost.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>Which tax rate should I select in the calculator?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  Select the rate for your income slab under the New Tax Regime. The calculator offers 30% to 39%. Check
                  with your tax advisor for the exact rate that applies to you.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>Is this calculator free, and are the results final?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  It is free and needs no sign-up. The results are indicative. Actual rates, fees and the funding amount
                  depend on your employer, the securities and credit approval.
                </p>
              </details>
            </div>
            <div className="fq-grp">
              <p className="fq-gl">Funding, interest and fees</p>
              <details className="fq-d">
                <summary>
                  <h3>How much funding will Infina provide?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  Infina funds the lower of 50% of the current market price of the shares or the amount payable to your
                  employer. Anything above that is your own contribution.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>What is the employee contribution?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  It is the part of the amount payable to your employer that Infina does not fund. It is paid in cash or
                  by pledging additional securities.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>What interest rate does the calculator use?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  Interest is charged in slabs by the number of days: 8.50% p.a. for days 1 to 30, 9.00% p.a. for days
                  31 to 90, 9.50% p.a. for days 91 to 180 and 10.50% p.a. for days 181 to 365. The calculator adds up
                  the interest for each slab you use. Actual rates can vary from one employer to another.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>What fees are included in the calculator?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  The cost of funding includes interest, a processing fee of 0.25% of the funding plus 18% GST, and a
                  documentation charge of ₹999 plus 18% GST, which is ₹1,179. Brokerage of 0.08% plus applicable taxes
                  applies when shares are sold and is not part of the funding cost shown.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>What loan tenure can I choose?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  The calculator covers 1 to 365 days. Choose a tenure that fits when you plan to sell the shares. Your
                  Infina team confirms the tenure available for your case.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>Is Infina a broker?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>No. Infina Finance is not a broker. Shares are sold through Infina&apos;s empanelled brokers.</p>
              </details>
            </div>
            <div className="fq-grp">
              <p className="fq-gl">Results and applying</p>
              <details className="fq-d">
                <summary>
                  <h3>Can I export the result?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  Yes. Use Export to Excel under the results to download your inputs and the full breakup as a
                  spreadsheet.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>How do I apply for ESOP financing?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  Choose Apply Now to start. Infina asks for your identity documents, salary slip and ESOP details,
                  confirms your funding and terms, and releases the funds once your application is approved. You can
                  read the full <Link href="/esop-financing">ESOP financing page</Link> before you start.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
