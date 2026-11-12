import Image from 'next/image';

export function OhBand() {
  return (
    <section className="oh-band" aria-labelledby="h1">
      <div className="oh" id="oh">
        <div className="oh-img" id="himg">
          <Image
            src="/images/diwali-las/diwali-las-hero.webp"
            width={900}
            height={1117}
            alt="A smiling man in an orange kurta holds a tablet showing a rising portfolio chart, with Diwali lights and marigold garlands behind him"
          />
        </div>
        <div className="oh-copy">
          <span className="oh-pill">Diwali offer · till 30th November 2026</span>
          <h1 id="h1">
            Unlock up to <span className="hl">₹2.5 Cr*</span> against your mutual funds and stocks this Diwali
          </h1>
          <div className="oh-body" id="hbody">
            <div className="oh-tiles three">
              <div className="oh-tile">
                <span className="lbl">ROI starting</span>
                <span className="val">
                  10.25%
                  <small>p.a.</small>
                </span>
              </div>
              <div className="oh-tile">
                <span className="lbl">Processing fee</span>
                <span className="val">
                  ₹999
                  <small>+ GST</small>
                </span>
              </div>
              <div className="oh-tile">
                <span className="lbl">Facility type</span>
                <span className="val">
                  Flexi LAS
                  <small>Revolving limit</small>
                </span>
              </div>
            </div>
          </div>
          <div className="oh-cta">
            <a
              className="oh-btn hero-cta"
              href="https://www.digilas.infina.co.in/?code=festive999"
              data-apply=""
              rel="noopener"
            >
              Apply now for Diwali offer{' '}
              <svg viewBox="0 0 24 24">
                <use href="#dw-arrow" />
              </svg>
            </a>
            <div className="oh-sec">
              <a
                className="oh-ghost"
                href="https://www.digilas.infina.co.in/?code=festive999"
                data-apply=""
                rel="noopener"
              >
                Check eligibility
              </a>
            </div>
            <p className="oh-note">Sign up in about 30 seconds · Offer valid till 30th November 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}
