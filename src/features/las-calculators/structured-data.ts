/** JSON-LD for /las-calculators (BreadcrumbList / WebApplication / FAQPage). */
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
        name: 'Loan Against Securities Calculator',
        item: 'https://www.infina.co.in/las-calculators',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Loan Against Securities Calculator',
    url: 'https://www.infina.co.in/las-calculators',
    description:
      'Work out your monthly interest and how much you can borrow against shares and mutual funds. Free calculator from Infina, an RBI registered NBFC.',
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
      'Monthly interest on a loan against securities',
      'Total interest and total payable',
      'Eligible loan amount against shares and mutual funds',
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
        name: 'What is a loan against securities calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It is a free tool that estimates the interest you will pay on a loan against shares or mutual funds, and how much you can borrow against your holdings. Enter a loan amount, a tenure and a rate to see the monthly interest, or enter the value of your holdings to see your eligible loan amount.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is interest calculated on a loan against securities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Monthly interest is the loan amount multiplied by the annual rate, divided by 12. Total interest is the monthly interest multiplied by the number of months. For ₹25,00,000 at 10.5% p.a. for 12 months, monthly interest is ₹21,875 and total interest is ₹2,62,500.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there an EMI on a loan against securities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This calculator uses an interest-only structure. You pay interest each month and the principal is repaid at the end of the tenure, so it shows monthly interest and not an EMI that includes principal.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which interest rate does the calculator use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "The interest calculator starts at 10.50% p.a. so you can see a sample result. Change it to the rate you are offered. Infina's loan against securities rates start from 10.5% p.a. and your rate is confirmed at sanction.",
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
        name: 'How much loan can I get against shares?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Up to 50% of the market value of your listed equity shares. If your shares are worth ₹10,00,000, you can borrow up to ₹5,00,000. Use the eligibility calculator to add your own figures.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much loan can I get against mutual funds?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Up to 50% of the value of equity mutual funds and up to 85% of the value of debt mutual funds. So ₹10,00,000 of debt mutual funds can support a loan of up to ₹8,50,000.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the loan to value (LTV) ratio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Loan to value is the share of your holdings' market value that you can borrow. A 50% LTV means you can borrow up to half of what your securities are worth. It differs by type of security, and your final limit is confirmed by Infina.",
        },
      },
      {
        '@type': 'Question',
        name: 'What is the minimum and maximum loan amount?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The calculator covers loan amounts from ₹25,000 to ₹5 crore and tenures from 1 to 36 months. Your actual limit depends on the securities you pledge and credit approval.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which shares and mutual funds are accepted?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Infina accepts approved securities only. Check the current list of approved shares before you apply, because a share that is not on the list cannot be pledged.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the result final?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The results are indicative. Actual interest, LTV and processing fees depend on credit approval, the securities pledged and market conditions at the time of sanction.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if the value of my securities falls?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your limit is tied to the market value of the pledged securities. If the value falls and your loan goes above the permitted limit, you can be asked to add securities or repay part of the loan. The steps are set out in your loan agreement.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are processing fees included in the calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "No. The calculator shows interest only. Processing fees, document charges and other charges are listed in Infina's list of charges and confirmed in your sanction letter.",
        },
      },
      {
        '@type': 'Question',
        name: 'How do I apply for a loan against securities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Choose Check Eligibility and sign in with your mobile number. The Infina team then guides you through pledging your securities and the sanction. You can also read the full product page before you start.',
        },
      },
    ],
  },
];
