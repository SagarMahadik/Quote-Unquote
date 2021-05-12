import React, { useEffect, useRef, useState } from 'react';
import { CenterAlignedColumnContainerWithShadowBackground } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';

import {
  LandingPageBackground,
  OverlayContainer
} from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage';

import Logo from 'StylesLibrary/Atoms/GlobalQuoteModule/Logo/Logo';
import Tagline from 'StylesLibrary/Atoms/GlobalQuoteModule/Logo/Tagline.js';
import LandingPageActions from 'Modules/Authentication/CoreLandingPage/LandingPageActions/LandingPageActions';
import BubbleContainer from 'Modules/Authentication/CoreLandingPage/LandingBubbles/BubbleContainer.js';
import Credo from 'Modules/Authentication/CoreLandingPage/Credo/Credo.js';
import ArrowIcon from './Icons/ArrowIcon';
import {
  useApplicationState,
  useApplicationDispatch
} from 'Modules/Authentication/State/ApplicationState.js';
import UpArrowIcon from './Icons/UpArrowIcon';
import LandingPageAnimationContainer from 'StylesLibrary/Animations/AnimationContainer/PageAnimations/LandingPageAnimationContainer.js';
import GoogleLogin from 'react-google-login';
import { useGoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';

import LogoutButton from 'StylesLibrary/Molecules/GlobalModule/LogoutButton.js';
import FallBackLoader from 'Modules/Global/Components/FallBackLoader';
import Loader from 'StylesLibrary/Atoms/LoadingModule/Loader';
import LandingPageAuthLoader from 'StylesLibrary/Atoms/LoadingModule/LandingPageAuthLoader';

const CoreLandingPage = () => {
  const clientId =
    '806952200431-4k8ilrj5lbmi6js3rqat4f8tlmssvn4j.apps.googleusercontent.com';
  const dispatch = useApplicationDispatch();
  const logoRef = useRef(null);
  const [token, setToken] = useState('');

  const history = useHistory();

  const {
    handleGoogleLogin,
    isUserAuthenticated,
    authLoading,
    newUser
  } = useApplicationState();

  useEffect(() => {
    if (isUserAuthenticated && !newUser) {
      history.push('/readQuote');
    }
  }, [isUserAuthenticated, newUser]);

  useEffect(() => {
    if (isUserAuthenticated && newUser) {
      history.push('/signUpSuccess');
    }
  }, [isUserAuthenticated, newUser]);

  const onSuccess = res => {
    dispatch({
      type: 'SET_AUTH_LOADING'
    });
    handleGoogleLogin(res);
  };

  const onFailure = res => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId

    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <LandingPageAnimationContainer>
      <CenterAlignedColumnContainerWithShadowBackground>
        <LandingPageBackground style={{ position: 'relative' }}>
          <BubbleContainer />
          <OverlayContainer>
            <div ref={logoRef}>
              <Logo />
            </div>
            <Tagline />
            <LandingPageActions />
            {authLoading ? <LandingPageAuthLoader /> : null}
            <ArrowIcon />
            <LogoutButton onClick={() => signIn()} />
            <Credo />
            <UpArrowIcon logoRef={logoRef} />
          </OverlayContainer>
        </LandingPageBackground>
      </CenterAlignedColumnContainerWithShadowBackground>
    </LandingPageAnimationContainer>
  );
};

export default CoreLandingPage;
