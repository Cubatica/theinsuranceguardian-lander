'use client';

import { useEffect } from 'react';

export default function GlobalRedTrackScripts() {
  useEffect(() => {
    // Only inject if not already present (e.g., client-side navigation)
    if (document.getElementById('redtrack-head')) return;

    // RedTrack head script: track.js
    const headScript = document.createElement('script');
    headScript.type = 'text/javascript';
    headScript.src = 'https://clk.theinsuranceguardian.com/track.js?rtkcmpid=66713083fe6fc10001949149';
    headScript.id = 'redtrack-head';
    headScript.onerror = () => {};
    document.head.appendChild(headScript);

    // RedTrack body script: unilpclick.js (for CTA click tracking, default campaign)
    const bodyScript = document.createElement('script');
    bodyScript.id = 'redtrack-body';
    // bodyScript.src = 'https://clk.theinsuranceguardian.com/unilpclick.js?attribution=lastpaid&cookiedomain=&cookieduration=90&defaultcampaignid=66713083fe6fc10001949149&regviewonce=false';
    bodyScript.async = true;
    document.body.appendChild(bodyScript);

    return () => {
      const h = document.getElementById('redtrack-head');
      if (h) h.remove();
      const b = document.getElementById('redtrack-body');
      if (b) b.remove();
    };
  }, []);

  return null;
}
