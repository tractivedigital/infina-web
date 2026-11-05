import Link from 'next/link';

export function Next() {
  return (
    <section className="sec" id="next">
      <div className="wrapx">
        <div className="cl">
          <div>
            <h2 className="h2">
              Your assets are ready to work.
              {' '}
              <em>Are you?</em>
            </h2>
            <p className="body" style={{ marginTop: "16px" }}>
              Apply now or check your eligibility to unlock funds instantly.
            </p>
            <a className="btn" href="https://www.digilas.infina.co.in/signin/otp/">
              Check Eligibility
              {' '}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
          <div className="rl">
            <Link href="/las-calculators">
              <span>
                Loan Against Securities calculator
                <small>Estimate interest and eligibility against shares and funds.</small>
              </span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            {' '}
            <Link href="/lap-calculators">
              <span>
                Loan Against Property calculator
                <small>Estimate your EMI and eligibility against property.</small>
              </span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            {' '}
            <Link href="/esop-calculators">
              <span>
                ESOP funding calculator
                <small>Work out the cost of exercising your stock options.</small>
              </span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
