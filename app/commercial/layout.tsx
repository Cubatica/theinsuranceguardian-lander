'use client';

import { useEffect } from 'react';

export default function AutoLanderGGLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // RedTrack script - track.js
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://clk.theinsuranceguardian.com/track.js?rtkcmpid=66713083fe6fc10001949149';
    script.id = 'redtrack-head';
    script.onerror = () => {};
    document.head.appendChild(script);
    
    // Cleanup on unmount
    return () => {
      const existingScript = document.getElementById('redtrack-head');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return <>{children}</>;
}

