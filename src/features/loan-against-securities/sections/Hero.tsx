import { HeroLeadForm } from '@/components/forms/HeroLeadForm';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="wrapx">
      <div className="hv3">
        <section className="hero on-navy hv v3" id="hero" aria-labelledby="h1">
          <div className="hero-bg" aria-hidden="true">
            <Image priority className="hero-photo" src="/images/las/las-hero.webp" alt="" width={960} height={1056} />
          </div>
          <div className="hero-scrim" aria-hidden="true" />
          <div className="hv-wrap">
            <div className="hv-copy">
              <h1 id="h1">Loan against Stocks and Mutual funds</h1>
              <p className="hv-tag">Get Your Loan Instantly!</p>
              <p className="sub">Avail loans without selling or liquidating your investments.</p>
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
                  <span>For business or personal needs</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <HeroLeadForm
          interest={{
            label: 'I want to borrow against',
            name: 'interest',
            options: ['Shares', 'Mutual funds', 'Bonds', 'Other securities'],
          }}
          consent="privacy"
        />
      </div>
    </div>
  );
}
