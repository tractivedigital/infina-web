export function How() {
  return (
    <section className="sec" id="how">
      <div className="wrapx">
        <div className="sec-head">
          <h2 className="h2">
            How to apply for <em>ESOP financing</em>
          </h2>
        </div>
        <ol className="steps" style={{ listStyle: 'none', padding: '0' }}>
          <li className="step">
            <span className="stn" />
            <h3>Check eligibility</h3>
            <p>Share your name and mobile number and tell us whether your company is listed or unlisted.</p>
          </li>
          <li className="step">
            <span className="stn" />
            <h3>Share your details</h3>
            <p>Submit your identity documents, salary slip and the details of your vested options.</p>
          </li>
          <li className="step">
            <span className="stn" />
            <h3>Funding sanctioned</h3>
            <p>Infina reviews your application and confirms your funding amount and terms.</p>
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
            <h3>Options exercised</h3>
            <p>
              The funds are applied to the cost of exercising your options.
              <span className="cf">To confirm</span>
            </p>
          </li>
        </ol>
        <div style={{ marginTop: '48px' }}>
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
      </div>
    </section>
  );
}
