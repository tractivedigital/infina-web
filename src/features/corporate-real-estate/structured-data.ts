/** JSON-LD for /corporate-real-estate (BreadcrumbList / WebApplication / FAQPage). */
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
        name: 'Corporate Real Estate Financing',
        item: 'https://www.infina.co.in/corporate-real-estate',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': ['FinancialProduct', 'LoanOrCredit'],
    name: 'Corporate Real Estate Financing',
    url: 'https://www.infina.co.in/corporate-real-estate',
    description:
      'Finance for real estate developers: construction, last mile, inventory and structured finance. Apply online with Infina, an RBI registered NBFC.',
    loanType: 'Real estate developer finance',
    requiredCollateral: 'Underlying real estate project, guarantees and escrow control',
    currency: 'INR',
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
