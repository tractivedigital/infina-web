/** JSON-LD for /about (BreadcrumbList / WebApplication / FAQPage). */
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
        name: 'About Us',
        item: 'https://www.infina.co.in/about',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Infina Finance',
    url: 'https://www.infina.co.in/about',
    description:
      'Infina Finance is an RBI registered NBFC founded in 1996 and majority owned by the Kotak family. Meet our board and management team and find our offices.',
    mainEntity: {
      '@type': ['Organization', 'FinancialService'],
      name: 'Infina Finance Private Limited',
      url: 'https://www.infina.co.in',
      foundingDate: '1996',
      identifier: 'U67120MH1996PTC098584',
      sameAs: ['https://www.linkedin.com/company/infina-finance-pvt--ltd-/'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '7th Floor, Sheil Estate, Dani Corporate Park, 158 C.S.T Road, Kalina, Santacruz (East)',
        addressLocality: 'Mumbai',
        postalCode: '400098',
        addressCountry: 'IN',
      },
      telephone: '+91-22-66808304',
      email: 'customerservice@infina.in',
      areaServed: 'IN',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: '+91-22-66808304',
        email: 'customerservice@infina.in',
        areaServed: 'IN',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Infina Finance products',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'FinancialProduct',
              name: 'Loan Against Securities',
              url: 'https://www.infina.co.in/loan-against-securities',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'FinancialProduct',
              name: 'Loan Against Property',
              url: 'https://www.infina.co.in/loan-against-property',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'FinancialProduct',
              name: 'Corporate Real Estate',
              url: 'https://www.infina.co.in/corporate-real-estate',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'FinancialProduct',
              name: 'ESOP Financing',
              url: 'https://www.infina.co.in/esop-financing',
            },
          },
        ],
      },
      location: [
        {
          '@type': 'Place',
          name: 'Mumbai',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Mumbai',
            addressCountry: 'IN',
          },
        },
        {
          '@type': 'Place',
          name: 'New Delhi',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'New Delhi',
            addressCountry: 'IN',
          },
        },
        {
          '@type': 'Place',
          name: 'Surat',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Surat',
            addressCountry: 'IN',
          },
        },
        {
          '@type': 'Place',
          name: 'Ahmedabad',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Ahmedabad',
            addressCountry: 'IN',
          },
        },
        {
          '@type': 'Place',
          name: 'Pune',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Pune',
            addressCountry: 'IN',
          },
        },
      ],
      employee: [
        {
          '@type': 'Person',
          name: 'Dipak Gupta',
          jobTitle: 'Independent Director and Chairperson',
        },
        {
          '@type': 'Person',
          name: 'Sudhakar Shanbhag',
          jobTitle: 'Whole-time Director and CEO',
        },
        {
          '@type': 'Person',
          name: 'Suresh Kotak',
          jobTitle: 'Non-Executive Director',
        },
        {
          '@type': 'Person',
          name: 'Sumanlal Shah',
          jobTitle: 'Non-Executive Director',
        },
        {
          '@type': 'Person',
          name: 'S. Ramesh',
          jobTitle: 'Non-Executive Director',
        },
        {
          '@type': 'Person',
          name: 'Rajesh Doshi',
          jobTitle: 'Non-Executive Director',
        },
        {
          '@type': 'Person',
          name: 'Narayan SA',
          jobTitle: 'Non-Executive Director',
        },
        {
          '@type': 'Person',
          name: 'Dr. Janki Mistry',
          jobTitle: 'Independent Director',
        },
        {
          '@type': 'Person',
          name: 'Srikar Baljekar',
          jobTitle: 'Independent Director',
        },
        {
          '@type': 'Person',
          name: 'Keyur Gandhi',
          jobTitle: 'Chief Financial Officer',
        },
        {
          '@type': 'Person',
          name: 'Parth Bumiya',
          jobTitle: 'Business Head, LAS, LAP and CRE',
        },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is Infina Finance registered with the RBI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Infina Finance Private Limited is a Non-Banking Financial Company registered with the Reserve Bank of India. Its Corporate Identification Number (CIN) is U67120MH1996PTC098584.',
        },
      },
      {
        '@type': 'Question',
        name: 'When was Infina Finance founded?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Infina Finance was founded in 1996. Its registered office is in Kalina, Mumbai, and it now serves customers through offices in Mumbai, New Delhi, Surat, Ahmedabad and Pune.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who owns Infina Finance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Infina is majority owned by the Kotak family. Kotak Mahindra Bank continues to hold 19% through its subsidiary.To confirm',
        },
      },
      {
        '@type': 'Question',
        name: 'Who runs Infina Finance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sudhakar Shanbhag is the Whole-time Director and CEO, and Dipak Gupta is the Independent Director and Chairperson. Keyur Gandhi is the Chief Financial Officer. The full board and management team are listed on this page.',
        },
      },
      {
        '@type': 'Question',
        name: 'What products does Infina Finance offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Infina offers Loan Against Securities, Loan Against Property, Corporate Real Estate financing for developers, and ESOP Financing for employees who want to exercise stock options.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where are Infina Finance offices?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The registered office is at Dani Corporate Park, Kalina, Santacruz (East), Mumbai 400098. Branch offices are in New Delhi, Surat, Ahmedabad and Pune. Offices are open Monday to Friday, 9am to 6pm.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I contact Infina Finance or raise a complaint?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Call 022-66808304 or use the contact page. For a complaint, write to customerservice@infina.in.',
        },
      },
    ],
  },
];
