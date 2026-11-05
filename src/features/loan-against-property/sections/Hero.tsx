import { HeroLeadForm } from '@/components/forms/HeroLeadForm';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="wrapx">
      <div className="hv3">
        <section className="hero on-navy hv v3" id="hero" aria-labelledby="h1">
          <div className="hero-bg" aria-hidden="true">
            <Image priority className="hero-photo" src="/images/lap/lap-hero.webp" alt="" width={1200} height={583} />
          </div>
          <div className="hero-scrim" aria-hidden="true" />
          <div className="hv-wrap">
            <div className="hv-copy">
              <h1 id="h1">Loan Against Property</h1>
              <p className="hv-tag">Unlock your property value</p>
              <p className="sub">
                Avail Infina&apos;s loans against property for your business or personal needs, starting from ₹20 lakh.
              </p>
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
                  <span>Against residential, commercial or industrial property</span>
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
                  <span>For business growth, debt consolidation or personal needs</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <HeroLeadForm
          interest={{
            label: 'Loan amount',
            name: 'amount',
            options: [
              '₹20 lakh to ₹50 lakh',
              '₹50 lakh to ₹1 crore',
              '₹1 crore to ₹2 crore',
              '₹2 crore to ₹3 crore',
              '₹3 crore to ₹5 crore',
              'Above ₹5 crore',
            ],
          }}
          consent="privacy"
        />
      </div>
    </div>
  );
}
