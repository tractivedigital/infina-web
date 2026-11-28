/** JSON-LD for /esop-financing (BreadcrumbList / WebApplication / FAQPage). */
import { faqs } from './faq-data';

export const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.infina.co.in/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'ESOP Financing',
        item: 'https://www.infina.co.in/esop-financing',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': ['FinancialProduct', 'LoanOrCredit'],
    name: 'ESOP Financing',
    url: 'https://www.infina.co.in/esop-financing',
    description:
      'Fund the cost of exercising your vested ESOPs without waiting for a liquidity event. Apply online with Infina, an RBI registered NBFC.',
    loanType: 'ESOP financing',
    requiredCollateral: 'Vested employee stock options',
    currency: 'INR',
    amount: {
      '@type': 'MonetaryAmount',
      currency: 'INR',
      minValue: 100000,
    },
    provider: {
      '@type': 'Organization',
      name: 'Infina Finance Private Limited',
      url: 'https://www.infina.co.in',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  },
];
