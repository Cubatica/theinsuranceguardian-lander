'use client';

const CLICK_URL = 'https://clk.theinsuranceguardian.com/click';

function getCookie(name: string): string {
  if (typeof document === 'undefined') return '';
  const value = '; ' + document.cookie;
  const parts = value.split('; ' + name + '=');
  if (parts.length === 2) return parts.pop()?.split(';').shift() ?? '';
  return '';
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
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    let clickid = getCookie('rtkclickid-store');
    // track.js sets cookie after XHR returns; if user clicks fast, wait once for it
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
        clickid = c;
        doNavigate(clickid);
      });
    } else {
      doNavigate(clickid);
    }
  };

  const doNavigate = (clickid: string) => {
    const rtkck = Math.round(Date.now() / 1000);
    const url = new URL(href);
    if (clickid) {
      url.searchParams.set('clickid', clickid);
      url.searchParams.set('rtkck', String(rtkck));
    }
    if (target === '_blank') {
      window.open(url.toString(), '_blank', rel);
    } else {
      window.location.href = url.toString();
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      target={target}
      rel={rel}
      className={className}
    >
      {children}
    </a>
  );
}
