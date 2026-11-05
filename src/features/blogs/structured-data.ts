/** JSON-LD for /blogs (BreadcrumbList / WebApplication / FAQPage). */
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
        name: 'Blog',
        item: 'https://www.infina.co.in/blogs',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://www.infina.co.in/blogs#blog',
    name: 'Infina Blog',
    url: 'https://www.infina.co.in/blogs',
    description:
      'Plain-English guides on loans against securities, loans against property, ESOP financing and corporate real estate finance from Infina.',
    inLanguage: 'en-IN',
    publisher: {
      '@type': 'Organization',
      name: 'Infina Finance Private Limited',
      url: 'https://www.infina.co.in',
    },
    blogPost: [
      {
        '@type': 'BlogPosting',
        headline: 'Loan Against Shares vs Loan Against Mutual Funds: Which Is Right for You?',
        url: 'https://www.infina.co.in/blogs/loan-against-shares-vs-loan-against-mutual-funds-which-is-right-for-you',
        datePublished: '2026-07-01',
        description:
          'A side-by-side comparison of a loan against shares and a loan against mutual funds, to help you choose the right one for your portfolio.',
        author: {
          '@type': 'Organization',
          name: 'Infina',
        },
        articleSection: 'Loan Against Securities',
        publisher: {
          '@type': 'Organization',
          name: 'Infina Finance Private Limited',
          url: 'https://www.infina.co.in',
        },
      },
      {
        '@type': 'BlogPosting',
        headline: 'How Loan Against Property Works in India: Process, Interest Rates, Eligibility & Benefits',
        url: 'https://www.infina.co.in/blogs/how-loan-against-property-works-in-india-process-interest-rates-eligibility-benefits',
        datePublished: '2026-06-26',
        description:
          'How a loan against property works in India, including the process, interest rates, eligibility and benefits.',
        author: {
          '@type': 'Organization',
          name: 'Infina',
        },
        articleSection: 'Loan Against Property',
        publisher: {
          '@type': 'Organization',
          name: 'Infina Finance Private Limited',
          url: 'https://www.infina.co.in',
        },
      },
      {
        '@type': 'BlogPosting',
        headline: 'What is ESOP Financing and Why Do Employees Need It',
        url: 'https://www.infina.co.in/blogs/what-is-esop-financing-and-why-do-employees-need-it-99f6f',
        datePublished: '2026-05-13',
        description: 'What ESOP financing is and why employees may need it to exercise their stock options.',
        author: {
          '@type': 'Organization',
          name: 'Infina',
        },
        articleSection: 'ESOP Financing',
        publisher: {
          '@type': 'Organization',
          name: 'Infina Finance Private Limited',
          url: 'https://www.infina.co.in',
        },
      },
      {
        '@type': 'BlogPosting',
        headline: 'What is Loan Against Securities and How It Works in India: A Complete Guide',
        url: 'https://www.infina.co.in/blogs/what-is-loan-against-securities-and-how-it-works-in-india-a-complete-guide',
        datePublished: '2026-05-13',
        description: 'A complete guide to how a loan against securities works in India.',
        author: {
          '@type': 'Organization',
          name: 'Infina',
        },
        articleSection: 'Loan Against Securities',
        publisher: {
          '@type': 'Organization',
          name: 'Infina Finance Private Limited',
          url: 'https://www.infina.co.in',
        },
      },
      {
        '@type': 'BlogPosting',
        headline: 'Corporate Real Estate Finance Explained: A Complete Guide for Developers',
        url: 'https://www.infina.co.in/blogs/corporate-real-estate-finance-explained-a-complete-guide-for-developers-70092',
        datePublished: '2026-05-11',
        description: 'A complete guide to corporate real estate finance for developers.',
        author: {
          '@type': 'Organization',
          name: 'Infina',
        },
        articleSection: 'Corporate Real Estate',
        publisher: {
          '@type': 'Organization',
          name: 'Infina Finance Private Limited',
          url: 'https://www.infina.co.in',
        },
      },
      {
        '@type': 'BlogPosting',
        headline: 'Loan Against Property vs Personal Loan: Which is Better?',
        url: 'https://www.infina.co.in/blogs/loan-against-property-vs-personal-loan---which-is-better',
        datePublished: '2026-05-11',
        description: 'How a loan against property compares with a personal loan, and which may suit you better.',
        author: {
          '@type': 'Organization',
          name: 'Infina',
        },
        articleSection: 'Loan Against Property',
        publisher: {
          '@type': 'Organization',
          name: 'Infina Finance Private Limited',
          url: 'https://www.infina.co.in',
        },
      },
    ],
  },
];
