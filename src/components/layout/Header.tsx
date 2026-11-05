'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { calculatorLinks, companyLinks, productLinks, topLevelLinks, type NavItem } from '@/config/navigation';
import { ArrowRightIcon, ChevronDownIcon, CloseIcon, MenuIcon, NavMenuIcon } from '@/components/icons';

type MenuId = 'products' | 'calculators' | 'company';

const MENUS: { id: MenuId; label: string; wide: boolean; items: NavItem[] }[] = [
  { id: 'products', label: 'Products', wide: true, items: productLinks },
  { id: 'calculators', label: 'Calculators', wide: true, items: calculatorLinks },
  { id: 'company', label: 'Company', wide: false, items: companyLinks },
];

const panelId = (id: MenuId) => (id === 'calculators' ? 'p-calc' : `p-${id}`);

/** Site header: desktop mega-menu with keyboard support and a mobile drawer. */
export function Header() {
  const [openMenu, setOpenMenu] = useState<MenuId | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openAccordions, setOpenAccordions] = useState<Set<MenuId>>(new Set());
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<Partial<Record<MenuId, HTMLDivElement | null>>>({});

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!(e.target as Element).closest('.nav-item')) setOpenMenu(null);
    };
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape' && drawerOpen) {
        setDrawerOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [drawerOpen]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 960px)');
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setDrawerOpen(false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  const panelLinks = (id: MenuId) => [...(itemRefs.current[id]?.querySelectorAll<HTMLAnchorElement>('.panel a') ?? [])];

  const onButtonKey = (e: KeyboardEvent, id: MenuId) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setOpenMenu(id);
      requestAnimationFrame(() => panelLinks(id)[0]?.focus());
    }
    if (e.key === 'Escape') setOpenMenu(null);
  };

  const onItemKey = (e: KeyboardEvent, id: MenuId) => {
    const links = panelLinks(id);
    const i = links.indexOf(document.activeElement as HTMLAnchorElement);
    if (i < 0) return;
    const go = (n: number) => {
      e.preventDefault();
      links[(n + links.length) % links.length].focus();
    };
    if (e.key === 'ArrowDown') go(i + 1);
    if (e.key === 'ArrowUp') go(i - 1);
    if (e.key === 'Home') go(0);
    if (e.key === 'End') go(links.length - 1);
    if (e.key === 'Escape') {
      e.preventDefault();
      setOpenMenu(null);
      itemRefs.current[id]?.querySelector('button')?.focus();
    }
  };

  const toggleAccordion = (id: MenuId) =>
    setOpenAccordions((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <header className={`site b d${scrolled ? ' scrolled' : ''}`}>
      <div className="scrim" />
      <div className="bar">
        <Link className="logo" href="/" aria-label="Infina home">
          <Image src="/images/brand/logo.svg" alt="Infina" width={106} height={38} priority />
        </Link>
        <nav className="nav" aria-label="Main">
          {MENUS.map((menu) => {
            const open = openMenu === menu.id;
            return (
              <div
                key={menu.id}
                ref={(el) => {
                  itemRefs.current[menu.id] = el;
                }}
                className={`nav-item${open ? ' open' : ''}`}
                data-dd={menu.id}
                onKeyDown={(e) => onItemKey(e, menu.id)}
              >
                <button
                  className="nl"
                  aria-expanded={open}
                  aria-haspopup="true"
                  aria-controls={panelId(menu.id)}
                  onClick={() => setOpenMenu(open ? null : menu.id)}
                  onKeyDown={(e) => onButtonKey(e, menu.id)}
                >
                  {menu.label} <ChevronDownIcon className="chev" />
                </button>
                <div className={`panel${menu.wide ? ' wide' : ''}`} id={panelId(menu.id)} role="menu">
                  {menu.items.map((item) =>
                    menu.wide ? (
                      <Link key={item.title} role="menuitem" className="mi" href={item.href}>
                        <span className="disc">{item.icon && <NavMenuIcon name={item.icon} />}</span>
                        <span className="mt">
                          <b>{item.title}</b>
                          <small>{item.description}</small>
                        </span>
                        <ArrowRightIcon className="go" />
                      </Link>
                    ) : (
                      <Link key={item.title} role="menuitem" href={item.href}>
                        {item.title}
                        <ArrowRightIcon />
                      </Link>
                    ),
                  )}
                </div>
              </div>
            );
          })}
          {topLevelLinks.map((l) => (
            <a key={l.title} className="nl" href={l.href}>
              {l.title}
            </a>
          ))}
        </nav>
        <div className="actions">
          <a className="login" href="#">
            Login
          </a>
          <a className="btn" href="#">
            Check Eligibility <ArrowRightIcon />
          </a>
        </div>
        <button
          ref={menuButton}
          className="menu-btn"
          aria-expanded={drawerOpen}
          aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setDrawerOpen((o) => !o)}
        >
          <MenuIcon />
          <CloseIcon />
        </button>
      </div>
      <div className={`drawer${drawerOpen ? ' open' : ''}`} aria-label="Menu">
        {MENUS.map((menu) => {
          const open = openAccordions.has(menu.id);
          return (
            <div key={menu.id} className={`acc${open ? ' open' : ''}`} data-acc={menu.id}>
              <button aria-expanded={open} onClick={() => toggleAccordion(menu.id)}>
                {menu.label} <ChevronDownIcon className="chev" />
              </button>
              <div className="sub">
                {menu.items.map((item) => (
                  <Link key={item.title} href={item.href} onClick={closeDrawer}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
        {topLevelLinks.map((l) => (
          <a key={l.title} className="plain" href={l.href}>
            {l.title}
          </a>
        ))}
        <div className="foot">
          <a className="login" href="#">
            Login
          </a>
          <a className="btn" href="#">
            Check Eligibility <ArrowRightIcon />
          </a>
        </div>
      </div>
    </header>
  );
}
