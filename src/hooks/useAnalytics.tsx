
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This hook tracks pageviews when the route changes
export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track pageview with Google Analytics
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);
};
