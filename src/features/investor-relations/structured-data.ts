/** JSON-LD for /investor-relations (BreadcrumbList / WebApplication / FAQPage). */
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
        name: 'Investor Relations',
        item: 'https://www.infina.co.in/investor-relations',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Investor Relations | Infina Finance NBFC India',
    description:
      'Financial results, policies, AGM notices, annual returns and regulatory disclosures of Infina Finance Private Limited.',
    url: 'https://www.infina.co.in/investor-relations',
    inLanguage: 'en-IN',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Infina',
      url: 'https://www.infina.co.in',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Infina Finance Private Limited',
      url: 'https://www.infina.co.in',
    },
  },
];
