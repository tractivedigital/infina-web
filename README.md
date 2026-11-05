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
| `/blogs` | `features/blogs` (topic filter chips) |
| `/blogs/<article-slug>` (6 articles) | `features/blog-articles/<cre\|esop\|lap-how\|lap-vs-pl\|las-guide\|las-vs-lamf>` |
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

## Deployment (Azure Pipelines → Azure App Service)

`azure-pipelines.yml` builds, verifies and deploys the site. `next.config.ts` sets `output: 'standalone'`, so the
pipeline ships a small self-contained server bundle (`node server.js`).

Pipeline stages:

1. **Build**: `npm ci`, `npm run lint`, `npm run typecheck`, `npm run build`, then zips `.next/standalone`
   (plus `.next/static` and `public/`) and publishes it as the `drop` artifact. Runs on pull requests too.
2. **Deploy** (switched off by default, via the `deployToAzure` pipeline parameter, until Infina provides an Azure subscription): only for `main` (not PRs). Deploys the zip to a Linux App Service (Node 22 LTS) in the `production` environment.

One-time Azure DevOps setup:

1. Repos: add the Azure remote and push (`git remote add azure <clone-url>`, `git push -u azure main`).
2. Create an Azure Resource Manager **service connection** (Project settings → Service connections).
3. Create a **Linux Web App** (Node 22 LTS) in Azure.
4. Edit `azureServiceConnection` and `webAppName` in `azure-pipelines.yml`.
5. Pipelines → New pipeline → Azure Repos Git → *Existing Azure Pipelines YAML file* → `/azure-pipelines.yml`.
6. Optional: add an approval check on the `production` environment (Pipelines → Environments).

Local check of the production bundle:

```bash
npm run build
cp -r .next/static .next/standalone/.next/static && cp -r public .next/standalone/public
PORT=3000 HOSTNAME=0.0.0.0 node .next/standalone/server.js
```
