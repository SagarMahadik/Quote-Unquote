import React, { useEffect, useRef, useState } from 'react';
import { CenterAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';

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

import { useGoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';

import LogoutButton from 'StylesLibrary/Molecules/GlobalModule/LogoutButton.js';

import LandingPageAuthLoader from 'StylesLibrary/Atoms/LoadingModule/LandingPageAuthLoader';

const CoreLandingPage = () => {
  const clientId =
    '806952200431-4k8ilrj5lbmi6js3rqat4f8tlmssvn4j.apps.googleusercontent.com';
  const dispatch = useApplicationDispatch();
  const logoRef = useRef(null);
  const history = useHistory();

  const {
    handleGoogleLogin,
    isUserAuthenticated,
    authLoading,
    newUser,
    privateRouteAuthentication,
    privateAuthenticationRoute,
    user
  } = useApplicationState();

  useEffect(() => {
    if (privateRouteAuthentication && isUserAuthenticated) {
      history.push(`${privateAuthenticationRoute}`);
    }
  }, [privateRouteAuthentication, isUserAuthenticated]);

  useEffect(() => {
    if (isUserAuthenticated && user.role === 'admin') {
      history.push('/corelanding');
    }
  }, [isUserAuthenticated, user]);

  useEffect(() => {
    if (
      isUserAuthenticated &&
      !newUser &&
      !privateRouteAuthentication &&
      user.role == 'user'
    ) {
      history.push('/moodPage');
    }
  }, [isUserAuthenticated, newUser]);

  useEffect(() => {
    if (isUserAuthenticated && newUser && !privateRouteAuthentication) {
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
      <CenterAlignedColumnContainer>
        <LandingPageBackground
          style={{
            position: 'relative',
            opacity: privateRouteAuthentication ? '0' : 1
          }}
        >
          <BubbleContainer />
          <OverlayContainer>
            <div ref={logoRef}>
              <Logo />
            </div>
            <Tagline />
            <LandingPageActions />
            {authLoading ? <LandingPageAuthLoader /> : null}
            <LogoutButton onClick={() => signIn()} />

            <Credo />
            <UpArrowIcon logoRef={logoRef} />
          </OverlayContainer>
        </LandingPageBackground>
      </CenterAlignedColumnContainer>
    </LandingPageAnimationContainer>
  );
};

export default CoreLandingPage;
