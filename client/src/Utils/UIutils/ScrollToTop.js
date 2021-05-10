import React, { useEffect, useContext } from 'react';

import { useLocation } from 'react-router-dom';

function ScrollToTop({ children }) {
  const { pathname } = useLocation();
  console.log(pathname);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}

export default ScrollToTop;
