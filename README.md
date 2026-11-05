# Infina Web

Marketing website for Infina Finance, built with Next.js 15 (App Router), React 19 and TypeScript.
Converted from nine static HTML pages in `source-html/`.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm run start
npm run lint && npm run typecheck
```

Copy `.env.example` to `.env.local` to override `NEXT_PUBLIC_SITE_URL`.

## Routes

| Route | Feature folder |
|---|---|
| `/` | `features/home` |
| `/about` | `features/about` |
| `/loan-against-securities` | `features/loan-against-securities` |
| `/las-calculators` | `features/las-calculators` |
| `/loan-against-property` | `features/loan-against-property` |
| `/lap-calculators` | `features/lap-calculators` |
| `/esop-financing` | `features/esop-financing` |
| `/esop-calculators` | `features/esop-calculators` |
| `/corporate-real-estate` | `features/corporate-real-estate` |
| `POST /api/leads` | `app/api/leads/route.ts` |

## Structure

```
src/
  app/                 Routes only: thin page.tsx files re-export metadata and render a feature
  features/<page>/     index.tsx (page composition), metadata.ts, structured-data.ts, sections/*.tsx
  components/
    layout/            Header, Footer, PageShell, StickyCta
    forms/             HeroLeadForm
    sections/          Sections identical on several pages (Trust, Safety)
    behaviors/         Client-side progressive enhancement for server-rendered markup
    seo/  icons/
  lib/                 calculators (pure, framework-free), validation, lead submission
  config/              site constants, navigation
  hooks/  styles/
public/images/         Images extracted from the original pages
public/docs/           PDFs (privacy policy, charges, approved securities, terms) hosted locally
```

### Design notes

- **Server-first.** Page sections are server components. Only the header, footer, lead form, sticky CTA and
  the `components/behaviors/*` enhancers ship JavaScript.
- **Behaviours.** Calculators, tabs, carousel, the home service picker and the ESOP calculator enhance
  server-rendered markup. Their maths lives in `lib/calculators` as pure functions, which are easy to unit test.
- **Styles.** `styles/globals.css` holds the few global rules. Each page imports its own complete stylesheet,
  `styles/pages/<key>.css`, generated from the original page. Every rule is scoped with
  `:where([data-page="<key>"])` (set by `PageShell`), which adds no specificity, so cascade order and specificity
  match the original documents exactly and pages do not affect each other during client-side navigation.
- **Leads.** `HeroLeadForm` validates client-side (`lib/validation`) and posts to `/api/leads`, which validates
  again. The route does not yet forward leads anywhere. Add the CRM call where the `TODO` is.

## Known follow-ups

- Remaining external links: the loan application portal (`digilas.infina.co.in`), the company LinkedIn page and `/contact` on infina.co.in. Everything else (images, fonts, PDFs, ESOP calculator) is served from this project.
- Many links are still `#` placeholders, as in the source (Careers, Login, Investor Relations, and so on).
- The home hero artwork is a captured DOM snapshot (`features/home/sections/Hero.tsx`) and could become an SVG asset.
- Add unit tests for `lib/calculators` and an e2e smoke test per route.
