export function Offer() {
  return (
    <section className="band" id="offer">
      <div className="wrapx">
        <div className="sec-head">
          <h2 className="h2">
            ESOPs and employees <em>we fund</em>
          </h2>
          <p className="body">Unlock the value of your vested shares, whether your company is listed or unlisted.</p>
        </div>
        <div className="pp">
          <article className="pp-c">
            <span className="pp-i">
              <svg viewBox="0 0 512 512" aria-hidden="true">
                <g fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M80 190L256 70l176 120z" />
                  <path d="M120 190h272M140 240v140M222 240v140M290 240v140M372 240v140M90 430h332M110 380h292" />
                </g>
              </svg>
            </span>
            <h3>ESOPs of listed companies</h3>
            <p>Fund the exercise of vested options in companies listed on the stock exchanges.</p>
          </article>
          <article className="pp-c">
            <span className="pp-i">
              <svg viewBox="0 0 512 512" aria-hidden="true">
                <g fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M256 50c78 60 98 160 74 270H182C158 210 178 110 256 50z" />
                  <circle cx="256" cy="160" r="30" />
                  <path d="M182 250l-64 78h64M330 250l64 78h-64M226 360l30 80 30-80" />
                </g>
              </svg>
            </span>
            <h3>ESOPs of unlisted companies</h3>
            <p>Fund the exercise of vested options in unlisted companies, including startups and private companies.</p>
          </article>
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
            <h3>Employees based in India</h3>
            <p>Indian residents above 18 years, and foreign nationals who live and work in India.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
