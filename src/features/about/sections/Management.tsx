import Image from 'next/image';

export function Management() {
  return (
    <section className="ab-band is-paper" id="management" aria-labelledby="mgmt-h">
      <div className="ab-wrap">
        <div className="team-sub">
          <p className="overline">Operations</p>
          <h3 className="sec-title is-sub" id="mgmt-h">
            Management <span className="hl">Team</span>
          </h3>
        </div>
        <div className="inf-mgmt">
          <article className="inf-person">
            <Image
              unoptimized
              className="inf-photo"
              src="/images/about/about-person-19.jpg"
              alt="Keyur Gandhi, Chief Financial Officer"
              width={420}
              height={420}
            />
            <h3 className="ab-h3">Keyur Gandhi</h3>
            <p className="role">Chief Financial Officer</p>
            <p className="bio">
              Chartered Accountant, with the company since August 2021. Oversees finance, accounts, tax, treasury,
              compliance, IT, HR, and admin. Previously at Kotak Mahindra Bank and Deloitte Haskins & Sells LLP.
            </p>
            <a className="inf-btn inf-btn--text li-link" href="#" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
              <span className="sr-only"> of Keyur Gandhi, opens in a new tab</span>{' '}
              <svg className="ab-ic ic-sm" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <g className="ic-line">
                  <path d="M8 12H20.25" />
                  <path d="M14.75 6.5L20.25 12L14.75 17.5" />
                </g>
                <circle className="ic-seal" cx="4.0" cy="12.0" r="1.75" />
              </svg>
            </a>
          </article>
          <article className="inf-person">
            <Image
              unoptimized
              className="inf-photo"
              src="/images/about/about-person-20.jpg"
              alt="Parth Bumiya, Business Head, LAS, LAP and CRE"
              width={420}
              height={420}
            />
            <h3 className="ab-h3">Parth Bumiya</h3>
            <p className="role">Business Head, LAS, LAP & CRE</p>
            <p className="bio">
              Chartered Accountant and Company Secretary with over 23 years in BFSI. Previously at Mango Financial
              Advisors and Kotak Wealth Management.
            </p>
            <a className="inf-btn inf-btn--text li-link" href="#" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
              <span className="sr-only"> of Parth Bumiya, opens in a new tab</span>{' '}
              <svg className="ab-ic ic-sm" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <g className="ic-line">
                  <path d="M8 12H20.25" />
                  <path d="M14.75 6.5L20.25 12L14.75 17.5" />
                </g>
                <circle className="ic-seal" cx="4.0" cy="12.0" r="1.75" />
              </svg>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
