import type { BannerArtName } from '@/components/banners/BannerArt';

export type BannerTone = 'navy' | 'blue' | 'ink' | 'red';

export interface BannerSlide {
  eyebrow: string;
  title: string;
  text: string;
  cta: { label: string; href: string };
  art: BannerArtName;
  tone: BannerTone;
}

export interface BannerSet {
  /** Accessible name of the carousel region. */
  label: string;
  slides: BannerSlide[];
}

export type BannerPage = 'home' | 'las' | 'lap' | 'esop' | 'cre';

/** Banner carousels for the home page and the four product pages. Copy reuses claims already made on those pages. */
export const banners: Record<BannerPage, BannerSet> = {
  home: {
    label: 'Infina lending services',
    slides: [
      {
        eyebrow: 'Loan against securities',
        title: 'Get funds without selling your investments',
        text: 'Borrow against your shares and mutual funds and stay invested.',
        cta: { label: 'Explore loan against securities', href: '/loan-against-securities' },
        art: 'portfolio',
        tone: 'navy',
      },
      {
        eyebrow: 'ESOP financing',
        title: 'Exercise your stock options with ease',
        text: 'Get immediate funds to exercise your stock options, with hassle-free financing.',
        cta: { label: 'Explore ESOP financing', href: '/esop-financing' },
        art: 'options',
        tone: 'blue',
      },
      {
        eyebrow: 'Loan against property',
        title: 'Put your property to work',
        text: 'Avail funding by leveraging your residential or commercial property.',
        cta: { label: 'Explore loan against property', href: '/loan-against-property' },
        art: 'property',
        tone: 'ink',
      },
      {
        eyebrow: 'Corporate real estate',
        title: 'Structured financing for developers',
        text: 'Financing solutions for real estate developers and businesses.',
        cta: { label: 'Explore corporate real estate', href: '/corporate-real-estate' },
        art: 'building',
        tone: 'red',
      },
    ],
  },
  las: {
    label: 'Loan against securities highlights',
    slides: [
      {
        eyebrow: 'Loan against securities',
        title: 'Avail loans without selling your investments',
        text: 'Estimate your loan against stocks and mutual funds before you apply.',
        cta: { label: 'Estimate your loan', href: '#estimate' },
        art: 'portfolio',
        tone: 'navy',
      },
      {
        eyebrow: 'Securities you can pledge',
        title: 'Shares, mutual funds, bonds and more',
        text: 'See which securities can back your loan.',
        cta: { label: 'See what you can pledge', href: '#pledge' },
        art: 'shield',
        tone: 'blue',
      },
      {
        eyebrow: 'Eligibility and documents',
        title: 'Know what you need before you apply',
        text: 'Check the eligibility criteria and the documents required.',
        cta: { label: 'View eligibility', href: '#eligibility' },
        art: 'documents',
        tone: 'ink',
      },
      {
        eyebrow: 'How to apply',
        title: 'Put your portfolio to work',
        text: 'Follow the simple steps to apply for a loan against securities.',
        cta: { label: 'See how it works', href: '#how' },
        art: 'steps',
        tone: 'red',
      },
    ],
  },
  lap: {
    label: 'Loan against property highlights',
    slides: [
      {
        eyebrow: 'Loan against property',
        title: 'Put your property to work',
        text: 'Check your eligibility with the loan against property calculator.',
        cta: { label: 'Check eligibility', href: '#estimate' },
        art: 'calculator',
        tone: 'navy',
      },
      {
        eyebrow: 'Property you can mortgage',
        title: 'Residential or commercial property',
        text: 'See the kinds of property you can mortgage for a loan.',
        cta: { label: 'See property types', href: '#property' },
        art: 'property',
        tone: 'blue',
      },
      {
        eyebrow: 'Eligibility and documents',
        title: 'Know what you need before you apply',
        text: 'Check the eligibility criteria and the documents required.',
        cta: { label: 'View eligibility', href: '#eligibility' },
        art: 'documents',
        tone: 'ink',
      },
      {
        eyebrow: 'How to apply',
        title: 'Apply in a few simple steps',
        text: 'Follow the steps to apply for a loan against property.',
        cta: { label: 'See how it works', href: '#how' },
        art: 'steps',
        tone: 'red',
      },
    ],
  },
  esop: {
    label: 'ESOP financing highlights',
    slides: [
      {
        eyebrow: 'ESOP financing',
        title: 'Get immediate funds to exercise your options',
        text: 'Work out your funding with the ESOP financing calculator.',
        cta: { label: 'Use the calculator', href: '#estimate' },
        art: 'calculator',
        tone: 'navy',
      },
      {
        eyebrow: 'ESOPs and employees we fund',
        title: 'Funding for your stock options',
        text: 'See which ESOPs and employees Infina funds.',
        cta: { label: 'See who we fund', href: '#offer' },
        art: 'options',
        tone: 'blue',
      },
      {
        eyebrow: 'Eligibility and documents',
        title: 'Know what you need before you apply',
        text: 'Check the eligibility criteria and the documents required.',
        cta: { label: 'View eligibility', href: '#eligibility' },
        art: 'documents',
        tone: 'ink',
      },
      {
        eyebrow: 'How to apply',
        title: 'Put your options to work',
        text: 'Follow the steps to apply for ESOP financing.',
        cta: { label: 'See how it works', href: '#how' },
        art: 'steps',
        tone: 'red',
      },
    ],
  },
  cre: {
    label: 'Corporate real estate financing highlights',
    slides: [
      {
        eyebrow: 'Corporate real estate',
        title: 'Fund your next project',
        text: 'Real estate finance solutions for developers.',
        cta: { label: 'See our solutions', href: '#offer' },
        art: 'building',
        tone: 'navy',
      },
      {
        eyebrow: 'What it can pay for',
        title: 'Financing built around your project',
        text: 'See what developer financing can pay for.',
        cta: { label: 'See what it covers', href: '#decide' },
        art: 'shield',
        tone: 'blue',
      },
      {
        eyebrow: 'Eligibility and documents',
        title: 'Know what you need before you apply',
        text: 'Check the eligibility criteria and the documents required.',
        cta: { label: 'View eligibility', href: '#eligibility' },
        art: 'documents',
        tone: 'ink',
      },
      {
        eyebrow: 'How to apply',
        title: 'Apply in a few simple steps',
        text: 'Follow the steps to apply for corporate real estate financing.',
        cta: { label: 'See how it works', href: '#how' },
        art: 'steps',
        tone: 'red',
      },
    ],
  },
};
