import Link from 'next/link';

export function How() {
  return (
    <section className="sec" id="how">
      <div className="wrapx">
        <div className="sec-head">
          <h2 className="h2">
            How to use the ESOP funding <em>calculator</em>
          </h2>
        </div>
        <ol className="steps" style={{ listStyle: 'none', padding: '0' }}>
          <li className="step">
            <span className="stn" />
            <h3>Enter your option details</h3>
            <p>Add the current market price, your exercise price and the number of options you are exercising.</p>
          </li>
          <li className="step">
            <span className="stn" />
            <h3>Set tenure and tax rate</h3>
            <p>Choose how many days you need the funding and select your tax rate under the New Tax Regime.</p>
          </li>
          <li className="step">
            <span className="stn" />
            <h3>Read the breakup</h3>
            <p>See what you owe your employer, how much Infina funds, your own contribution and the cost of funding.</p>
          </li>
          <li className="step final">
            <span className="stn">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
            </span>
            <h3>Apply when you are ready</h3>
            <p>Choose Apply Now to start your application. Your final terms are confirmed at sanction.</p>
          </li>
        </ol>
        <div style={{ marginTop: '48px' }}>
          <Link className="btn" href="/esop-financing#heroform">
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
      </div>
    </section>
  );
}
