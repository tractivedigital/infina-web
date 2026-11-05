import Link from 'next/link';

export function Faqs() {
  return (
    <section className="sec" id="faqs">
      <div className="wrapx">
        <div className="fq-w">
          <div className="sec-head">
            <h2 className="h2">
              Loan against securities calculator <em>FAQs</em>
            </h2>
          </div>
          <div className="fq-l">
            <div className="fq-grp">
              <p className="fq-gl">Using the calculator</p>
              <details className="fq-d" open>
                <summary>
                  <h3>What is a loan against securities calculator?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  It is a free tool that estimates the interest you will pay on a loan against shares or mutual funds,
                  and how much you can borrow against your holdings. Enter a loan amount, a tenure and a rate to see the
                  monthly interest, or enter the value of your holdings to see your eligible loan amount.
                </p>
              </details>
              <details className="fq-d" open>
                <summary>
                  <h3>How is interest calculated on a loan against securities?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  Monthly interest is the loan amount multiplied by the annual rate, divided by 12. Total interest is
                  the monthly interest multiplied by the number of months. For ₹25,00,000 at 10.5% p.a. for 12 months,
                  monthly interest is ₹21,875 and total interest is ₹2,62,500.
                </p>
              </details>
              <details className="fq-d" open>
                <summary>
                  <h3>Is there an EMI on a loan against securities?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  This calculator uses an interest-only structure. You pay interest each month and the principal is
                  repaid at the end of the tenure, so it shows monthly interest and not an EMI that includes principal.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>Which interest rate does the calculator use?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  The interest calculator starts at 10.50% p.a. so you can see a sample result. Change it to the rate
                  you are offered. Infina&apos;s loan against securities rates start from 10.5% p.a. and your rate is
                  confirmed at sanction.
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
                  <h3>Is the result final?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  No. The results are indicative. Actual interest, LTV and processing fees depend on credit approval,
                  the securities pledged and market conditions at the time of sanction.
                </p>
              </details>
            </div>
            <div className="fq-grp">
              <p className="fq-gl">Eligibility and LTV</p>
              <details className="fq-d">
                <summary>
                  <h3>How much loan can I get against shares?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  Up to 50% of the market value of your listed equity shares. If your shares are worth ₹10,00,000, you
                  can borrow up to ₹5,00,000. Use the eligibility calculator to add your own figures.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>How much loan can I get against mutual funds?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  Up to 50% of the value of equity mutual funds and up to 85% of the value of debt mutual funds. So
                  ₹10,00,000 of debt mutual funds can support a loan of up to ₹8,50,000.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>What is the loan to value (LTV) ratio?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  Loan to value is the share of your holdings&apos; market value that you can borrow. A 50% LTV means
                  you can borrow up to half of what your securities are worth. It differs by type of security, and your
                  final limit is confirmed by Infina.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>
                    What is the minimum and maximum loan amount?
                    <span className="cf">To confirm</span>
                  </h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  The calculator covers loan amounts from ₹25,000 to ₹5 crore and tenures from 1 to 36 months. Your
                  actual limit depends on the securities you pledge and credit approval.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>Which shares and mutual funds are accepted?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  Infina accepts approved securities only. Check the current{' '}
                  <a href="/docs/approved-securities-list-august-2026.pdf" target="_blank" rel="noopener">
                    list of approved shares
                  </a>{' '}
                  before you apply, because a share that is not on the list cannot be pledged.
                </p>
              </details>
            </div>
            <div className="fq-grp">
              <p className="fq-gl">Cost, risk and applying</p>
              <details className="fq-d">
                <summary>
                  <h3>What happens if the value of my securities falls?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  Your limit is tied to the market value of the pledged securities. If the value falls and your loan
                  goes above the permitted limit, you can be asked to add securities or repay part of the loan. The
                  steps are set out in your loan agreement.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>Are processing fees included in the calculator?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  No. The calculator shows interest only. Processing fees, document charges and other charges are listed
                  in Infina&apos;s{' '}
                  <a href="/docs/list-of-charges-las-esop-unsecured.pdf" target="_blank" rel="noopener">
                    list of charges
                  </a>{' '}
                  and confirmed in your sanction letter.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>How do I apply for a loan against securities?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  Choose Check Eligibility and sign in with your mobile number. The Infina team then guides you through
                  pledging your securities and the sanction. You can also read the{' '}
                  <Link href="/loan-against-securities">full product page</Link> before you start.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
