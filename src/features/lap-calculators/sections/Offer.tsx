export function Offer() {
  return (
    <section className="band" id="offer">
      <div className="wrapx">
        <div className="sec-head">
          <h2 className="h2">
            How much <em>loan can I get</em> against my property?
          </h2>
          <p className="body">
            Three things decide the amount. The calculator covers the first two, and the lender checks the third when
            you apply.
          </p>
        </div>
        <div className="pp">
          <article className="pp-c">
            <span className="pp-i">
              <svg viewBox="0 0 512 512" aria-hidden="true">
                <g fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="256" cy="150" r="72" />
                  <path d="M110 430c0-90 65-150 146-150s146 60 146 150" />
                  <circle cx="410" cy="90" r="6" fill="currentColor" />
                </g>
              </svg>
            </span>
            <h3>Your income</h3>
            <p>
              Lenders look at how much of your monthly income can go to an EMI. Here we use up to 60% after existing
              obligations.
              <span className="cf">To confirm</span>
            </p>
          </article>
          <article className="pp-c">
            <span className="pp-i">
              <svg viewBox="0 0 512 512" aria-hidden="true">
                <defs>
                  <mask id="wm2" maskUnits="userSpaceOnUse" x="0" y="0" width={512} height={512}>
                    <rect width={512} height={512} fill="#fff" />
                    <circle cx="372" cy="340" r="80" fill="#000" />
                  </mask>
                </defs>
                <g
                  mask="url(#wm2)"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="40" y="100" width={380} height={260} rx="40" />
                  <path d="M40 190h380M90 280h110" />
                </g>
                <g fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="372" cy="340" r="46" />
                  <path d="M405 373l62 62M440 408l28-28" />
                </g>
              </svg>
            </span>
            <h3>Your existing EMIs</h3>
            <p>Other loans and fixed payments reduce the EMI you can afford, so they reduce the loan you can get.</p>
          </article>
          <article className="pp-c">
            <span className="pp-i">
              <svg viewBox="0 0 512 512" aria-hidden="true">
                <g fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M90 430h340" />
                  <rect x="140" y="60" width={150} height={370} rx="10" />
                  <path d="M290 210h82a10 10 0 0 1 10 10v210" />
                  <path d="M190 130h50M190 200h50M190 270h50M190 340h50M324 280h24M324 350h24" />
                </g>
              </svg>
            </span>
            <h3>Your property</h3>
            <p>
              The loan is a share of the property&apos;s market value. The share depends on the property type and your
              profile.
              <span className="cf">To confirm</span>
            </p>
          </article>
        </div>
        <p className="rt-meta">
          Loans start from ₹20 lakh, with tenures from 36 to 180 months.
          <span className="cf">To confirm</span> See the{' '}
          <a href="/docs/lap-charges.pdf" target="_blank" rel="noopener">
            list of charges
          </a>
          .
        </p>
      </div>
    </section>
  );
}
