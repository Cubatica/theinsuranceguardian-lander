'use client';

import { useEffect } from 'react';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Load RedTrack script so CTA clicks (clk.theinsuranceguardian.com/click) are tracked
    // Note: ERR_BLOCKED_BY_ORB errors may appear in console when script makes XHR request.
    // This is expected and occurs because RedTrack server doesn't send proper CORS headers.
    const script = document.createElement('script');
    script.src = 'https://clk.theinsuranceguardian.com/track.js?rtkcmpid=6949ceb10ee5f12c0fba2272';
    script.async = true;
    script.id = 'redtrack-head';

    script.onerror = () => {
      // Script failed to load - tracking will fall back to URL parameters if available
    };

    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('redtrack-head');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return <>{children}</>;
}
