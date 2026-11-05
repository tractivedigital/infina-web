/** JSON-LD for /loan-against-property (BreadcrumbList / WebApplication / FAQPage). */
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
        name: 'Loan Against Property',
        item: 'https://www.infina.co.in/loan-against-property',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': ['FinancialProduct', 'LoanOrCredit'],
    name: 'Loan Against Property',
    url: 'https://www.infina.co.in/loan-against-property',
    description:
      'Get a loan against residential, commercial or industrial property for business or personal needs, starting from ₹20 lakh. Apply online with Infina.',
    loanType: 'Loan against property',
    requiredCollateral: 'Residential, commercial or industrial property',
    currency: 'INR',
    amount: {
      '@type': 'MonetaryAmount',
      currency: 'INR',
      minValue: 2000000,
    },
    loanTerm: {
      '@type': 'QuantitativeValue',
      minValue: 36,
      maxValue: 180,
      unitCode: 'MON',
    },
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
        name: 'What is a loan against property?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You borrow money by mortgaging a property that you own, such as a home, an office or a factory. You keep owning the property and repay the loan over the tenure.',
        },
      },
      {
        '@type': 'Question',
        name: 'What can I use the money for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Business growth, debt consolidation or personal needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which properties can I mortgage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Residential properties such as villas, studio apartments, flats and duplexes. Commercial properties such as offices, shops and warehouses. Industrial properties such as factories and manufacturing units.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I mortgage land or a plot?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your Infina team confirms which property types are accepted and what title and approvals are needed.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who can apply for a loan against property?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Indian citizens and entities aged 25 to 70 at loan maturity, who are salaried or self-employed and own a residential, commercial or industrial property. The detailed criteria for each applicant type are in the section on eligibility and documents above.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I apply with a co-applicant?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your Infina team confirms who can be a co-applicant and whether co-owners of the property need to apply.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much can I borrow?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Loans start from ₹20 lakh. The amount depends on the market value of your property, your income and your existing monthly obligations. Use the calculator above for an indicative figure.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the loan to value (LTV) ratio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Loan to value is the share of your property's value that you can borrow. It depends on the property type and your profile. Your Infina team confirms the figure for your property.",
        },
      },
      {
        '@type': 'Question',
        name: 'What interest rate will I pay?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The rate depends on your profile, the property, the loan amount and the tenure, and is stated in your sanction letter. The calculator lets you try different rates to see how the instalment changes.',
        },
      },
      {
        '@type': 'Question',
        name: 'What fees and charges apply?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Infina's fees and charges matrix lists a processing fee of up to 3%, legal and tech fees of ₹5,000 per property for loans up to ₹1 crore, ₹8,000 above ₹1 crore and up to ₹10 crore, and ₹10,000 above ₹10 crore, and stamp duty at actuals. Service charges and prepayment terms are in the section on rates, fees and charges.",
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
        name: 'What is the tenure of a loan against property?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can choose a tenure from 36 to 180 months.',
        },
      },
      {
        '@type': 'Question',
        name: 'What documents are required?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You need an application form with a recent photograph, proof of identity, address and age, bank statements or salary slips for the last 6 months, income tax returns for the last 3 years, Form 16 for salaried applicants and the property documents. The list for each applicant type is in the documents section above.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I apply for a loan against property?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Share your name, mobile number and the loan amount you need. Infina then asks for your income and property details and documents, values the property, and confirms your loan amount and terms once your application is approved.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does approval and disbursal take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The time depends on how quickly your documents, the property valuation and the legal check are completed. Your Infina team confirms the expected timeline when you apply.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the eligibility calculator work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Enter your profile, the property type and market value, your monthly income and obligations, an interest rate and a tenure. The calculator estimates the loan amount and the monthly instalment. The results are indicative, and actual terms depend on documentation and credit approval.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if I do not repay?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If repayments are missed, the lender can take the steps set out in your loan agreement and applicable law to recover the dues, including against the mortgaged property. If you expect a problem with a repayment, talk to Infina early at customerservice@infina.in.',
        },
      },
    ],
  },
];
