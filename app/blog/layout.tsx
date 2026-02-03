'use client';

import { useEffect } from 'react';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // RedTrack script - track.js
    const headScript = document.createElement('script');
    headScript.type = 'text/javascript';
    headScript.src = 'https://clk.theinsuranceguardian.com/track.js?rtkcmpid=66713083fe6fc10001949149';
    headScript.id = 'redtrack-head';
    headScript.onerror = () => {};
    document.head.appendChild(headScript);

    // RedTrack body script (same as commercial page - for CTA click tracking)
    const bodyScript = document.createElement('script');
    bodyScript.id = 'redtrack-body';
    bodyScript.src = 'https://clk.theinsuranceguardian.com/unilpclick.js?attribution=lastpaid&cookiedomain=&cookieduration=90&defaultcampaignid=66713083fe6fc10001949149&regviewonce=false';
    bodyScript.async = true;
    document.body.appendChild(bodyScript);

    return () => {
      const existingHead = document.getElementById('redtrack-head');
      if (existingHead) existingHead.remove();
      const existingBody = document.getElementById('redtrack-body');
      if (existingBody) existingBody.remove();
    };
  }, []);

  return <>{children}</>;
}
