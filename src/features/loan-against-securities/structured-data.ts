/** JSON-LD for /loan-against-securities (BreadcrumbList / WebApplication / FAQPage). */
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
        name: 'Loan Against Securities',
        item: 'https://www.infina.co.in/loan-against-securities',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': ['FinancialProduct', 'LoanOrCredit'],
    name: 'Loan Against Shares and Mutual Funds',
    url: 'https://www.infina.co.in/loan-against-securities',
    description:
      'Borrow against shares, mutual funds and bonds without selling them. Rates from 10.5% p.a. Apply online with Infina, an RBI registered NBFC.',
    loanType: 'Loan against securities',
    requiredCollateral: 'Listed shares, mutual funds, fixed income securities and other approved securities',
    currency: 'INR',
    amount: {
      '@type': 'MonetaryAmount',
      currency: 'INR',
      minValue: 25000,
      maxValue: 50000000,
    },
    loanTerm: {
      '@type': 'QuantitativeValue',
      minValue: 1,
      maxValue: 36,
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
        name: 'What is a loan against securities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You borrow money against shares, mutual funds or bonds that you already own. The securities are pledged as security and stay in your name, so you do not have to sell them.',
        },
      },
      {
        '@type': 'Question',
        name: 'What can I use the money for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Any personal or business need, such as a wedding, expanding a business, a medical emergency or a short term cash gap.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which securities can I pledge?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Listed shares, mutual funds (equity, debt, fixed maturity, balanced, arbitrage and target maturity), fixed income securities such as PSU bonds, private sector bonds and government securities, and other securities such as REITs and InvITs. AIFs and unlisted shares are accepted selectively. Infina publishes a list of approved securities.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much can I borrow?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The amount depends on the market value of the securities you pledge and the loan to value limit for each type of security. Limits differ by security: a debt mutual fund usually supports a higher limit than shares or equity funds. Your Infina team confirms the exact figure for your holdings.',
        },
      },
      {
        '@type': 'Question',
        name: 'What interest rate will I pay?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Rates start from 10.5% p.a. The rate you are offered depends on the loan amount, the tenure and the securities pledged. Interest is paid every month and the principal is repaid at the end of the tenure. Use the calculator above for a quick estimate.',
        },
      },
      {
        '@type': 'Question',
        name: 'What fees and charges apply?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Infina's list of charges shows a processing fee of up to 3% of the loan amount, document charges of up to ₹50,000, pledge or lien creation charges of up to ₹999 per instruction, and stamp duty at actual. Applicable taxes are extra. The full table is in the section on rates, fees and charges.",
        },
      },
      {
        '@type': 'Question',
        name: 'Can I repay early?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Flexi loans carry no foreclosure charges. For other loans, a prepayment charge of up to 3% can apply, as set out in your loan agreement.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if the value of my securities falls?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If the fall takes your loan above the permitted limit, the lender can ask you to pledge more securities or repay part of the loan. The notice period and the steps are set out in your loan agreement.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if I do not repay?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The pledged securities can be sold to recover the outstanding amount, interest and charges. If you are worried about a repayment, talk to Infina early at customerservice@infina.in.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is this different from a personal loan or margin trading?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A personal loan is unsecured and does not use your portfolio. Margin trading funding is used to buy more securities through a broker. A loan against securities gives you cash against holdings you already own, for any purpose.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to get the money?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Infina aims to disburse within 24 hours. The time depends on how quickly your documents and pledge are completed.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are my securities revalued, and what is a margin call?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pledged securities are valued at market prices and checked against your loan limit. If their value falls and your loan goes above the permitted limit, you can be asked to add securities or repay part of the loan. That request is called a margin call. The schedule and notice period are in your loan agreement.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I add or swap securities during the loan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, subject to approval. You can ask to pledge more eligible securities to raise your limit, or to replace a pledged security with another. Your Infina team confirms the steps.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I still get dividends and bonuses on pledged securities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your pledged securities stay in your name, so dividends, bonus shares and other benefits continue to be yours.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I pledge securities held by a family member?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Securities held by someone else can be pledged only when that person applies with you. Your Infina team confirms the exact rule for your case.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there an annual or renewal charge?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The fees that apply are listed in the section on rates, fees and charges. Check your sanction letter for any annual or renewal charge on your limit.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the minimum age to take a loan against securities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Applicants must be adults and must hold the securities they pledge in a demat account or as mutual fund units in their name. Your Infina team confirms the exact age and account requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the minimum and maximum loan amount?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The limit you get depends on the value of the securities you pledge and the loan to value limit for each security. Your Infina team confirms the minimum and maximum for your case.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the loan to value (LTV) ratio for different securities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Loan to value is the share of your portfolio's market value that you can borrow. It is different for shares, equity mutual funds, debt mutual funds and bonds, and it is set within the limits the regulator allows. Your Infina team confirms the figure for each holding.",
        },
      },
      {
        '@type': 'Question',
        name: 'What is the minimum and maximum tenure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The tenure is set when your loan is sanctioned and is stated in your sanction letter. Your Infina team confirms the options available for your loan.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I pay the monthly interest?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Interest is paid every month and the principal is repaid at the end of the tenure. Your Infina team confirms the payment methods, such as auto debit or manual payment.',
        },
      },
      {
        '@type': 'Question',
        name: 'What documents are required for a loan against securities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You need identity and address proof, proof of the securities you hold, and a few more documents depending on whether you are an individual, a business or a trust. The full list for each applicant type is in the section on documents required above.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is a personal guarantor required?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A guarantor is not part of the standard process for a loan against securities, because your pledged securities are the security for the loan. Your Infina team confirms if any case needs one.',
        },
      },
    ],
  },
];
