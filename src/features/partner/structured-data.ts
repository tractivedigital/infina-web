/** JSON-LD for /partner (BreadcrumbList / WebApplication / FAQPage). */
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
        name: 'Partners',
        item: 'https://www.infina.co.in/partner',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Our LSPs and DLAs | Infina Finance',
    description:
      'Infina Finance Private Limited discloses its Lending Service Providers and Digital Lending Apps, with contact and grievance details.',
    url: 'https://www.infina.co.in/partner',
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
