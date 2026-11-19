export type HeroPage = 'home' | 'las' | 'lap' | 'esop' | 'cre';

export interface HeroSlide {
  title: string;
  text: string;
  /** One or two links shown under the text. */
  ctas: { label: string; href: string }[];
}

/**
 * Extra slides for the main hero banner. Slide 1 is the page's existing hero copy (heading, tag line, points);
 * these three follow it. Copy reuses claims that are already made on the pages they link to.
 */
export const heroSlides: Record<HeroPage, HeroSlide[]> = {
  home: [
    {
      title: 'Loan against securities',
      text: 'Borrow against your shares and mutual funds and stay invested.',
      ctas: [{ label: 'Explore loan against securities', href: '/loan-against-securities' }],
    },
    {
      title: 'ESOP financing',
      text: 'Get immediate funds to exercise your stock options, with hassle-free financing.',
      ctas: [{ label: 'Explore ESOP financing', href: '/esop-financing' }],
    },
    {
      title: 'Property and real estate financing',
      text: 'Fund against your residential or commercial property, or get structured financing as a real estate developer.',
      ctas: [
        { label: 'Loan against property', href: '/loan-against-property' },
        { label: 'Corporate real estate', href: '/corporate-real-estate' },
      ],
    },
  ],
  las: [
    {
      title: 'Securities you can pledge',
      text: 'Shares, mutual funds, bonds and more can back your loan.',
      ctas: [{ label: 'See what you can pledge', href: '#pledge' }],
    },
    {
      title: 'Know what you need before you apply',
      text: 'Check the eligibility criteria and the documents required.',
      ctas: [{ label: 'View eligibility', href: '#eligibility' }],
    },
    {
      title: 'Put your portfolio to work',
      text: 'Follow the simple steps to apply for a loan against securities.',
      ctas: [{ label: 'See how it works', href: '#how' }],
    },
  ],
  lap: [
    {
      title: 'Property you can mortgage',
      text: 'See the kinds of residential and commercial property you can mortgage for a loan.',
      ctas: [{ label: 'See property types', href: '#property' }],
    },
    {
      title: 'Know what you need before you apply',
      text: 'Check the eligibility criteria and the documents required.',
      ctas: [{ label: 'View eligibility', href: '#eligibility' }],
    },
    {
      title: 'Put your property to work',
      text: 'Follow the steps to apply for a loan against property.',
      ctas: [{ label: 'See how it works', href: '#how' }],
    },
  ],
  esop: [
    {
      title: 'ESOPs and employees we fund',
      text: 'See which ESOPs and employees Infina funds.',
      ctas: [{ label: 'See who we fund', href: '#offer' }],
    },
    {
      title: 'Know what you need before you apply',
      text: 'Check the eligibility criteria and the documents required.',
      ctas: [{ label: 'View eligibility', href: '#eligibility' }],
    },
    {
      title: 'Put your options to work',
      text: 'Follow the steps to apply for ESOP financing.',
      ctas: [{ label: 'See how it works', href: '#how' }],
    },
  ],
  cre: [
    {
      title: 'What developer financing can pay for',
      text: 'See what corporate real estate financing can cover for your project.',
      ctas: [{ label: 'See what it covers', href: '#decide' }],
    },
    {
      title: 'Know what you need before you apply',
      text: 'Check the eligibility criteria and the documents required.',
      ctas: [{ label: 'View eligibility', href: '#eligibility' }],
    },
    {
      title: 'Fund your next project',
      text: 'Follow the steps to apply for corporate real estate financing.',
      ctas: [{ label: 'See how it works', href: '#how' }],
    },
  ],
};
