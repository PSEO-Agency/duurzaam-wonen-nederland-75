
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * This component scrolls the window to the top whenever the route changes
 */
const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: using smooth scrolling for better UX
    });
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTopOnNavigate;
