import { faqs } from './faq-data';

/** JSON-LD for the home page: the FAQPage is built from the questions shown on the page. */
export const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  },
];
