import Image from 'next/image';

export function Content() {
  return (
    <section className="sec" style={{ paddingTop: '8px', background: 'transparent' }}>
      <div className="wrapx">
        <div className="in-grid two" style={{ alignItems: 'stretch' }}>
          <div className="in-card">
            <h2>Registered office</h2>
            <p style={{ fontWeight: '600' }}>Infina Finance Private Limited</p>
            <p style={{ marginTop: '4px' }}>
              7th Floor, Sheil Estate, Dani Corporate Park, 158, C.S.T Road, Kalina, Santacruz (East), Mumbai-400098.
            </p>
            <p style={{ marginTop: '12px' }}>
              Phone: <a href="tel:+912266808304">022-66808304</a>, <a href="tel:+912266808302">8302</a>,{' '}
              <a href="tel:+912266808312">8312</a>, <a href="tel:+912266808337">8337</a>,{' '}
              <a href="tel:+912266808332">8332</a>
            </p>
            <dl className="in-dl" style={{ gridTemplateColumns: 'minmax(0,1fr)' }}>
              <div>
                <dt>CIN</dt>
                <dd>U67120MH1996PTC098584</dd>
              </div>
              <div>
                <dt>IRDAI Corporate Agent Registration No</dt>
                <dd>CA1079</dd>
              </div>
            </dl>
            <div className="in-links">
              <a
                className="btn out"
                href="https://www.google.com/maps/search/?api=1&query=Infina+Finance+Private+Limited+Dani+Corporate+Park+Kalina+Mumbai"
                rel="noopener"
                target="_blank"
              >
                View map
              </a>
            </div>
          </div>
          <div className="in-map">
            <div className="in-map-ph" aria-hidden="true">
              <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
                <rect width={400} height={300} fill="#EEF3F9" />
                <path
                  d="M-10 210 C90 150 170 190 260 120 S380 60 420 40"
                  stroke="#C9D6E6"
                  strokeWidth="26"
                  fill="none"
                />
                <path
                  d="M60 -10 L120 310 M230 -10 L290 310 M-10 90 L410 130"
                  stroke="#DCE5F0"
                  strokeWidth="10"
                  fill="none"
                />
                <rect x="250" y="190" width={70} height={46} rx="6" fill="#DEEBF6" />
                <rect x="60" y="40" width={64} height={40} rx="6" fill="#DEEBF6" />
              </svg>
              <div className="in-pin">
                <svg width="40" height="52" viewBox="0 0 40 52">
                  <path d="M20 0C9 0 0 9 0 20c0 15 20 32 20 32s20-17 20-32C40 9 31 0 20 0z" fill="#C8121A" />
                  <circle cx="20" cy="20" r="7.5" fill="#fff" />
                </svg>
                <span>Infina Finance, Kalina, Mumbai</span>
              </div>
            </div>
            <iframe
              title="Map of the Infina Finance registered office in Kalina, Mumbai"
              src="https://maps.google.com/maps?q=Infina+Finance+Private+Limited+Dani+Corporate+Park+Kalina+Mumbai&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <h2 className="h2" style={{ marginTop: '48px', fontSize: '28px', lineHeight: '36px' }}>
          Write <em>to us</em>
        </h2>
        <div className="in-grid two" style={{ marginTop: '16px' }}>
          <div className="in-card">
            <p style={{ marginTop: '0' }}>
              For any queries or complaints regarding <strong>Loan Against Securities, Loan Against Property</strong>{' '}
              and <strong>Corporate Real Estate</strong> products (offered by Infina), customers may write to:
            </p>
            <p>
              <a href="mailto:customerservice@infina.in">
                <strong>customerservice@infina.in</strong>
              </a>
            </p>
          </div>
          <div className="in-card">
            <p style={{ marginTop: '0' }}>For any other requests, customers may write to:</p>
            <p>
              <a href="mailto:info@infina.in">
                <strong>info@infina.in</strong>
              </a>
            </p>
          </div>
        </div>
        <div className="in-grid two" style={{ marginTop: '16px' }}>
          <div className="in-card">
            <h3>Grievance Redressal Officer</h3>
            <p style={{ marginTop: '6px' }}>Ms. Sriparna Dhar</p>
            <p style={{ marginTop: '2px' }}>
              <a href="mailto:grievanceredressal@infina.in">
                <strong>grievanceredressal@infina.in</strong>
              </a>
            </p>
          </div>
          <div className="in-card">
            <h3>Principal Nodal Officer</h3>
            <p style={{ marginTop: '6px' }}>Mr. Vaibhav Misra</p>
            <p style={{ marginTop: '2px' }}>
              <a href="mailto:pno@infina.in">
                <strong>pno@infina.in</strong>
              </a>
            </p>
          </div>
        </div>
        <div className="in-grid two" style={{ marginTop: '16px' }}>
          <div className="in-card">
            <h3>Careers</h3>
            <p style={{ marginTop: '6px' }}>
              <a href="mailto:careers@infina.in">
                <strong>careers@infina.in</strong>
              </a>
            </p>
          </div>
          <div className="in-card">
            <h3>WhatsApp</h3>
            <p style={{ marginTop: '6px' }}>
              <a href="https://wa.me/917045088333">
                <strong>+91 70450 88333</strong>
              </a>
            </p>
          </div>
        </div>
        <div className="in-cta" style={{ marginTop: '40px' }}>
          <Image className="in-cta-img" src="/images/las-calc/las-calc-intro.webp" alt="" width={720} height={409} />
          <div className="in-cta-c">
            <h2>Ready to borrow against your investments?</h2>
            <p>Check your eligibility online in minutes.</p>
            <a className="btn" href="https://www.digilas.infina.co.in/signin/otp/">
              Check Eligibility{' '}
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
        </div>
      </div>
    </section>
  );
}
