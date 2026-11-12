/** JSON-LD for /terms-of-use (BreadcrumbList / WebApplication / FAQPage). */
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
        name: 'Terms of Use',
        item: 'https://www.infina.co.in/terms-of-use',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms of Use | Infina Finance Private Limited',
    description:
      'Read the Terms of Use that govern your access to and use of the Infina Finance website, including accounts, privacy and dispute resolution.',
    url: 'https://www.infina.co.in/terms-of-use',
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
