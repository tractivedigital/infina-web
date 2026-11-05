export type NavIcon = 'securities' | 'esop' | 'property' | 'realestate' | 'calculator';

export interface NavItem {
  title: string;
  href: string;
  description?: string;
  icon?: NavIcon;
}

export const productLinks: NavItem[] = [
  {
    title: 'Loan Against Securities',
    href: '/loan-against-securities',
    icon: 'securities',
    description: 'Get liquidity from your stocks and mutual funds without selling them.',
  },
  {
    title: 'ESOP Financing',
    href: '/esop-financing',
    icon: 'esop',
    description: 'Access funds from your ESOPs with flexible repayment options.',
  },
  {
    title: 'Loan Against Property',
    href: '/loan-against-property',
    icon: 'property',
    description: 'Avail funding by leveraging your residential or commercial property.',
  },
  {
    title: 'Corporate Real Estate',
    href: '/corporate-real-estate',
    icon: 'realestate',
    description: 'Structured financing solutions for real estate developers and businesses.',
  },
];

export const calculatorLinks: NavItem[] = [
  {
    title: 'Loan Against Securities Calculator',
    href: '/las-calculators',
    icon: 'calculator',
    description: 'Monthly interest and eligibility against shares and mutual funds.',
  },
  {
    title: 'ESOP Funding Calculator',
    href: '/esop-calculators',
    icon: 'calculator',
    description: 'Cost to exercise ESOPs, with tax, funding and fees.',
  },
  {
    title: 'Loan Against Property Calculator',
    href: '/lap-calculators',
    icon: 'calculator',
    description: 'EMI and eligibility for a loan against property.',
  },
];

export const companyLinks: NavItem[] = [
  { title: 'About Us', href: '/about' },
  { title: 'Careers', href: '#' },
  { title: 'Channel Partner / DSA', href: '#' },
  { title: 'Blogs', href: '/blogs' },
];

export const topLevelLinks: NavItem[] = [
  { title: 'Investor Relations', href: '#' },
  { title: 'Contact Us', href: '#' },
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
      { title: 'Contact us', href: '#' },
      { title: 'Careers', href: '#' },
      { title: "Our LSP's and DLA's", href: '#' },
      { title: 'Channel Partner / DSA', href: '#' },
      { title: 'Blogs', href: '/blogs' },
    ],
  },
  {
    title: 'Downloads',
    links: [
      { title: 'Financial Reporting', href: '#' },
      { title: 'Policies', href: '#' },
      { title: 'IFPL List of approved securities', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { title: 'Disclaimer Mobile App', href: '#' },
      { title: 'GST Registrations', href: '#' },
      { title: 'Cookie Policy', href: '#' },
      { title: 'Terms of Use', href: '#' },
    ],
  },
  {
    title: 'Insurance Services',
    links: [
      { title: 'HDFC Life', href: '#' },
      { title: 'ICICI Lombard', href: '#' },
    ],
  },
];

export const socialLinks = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'X', href: '#' },
] as const;
