import type { SVGProps } from 'react';
import type { NavIcon } from '@/config/navigation';

const base: SVGProps<SVGSVGElement> = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} strokeLinejoin={undefined} className="ham" {...props}>
      <path d="M4 6h16M4 12h16M4 18h9" />
      <circle cx="19" cy="18" r="1.6" fill="#C8121A" stroke="none" />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} strokeLinejoin={undefined} className="x" {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
      <circle cx="19" cy="5" r="1.6" fill="#C8121A" stroke="none" />
    </svg>
  );
}

export function WarningIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 3 19h18L12 3z" />
      <path d="M12 10v4" />
      <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M8 11v5M8 8v.01M12 16v-5M12 13.5c0-1.5 1-2.5 2.2-2.5S16 12 16 13.5V16" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <path d="M17.3 6.7v.01" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4l14 16M19 4 5 20" />
    </svg>
  );
}

/** Navigation menu icons keyed by `NavIcon`. */
export function NavMenuIcon({ name }: { name: NavIcon }) {
  switch (name) {
    case 'securities':
      return (
        <svg {...base} aria-hidden="true">
          <path d="M4 20V11M10 20V5M16 20v-7M3 20h18" />
          <circle cx="20" cy="6" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'esop':
      return (
        <svg {...base} aria-hidden="true">
          <rect x="4" y="4" width="16" height="12" rx="2" />
          <path d="M8 9h8M8 12h5M9 20l3-3 3 3" />
          <circle cx="17" cy="12" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'property':
      return (
        <svg {...base} aria-hidden="true">
          <path d="M3 11l9-7 9 7M5 10v10h14V10M10 20v-5h4v5" />
          <circle cx="12" cy="11" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'realestate':
      return (
        <svg {...base} aria-hidden="true">
          <path d="M4 20V9h8v11M12 20V4h8v16M3 20h18M7 13h2M15 8h2M15 12h2" />
          <circle cx="7" cy="16" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return (
        <svg {...base} aria-hidden="true">
          <path d="M4 9l8-4 8 4-8 4-8-4z" />
          <path d="M4 14l8 4 8-4" />
          <circle cx="20" cy="20" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}
