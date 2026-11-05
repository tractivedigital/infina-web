import Link from 'next/link';

export function Articles() {
  return (
    <section className="sec" id="articles" aria-label="Articles">
      <div className="wrapx">
        <h2 className="sr">Latest articles</h2>
        <div className="bl-chips" role="group" aria-label="Filter articles by topic">
          <button type="button" className="bl-chip" data-f="all" aria-pressed="true">
            All articles <span>6</span>
          </button>
          <button type="button" className="bl-chip" data-f="las" aria-pressed="false">
            Loan Against Securities <span>2</span>
          </button>
          <button type="button" className="bl-chip" data-f="lap" aria-pressed="false">
            Loan Against Property <span>2</span>
          </button>
          <button type="button" className="bl-chip" data-f="esop" aria-pressed="false">
            ESOP Financing <span>1</span>
          </button>
          <button type="button" className="bl-chip" data-f="cre" aria-pressed="false">
            Corporate Real Estate <span>1</span>
          </button>
        </div>
        <p className="bl-count" id="bl-count" aria-live="polite">
          Showing 6 articles
        </p>
        <article className="bl-feat" id="bl-feat">
          <div className="bl-img bl-i-las" aria-hidden="true" />
          <div className="bl-b">
            <p className="bl-tag">Latest article</p>
            <p className="bl-cat">Loan Against Securities</p>
            <h3 className="bl-ft">
              <Link href="/blogs/loan-against-shares-vs-loan-against-mutual-funds-which-is-right-for-you">
                Loan Against Shares vs Loan Against Mutual Funds: Which Is Right for You?
              </Link>
            </h3>
            <p className="bl-ex">
              A side-by-side comparison of a loan against shares and a loan against mutual funds, to help you choose the
              right one for your portfolio.
              <span className="cf">To confirm</span>
            </p>
            <p className="bl-m">
              <span>Infina</span>
              <time dateTime="2026-07-01">July 1, 2026</time>
            </p>
            <Link className="btn" href="/blogs/loan-against-shares-vs-loan-against-mutual-funds-which-is-right-for-you">
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
            </Link>
          </div>
        </article>
        <div className="bl-grid" id="bl-grid">
          <article className="bl-card" data-c="las" data-i="0">
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
          <article className="bl-card" data-c="lap" data-i="1">
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
          <article className="bl-card" data-c="esop" data-i="2">
            <div className="bl-img bl-i-esop" role="img" aria-label="" aria-hidden="true" />
            <div className="bl-b">
              <p className="bl-cat">ESOP Financing</p>
              <h3>
                <Link href="/blogs/what-is-esop-financing-and-why-do-employees-need-it-99f6f">
                  What is ESOP Financing and Why Do Employees Need It
                </Link>
              </h3>
              <p className="bl-ex">
                What ESOP financing is and why employees may need it to exercise their stock options.
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
          <article className="bl-card" data-c="cre" data-i="4">
            <div className="bl-img bl-i-cre" role="img" aria-label="" aria-hidden="true" />
            <div className="bl-b">
              <p className="bl-cat">Corporate Real Estate</p>
              <h3>
                <Link href="/blogs/corporate-real-estate-finance-explained-a-complete-guide-for-developers-70092">
                  Corporate Real Estate Finance Explained: A Complete Guide for Developers
                </Link>
              </h3>
              <p className="bl-ex">
                A complete guide to corporate real estate finance for developers.
                <span className="cf">To confirm</span>
              </p>
              <p className="bl-m">
                <span>Infina</span>
                <time dateTime="2026-05-11">May 11, 2026</time>
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
          <article className="bl-card" data-c="lap" data-i="5">
            <div className="bl-img bl-i-lap" role="img" aria-label="" aria-hidden="true" />
            <div className="bl-b">
              <p className="bl-cat">Loan Against Property</p>
              <h3>
                <Link href="/blogs/loan-against-property-vs-personal-loan---which-is-better">
                  Loan Against Property vs Personal Loan: Which is Better?
                </Link>
              </h3>
              <p className="bl-ex">
                How a loan against property compares with a personal loan, and which may suit you better.
                <span className="cf">To confirm</span>
              </p>
              <p className="bl-m">
                <span>Infina</span>
                <time dateTime="2026-05-11">May 11, 2026</time>
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
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<style>.bl-feat{display:none}.bl-card[data-i="0"]{display:flex}.bl-chips,.bl-count{display:none}</style>',
          }}
        />
      </div>
    </section>
  );
}
