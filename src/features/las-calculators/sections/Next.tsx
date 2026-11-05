import Link from 'next/link';

export function Next() {
  return (
    <section className="band" id="next">
      <div className="wrapx">
        <div className="cl">
          <div>
            <h2 className="h2">
              Ready to borrow against your <em>portfolio</em>?
            </h2>
            <p className="body" style={{ marginTop: '16px' }}>
              Check your eligibility online. Read the product page first if you want the full details on fees and
              documents.
            </p>
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
          <div className="rl">
            <Link href="/loan-against-securities">
              <span>
                Loan Against Securities
                <small>Features, charges, documents and FAQs.</small>
              </span>
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
            </Link>{' '}
            <Link href="/loan-against-property#lap-eligibility">
              <span>
                Loan Against Property calculator
                <small>Estimate the loan you can raise against property.</small>
              </span>
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
            </Link>{' '}
            <a href="/esop-calculators">
              <span>
                ESOP funding calculator
                <small>Work out funding to exercise your stock options.</small>
              </span>
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
