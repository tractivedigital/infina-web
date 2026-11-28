/** JSON-LD for /loan-against-property (BreadcrumbList / WebApplication / FAQPage). */
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
        name: 'Loan Against Property',
        item: 'https://www.infina.co.in/loan-against-property',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': ['FinancialProduct', 'LoanOrCredit'],
    name: 'Loan Against Property',
    url: 'https://www.infina.co.in/loan-against-property',
    description:
      'Get a loan against residential, commercial or industrial property for business or personal needs, starting from ₹20 lakh. Apply online with Infina.',
    loanType: 'Loan against property',
    requiredCollateral: 'Residential, commercial or industrial property',
    currency: 'INR',
    amount: {
      '@type': 'MonetaryAmount',
      currency: 'INR',
      minValue: 2000000,
    },
    loanTerm: {
      '@type': 'QuantitativeValue',
      minValue: 36,
      maxValue: 180,
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
