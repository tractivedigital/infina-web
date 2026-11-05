/** JSON-LD for /corporate-real-estate (BreadcrumbList / WebApplication / FAQPage). */
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
        name: 'Corporate Real Estate Financing',
        item: 'https://www.infina.co.in/corporate-real-estate',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': ['FinancialProduct', 'LoanOrCredit'],
    name: 'Corporate Real Estate Financing',
    url: 'https://www.infina.co.in/corporate-real-estate',
    description:
      'Finance for real estate developers: construction, last mile, inventory and structured finance. Apply online with Infina, an RBI registered NBFC.',
    loanType: 'Real estate developer finance',
    requiredCollateral: 'Underlying real estate project, guarantees and escrow control',
    currency: 'INR',
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
        name: 'What is corporate real estate financing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Corporate real estate financing is funding for developers and builders to build and complete their projects. Infina offers it as construction finance, last mile finance, inventory finance, structured finance and takeover of existing debt.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the real estate finance solutions provided to developers by Infina?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Infina provides construction finance, last mile finance, inventory finance, group working capital finance, structured finance and takeover of existing debt.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between construction finance and last mile finance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Construction finance funds project expenses such as materials, labour and project overheads. Last mile finance is strategic funding needed towards the end of the project lifecycle to complete the development.',
        },
      },
      {
        '@type': 'Question',
        name: 'What kind of properties can be considered for raising real estate finance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Any residential or mixed use project can be considered as an eligible project for structured finance and construction finance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can Infina take over my existing developer loan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes. Infina offers balance transfer, which takes over the developer's existing loans to realign their debt requirements.",
        },
      },
      {
        '@type': 'Question',
        name: 'Who is eligible to borrow from Infina for corporate real estate financing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Public or private limited companies, limited liability partnerships, partnership firms and sole proprietorship firms are all eligible to apply.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the eligibility criteria for corporate real estate loans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Infina looks for a delivery track record of 1 million sq. ft., a strong CIBIL and credit history, local market brand recall, project security and cash flows, a strong promoter net worth and asset base, and a good financial and shareholding structure.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is RERA registration compulsory to apply for real estate finance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'At least one project in your portfolio should have all approvals under RERA registration.',
        },
      },
      {
        '@type': 'Question',
        name: 'What type of security is required for raising real estate finance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The underlying real estate project, guarantees, escrow control and any other collateral that your customised solution requires.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which markets does Infina fund real estate projects in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Infina focuses on Mumbai, Pune, Ahmedabad, Bangalore, Hyderabad, Chennai and NCR. Selected projects in other cities may be considered case by case.',
        },
      },
      {
        '@type': 'Question',
        name: 'What fees and charges apply?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Infina lists a non-refundable processing fee, including commitment fees, of up to 3% of the loan amount, document charges of up to ₹50,000, a prepayment penalty of up to 5%, and due diligence cost, stamp duty and other charges at actuals. Applicable taxes are extra. The full table is in the section on rates, fees and charges above.',
        },
      },
      {
        '@type': 'Question',
        name: 'What interest rate will I pay?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The interest rate is set for your project and your company, and is confirmed in your sanction letter. Infina does not publish a single rate for developer loans.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the repayment tenure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tenure and moratorium are customised to the project. Infina offers longer gestation project loans, so your capital is aligned with the project without immediate financial pressure.',
        },
      },
      {
        '@type': 'Question',
        name: 'What documents are required?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Expect to share your company and promoter KYC, project approvals and title documents, and financial and cash flow details of the project. Your Infina team confirms the full list for your case.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I apply for corporate real estate financing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Share your name and mobile number and tell us what you need. Infina then asks for your company and project details, assesses the project and confirms the funding structure and terms.',
        },
      },
    ],
  },
];
