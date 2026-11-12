export function Eligibility() {
  return (
    <section className="block who-block" id="eligibility">
      <div className="cs-wrap">
        <div className="section-head center">
          <div className="section-eyebrow">Eligibility</div>
          <h2>
            Who can become <span className="accent">a partner.</span>
          </h2>
          <p>If you already advise people on money, one of these is you.</p>
        </div>
        <div className="partner-cards">
          <div className="partner-card">
            <div className="partner-card-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M3.5 10.5l8.5-6 8.5 6"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 9.5V20h13V9.5"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M9.5 20v-6h5v6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Lending & Finance</h3>
            <ul className="check-list">
              <li>Loan DSAs</li>
              <li>Financial Consultants</li>
            </ul>
          </div>
          <div className="partner-card">
            <div className="partner-card-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M3.5 16l5.5-6 4 4 7-8"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M15 6h5v5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Wealth & Investment</h3>
            <ul className="check-list">
              <li>Mutual Fund Distributors</li>
              <li>Wealth Advisors</li>
              <li>Investment Advisors</li>
              <li>IFAs</li>
              <li>MFAs</li>
            </ul>
          </div>
          <div className="partner-card">
            <div className="partner-card-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="8.5" stroke="#fff" strokeWidth="1.8" />
                <path d="M12 7.5V12l3 2" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Capital Markets</h3>
            <ul className="check-list">
              <li>Financial Planners</li>
              <li>Portfolio Advisory Firms</li>
            </ul>
          </div>
        </div>
        <div className="conditions-box">
          <div className="conditions-label">The Conditions</div>
          <h3>
            Meet these four conditions <span className="accent">and you can apply</span>
          </h3>
          <div className="conditions-grid">
            <div className="condition-item">
              <span className="condition-check" />
              <div>
                <strong>Aged 21 or above</strong>
                <p>You are an Indian resident with valid, verifiable KYC documents.</p>
              </div>
            </div>
            <div className="condition-item">
              <span className="condition-check" />
              <div>
                <strong>Active local network</strong>
                <p>Insurance, real estate, financial services agents, or self-employed professionals welcome.</p>
              </div>
            </div>
            <div className="condition-item">
              <span className="condition-check" />
              <div>
                <strong>No history of loan default</strong>
                <p>You must also pass a background check.</p>
              </div>
            </div>
            <div className="condition-item">
              <span className="condition-check" />
              <div>
                <strong>Not an Infina employee</strong>
                <p>Existing Infina employees and their immediate family members are not eligible.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
