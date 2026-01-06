'use client';

import { useEffect } from 'react';

export default function AutoLanderGGLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Load RedTrack script directly to avoid Next.js Script component error logging
    // Note: ERR_BLOCKED_BY_ORB errors may appear in console when script makes XHR request.
    // This is expected and occurs because RedTrack server doesn't send proper CORS headers.
    // The script has fallback logic to use rtkcid from URL if XHR fails.
    const script = document.createElement('script');
    script.src = 'https://clk.optimum-seniors.com/track.js?rtkcmpid=6949ceb10ee5f12c0fba2272';
    //script.async = true;
    script.id = 'redtrack-head';
    
    // Silently handle script loading errors
    script.onerror = () => {
      // Script failed to load - tracking will fall back to URL parameters if available
    };
    
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

