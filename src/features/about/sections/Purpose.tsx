export function Purpose() {
  return (
    <section className="ab-band vm-band" id="purpose" aria-labelledby="vm-h">
      <div className="ab-wrap">
        <div className="ab-sec-head">
          <h2 className="sec-title" id="vm-h">
            Vision and <span className="hl">mission</span>
          </h2>
        </div>
        <ul className="stmt-grid">
          <li className="ab-stmt is-navy">
            <span className="v-icon">
              <svg viewBox="0 0 512 512" aria-hidden="true">
                <g fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M256 50c78 60 98 160 74 270H182C158 210 178 110 256 50z" />
                  <circle cx="256" cy="160" r="30" />
                  <path d="M182 250l-64 78h64M330 250l64 78h-64M226 360l30 80 30-80" />
                </g>
              </svg>
            </span>
            <p className="overline">Vision</p>
            <p className="stmt-t">
              Our vision is to offer <em>diversified financial products</em> across the customer base.
            </p>
          </li>
          <li className="ab-stmt is-red">
            <span className="v-icon">
              <svg viewBox="0 0 512 512" aria-hidden="true">
                <defs>
                  <mask id="wm1" maskUnits="userSpaceOnUse" x="0" y="0" width={512} height={512}>
                    <rect width={512} height={512} fill="#fff" />
                    <circle cx="330" cy="330" r="128" fill="#000" />
                  </mask>
                </defs>
                <g
                  mask="url(#wm1)"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="80" y="40" width={270} height={380} rx="30" />
                  <path d="M140 130h150M140 200h150M140 270h80" />
                </g>
                <g fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="330" cy="330" r="100" />
                  <path d="M402 402l60 60" />
                  <path d="M285 335l33 33 60-68" />
                </g>
              </svg>
            </span>
            <p className="overline">Mission</p>
            <p className="stmt-t">
              Deliver <em>innovative products and services</em> for the growing needs of individual and business
              clients.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
