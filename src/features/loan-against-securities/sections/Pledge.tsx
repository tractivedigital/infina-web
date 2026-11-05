import Image from 'next/image';

export function Pledge() {
  return (
    <section className="band" id="pledge">
      <div className="wrapx">
        <div className="sec-head">
          <h2 className="h2">
            Securities you can <em>pledge</em> for a loan
          </h2>
          <p className="body">
            We help you overcome financial uncertainties without selling your investments. With Infina, you can leverage
            your long-term assets to get quick loans for your immediate needs.
          </p>
        </div>
        <div
          className="pa"
          id="paTrack"
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="What you can pledge"
        >
          <article className="pa-c" role="group" aria-roledescription="slide" aria-label="1 of 4">
            <Image src="/images/las/las-pledge-1.webp" alt="" width={720} height={450} />
            <div className="pa-b">
              <h3>Listed Shares</h3>
              <p>Loans against equity shares listed on the stock exchanges, from Infina&apos;s approved list.</p>
            </div>
          </article>
          <article className="pa-c" role="group" aria-roledescription="slide" aria-label="2 of 4">
            <Image src="/images/las/las-pledge-2.webp" alt="" width={720} height={450} />
            <div className="pa-b">
              <h3>Mutual Funds</h3>
              <p>
                Loans against mutual funds like equity funds, debt funds, fixed maturity plans, balanced funds,
                arbitrage funds and target maturity funds.
              </p>
            </div>
          </article>
          <article className="pa-c" role="group" aria-roledescription="slide" aria-label="3 of 4">
            <Image src="/images/las/las-pledge-3.webp" alt="" width={720} height={450} />
            <div className="pa-b">
              <h3>Fixed Income Securities</h3>
              <p>Get access to loans against PSU and Private Sector Bonds and Government Securities.</p>
            </div>
          </article>
          <article className="pa-c" role="group" aria-roledescription="slide" aria-label="4 of 4">
            <Image src="/images/las/las-pledge-4.webp" alt="" width={720} height={450} />
            <div className="pa-b">
              <h3>Other Securities</h3>
              <p>
                We fund against units of real estate investment trusts (REITs), infrastructure investment trusts
                (InvITs) and selectively alternate investment fund and unlisted shares.
              </p>
            </div>
          </article>
        </div>
        <div className="pa-ctl">
          <div className="pa-dots" id="paDots" aria-hidden="true">
            <span className="on" />
            <span />
            <span />
            <span />
          </div>
          <div className="pa-ar">
            <button type="button" id="paPrev" aria-label="Previous">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19 12H5M11 6l-6 6 6 6" />
              </svg>
            </button>
            <button type="button" id="paNext" aria-label="Next">
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
            </button>
          </div>
        </div>
        <p className="pl-note">
          See the{' '}
          <a href="/docs/approved-securities-list-august-2026.pdf" rel="noopener">
            list of approved securities (PDF, August 2026)
          </a>
          .
        </p>
      </div>
    </section>
  );
}
