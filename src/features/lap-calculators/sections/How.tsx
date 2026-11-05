import Link from 'next/link';

export function How() {
  return (
    <section className="sec" id="how">
      <div className="wrapx">
        <div className="sec-head">
          <h2 className="h2">
            How to use the loan against property <em>calculator</em>
          </h2>
        </div>
        <ol className="steps" style={{ listStyle: 'none', padding: '0' }}>
          <li className="step">
            <span className="stn" />
            <h3>Choose a calculator</h3>
            <p>
              Use the EMI calculator to see what a loan costs each month, or the eligibility calculator to see how much
              you can borrow.
            </p>
          </li>
          <li className="step">
            <span className="stn" />
            <h3>Enter your numbers</h3>
            <p>
              Add the loan amount, tenure and rate. For eligibility, add your monthly income and existing obligations.
            </p>
          </li>
          <li className="step">
            <span className="stn" />
            <h3>Read the result</h3>
            <p>See the monthly EMI, total interest and total payable, or the loan amount your income can support.</p>
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
            <p>Choose Apply to start your application. Your final terms are confirmed at sanction.</p>
          </li>
        </ol>
        <div style={{ marginTop: '48px' }}>
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
      </div>
    </section>
  );
}
