/** JSON-LD for /contact (BreadcrumbList / WebApplication / FAQPage). */
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
        name: 'Contact Us',
        item: 'https://www.infina.co.in/contact',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Contact Infina Finance | Address and Support',
    description:
      'Contact Infina Finance Private Limited. Find our registered office, phone numbers, email addresses and grievance officer details.',
    url: 'https://www.infina.co.in/contact',
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
