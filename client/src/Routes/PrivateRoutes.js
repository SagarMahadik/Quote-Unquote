import React, { useContext, useEffect } from 'react';
import {
  useApplicationState,
  useApplicationDispatch
} from 'Modules/Authentication/State/ApplicationState';
import { Route, Redirect } from 'react-router-dom';
import LandingPageAuthLoader from 'StylesLibrary/Atoms/LoadingModule/LandingPageAuthLoader';
import Loader from 'StylesLibrary/Atoms/LoadingModule/Loader';

import { useLocation } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authLoading, isUserAuthenticated } = useApplicationState();
  const location = useLocation();

  const { loadUser } = useApplicationState();
  const dispatch = useApplicationDispatch();

  useEffect(() => {
    dispatch({
      type: 'SET_PRIVATE_ROUTE_AUTH',
      payload: location.pathname
    });
    loadUser();
  }, []);

  return (
    <Route
      {...rest}
      render={props =>
        authLoading ? (
          <LandingPageAuthLoader />
        ) : !isUserAuthenticated ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
