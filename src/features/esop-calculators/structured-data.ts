/** JSON-LD for /esop-calculators (BreadcrumbList / WebApplication / FAQPage). */
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
        name: 'ESOP Funding Calculator',
        item: 'https://www.infina.co.in/esop-calculators',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'ESOP Funding Calculator',
    url: 'https://www.infina.co.in/esop-calculators',
    description:
      'Estimate the cash you need to exercise ESOPs: perquisite tax, Infina funding, interest and fees. Free calculator from Infina, an RBI registered NBFC.',
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
      'Exercise cost and perquisite tax',
      'Infina funding and employee contribution',
      'Slab-wise interest and total cost of funding',
      'Export to Excel',
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
        name: 'What is an ESOP funding calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It is a free tool that estimates the cash you need to exercise your vested employee stock options with funding from Infina. It shows what you owe your employer, how much Infina can fund, your own contribution and the cost of the funding.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the ESOP funding calculator work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Enter the current market price (CMP), your exercise price, the number of options you are exercising, the loan tenure in days and your tax rate. The calculator works out the exercise cost, the perquisite tax, the total payable to your employer, the Infina funding, your contribution, and the interest, fees and total cost of funding.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is the cost of exercising ESOPs calculated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Exercise cost is the exercise price multiplied by the number of options. Perquisite tax is (CMP minus exercise price) multiplied by the quantity and your tax rate. The total payable to your employer is the sum of the two.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is perquisite tax on ESOPs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'When you exercise ESOPs, the difference between the market price and your exercise price is treated as a perquisite and taxed as part of your salary income. Your employer usually deducts this tax, so you pay it along with the exercise cost.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which tax rate should I select in the calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Select the rate for your income slab under the New Tax Regime. The calculator offers 30% to 39%. Check with your tax advisor for the exact rate that applies to you.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much funding will Infina provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Infina funds the lower of 50% of the current market price of the shares or the amount payable to your employer. Anything above that is your own contribution.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the employee contribution?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It is the part of the amount payable to your employer that Infina does not fund. It is paid in cash or by pledging additional securities.',
        },
      },
      {
        '@type': 'Question',
        name: 'What interest rate does the calculator use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Interest is charged in slabs by the number of days: 8.50% p.a. for days 1 to 30, 9.00% p.a. for days 31 to 90, 9.50% p.a. for days 91 to 180 and 10.50% p.a. for days 181 to 365. The calculator adds up the interest for each slab you use. Actual rates can vary from one employer to another.',
        },
      },
      {
        '@type': 'Question',
        name: 'What fees are included in the calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The cost of funding includes interest, a processing fee of 0.25% of the funding plus 18% GST, and a documentation charge of ₹999 plus 18% GST, which is ₹1,179. Brokerage of 0.08% plus applicable taxes applies when shares are sold and is not part of the funding cost shown.',
        },
      },
      {
        '@type': 'Question',
        name: 'What loan tenure can I choose?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The calculator covers 1 to 365 days. Choose a tenure that fits when you plan to sell the shares. Your Infina team confirms the tenure available for your case.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Infina a broker?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "No. Infina Finance is not a broker. Shares are sold through Infina's empanelled brokers.",
        },
      },
      {
        '@type': 'Question',
        name: 'Can I export the result?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Use Export to Excel under the results to download your inputs and the full breakup as a spreadsheet.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this calculator free, and are the results final?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It is free and needs no sign-up. The results are indicative. Actual rates, fees and the funding amount depend on your employer, the securities and credit approval.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I apply for ESOP financing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Choose Apply Now to start. Infina asks for your identity documents, salary slip and ESOP details, confirms your funding and terms, and releases the funds once your application is approved. You can read the full ESOP financing page before you start.',
        },
      },
    ],
  },
];
