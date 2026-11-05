import Image from 'next/image';

export function Leadership() {
  return (
    <section className="ab-band" id="leadership" aria-labelledby="lead-h">
      <div className="ab-wrap">
        <div className="ab-sec-head team-head">
          <h2 className="sec-title" id="lead-h">
            Meet our <span className="hl">team</span>
          </h2>
          <p className="ab-body">Professionals who strive to provide you with excellent services.</p>
        </div>
        <div className="team-sub" id="board">
          <p className="overline">Governance</p>
          <h3 className="sec-title is-sub">
            Board of <span className="hl">Directors</span>
          </h3>
        </div>
        <div className="roster">
          <div className="r-list" role="tablist" aria-label="Board of Directors" aria-orientation="vertical">
            <button
              className="r-tab"
              type="button"
              role="tab"
              id="rt0"
              aria-selected="true"
              aria-controls="rp0"
              tabIndex={0}
            >
              <Image
                unoptimized
                className="inf-photo"
                src="/images/about/about-person-1.jpg"
                alt=""
                width={128}
                height={128}
              />
              <span className="r-txt">
                <span className="nm">Dipak Gupta</span>
                <span className="ds">Independent Director & Chairperson</span>
              </span>
              <span className="sr-only">Dipak Gupta</span>
            </button>{' '}
            <button
              className="r-tab"
              type="button"
              role="tab"
              id="rt1"
              aria-selected="false"
              aria-controls="rp1"
              tabIndex={-1}
            >
              <Image
                unoptimized
                className="inf-photo"
                src="/images/about/about-person-2.jpg"
                alt=""
                width={128}
                height={128}
              />
              <span className="r-txt">
                <span className="nm">Suresh Kotak</span>
                <span className="ds">Non-Executive Director</span>
              </span>
              <span className="sr-only">Suresh Kotak</span>
            </button>{' '}
            <button
              className="r-tab"
              type="button"
              role="tab"
              id="rt2"
              aria-selected="false"
              aria-controls="rp2"
              tabIndex={-1}
            >
              <Image
                unoptimized
                className="inf-photo"
                src="/images/about/about-person-3.jpg"
                alt=""
                width={128}
                height={128}
              />
              <span className="r-txt">
                <span className="nm">Sumanlal Shah</span>
                <span className="ds">Non-Executive Director</span>
              </span>
              <span className="sr-only">Sumanlal Shah</span>
            </button>{' '}
            <button
              className="r-tab"
              type="button"
              role="tab"
              id="rt3"
              aria-selected="false"
              aria-controls="rp3"
              tabIndex={-1}
            >
              <Image
                unoptimized
                className="inf-photo"
                src="/images/about/about-person-4.jpg"
                alt=""
                width={128}
                height={128}
              />
              <span className="r-txt">
                <span className="nm">S. Ramesh</span>
                <span className="ds">Non-Executive Director</span>
              </span>
              <span className="sr-only">S. Ramesh</span>
            </button>{' '}
            <button
              className="r-tab"
              type="button"
              role="tab"
              id="rt4"
              aria-selected="false"
              aria-controls="rp4"
              tabIndex={-1}
            >
              <Image
                unoptimized
                className="inf-photo"
                src="/images/about/about-person-5.jpg"
                alt=""
                width={128}
                height={128}
              />
              <span className="r-txt">
                <span className="nm">Rajesh Doshi</span>
                <span className="ds">Non-Executive Director</span>
              </span>
              <span className="sr-only">Rajesh Doshi</span>
            </button>{' '}
            <button
              className="r-tab"
              type="button"
              role="tab"
              id="rt5"
              aria-selected="false"
              aria-controls="rp5"
              tabIndex={-1}
            >
              <Image
                unoptimized
                className="inf-photo"
                src="/images/about/about-person-6.jpg"
                alt=""
                width={128}
                height={128}
              />
              <span className="r-txt">
                <span className="nm">Narayan SA</span>
                <span className="ds">Non-Executive Director</span>
              </span>
              <span className="sr-only">Narayan SA</span>
            </button>{' '}
            <button
              className="r-tab"
              type="button"
              role="tab"
              id="rt6"
              aria-selected="false"
              aria-controls="rp6"
              tabIndex={-1}
            >
              <Image
                unoptimized
                className="inf-photo"
                src="/images/about/about-person-7.jpg"
                alt=""
                width={128}
                height={128}
              />
              <span className="r-txt">
                <span className="nm">Dr. Janki Mistry</span>
                <span className="ds">Independent Director</span>
              </span>
              <span className="sr-only">Dr. Janki Mistry</span>
            </button>{' '}
            <button
              className="r-tab"
              type="button"
              role="tab"
              id="rt7"
              aria-selected="false"
              aria-controls="rp7"
              tabIndex={-1}
            >
              <Image
                unoptimized
                className="inf-photo"
                src="/images/about/about-person-8.jpg"
                alt=""
                width={128}
                height={128}
              />
              <span className="r-txt">
                <span className="nm">Srikar Baljekar</span>
                <span className="ds">Independent Director</span>
              </span>
              <span className="sr-only">Srikar Baljekar</span>
            </button>{' '}
            <button
              className="r-tab"
              type="button"
              role="tab"
              id="rt8"
              aria-selected="false"
              aria-controls="rp8"
              tabIndex={-1}
            >
              <Image
                unoptimized
                className="inf-photo"
                src="/images/about/about-person-9.jpg"
                alt=""
                width={128}
                height={128}
              />
              <span className="r-txt">
                <span className="nm">Sudhakar Shanbhag</span>
                <span className="ds">Whole-time Director & CEO</span>
              </span>
              <span className="sr-only">Sudhakar Shanbhag</span>
            </button>
          </div>
          <p className="r-hint">Tap a photo to read each director&apos;s profile.</p>
          <div className="r-stage">
            <div className="r-panel" role="tabpanel" id="rp0" aria-labelledby="rt0" tabIndex={0}>
              <Image
                unoptimized
                className="inf-photo"
                src="/images/about/about-person-10.jpg"
                alt="Dipak Gupta, Independent Director and Chairperson"
                width={420}
                height={420}
              />
              <div className="r-body">
                <h4 className="r-name">Dipak Gupta</h4>
                <p className="r-role">Independent Director & Chairperson</p>
                <p className="r-bio">
                  Former MD & CEO of Kotak Mahindra Bank until December 31, 2023. Over three decades in financial
                  services. Professor of Practice at IIT Bombay.
                </p>
                <a className="inf-btn inf-btn--text li-link" href="#" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                  <span className="sr-only"> of Dipak Gupta, opens in a new tab</span>{' '}
                  <svg className="ab-ic ic-sm" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <g className="ic-line">
                      <path d="M8 12H20.25" />
                      <path d="M14.75 6.5L20.25 12L14.75 17.5" />
                    </g>
                    <circle className="ic-seal" cx="4.0" cy="12.0" r="1.75" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="r-panel" role="tabpanel" id="rp1" aria-labelledby="rt1" tabIndex={0} hidden>
              <Image
                unoptimized
                className="inf-photo"
                src="/images/about/about-person-11.jpg"
                alt="Suresh Kotak, Non-Executive Director"
                width={420}
                height={420}
              />
              <div className="r-body">
                <h4 className="r-name">Suresh Kotak</h4>
                <p className="r-role">Non-Executive Director</p>
                <p className="r-bio">
                  Known as the “Cotton Man of India.” Former President of the Cotton Association of India. Long
                  experience in cotton, agriculture, textiles, and commodity associations. Founding director of IMC
                  International ADR Centre.
                </p>
                <a className="inf-btn inf-btn--text li-link" href="#" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                  <span className="sr-only"> of Suresh Kotak, opens in a new tab</span>{' '}
                  <svg className="ab-ic ic-sm" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <g className="ic-line">
                      <path d="M8 12H20.25" />
                      <path d="M14.75 6.5L20.25 12L14.75 17.5" />
                    </g>
                    <circle className="ic-seal" cx="4.0" cy="12.0" r="1.75" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="r-panel" role="tabpanel" id="rp2" aria-labelledby="rt2" tabIndex={0} hidden>
              <Image
                unoptimized
                className="inf-photo"
                src="/images/about/about-person-12.jpg"
                alt="Sumanlal Shah, Non-Executive Director"
                width={420}
                height={420}
              />
              <div className="r-body">
                <h4 className="r-name">Sumanlal Shah</h4>
                <p className="r-role">Non-Executive Director</p>
                <p className="r-bio">
                  Over five decades of experience in finance, capital markets, and commodities. Commerce graduate with a
                  tax management diploma from Jamnalal Bajaj Institute of Management Studies.
                </p>
                <a className="inf-btn inf-btn--text li-link" href="#" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                  <span className="sr-only"> of Sumanlal Shah, opens in a new tab</span>{' '}
                  <svg className="ab-ic ic-sm" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <g className="ic-line">
                      <path d="M8 12H20.25" />
                      <path d="M14.75 6.5L20.25 12L14.75 17.5" />
                    </g>
                    <circle className="ic-seal" cx="4.0" cy="12.0" r="1.75" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="r-panel" role="tabpanel" id="rp3" aria-labelledby="rt3" tabIndex={0} hidden>
              <Image
                unoptimized
                className="inf-photo"
                src="/images/about/about-person-13.jpg"
                alt="S. Ramesh, Non-Executive Director"
                width={420}
                height={420}
              />
              <div className="r-body">
                <h4 className="r-name">S. Ramesh</h4>
                <p className="r-role">Non-Executive Director</p>
                <p className="r-bio">
                  Chartered Accountant, Company Secretary, and Cost and Works Accountant. Managing Director & CEO of
                  Kotak Mahindra Capital Company. With the Kotak Group since 1995.
                </p>
                <a className="inf-btn inf-btn--text li-link" href="#" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                  <span className="sr-only"> of S. Ramesh, opens in a new tab</span>{' '}
                  <svg className="ab-ic ic-sm" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <g className="ic-line">
                      <path d="M8 12H20.25" />
                      <path d="M14.75 6.5L20.25 12L14.75 17.5" />
                    </g>
                    <circle className="ic-seal" cx="4.0" cy="12.0" r="1.75" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="r-panel" role="tabpanel" id="rp4" aria-labelledby="rt4" tabIndex={0} hidden>
              <Image
                unoptimized
                className="inf-photo"
                src="/images/about/about-person-14.jpg"
                alt="Rajesh Doshi, Non-Executive Director"
                width={420}
                height={420}
              />
              <div className="r-body">
                <h4 className="r-name">Rajesh Doshi</h4>
                <p className="r-role">Non-Executive Director</p>
                <p className="r-bio">
                  Practising Chartered Accountant with experience in direct and indirect taxation, auditing, and
                  finance.
                </p>
                <a className="inf-btn inf-btn--text li-link" href="#" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                  <span className="sr-only"> of Rajesh Doshi, opens in a new tab</span>{' '}
                  <svg className="ab-ic ic-sm" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <g className="ic-line">
                      <path d="M8 12H20.25" />
                      <path d="M14.75 6.5L20.25 12L14.75 17.5" />
                    </g>
                    <circle className="ic-seal" cx="4.0" cy="12.0" r="1.75" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="r-panel" role="tabpanel" id="rp5" aria-labelledby="rt5" tabIndex={0} hidden>
              <Image
                unoptimized
                className="inf-photo"
                src="/images/about/about-person-15.jpg"
                alt="Narayan SA, Non-Executive Director"
                width={420}
                height={420}
              />
              <div className="r-body">
                <h4 className="r-name">Narayan SA</h4>
                <p className="r-role">Non-Executive Director</p>
                <p className="r-bio">
                  Chartered Accountant and Mumbai University commerce graduate, Harvard Business School alumnus. Spent
                  over 25 years with the Kotak Group, including as MD of Kotak Securities.
                </p>
                <a className="inf-btn inf-btn--text li-link" href="#" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                  <span className="sr-only"> of Narayan SA, opens in a new tab</span>{' '}
                  <svg className="ab-ic ic-sm" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <g className="ic-line">
                      <path d="M8 12H20.25" />
                      <path d="M14.75 6.5L20.25 12L14.75 17.5" />
                    </g>
                    <circle className="ic-seal" cx="4.0" cy="12.0" r="1.75" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="r-panel" role="tabpanel" id="rp6" aria-labelledby="rt6" tabIndex={0} hidden>
              <Image
                unoptimized
                className="inf-photo"
                src="/images/about/about-person-16.jpg"
                alt="Dr. Janki Mistry, Independent Director"
                width={420}
                height={420}
              />
              <div className="r-body">
                <h4 className="r-name">Dr. Janki Mistry</h4>
                <p className="r-role">Independent Director</p>
                <p className="r-bio">
                  Finance faculty at Veer Narmad South Gujarat University. Gold Medallist MBA and PhD in corporate
                  restructuring. Over 15 years in finance.
                </p>
                <a className="inf-btn inf-btn--text li-link" href="#" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                  <span className="sr-only"> of Dr. Janki Mistry, opens in a new tab</span>{' '}
                  <svg className="ab-ic ic-sm" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <g className="ic-line">
                      <path d="M8 12H20.25" />
                      <path d="M14.75 6.5L20.25 12L14.75 17.5" />
                    </g>
                    <circle className="ic-seal" cx="4.0" cy="12.0" r="1.75" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="r-panel" role="tabpanel" id="rp7" aria-labelledby="rt7" tabIndex={0} hidden>
              <Image
                unoptimized
                className="inf-photo"
                src="/images/about/about-person-17.jpg"
                alt="Srikar Baljekar, Independent Director"
                width={420}
                height={420}
              />
              <div className="r-body">
                <h4 className="r-name">Srikar Baljekar</h4>
                <p className="r-role">Independent Director</p>
                <p className="r-bio">
                  Over 27 years in IT and finance. Chartered Accountant, Company Secretary, and commerce graduate. Past
                  roles include Voltas, Fidelity Mutual Fund, and Kotak entities.
                </p>
                <a className="inf-btn inf-btn--text li-link" href="#" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                  <span className="sr-only"> of Srikar Baljekar, opens in a new tab</span>{' '}
                  <svg className="ab-ic ic-sm" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <g className="ic-line">
                      <path d="M8 12H20.25" />
                      <path d="M14.75 6.5L20.25 12L14.75 17.5" />
                    </g>
                    <circle className="ic-seal" cx="4.0" cy="12.0" r="1.75" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="r-panel" role="tabpanel" id="rp8" aria-labelledby="rt8" tabIndex={0} hidden>
              <Image
                unoptimized
                className="inf-photo"
                src="/images/about/about-person-18.jpg"
                alt="Sudhakar Shanbhag, Whole-time Director and CEO"
                width={420}
                height={420}
              />
              <div className="r-body">
                <h4 className="r-name">Sudhakar Shanbhag</h4>
                <p className="r-role">Whole-time Director & CEO</p>
                <p className="r-bio">
                  Chartered Accountant with over three decades of experience in lending, broking, life insurance, and
                  treasury. With the company since June 2022.
                </p>
                <a className="inf-btn inf-btn--text li-link" href="#" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                  <span className="sr-only"> of Sudhakar Shanbhag, opens in a new tab</span>{' '}
                  <svg className="ab-ic ic-sm" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <g className="ic-line">
                      <path d="M8 12H20.25" />
                      <path d="M14.75 6.5L20.25 12L14.75 17.5" />
                    </g>
                    <circle className="ic-seal" cx="4.0" cy="12.0" r="1.75" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
