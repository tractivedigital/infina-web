import Link from 'next/link';

export function Content() {
  return (
    <section className="sec" style={{ paddingTop: '8px', background: 'transparent' }}>
      <div className="wrapx">
        <div className="ir-tabs" role="tablist" aria-label="Investor relations documents">
          <button
            type="button"
            role="tab"
            className="ir-t"
            id="irt0"
            aria-controls="irp0"
            aria-selected="true"
            data-t="0"
          >
            Financial Reporting
          </button>
          <button
            type="button"
            role="tab"
            className="ir-t"
            id="irt1"
            aria-controls="irp1"
            aria-selected="false"
            data-t="1"
          >
            Policies
          </button>
          <button
            type="button"
            role="tab"
            className="ir-t"
            id="irt2"
            aria-controls="irp2"
            aria-selected="false"
            data-t="2"
          >
            Other Statutory/Regulatory Requirements
          </button>
        </div>
        <div role="tabpanel" id="irp0" aria-labelledby="irt0">
          <div className="ir-cs" role="group" aria-label="Financial Reporting filter">
            <button type="button" className="ir-c" aria-pressed="true" data-g="0-0">
              FY-2027
            </button>
            <button type="button" className="ir-c" aria-pressed="false" data-g="0-1">
              FY-2026
            </button>
            <button type="button" className="ir-c" aria-pressed="false" data-g="0-2">
              FY-2025
            </button>
            <button type="button" className="ir-c" aria-pressed="false" data-g="0-3">
              FY-2024
            </button>
            <button type="button" className="ir-c" aria-pressed="false" data-g="0-4">
              FY-2023
            </button>
            <button type="button" className="ir-c" aria-pressed="false" data-g="0-5">
              FY-2022
            </button>
            <button type="button" className="ir-c" aria-pressed="false" data-g="0-6">
              FY-2021
            </button>
            <button type="button" className="ir-c" aria-pressed="false" data-g="0-7">
              FY-2020
            </button>
          </div>
          <ul className="ir-l" data-gl="0-0">
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/bse-intimation-results-q1-fy-27-june-2026-signed.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Quarterly Result Ended June 2026</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/bse-intimation-results-q2-fy-27-september-2026.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Quarterly Result Ended September 2026</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a className="ir-r" href="/docs/investor-relations/lrmf-jun-26.pdf" target="_blank" rel="noopener">
                <span>Disclosure on Liquidity Risk Management Framework June 2026.</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a className="ir-r" href="/docs/investor-relations/lrmf-sep-26.pdf" target="_blank" rel="noopener">
                <span>Disclosure on Liquidity Risk Management Framework September 2026</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
          </ul>
          <ul className="ir-l" data-gl="0-1" hidden>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/quarterly-result-ended-june-2025.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Quarterly Result Ended June 2025</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/bse-intimation-quarter-and-half-year-end-financial-results-sept-25.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Quarterly Result Ended September 2025</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/bse-intimation-quarter-end-results-dec-25.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Quarterly Result Ended December 2025</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/bse-intimation-year-end-results-march-2026.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Quarterly Result Ended March 2026</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/quarter-ended-june-30-2025.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Disclosure on Liquidity Risk Management Framework June 2025</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/quarter-ended-september-30-2025.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Disclosure on Liquidity Risk Management Framework September 2025</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/quarter-ended-december-31-2025.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Disclosure on Liquidity Risk Management Framework December 2025</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/quarter-ended-march-31-2026.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Disclosure on Liquidity Risk Management Framework March 2026</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
          </ul>
          <ul className="ir-l" data-gl="0-2" hidden>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/1-exchange-financial-jun-24-1721649162531.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Quarterly Result Ended June 2024</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/2-exchange-reporting-sept-24-1742370909959.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Quarterly Result Ended September 2024</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/3-exchange-reporting-dec-24-signed-scan-1742371205865.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Quarterly Result Ended December 2024</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/march-2025-financials-infina.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Quarterly Result Ended March 2025</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/quarter-ended-june-30-2024-1722238557520-1.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Disclosure on Liquidity Risk Management Framework June 2024</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/2-quarter-ended-september-30-2024-1742373310902.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Disclosure on Liquidity Risk Management Framework September 2024</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/3-quarter-ended-december-31-2024-1742795155948.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Disclosure on Liquidity Risk Management Framework December 2024</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/quarter-ended-march-31-2025.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Disclosure on Liquidity Risk Management Framework March 2025</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
          </ul>
          <ul className="ir-l" data-gl="0-3" hidden>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/1-financial-results-quarter-ended-june-1678101683007.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Quarterly Result Ended June 2023</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/2-exchange-reporting-sept-23-1699450847927.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Quarterly Result Ended September 2023</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/3-exchange-reporting-scan-dec-23-1707809128125.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Quarterly Result Ended December 2023</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <Link className="ir-r" href="/investor-relations" target="_blank" rel="noopener">
                <span>Quarterly Result Ended March 2024</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </Link>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/1-quarter-ended-june-30-2023-1694757431874.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Disclosure on Liquidity Risk Management Framework June 2023</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/2-quarter-ended-september-30-2023-1700743371104.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Disclosure on Liquidity Risk Management Framework June 2023</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/3-quarter-ended-dec-31-2023-1708082743702.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Disclosure on Liquidity Risk Management Framework December 2023</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <Link className="ir-r" href="/investor-relations" target="_blank" rel="noopener">
                <span>Disclosure on Liquidity Risk Management Framework March 2024</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </Link>
            </li>
          </ul>
          <ul className="ir-l" data-gl="0-4" hidden>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/1-financial-results-quarter-ended-june-1678101683007.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Quarterly Result Ended June 2022</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="https://api.infina.co.in/uploads/financialreportings/Financial%20Results_Quarter%20Ended%20September-1678101663080.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Quarterly Result Ended September 2022</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/3-financial-results-quarter-ended-december-1678101626467.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Quarterly Result Ended December 2022</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/4-20230526185407512-1685359566252.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Quarterly Result Ended March 2023</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <Link className="ir-r" href="/investor-relations" target="_blank" rel="noopener">
                <span>Disclosure on Liquidity Risk Management Framework June 2022</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </Link>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/2-financial-results-quarter-ended-september-1678101663080.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Disclosure on Liquidity Risk Management Framework September 2022</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/3-liquidity-statement-quarter-ended-december-1677767290911.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Disclosure on Liquidity Risk Management Framework December 2022</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/4-quarter-ended-march-31-2023-1689080151671.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Disclosure on Liquidity Risk Management Framework March 2023</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
          </ul>
          <ul className="ir-l" data-gl="0-5" hidden>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/1-financial-results-half-ended-september-1678101797883.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Half yearly Result Ended September 2021</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/2-financial-results-quarter-ended-december-1678101744916.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Quarterly Result Ended December 2021</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/3-financial-results-quarter-ended-march-1678101715029.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Quarterly Result Ended March 2022</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/1-liquidity-statement-quarter-ended-june-1677767077118.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Disclosure on Liquidity Risk Management Framework June 2021</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/2-liquidity-statement-quarter-ended-september-1677767111501.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Disclosure on Liquidity Risk Management Framework September 2021</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/3-liquidity-statement-quarter-ended-december-1677767143275.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Disclosure on Liquidity Risk Management Framework December 2021</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/4-liquidity-statement-quarter-ended-march-1677767184364.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Disclosure on Liquidity Risk Management Framework March 2022</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
          </ul>
          <ul className="ir-l" data-gl="0-6" hidden>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/1-financial-results-half-year-ended-september-1678101824971.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Half yearly Result Ended September 2020</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/2-financial-results-half-year-ended-march-1678101899824.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Half yearly Result Ended March 2021</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/1-liquidity-statement-quarter-ended-june-1677766944040.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Disclosure on Liquidity Risk Management Framework June 2020</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/2-liquidity-statement-quarter-ended-september-1677766976983.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Disclosure on Liquidity Risk Management Framework September 2020</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/3-liquidity-statement-quarter-ended-december-1677767012028.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Disclosure on Liquidity Risk Management Framework December 2020</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/4-liquidity-statement-quarter-ended-march-1677767045108.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Disclosure on Liquidity Risk Management Framework March 2021</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
          </ul>
          <ul className="ir-l" data-gl="0-7" hidden>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/1-liquidity-statement-quarter-ended-december-1677766802820.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Disclosure on Liquidity Risk Management Framework December 2019</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/2-liquidity-statement-quarter-ended-march-1677766911739.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Disclosure on Liquidity Risk Management Framework March 2020</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
          </ul>
        </div>
        <div role="tabpanel" id="irp1" aria-labelledby="irt1" hidden>
          <ul className="ir-l">
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/penal-charges-policy-30-12-2025.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Penal Charges Policy</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/infina-policy-on-interest-rates-reviewed-on-30-12-2025.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Policy on Interest Rates</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/statutory-auditors-appointment-policy-extract-of-audit-policy-25th-august-2025.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Statutory Auditors Appointment Policy_Extract of Audit Policy</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/prudential-framework-for-resolution-of-stressed-assets-resolutions.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Prudential Framework for Resolution of Stressed Assets Resolutions</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/infina-compensation-policy-may-2026.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Compensation Policy</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/infina-whistle-blower-policy-reviewed-on-17-10-2025.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Whistle Blower Policy</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/corporate-social-responsibility-policy.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Corporate Social Responsibility Policy</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/infina-policy-on-related-party-transactions-30-12-2025.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Related Party Transactions Policy</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/posh-policy-working.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Policy on Prevention from Sexual Harassment</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/internal-guidelines-on-c-g-from-16th-june-26-to-24th-aug-2026-clean-mode-1.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Internal Guidelines on Corporate Governance Policy</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/lap-fees-charges-matrix-last-reviewed-on-30th-december-2025.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Loan Against Property Charges Matrix (Last reviewed on 30th December, 2025)</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/charges-fees-for-las-cre-30-12-25.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>List of Charges CRE and LAS</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/infina-policy-on-covid-related-rescheduling-of-dues-reviewed-on-17-10-2025.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Policy on COVID related rescheduling of dues</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/policy-on-retention-of-documents-and-records-30-12-25.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Policy on Retention of Documents and Records</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
          </ul>
        </div>
        <div role="tabpanel" id="irp2" aria-labelledby="irt2" hidden>
          <div className="ir-cs" role="group" aria-label="Other Statutory/Regulatory Requirements filter">
            <button type="button" className="ir-c" aria-pressed="true" data-g="2-0">
              AGM Notice
            </button>
            <button type="button" className="ir-c" aria-pressed="false" data-g="2-1">
              Annual Returns
            </button>
            <button type="button" className="ir-c" aria-pressed="false" data-g="2-2">
              CSR Projects/Committee
            </button>
            <button type="button" className="ir-c" aria-pressed="false" data-g="2-3">
              Others
            </button>
          </div>
          <ul className="ir-l" data-gl="2-0">
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/signed-agm-notice-fy-26.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>AGM Notice FY 2025-2026</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/notice-of-29th-agm-fy-2024-25-s.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>AGM Notice FY 2024-2025</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/1-notice-of-28th-agm-1726062729667.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>AGM Notice FY 2023-2024</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a className="ir-r" href="/docs/investor-relations/2-1-1720253496323.pdf" target="_blank" rel="noopener">
                <span>AGM Notice FY 2022-2023</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/3-agm-notice-fy-2021-22-1678100712695.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>AGM Notice FY 2021-2022</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/4-agm-notice-fy-2020-21-1677780471767.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>AGM Notice FY 2020-2021</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/5-agm-notice-fy-2019-20-1677780440561.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>AGM Notice FY 2019-2020</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/6-agm-notice-fy-2018-19-1677780407749.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>AGM Notice FY 2018-2019</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/7-agm-notice-fy-2017-18-1677780374513.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>AGM Notice FY 2017-2018</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/8-agm-notice-fy-2016-17-1677780343556.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>AGM Notice FY 2016-2017</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/9-agm-notice-fy-2015-16-1677780318443.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>AGM Notice FY 2015-2016</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/10-agm-notice-fy-2014-15-1677780130414.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>AGM Notice FY 2014-2015</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
          </ul>
          <ul className="ir-l" data-gl="2-1" hidden>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/annual-return-fy-2025-2026.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Annual Return FY 2025-2026</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a className="ir-r" href="/docs/investor-relations/mgt-7-fy-2024-25.pdf" target="_blank" rel="noopener">
                <span>Annual Return FY 2024-2025</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/1-annaul-return-2024-1730786048663.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Annual Return FY 2023-2024</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/2-annual-return-fy-2022-23-1694168964865.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Annual Return FY 2022-2023</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <Link className="ir-r" href="/investor-relations" target="_blank" rel="noopener">
                <span>Annual Return FY 2021-2022</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </Link>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/4-annual-return-fy-2020-21-1678101271729.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Annual Return FY 2020-2021</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/5-annual-return-fy-2019-20-1677778976964.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Annual Return FY 2019-20</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/6-annual-retrun-fy-2018-19-1677778894435.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Annual Return FY 2018-19</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
          </ul>
          <ul className="ir-l" data-gl="2-2" hidden>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/infina-csr-projects-fy-2026-27-for-website-upload.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>CSR Projects FY 2026-27</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/infina-csr-projects-fy-2025-26-final.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>CSR Projects FY 2025-26</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/infina-csr-projects-fy-2024-25-final-for-website.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>CSR Projects FY 2024-25</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/2-infina-csr-projects-fy-2023-24-final-for-website-1712918388971.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>CSR Projects FY 2023-24</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/3-infina-csr-projects-fy-2022-23-1680063190896.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>CSR Projects FY2022-23</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/4-csr-projects-fy-2021-22-1677784407638.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>CSR Projects FY 2021-22</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/5-csr-projects-fy-2020-21-1677784383960.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>CSR Projects FY 2020-21</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/csr-committee-composition.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>CSR Committee Composition</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
          </ul>
          <ul className="ir-l" data-gl="2-3" hidden>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/grievance-redressal-matrix.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Grievance Redressal</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/latest-ombudsman-list-2025.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>IRDAI Ombudsman Contacts</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/3-deed-of-covenants-1677784249054.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Deed of Covenants</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/cp-rating-website-disclosure.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Commercial Papers Ratings</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/resignation-of-mr-jaimin-bhatt.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Resignation of Mr. Jaimin Bhatt</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/literature-for-website-on-asset-classification-for-customer-awareness.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Customer Education Literature</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/post-intimation-cco-final.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Intimation of Appointment of CCO</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/roles-and-responsibilities-of-independent-directors.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Roles and Responsibilities of Independent Directors</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/release-of-original-property-documents.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Release of Original Property Documents</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/01st-egm-notice-fy-2026-2027.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>01st EGM Notice_FY 2026-2027</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/intimation-21032026-change-in-sh-pattern.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>BSE intimation on proposed change in shareholdings</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/bse-intimation-completion-of-sale-stake.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>BSE Intimation on Change in Shareholdings</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/intimation-to-se-16th-april-2026-appt-of-mr-dipak-gupta-as-id.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Appointment of Mr. Dipak Gupta as ID</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/notice-of-2nd-egm-fy-2026-2027-scheduled-for-15th-june-2026-1.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>02 ND EGM Notice_FY 2026-27</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/intimation-to-se-16th-june-2026-redesignation-of-mr-dipak-gupta-as-non-id.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>Redesignation of Mr. Dipak Gupta as Non-ID</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
            <li>
              <a
                className="ir-r"
                href="/docs/investor-relations/3rd-egm-notice-fy-2026-2027.pdf"
                target="_blank"
                rel="noopener"
              >
                <span>03 RD EGM Notice_FY 2026-27</span>
                <span className="ir-d" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
                  </svg>
                </span>
                <span className="sr">PDF, opens in a new tab</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
