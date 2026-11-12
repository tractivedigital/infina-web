/** JSON-LD for /privacy-policy (BreadcrumbList / WebApplication / FAQPage). */
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
        name: 'Privacy Policy',
        item: 'https://www.infina.co.in/privacy-policy',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy | Infina Finance Private Limited',
    description:
      'How Infina Finance Private Limited uses, secures and discloses customer information, plus your choices on consent, cookies and grievances.',
    url: 'https://www.infina.co.in/privacy-policy',
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
