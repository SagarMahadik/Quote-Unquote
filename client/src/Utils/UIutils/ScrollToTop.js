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
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}

export default ScrollToTop;
