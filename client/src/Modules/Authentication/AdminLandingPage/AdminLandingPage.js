import React from 'react';
import NavigationPage from 'Modules/Global/Navigation/NavigationPage';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import GradientContainer from 'StylesLibrary/Animations/AnimationContainer/GradientContainer.js';
import PageAnimationContainer from 'StylesLibrary/Animations/AnimationContainer/PageAnimations/PageAnimationContainer';
import PageHeading from 'Modules/Global/Components/PageHeading';
import { AdminLandingPageContainer } from './AdminLandingPageStyles';
import { useApplicationState } from 'Modules/Authentication/State/ApplicationState.js';

const AdminLandingPage = () => {
  const [redirectToAddQuote, setRedirectToAddQuote] = useState(false);
  const [redirectToReadQuote, setRedirectToReadQuote] = useState(false);
  const history = useHistory();

  const {
    user,
    isUserAuthenticated,
    appThemes,
    activeTheme
  } = useApplicationState();

  useEffect(() => {
    if (redirectToAddQuote) {
      history.push('/addQuote');
    }
    if (redirectToReadQuote) {
      history.push('/moodPage');
    }
  }, [redirectToAddQuote, redirectToReadQuote]);

  useEffect(() => {
    if (!isUserAuthenticated || user.role != 'admin') {
      history.push('/');
    }
  }, []);

  return (
    <AdminLandingPageContainer>
      <PageAnimationContainer>
        <GradientContainer>
          <PageHeading />
          <NavigationPage
            addQuouteCallBack={() => {
              setRedirectToAddQuote(true);
            }}
            readQuoteCallBack={() => setRedirectToReadQuote(true)}
            addMore={false}
            navigatioCardTextColor={appThemes[activeTheme]}
          />
        </GradientContainer>
      </PageAnimationContainer>
    </AdminLandingPageContainer>
  );
};

export default AdminLandingPage;
