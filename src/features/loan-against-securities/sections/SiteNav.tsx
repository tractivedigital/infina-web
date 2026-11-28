import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function SiteNav() {
  return (
    <header className="nav" id="nav"><div className="wrap nav-inner"><Link href="/" className="logo" aria-label="Infina home"><span>in</span>fina</Link><ul className="nav-links"><li><Link href="/#products" aria-current="page">Products</Link></li><li><Link href="/las-calculators">Calculators</Link></li><li><Link href="/about">Company</Link></li><li><Link href="/investor-relations">Investor Relations</Link></li><li><Link href="/contact">Contact Us</Link></li></ul><div className="nav-actions"><a href={siteConfig.loginUrl} className="login">Login</a>{' '}<a href={siteConfig.loginUrl} className="btn btn-red">Check eligibility</a></div></div></header>
  );
}
