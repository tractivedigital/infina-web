import Link from 'next/link';

export function Next() {
  return (
    <section className="band" id="next">
      <div className="wrapx">
        <div className="cl">
          <div>
            <h2 className="h2">
              Put your portfolio to <em>work</em>
            </h2>
            <p className="body" style={{ marginTop: '16px' }}>
              Check your eligibility in a minute. No documents needed to start.
            </p>
            <a className="btn" href="#heroform">
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
            <Link href="/esop-financing">
              <span>
                ESOP Financing
                <small>Funds against your employee stock options.</small>
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
            <Link href="/loan-against-property">
              <span>
                Loan Against Property
                <small>Funding against residential or commercial property.</small>
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
