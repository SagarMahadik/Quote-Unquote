import React from 'react';
import {
  LandingPageBackground,
  OverlayContainer,
  SignUpSuccessText
} from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage';
import { CenterAlignedColumnContainerWithShadowBackground } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';

import { useApplicationState } from 'Modules/Authentication/State/ApplicationState.js';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import DoneSound from 'StylesLibrary/Sounds/DoneSound';
import PageAnimationContainer from 'StylesLibrary/Animations/AnimationContainer/PageAnimations/PageAnimationContainer.js';

const SignUpSuccess = () => {
  const {
    user: { firstName }
  } = useApplicationState();

  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/readQuote');
    }, 2000);
  }, []);

  return (
    <PageAnimationContainer>
      <CenterAlignedColumnContainerWithShadowBackground
        style={{ height: '100vh' }}
      >
        <LandingPageBackground style={{ height: '100vh', padding: '0' }}>
          <OverlayContainer style={{ height: '80%', margin: '0' }}>
            <CenterAlignedColumnContainerWithShadowBackground
              style={{ width: '70%', height: '30vh' }}
            >
              <SignUpSuccessText>
                Thank you {firstName} for signing up!
              </SignUpSuccessText>
            </CenterAlignedColumnContainerWithShadowBackground>
          </OverlayContainer>
        </LandingPageBackground>
        <DoneSound play={true} />
      </CenterAlignedColumnContainerWithShadowBackground>
    </PageAnimationContainer>
  );
};

export default SignUpSuccess;
