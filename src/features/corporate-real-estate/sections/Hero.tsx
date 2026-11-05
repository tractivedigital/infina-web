import { HeroLeadForm } from '@/components/forms/HeroLeadForm';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="wrapx">
      <div className="hv3">
        <section className="hero on-navy hv v3" id="hero" aria-labelledby="h1">
          <div className="hero-bg" aria-hidden="true">
            <Image priority className="hero-photo" src="/images/cre/cre-hero.webp" alt="" width={1200} height={735} />
          </div>
          <div className="hero-scrim" aria-hidden="true" />
          <div className="hv-wrap">
            <div className="hv-copy">
              <h1 id="h1">Corporate real estate financing</h1>
              <p className="hv-tag">Smart real estate financing solutions for developers</p>
              <p className="sub">
                Strategic funding for your project development and expansion plans, at every stage of the project
                lifecycle.
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
                  <span>Tailor made solutions</span>
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
                  <span>Diverse product offering</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <HeroLeadForm
          interest={{
            label: 'I need',
            name: 'need',
            options: [
              'Construction finance',
              'Last mile financing',
              'Inventory financing',
              'Group working capital',
              'Structured finance',
              'Balance transfer',
            ],
          }}
          consent="privacy"
        />
      </div>
    </div>
  );
}
