export function How() {
  return (
    <section className="band" id="how">
      <div className="wrapx">
        <div className="sec-head">
          <h2 className="h2">
            How it <em>works</em>
          </h2>
        </div>
        <ol className="steps" style={{ listStyle: 'none', padding: '0' }}>
          <li className="step">
            <span className="stn" />
            <h3>Check Eligibility</h3>
            <p>See how much you can borrow instantly with Infina&apos;s NBFC lending services.</p>
          </li>
          <li className="step">
            <span className="stn" />
            <h3>Submit Documents</h3>
            <p>Upload your documents securely and proceed with your loan application.</p>
          </li>
          <li className="step">
            <span className="stn" />
            <h3>Credit Approval</h3>
            <p>Get quick approvals from a trusted non-banking financial company.</p>
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
            <h3>Funds Disbursed</h3>
            <p>Receive funds directly into your account without delays.</p>
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
