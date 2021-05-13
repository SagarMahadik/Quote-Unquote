import React from 'react';
import NavigationPage from 'Modules/Global/Navigation/NavigationPage';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import GradientContainer from 'StylesLibrary/Animations/AnimationContainer/GradientContainer.js';
import PageAnimationContainer from 'StylesLibrary/Animations/AnimationContainer/PageAnimations/PageAnimationContainer';
import PageHeading from 'Modules/Global/Components/PageHeading';
import { AdminLandingPageContainer } from './AdminLandingPageStyles';

const AdminLandingPage = () => {
  const [redirectToAddQuote, setRedirectToAddQuote] = useState(false);
  const [redirectToReadQuote, setRedirectToReadQuote] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (redirectToAddQuote) {
      history.push('/addQuote');
    }
    if (redirectToReadQuote) {
      history.push('/moodPage');
    }
  }, [redirectToAddQuote, redirectToReadQuote]);

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
          />
        </GradientContainer>
      </PageAnimationContainer>
    </AdminLandingPageContainer>
  );
};

export default AdminLandingPage;
