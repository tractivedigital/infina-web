import Link from 'next/link';

export function Next() {
  return (
    <section className="band" id="next">
      <div className="wrapx">
        <div className="cl">
          <div>
            <h2 className="h2">
              Ready to borrow against your <em>property</em>?
            </h2>
            <p className="body" style={{ marginTop: '16px' }}>
              Start your application online. Read the product page first if you want the full details on fees and
              documents.
            </p>
            <Link className="btn" href="/loan-against-property#heroform">
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
            </Link>
          </div>
          <div className="rl">
            <Link href="/loan-against-property">
              <span>
                Loan Against Property
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
            <Link href="/las-calculators">
              <span>
                Loan Against Securities calculator
                <small>Estimate interest and eligibility against shares and funds.</small>
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
