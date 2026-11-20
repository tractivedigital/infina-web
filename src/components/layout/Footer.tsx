'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useState, type ReactNode } from 'react';
import { footerColumns, socialLinks } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { ChevronDownIcon, InstagramIcon, LinkedInIcon, WarningIcon, XIcon } from '@/components/icons';
import { withBase } from '@/lib/base-path';

/** Internal route -> Link; document or external URL -> plain anchor (new tab); no URL yet -> plain text. */
function FooterLink({ href, children }: { href?: string; children: ReactNode }) {
  if (!href) return <span>{children}</span>;
  if (/\.pdf$/i.test(href) || /^https?:/.test(href))
    return (
      <a href={withBase(href)} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  return <Link href={href}>{children}</Link>;
}

const SOCIAL_ICONS = { LinkedIn: LinkedInIcon, Instagram: InstagramIcon, X: XIcon } as const;

/** Site footer. Link columns become accordions below 960px. */
export function Footer() {
  const isMobile = useMediaQuery('(max-width: 959px)');
  const [open, setOpen] = useState<Set<string>>(new Set());

  const toggle = (title: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });

  return (
    <footer className="ft light">
      <div className="wrap">
        <div className="ft-top">
          <div className="brand">
            <Link className="ft-logo" href="/" aria-label="Infina home">
              <Image src={withBase('/images/brand/logo.svg')} alt="Infina" width={112} height={40} />
            </Link>
            <address>{siteConfig.address}</address>
          </div>
          {footerColumns.map((col) => {
            const expanded = isMobile && open.has(col.title);
            return (
              <div key={col.title} className={`col${expanded ? ' open' : ''}`}>
                <h3 style={{ margin: 0 }}>
                  <button
                    className={`ch${isMobile ? ' acc-on' : ''}`}
                    aria-expanded={isMobile ? expanded : undefined}
                    disabled={!isMobile}
                    onClick={() => toggle(col.title)}
                  >
                    {col.title}
                    <ChevronDownIcon />
                  </button>
                </h3>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.title}>
                      <FooterLink href={l.href}>{l.title}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="reg" role="note">
          <div className="warn">
            <span className="wi">
              <WarningIcon />
            </span>
            <div>
              <h4>Beware of spurious / fraud phone calls!</h4>
              <p>
                IRDAI is not involved in activities like selling insurance policies, announcing bonus or investment of
                premiums. Public receiving such phone calls are requested to lodge a police complaint.
              </p>
            </div>
          </div>
          <div className="ids">
            <p>
              <b>CIN:</b> {siteConfig.cin}
            </p>
            <p>
              <b>IRDAI Corporate Agent Registration No:</b> {siteConfig.irdaiRegistration}
            </p>
          </div>
        </div>
        <div className="ft-bot">
          <p>
            © {new Date().getFullYear()} Infina | All Rights Reserved |{' '}
            <Link href="/privacy-policy">Privacy Policy</Link>
          </p>
          <div className="follow">
            <span>Follow us on</span>
            {socialLinks
              .filter((l) => l.href)
              .map((l) => {
                const Icon = SOCIAL_ICONS[l.label];
                return (
                  <Fragment key={l.label}>
                    {' '}
                    <a
                      className="soc"
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Infina on ${l.label}`}
                    >
                      <Icon />
                    </a>
                  </Fragment>
                );
              })}
          </div>
        </div>
      </div>
    </footer>
  );
}
