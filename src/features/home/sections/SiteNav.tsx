import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function SiteNav() {
  return (
    <header className="nav" id="nav"><div className="wrap nav-inner"><Link href="/" className="logo" aria-label="Infina home"><span>in</span>fina</Link><ul className="nav-links"><li><a href="#products">Products</a></li><li><a href="#calculator">Calculators</a></li><li><Link href="/about">Company</Link></li><li><Link href="/contact">Contact us</Link></li></ul><div className="nav-actions"><a href={siteConfig.loginUrl} className="login">Login</a>{' '}<a href={siteConfig.loginUrl} className="btn btn-red">Check eligibility</a></div></div></header>
  );
}
