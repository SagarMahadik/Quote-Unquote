import React from 'react';

import HomeButton from 'StylesLibrary/Molecules/GlobalModule/HomeButton';
import LogoutButton from 'StylesLibrary/Molecules/GlobalModule/LogoutButton.js';
import { AdminPageHeadingContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles.js';
import { Link } from 'react-router-dom';
import {
  useApplicationState,
  useApplicationDispatch
} from 'Modules/Authentication/State/ApplicationState.js';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const PageHeading = () => {
  const { isUserAuthenticated, redirectPostLogout } = useApplicationState();
  const dispatch = useApplicationDispatch();
  const history = useHistory();
  useEffect(() => {
    if (redirectPostLogout) {
      history.push('/');
    }
  }, [redirectPostLogout]);

  return (
    <>
      {isUserAuthenticated ? (
        <AdminPageHeadingContainer style={{ zIndex: '100', marginTop: '2rem' }}>
          <Link to="/">
            <HomeButton />
          </Link>
          <LogoutButton
            onClick={() =>
              dispatch({
                type: 'LOG_OUT_USER'
              })
            }
          />
        </AdminPageHeadingContainer>
      ) : null}
    </>
  );
};

export default PageHeading;
