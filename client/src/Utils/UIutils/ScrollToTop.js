import React, { useEffect, useContext } from 'react';

import { useLocation } from 'react-router-dom';

import {
  useApplicationState,
  useApplicationDispatch
} from 'Modules/Authentication/State/ApplicationState.js';

function ScrollToTop({ children }) {
  const { loadUser } = useApplicationState();
  const dispatch = useApplicationDispatch();

  useEffect(() => {
    loadUser();
  }, []);

  const { pathname } = useLocation();
  console.log(pathname);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}

export default ScrollToTop;
