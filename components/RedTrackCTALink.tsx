'use client';

import { useState, useEffect, useRef } from 'react';

const CLICK_URL = 'https://clk.theinsuranceguardian.com/click';

function getCookie(name: string): string {
  if (typeof document === 'undefined') return '';
  const value = '; ' + document.cookie;
  const parts = value.split('; ' + name + '=');
  if (parts.length === 2) return parts.pop()?.split(';').shift() ?? '';
  return '';
}

function buildClickUrl(baseUrl: string, clickid: string): string {
  const url = new URL(baseUrl);
  url.searchParams.set('clickid', clickid);
  url.searchParams.set('rtkck', String(Math.round(Date.now() / 1000)));
  return url.toString();
}

type Props = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
};

export default function RedTrackCTALink({
  href = CLICK_URL,
  children,
  className,
  target = '_blank',
  rel = 'noopener noreferrer',
}: Props) {
  const [resolvedHref, setResolvedHref] = useState(href);
  const cancelled = useRef(false);

  useEffect(() => {
    cancelled.current = false;
    const clickid = getCookie('rtkclickid-store');
    if (clickid) {
      setResolvedHref(buildClickUrl(href, clickid));
      return () => {
        cancelled.current = true;
      };
    }
    const deadline = Date.now() + 2000;
    const check = () => {
      if (cancelled.current) return;
      const c = getCookie('rtkclickid-store');
      if (c) {
        setResolvedHref(buildClickUrl(href, c));
        return;
      }
      if (Date.now() < deadline) requestAnimationFrame(check);
    };
    const t = requestAnimationFrame(check);
    return () => {
      cancelled.current = true;
      cancelAnimationFrame(t);
    };
  }, [href]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    let clickid = getCookie('rtkclickid-store');
    if (!clickid) {
      const waitForCookie = (): Promise<string> =>
        new Promise((resolve) => {
          const deadline = Date.now() + 800;
          const check = () => {
            const c = getCookie('rtkclickid-store');
            if (c || Date.now() >= deadline) return resolve(c);
            requestAnimationFrame(check);
          };
          requestAnimationFrame(check);
        });
      waitForCookie().then((c) => {
        if (c) {
          const url = buildClickUrl(href, c);
          if (target === '_blank') window.open(url, '_blank', rel);
          else window.location.href = url;
        } else {
          if (target === '_blank') window.open(href, '_blank', rel);
          else window.location.href = href;
        }
      });
    } else {
      const url = buildClickUrl(href, clickid);
      if (target === '_blank') window.open(url, '_blank', rel);
      else window.location.href = url;
    }
  };

  return (
    <a
      href={resolvedHref}
      onClick={handleClick}
      target={target}
      rel={rel}
      className={className}
    >
      {children}
    </a>
  );
}
