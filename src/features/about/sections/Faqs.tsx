import Link from 'next/link';

export function Faqs() {
  return (
    <section className="ab-band" id="faqs" aria-labelledby="faq-h">
      <div className="ab-wrap">
        <div className="fq-w">
          <div className="sec-head">
            <h2 className="sec-title" id="faq-h">
              Questions about <span className="hl">Infina</span>
            </h2>
          </div>
          <div className="fq-l">
            <div className="fq-grp">
              <details className="fq-d">
                <summary>
                  <h3>Is Infina Finance registered with the RBI?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  Yes. Infina Finance Private Limited is a Non-Banking Financial Company registered with the Reserve
                  Bank of India. Its Corporate Identification Number (CIN) is U67120MH1996PTC098584.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>When was Infina Finance founded?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  Infina Finance was founded in 1996. Its registered office is in Kalina, Mumbai, and it now serves
                  customers through offices in Mumbai, New Delhi, Surat, Ahmedabad and Pune.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>Who owns Infina Finance?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  Infina is majority owned by the Kotak family. Kotak Mahindra Bank continues to hold 19% through its
                  subsidiary.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>Who runs Infina Finance?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  Sudhakar Shanbhag is the Whole-time Director and CEO, and Dipak Gupta is the Independent Director and
                  Chairperson. Keyur Gandhi is the Chief Financial Officer. The full board and management team are
                  listed on this page.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>What products does Infina Finance offer?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  Infina offers <Link href="/loan-against-securities">Loan Against Securities</Link>,{' '}
                  <Link href="/loan-against-property">Loan Against Property</Link>,{' '}
                  <Link href="/corporate-real-estate">Corporate Real Estate</Link> financing for developers, and{' '}
                  <Link href="/esop-financing">ESOP Financing</Link> for employees who want to exercise stock options.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>Where are Infina Finance offices?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  The registered office is at Dani Corporate Park, Kalina, Santacruz (East), Mumbai 400098. Branch
                  offices are in New Delhi, Surat, Ahmedabad and Pune. Offices are open Monday to Friday, 9am to 6pm.
                </p>
              </details>
              <details className="fq-d">
                <summary>
                  <h3>How do I contact Infina Finance or raise a complaint?</h3>
                  <span className="fq-ch" aria-hidden="true" />
                </summary>
                <p>
                  Call 022-66808304 or use the <Link href="/contact">contact page</Link>. For a complaint, write to{' '}
                  <a href="mailto:customerservice@infina.in">customerservice@infina.in</a>.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
