import Link from 'next/link';

export function More() {
  return (
    <section className="band ar-rel" id="more">
      <div className="wrapx">
        <div className="sec-head">
          <h2 className="h2">
            More <em>articles</em>
          </h2>
        </div>
        <div className="bl-grid">
          <article className="bl-card" data-c="las" data-i="1">
            <div className="bl-img bl-i-las" role="img" aria-label="" aria-hidden="true" />
            <div className="bl-b">
              <p className="bl-cat">Loan Against Securities</p>
              <h3>
                <Link href="/blogs/loan-against-shares-vs-loan-against-mutual-funds-which-is-right-for-you">
                  Loan Against Shares vs Loan Against Mutual Funds: Which Is Right for You?
                </Link>
              </h3>
              <p className="bl-ex">
                A side-by-side comparison of a loan against shares and a loan against mutual funds, to help you choose
                the right one for your portfolio.
                <span className="cf">To confirm</span>
              </p>
              <p className="bl-m">
                <span>Infina</span>
                <time dateTime="2026-07-01">July 1, 2026</time>
              </p>
              <span className="bl-go" aria-hidden="true">
                Read article{' '}
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
              </span>
            </div>
          </article>
          <article className="bl-card" data-c="lap" data-i="2">
            <div className="bl-img bl-i-lap" role="img" aria-label="" aria-hidden="true" />
            <div className="bl-b">
              <p className="bl-cat">Loan Against Property</p>
              <h3>
                <Link href="/blogs/how-loan-against-property-works-in-india-process-interest-rates-eligibility-benefits">
                  How Loan Against Property Works in India: Process, Interest Rates, Eligibility & Benefits
                </Link>
              </h3>
              <p className="bl-ex">
                How a loan against property works in India, including the process, interest rates, eligibility and
                benefits.
                <span className="cf">To confirm</span>
              </p>
              <p className="bl-m">
                <span>Infina</span>
                <time dateTime="2026-06-26">June 26, 2026</time>
              </p>
              <span className="bl-go" aria-hidden="true">
                Read article{' '}
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
              </span>
            </div>
          </article>
          <article className="bl-card" data-c="las" data-i="3">
            <div className="bl-img bl-i-las" role="img" aria-label="" aria-hidden="true" />
            <div className="bl-b">
              <p className="bl-cat">Loan Against Securities</p>
              <h3>
                <Link href="/blogs/what-is-loan-against-securities-and-how-it-works-in-india-a-complete-guide">
                  What is Loan Against Securities and How It Works in India: A Complete Guide
                </Link>
              </h3>
              <p className="bl-ex">
                A complete guide to how a loan against securities works in India.
                <span className="cf">To confirm</span>
              </p>
              <p className="bl-m">
                <span>Infina</span>
                <time dateTime="2026-05-13">May 13, 2026</time>
              </p>
              <span className="bl-go" aria-hidden="true">
                Read article{' '}
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
              </span>
            </div>
          </article>
        </div>
        <p style={{ marginTop: '24px' }}>
          <Link className="btn" href="/blogs">
            All articles{' '}
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
        </p>
      </div>
    </section>
  );
}
