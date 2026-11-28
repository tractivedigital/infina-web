/** JSON-LD for /loan-against-securities (BreadcrumbList / WebApplication / FAQPage). */
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
        name: 'Loan Against Securities',
        item: 'https://www.infina.co.in/loan-against-securities',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': ['FinancialProduct', 'LoanOrCredit'],
    name: 'Loan Against Shares and Mutual Funds',
    url: 'https://www.infina.co.in/loan-against-securities',
    description:
      'Borrow against shares, mutual funds and bonds without selling them. Rates from 10.5% p.a. Apply online with Infina, an RBI registered NBFC.',
    loanType: 'Loan against securities',
    requiredCollateral: 'Listed shares, mutual funds, fixed income securities and other approved securities',
    currency: 'INR',
    amount: {
      '@type': 'MonetaryAmount',
      currency: 'INR',
      minValue: 25000,
      maxValue: 50000000,
    },
    loanTerm: {
      '@type': 'QuantitativeValue',
      minValue: 1,
      maxValue: 36,
      unitCode: 'MON',
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
