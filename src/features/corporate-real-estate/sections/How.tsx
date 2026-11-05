export function How() {
  return (
    <section className="sec" id="how">
      <div className="wrapx">
        <div className="sec-head">
          <h2 className="h2">
            How to apply for <em>corporate real estate financing</em>
          </h2>
        </div>
        <ol className="steps" style={{ listStyle: 'none', padding: '0' }}>
          <li className="step">
            <span className="stn" />
            <h3>Check eligibility</h3>
            <p>Share your name and mobile number and tell us what funding you need.</p>
          </li>
          <li className="step">
            <span className="stn" />
            <h3>Share project details</h3>
            <p>Submit your company and promoter details along with the details of your project.</p>
          </li>
          <li className="step">
            <span className="stn" />
            <h3>Project assessed</h3>
            <p>
              Infina reviews the project, its approvals, security and cash flows, and confirms the funding structure.
            </p>
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
            <h3>Funding sanctioned</h3>
            <p>
              Your terms are set out in the sanction letter and the funds are released as agreed.
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
