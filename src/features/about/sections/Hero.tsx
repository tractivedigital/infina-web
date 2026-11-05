export function Hero() {
  return (
    <section className="ab-hero ab-wrap" aria-labelledby="hero-h">
      <div className="hero-panel">
        <h1 className="h1" id="hero-h">
          About <span className="hl">Infina Finance</span>
        </h1>
        <p className="ab-tag">
          Transform your assets into financial opportunities with our secure and hassle-free lending solutions.
        </p>
        <div className="hero-cta">
          <a className="inf-btn inf-btn--primary" href="https://www.digilas.infina.co.in/signin/otp/">
            Check Eligibility
          </a>
          <a className="inf-btn inf-btn--ghost on-dark" href="https://www.digilas.infina.co.in/signin/otp/">
            Login
          </a>
        </div>
      </div>
    </section>
  );
}
