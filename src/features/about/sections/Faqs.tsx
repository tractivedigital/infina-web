import Link from 'next/link';

export function Faqs() {
  return (
    <section className="ab-band" id="faqs" aria-labelledby="faq-h">
      <div className="ab-wrap">
        <div className="ab-sec-head">
          <h2 className="sec-title" id="faq-h">
            Questions about <span className="hl">Infina</span>
          </h2>
        </div>
        <div className="ab-faq">
          <details open>
            <summary>Is Infina Finance registered with the RBI?</summary>
            <div className="fq-a">
              <p>
                Yes. Infina Finance Private Limited is a Non-Banking Financial Company registered with the Reserve Bank
                of India. Its Corporate Identification Number (CIN) is U67120MH1996PTC098584.
              </p>
            </div>
          </details>
          <details open>
            <summary>When was Infina Finance founded?</summary>
            <div className="fq-a">
              <p>
                Infina Finance was founded in 1996. Its registered office is in Kalina, Mumbai, and it now serves
                customers through offices in Mumbai, New Delhi, Surat, Ahmedabad and Pune.
              </p>
            </div>
          </details>
          <details open>
            <summary>Who owns Infina Finance?</summary>
            <div className="fq-a">
              <p>
                Infina is majority owned by the Kotak family. Kotak Mahindra Bank continues to hold 19% through its
                subsidiary.
                <span className="cf">To confirm</span>
              </p>
            </div>
          </details>
          <details>
            <summary>Who runs Infina Finance?</summary>
            <div className="fq-a">
              <p>
                Sudhakar Shanbhag is the Whole-time Director and CEO, and Dipak Gupta is the Independent Director and
                Chairperson. Keyur Gandhi is the Chief Financial Officer. The full board and management team are listed
                on this page.
              </p>
            </div>
          </details>
          <details>
            <summary>What products does Infina Finance offer?</summary>
            <div className="fq-a">
              <p>
                Infina offers <Link href="/loan-against-securities">Loan Against Securities</Link>,{' '}
                <Link href="/loan-against-property">Loan Against Property</Link>,{' '}
                <Link href="/corporate-real-estate">Corporate Real Estate</Link> financing for developers, and{' '}
                <Link href="/esop-financing">ESOP Financing</Link> for employees who want to exercise stock options.
              </p>
            </div>
          </details>
          <details>
            <summary>Where are Infina Finance offices?</summary>
            <div className="fq-a">
              <p>
                The registered office is at Dani Corporate Park, Kalina, Santacruz (East), Mumbai 400098. Branch offices
                are in New Delhi, Surat, Ahmedabad and Pune. Offices are open Monday to Friday, 9am to 6pm.
              </p>
            </div>
          </details>
          <details>
            <summary>How do I contact Infina Finance or raise a complaint?</summary>
            <div className="fq-a">
              <p>
                Call 022-66808304 or use the <a href="https://www.infina.co.in/contact">contact page</a>. For a
                complaint, write to <a href="mailto:customerservice@infina.in">customerservice@infina.in</a>.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
