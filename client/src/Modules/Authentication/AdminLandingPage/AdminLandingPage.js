import NavigationPage from 'Modules/Global/Navigation/NavigationPage';
import React from 'react';
import { useState, useEffect } from 'react';
import { CenterAlignedColumnContainerWithShadowBackground } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';
import { useHistory } from 'react-router-dom';

const AdminLandingPage = () => {
  const [redirectToAddQuote, setRedirectToAddQuote] = useState(false);
  const [redirectToReadQuote, setRedirectToReadQuote] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (redirectToAddQuote) {
      history.push('/addQuote');
    }
    if (redirectToReadQuote) {
      history.push('/readQuote');
    }
  }, [redirectToAddQuote, redirectToReadQuote]);

  return (
    <CenterAlignedColumnContainerWithShadowBackground>
      <NavigationPage
        addQuouteCallBack={() => {
          setRedirectToAddQuote(true);
        }}
        readQuoteCallBack={() => setRedirectToReadQuote(true)}
        addMore={false}
      />
    </CenterAlignedColumnContainerWithShadowBackground>
  );
};

export default AdminLandingPage;
