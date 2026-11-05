import { HeroLeadForm } from '@/components/forms/HeroLeadForm';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="wrapx">
      <div className="hv3">
        <section className="hero on-navy hv v3" id="hero" aria-labelledby="h1">
          <div className="hero-bg" aria-hidden="true">
            <Image priority className="hero-photo" src="/images/esop/esop-hero.webp" alt="" width={1200} height={735} />
          </div>
          <div className="hero-scrim" aria-hidden="true" />
          <div className="hv-wrap">
            <div className="hv-copy">
              <h1 id="h1">ESOP financing</h1>
              <p className="hv-tag">Unlock the value of your vested shares</p>
              <p className="sub">Get immediate funds to exercise your stock options, with hassle-free financing.</p>
              <ul className="hv-pts">
                <li>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <span>At attractive interest rates</span>
                </li>
                <li>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <span>Leverage your vested shares</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <HeroLeadForm
          interest={{
            label: 'My ESOPs are from',
            name: 'company',
            options: ['A listed company', 'An unlisted company'],
          }}
          consent="privacy"
        />
      </div>
    </div>
  );
}
