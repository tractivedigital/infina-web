'use client';

import { useEffect, useRef, useState } from 'react';

/** "Copy link" button on article pages. Falls back to a hidden textarea where the Clipboard API is unavailable. */
export function CopyLinkButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const flash = () => {
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      flash();
    } catch {
      const area = document.createElement('textarea');
      area.value = url;
      document.body.appendChild(area);
      area.select();
      try {
        if (document.execCommand('copy')) flash();
      } finally {
        document.body.removeChild(area);
      }
    }
  };

  return (
    <button type="button" id="copy-link" data-url={url} onClick={copy}>
      {copied ? 'Link copied' : 'Copy link'}
    </button>
  );
}
