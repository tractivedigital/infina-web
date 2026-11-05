export function About() {
  return (
    <section className="sec tight-top" id="about">
      <div className="wrapx">
        <div className="ab">
          <div className="ab-img" role="img" aria-label="Stacks of coins on a financial document">
            <i style={{ backgroundImage: 'url(/images/home/home-img-1.jpg)' }} />
          </div>
          <div className="ab-tx">
            <h2 className="h2">
              Your financial assets hold more potential than you <em>think.</em>
            </h2>
            <p className="body">
              Infina Finance Private Limited is a trusted non-banking financial company in India, providing asset
              financial services and NBFC lending services since 1996. Backed by the Kotak Family and registered with
              the Reserve Bank of India, Infina focuses on helping clients unlock liquidity while preserving long-term
              wealth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
