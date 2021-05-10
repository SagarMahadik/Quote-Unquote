import NavigationPage from 'Modules/Global/Navigation/NavigationPage';
import React from 'react';
import { useState, useEffect } from 'react';
import { CenterAlignedColumnContainerWithShadowBackground } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';
import { useHistory } from 'react-router-dom';
import GradientContainer from 'StylesLibrary/Animations/AnimationContainer/GradientContainer.js';
import PageAnimationContainer from 'StylesLibrary/Animations/AnimationContainer/PageAnimations/PageAnimationContainer';
import Loader from 'StylesLibrary/Atoms/LoadingModule/Loader.js';

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
    <PageAnimationContainer>
      <CenterAlignedColumnContainerWithShadowBackground
        style={{ alignItems: 'flex-start' }}
      >
        <GradientContainer>
          <NavigationPage
            addQuouteCallBack={() => {
              setRedirectToAddQuote(true);
            }}
            readQuoteCallBack={() => setRedirectToReadQuote(true)}
            addMore={false}
          />
        </GradientContainer>
      </CenterAlignedColumnContainerWithShadowBackground>
    </PageAnimationContainer>
  );
};

export default AdminLandingPage;
