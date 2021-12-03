import React, { useEffect, useContext } from 'react';

import { useLocation } from 'react-router-dom';

import { useApplicationState } from 'Modules/Authentication/State/ApplicationState.js';

function ScrollToTop({ children }) {
  const { loadUser } = useApplicationState();

  useEffect(() => {
    loadUser();
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    console.log('pathname', pathname);
    if (pathname === '/readQuote') {
      console.log('scroll to top');
      return;
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return children;
}

export default ScrollToTop;
