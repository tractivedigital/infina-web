export function Who() {
  return (
    <section className="band" id="who">
      <div className="wrapx">
        <div className="sec-head">
          <h2 className="h2">
            Who we <em>serve</em>
          </h2>
          <p className="body">
            Whether you&apos;re building something, scaling something, or protecting something, Infina meets you where
            you are.
          </p>
        </div>
        <div className="wg">
          <article className="wg-c">
            <i
              className="wg-bg"
              aria-hidden="true"
              style={{ backgroundImage: 'url(/images/home/home-card-bg-1.jpg)' }}
            />
            <span className="wg-t">
              <svg viewBox="0 0 512 512" aria-hidden="true">
                <g fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="256" cy="150" r="72" />
                  <path d="M110 430c0-90 65-150 146-150s146 60 146 150" />
                  <circle cx="410" cy="90" r="6" fill="currentColor" />
                </g>
              </svg>
            </span>
            <h3>Individuals</h3>
            <p>
              Access funds for personal needs such as education, medical expenses, or investments without selling your
              assets.
            </p>
          </article>
          <article className="wg-c">
            <i
              className="wg-bg"
              aria-hidden="true"
              style={{ backgroundImage: 'url(/images/home/home-card-bg-2.jpg)' }}
            />
            <span className="wg-t">
              <svg viewBox="0 0 512 512" aria-hidden="true">
                <g fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M256 50c78 60 98 160 74 270H182C158 210 178 110 256 50z" />
                  <circle cx="256" cy="160" r="30" />
                  <path d="M182 250l-64 78h64M330 250l64 78h-64M226 360l30 80 30-80" />
                </g>
              </svg>
            </span>
            <h3>Startups</h3>
            <p>Unlock ESOP value and raise working capital to support growth, hiring, and business expansion.</p>
          </article>
          <article className="wg-c">
            <i
              className="wg-bg"
              aria-hidden="true"
              style={{ backgroundImage: 'url(/images/home/home-card-bg-3.jpg)' }}
            />
            <span className="wg-t">
              <svg viewBox="0 0 512 512" aria-hidden="true">
                <g fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M90 430h340" />
                  <rect x="140" y="60" width={150} height={370} rx="10" />
                  <path d="M290 210h82a10 10 0 0 1 10 10v210" />
                  <path d="M190 130h50M190 200h50M190 270h50M190 340h50M324 280h24M324 350h24" />
                </g>
              </svg>
            </span>
            <h3>Real Estate Companies</h3>
            <p>
              Secure structured financing for construction, inventory, and project completion with flexible funding
              solutions.
            </p>
          </article>
          <article className="wg-c">
            <i
              className="wg-bg"
              aria-hidden="true"
              style={{ backgroundImage: 'url(/images/home/home-card-bg-4.jpg)' }}
            />
            <span className="wg-t">
              <svg viewBox="0 0 512 512" aria-hidden="true">
                <g fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M110 80h292l30 100H80z" />
                  <path d="M80 180a43.5 43.5 0 0 0 87 0a43.5 43.5 0 0 0 87 0a43.5 43.5 0 0 0 87 0a43.5 43.5 0 0 0 87 0" />
                  <path d="M120 232v198M392 232v198M70 430h372" />
                  <rect x="214" y="300" width={84} height={130} />
                </g>
              </svg>
            </span>
            <h3>Small & Medium Businesses</h3>
            <p>Improve cash flow and fund operations, expansion, or new opportunities through asset-backed lending.</p>
          </article>
          <article className="wg-c">
            <i
              className="wg-bg"
              aria-hidden="true"
              style={{ backgroundImage: 'url(/images/home/home-card-bg-5.jpg)' }}
            />
            <span className="wg-t">
              <svg viewBox="0 0 512 512" aria-hidden="true">
                <g fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M80 190L256 70l176 120z" />
                  <path d="M120 190h272M140 240v140M222 240v140M290 240v140M372 240v140M90 430h332M110 380h292" />
                </g>
              </svg>
            </span>
            <h3>Corporate Enterprises</h3>
            <p>
              Access large-scale, structured financial solutions to support expansion, acquisitions, and long-term
              growth.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
