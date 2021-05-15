import React, { useContext } from 'react';

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
import { DisplayQuoteDispatchContext } from 'Modules/DisplayQuote/State/DisplayQuoteContext.js';

const PageHeading = () => {
  const {
    isUserAuthenticated,
    redirectPostLogout,
    user: { role }
  } = useApplicationState();
  const dispatch = useApplicationDispatch();
  const history = useHistory();
  useEffect(() => {
    if (redirectPostLogout) {
      history.push('/');
    }
  }, [redirectPostLogout]);

  const displayQuoteDispatch = useContext(DisplayQuoteDispatchContext);

  return (
    <>
      {isUserAuthenticated ? (
        <AdminPageHeadingContainer style={{ zIndex: '100', marginTop: '2rem' }}>
          {role == 'admin' ? (
            <Link to="/corelanding">
              <HomeButton />
            </Link>
          ) : (
            <Link to="/">
              <HomeButton />
            </Link>
          )}

          <LogoutButton
            onClick={() => {
              dispatch({
                type: 'LOG_OUT_USER'
              });
              displayQuoteDispatch({
                type: 'DQ_RESET_QUOTE_STATE'
              });
            }}
          />
        </AdminPageHeadingContainer>
      ) : null}
    </>
  );
};

export default PageHeading;
