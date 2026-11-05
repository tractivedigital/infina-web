export function Offices() {
  return (
    <section className="ab-band" id="offices" aria-labelledby="off-h">
      <div className="ab-wrap">
        <div className="ab-sec-head">
          <h2 className="sec-title" id="off-h">
            Our <span className="hl">offices</span>
          </h2>
        </div>
        <p className="overline is-quiet" style={{ marginBottom: 'var(--space-2)' }}>
          Working hours, all branches
        </p>
        <ul className="inf-hours">
          <li>Monday to Friday 9am to 6pm</li>
          <li>Saturday 9am to 12pm</li>
          <li>Closed Sunday and 1st and 2nd Saturdays</li>
        </ul>
        <div className="inf-offices offices">
          <address className="inf-office is-feature">
            <h3>Mumbai</h3>
            <div className="ab-sub">
              <p className="overline">Registered Office, Kalina</p>
              <p>
                7th Floor, Sheil Estate, Dani Corporate Park, 158 C.S.T Road, Kalina, Santacruz (East), Mumbai 400098
              </p>
              <p className="ab-ph">Phone: 022-66808304 / 8302 / 8312 / 8337 / 8332</p>
            </div>
            <div className="ab-sub">
              <p className="overline">Branch</p>
              <p>
                4th Floor, Sheil Estate, Dani Corporate Park, 158 C.S.T Road, Kalina, Santacruz (East), Mumbai 400098
              </p>
            </div>
          </address>
          <address className="inf-office">
            <h3>New Delhi</h3>
            <p>3rd Floor, E2/28, Jhandewalan, near Jhandewalan Metro Station, New Delhi 110005</p>
          </address>
          <address className="inf-office">
            <h3>Surat</h3>
            <p>Solaris Athena, Unit 501, 5th Floor, opp. TRI Star Hospital, Athwalines, Athwa, Surat, Gujarat 395001</p>
          </address>
          <address className="inf-office">
            <h3>Ahmedabad</h3>
            <p>325 & 326, 3rd Floor, Siddhivanayak Complex, Shivranjani Cross Road, Satellite, Ahmedabad 380015</p>
          </address>
          <address className="inf-office">
            <h3>Pune</h3>
            <p>203, 2nd Floor, 1187/61, Bhansali House, Jangali Maharaj Road, Shivajinagar, Pune 411005</p>
          </address>
        </div>
        <div className="sec-cta is-split">
          <p className="ab-body">Not sure which office suits you? Talk to us before you visit.</p>
          <a className="inf-btn inf-btn--primary" href="https://www.infina.co.in/contact">
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}
