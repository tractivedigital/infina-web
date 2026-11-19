import { LinkedInLink } from '@/components/about/LinkedInLink';
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
            <LinkedInLink name="Keyur Gandhi" />
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
            <LinkedInLink name="Parth Bumiya" />
          </article>
        </div>
      </div>
    </section>
  );
}
