/** JSON-LD for /esop-financing (BreadcrumbList / WebApplication / FAQPage). */
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
        name: 'ESOP Financing',
        item: 'https://www.infina.co.in/esop-financing',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': ['FinancialProduct', 'LoanOrCredit'],
    name: 'ESOP Financing',
    url: 'https://www.infina.co.in/esop-financing',
    description:
      'Fund the cost of exercising your vested ESOPs without waiting for a liquidity event. Apply online with Infina, an RBI registered NBFC.',
    loanType: 'ESOP financing',
    requiredCollateral: 'Vested employee stock options',
    currency: 'INR',
    amount: {
      '@type': 'MonetaryAmount',
      currency: 'INR',
      minValue: 100000,
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
        name: 'What is ESOP financing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ESOP financing is a loan that helps you pay for exercising your vested employee stock options. You get the funds you need without waiting for a liquidity event, and you repay the loan on the terms you agree.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is eligible for ESOP financing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Employees who hold vested ESOPs of a listed or unlisted company, are Indian residents above 18 years and have a satisfactory credit history.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can NRIs apply for ESOP financing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. FEMA regulations do not permit ESOP funding for NRIs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can foreign nationals apply for ESOP financing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, if they live and work in India. They are treated as persons resident in India under FEMA and can apply on the same terms as other employees based in India.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does ESOP financing cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Infina funds the lower of 50% of the current market price of the shares or the amount you owe your employer, which is the exercise cost plus the tax on the perquisite. You pay the rest.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much can I borrow?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Loans start from ₹1 lakh. The amount depends on the number of options you exercise, the exercise price, the current market price and the tax on the perquisite. Use the calculator above for an estimate.',
        },
      },
      {
        '@type': 'Question',
        name: 'What interest rate will I pay?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The rate depends on the tenure. In the calculator, it is 8.50% p.a. for up to 30 days, 9.00% p.a. for 31 to 90 days, 9.50% p.a. for 91 to 180 days and 10.50% p.a. for 181 to 365 days. The actual rate can vary from one employer to another.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the repayment tenure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can choose a tenure that suits when you plan to sell the shares. The calculator covers 1 to 365 days. Your Infina team confirms the maximum tenure for your case.',
        },
      },
      {
        '@type': 'Question',
        name: 'What fees and charges apply?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Infina lists a documentation charge, a processing fee, a charge of ₹150 per ISIN for pledge or lien invocation, a cheque bounce charge of ₹500 and a charge of ₹0.10 per share on sale of shares. Delay in payment, delay in pledge creation and penal charges are 9%. The full table is in the section on rates, fees and charges.',
        },
      },
      {
        '@type': 'Question',
        name: 'What documents are required?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You need identity and address proof, your Form 16 for the relevant year, your most recent salary slip and any other documents Infina asks for. The list is in the section on eligibility and documents above.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I apply for ESOP financing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Share your name and mobile number and tell us whether your company is listed or unlisted. Infina then asks for your documents and ESOP details, confirms your funding and terms, and releases the funds once your application is approved.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the ESOP calculator work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Enter the current market price, your exercise price, the number of options you are exercising, the tenure and your tax rate. The calculator estimates the funding Infina can provide, the amount payable to your employer, your own contribution and the cost of funding. The results are indicative.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Infina a broker?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "No. Infina Finance is not a broker. Shares are sold through Infina's empanelled brokers, and brokerage applies on the sale.",
        },
      },
      {
        '@type': 'Question',
        name: 'Do I have to pay anything myself?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Possibly. If the amount you owe your employer is more than the funding Infina provides, you pay the difference as your own contribution. The calculator shows this figure.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if I do not repay?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If repayments are missed, the lender can take the steps set out in your loan agreement and applicable law to recover the dues, including against the pledged shares. If you expect a problem with a repayment, talk to Infina early at customerservice@infina.in.',
        },
      },
    ],
  },
];
