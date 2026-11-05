/** JSON-LD for /lap-calculators (BreadcrumbList / WebApplication / FAQPage). */
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
        name: 'Loan Against Property Calculator',
        item: 'https://www.infina.co.in/lap-calculators',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Loan Against Property Calculator',
    url: 'https://www.infina.co.in/lap-calculators',
    description:
      'Estimate your loan against property EMI and how much you can borrow from your income. Free calculator from Infina, an RBI registered NBFC.',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    inLanguage: 'en-IN',
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    featureList: [
      'Monthly EMI on a loan against property',
      'Total interest and total payable',
      'Indicative eligible loan amount from income and obligations',
    ],
    provider: {
      '@type': 'Organization',
      name: 'Infina Finance Private Limited',
      url: 'https://www.infina.co.in',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a loan against property calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It is a free tool that estimates the monthly EMI on a loan against property and how much you may be able to borrow. Enter a loan amount, tenure and rate to see the EMI, or enter your income and obligations to see an indicative loan amount.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is the EMI on a loan against property calculated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'EMI = P × r × (1 + r)^n ÷ ((1 + r)^n − 1), where P is the loan amount, r is the monthly rate (annual rate ÷ 12 ÷ 100) and n is the number of months. For ₹50,00,000 at 11% p.a. for 180 months, the EMI is ₹56,830.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which interest rate does the calculator use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The calculators start at 11% p.a. so you can see a sample result. Change it to the rate you are offered. Your actual rate depends on your profile, the property, the loan amount and the tenure, and is stated in your sanction letter.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this calculator free, and do I need to sign up?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, it is free and needs no sign-up, login or personal details. The results are indicative and are not an offer of credit.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is loan eligibility calculated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The eligibility calculator takes your monthly income, subtracts your existing monthly obligations, and assumes up to 60% of that can go towards the new EMI. It then works out the loan that EMI can repay at your chosen rate and tenure. With ₹2,00,000 income, ₹30,000 obligations, 11% and 180 months, that is an EMI of ₹1,02,000 and a loan of about ₹89,74,158.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the minimum loan amount and tenure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Loans start from ₹20 lakh. You can choose a tenure from 36 to 180 months.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the loan to value (LTV) ratio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Loan to value is the share of your property's value that you can borrow. It depends on the property type and your profile, and your Infina team confirms the figure for your property.",
        },
      },
      {
        '@type': 'Question',
        name: 'Does my property value change the result?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The eligibility calculator is based on income, obligations, rate and tenure. When you apply, the lender also values the property and applies a loan to value limit, so the final amount can be lower than the calculator shows.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do my existing EMIs affect eligibility?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Every rupee of existing monthly obligations reduces the EMI you can afford, and so the loan you can get. Closing or reducing an existing loan before you apply can raise your eligible amount.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I lower my EMI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A longer tenure lowers the EMI but raises the total interest you pay. A smaller loan amount or a lower rate also lowers it. Try different tenures in the EMI calculator to see the trade-off.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which properties can I mortgage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Residential properties such as villas, studio apartments, flats and duplexes. Commercial properties such as offices, shops and warehouses. Industrial properties such as factories and manufacturing units. Your Infina team confirms what is accepted for your property.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are fees and charges included in the calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "No. The calculator shows EMI and interest only. Infina's fees and charges matrix lists a processing fee of up to 3%, legal and tech fees per property and stamp duty at actuals. The full list of charges is available as a PDF.",
        },
      },
      {
        '@type': 'Question',
        name: 'Can I repay early?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Part payments of up to 25% in a financial year carry no charge. Part payment above 25% carries a 4% charge on the excess, and full prepayment or foreclosure carries a 4% charge. Floating rate loans to individuals for non-business use carry no prepayment charge.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I apply for a loan against property?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Share your name, mobile number and the loan amount you need. Infina then asks for your income and property details and documents, values the property, and confirms your loan amount and terms once your application is approved. You can read the full product page before you start.',
        },
      },
    ],
  },
];
