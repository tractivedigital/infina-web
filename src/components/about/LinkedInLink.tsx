import { linkedInProfiles } from '@/config/leadership-links';

/** "LinkedIn Profile" link for a person card. Renders nothing until a profile URL is configured. */
export function LinkedInLink({ name }: { name: string }) {
  const href = linkedInProfiles[name];
  if (!href) return null;
  return (
    <a className="inf-btn inf-btn--text li-link" href={href} target="_blank" rel="noopener noreferrer">
      LinkedIn Profile
      <span className="sr-only"> of {name}, opens in a new tab</span>{' '}
      <svg className="ab-ic ic-sm" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <g className="ic-line">
          <path d="M8 12H20.25" />
          <path d="M14.75 6.5L20.25 12L14.75 17.5" />
        </g>
        <circle className="ic-seal" cx="4.0" cy="12.0" r="1.75" />
      </svg>
    </a>
  );
}
