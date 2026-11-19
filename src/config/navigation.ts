export interface NavItem {
  title: string;
  /** Omit while the destination is unknown: the footer then shows the label as plain text. */
  href?: string;
}

export type LinkItem = NavItem & { href: string };

export const productLinks: LinkItem[] = [
  {
    title: 'Loan Against Securities',
    href: '/loan-against-securities',
  },
  {
    title: 'ESOP Financing',
    href: '/esop-financing',
  },
  {
    title: 'Loan Against Property',
    href: '/loan-against-property',
  },
  {
    title: 'Corporate Real Estate',
    href: '/corporate-real-estate',
  },
];

export const calculatorLinks: LinkItem[] = [
  {
    title: 'Loan Against Securities Calculator',
    href: '/las-calculators',
  },
  {
    title: 'ESOP Funding Calculator',
    href: '/esop-calculators',
  },
  {
    title: 'Loan Against Property Calculator',
    href: '/lap-calculators',
  },
];

export const companyLinks: LinkItem[] = [
  { title: 'About Us', href: '/about' },
  { title: 'Careers', href: '/careers' },
  { title: 'Channel Partner / DSA', href: '/channel-partner' },
  { title: 'Blogs', href: '/blogs' },
];

export const topLevelLinks: LinkItem[] = [
  { title: 'Investor Relations', href: '/investor-relations' },
  { title: 'Contact Us', href: '/contact' },
];

export const footerColumns: { title: string; links: NavItem[] }[] = [
  {
    title: 'Product',
    links: [
      { title: 'LAS', href: '/loan-against-securities' },
      { title: 'ESOP', href: '/esop-financing' },
      { title: 'LAP', href: '/loan-against-property' },
      { title: 'CRE', href: '/corporate-real-estate' },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About Us', href: '/about' },
      { title: 'Contact us', href: '/contact' },
      { title: 'Careers', href: '/careers' },
      { title: "Our LSP's and DLA's", href: '/partner' },
      { title: 'Channel Partner / DSA', href: '/channel-partner' },
      { title: 'Blogs', href: '/blogs' },
    ],
  },
  {
    title: 'Downloads',
    links: [
      { title: 'Financial Reporting', href: '/investor-relations#financial-reporting' },
      { title: 'Policies', href: '/investor-relations#policies' },
      { title: 'IFPL List of approved securities', href: '/docs/approved-securities-list-august-2026.pdf' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { title: 'Disclaimer Mobile App', href: '/disclaimer-mobile-app' },
      { title: 'GST Registrations', href: '/gst-registrations' },
      { title: 'Cookie Policy', href: '/cookie-policy' },
      { title: 'Terms of Use', href: '/terms-of-use' },
    ],
  },
  {
    title: 'Insurance Services',
    links: [{ title: 'HDFC Life' }, { title: 'ICICI Lombard' }],
  },
];

/** Social profiles. An entry is shown in the footer only when it has a URL. */
export const socialLinks: { label: 'LinkedIn' | 'Instagram' | 'X'; href?: string }[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/infina-finance-pvt--ltd-/' },
  { label: 'Instagram' },
  { label: 'X' },
];
