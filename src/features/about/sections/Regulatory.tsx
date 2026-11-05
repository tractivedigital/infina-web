export function Regulatory() {
  return (
    <section className="ab-wrap reg-band" aria-label="Regulatory information">
      <aside className="inf-reg">
        <strong>Infina Finance Private Limited</strong> <span>CIN: U67120MH1996PTC098584</span>{' '}
        <span>IRDAI Corporate Agent Registration No: CA1079</span>{' '}
        <span>Insurance Partners: HDFC Life | ICICI Lombard</span>
        <div className="inf-reg-links">
          <a className="inf-link" href="mailto:customerservice@infina.in">
            <svg className="ab-ic ic-sm" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <g className="ic-line">
                <path d="M8 12H20.25" />
                <path d="M14.75 6.5L20.25 12L14.75 17.5" />
              </g>
              <circle className="ic-seal" cx="4.0" cy="12.0" r="1.75" />
            </svg>
            Grievance Redressal
          </a>
          <a className="inf-link" href="/docs/privacy-policy.pdf">
            <svg className="ab-ic ic-sm" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <g className="ic-line">
                <path d="M8 12H20.25" />
                <path d="M14.75 6.5L20.25 12L14.75 17.5" />
              </g>
              <circle className="ic-seal" cx="4.0" cy="12.0" r="1.75" />
            </svg>
            Privacy Policy
          </a>
          <a className="inf-link" href="/docs/terms-of-use-21-july-2026.pdf">
            <svg className="ab-ic ic-sm" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <g className="ic-line">
                <path d="M8 12H20.25" />
                <path d="M14.75 6.5L20.25 12L14.75 17.5" />
              </g>
              <circle className="ic-seal" cx="4.0" cy="12.0" r="1.75" />
            </svg>
            Terms of Use
          </a>
        </div>
      </aside>
    </section>
  );
}
