import React, { useEffect, useRef, useState } from 'react';
import { CenterAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';

import {
  LandingPageBackground,
  OverlayContainer
} from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage';

import Logo from 'StylesLibrary/Atoms/GlobalQuoteModule/Logo/Logo';
import Tagline from 'StylesLibrary/Atoms/GlobalQuoteModule/Logo/Tagline.js';
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
import MemberLogin from 'StylesLibrary/Molecules/AuthenticationModule/CoreLandingPage/MemberLogin';

import LandingPageAuthLoader from 'StylesLibrary/Atoms/LoadingModule/LandingPageAuthLoader';
import EnterTheLibrary from 'StylesLibrary/Molecules/AuthenticationModule/CoreLandingPage/EnterTheLibrary';

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
    alert(`Failed to login. 😢 Please ping to sgrmhdk51@gmail.com`);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId

    // responseType: 'code',
    // prompt: 'consent',
  });

  function handleClick() {
    history.push('/moodPage');
  }

  return (
    <LandingPageAnimationContainer>
      <CenterAlignedColumnContainer>
        <LandingPageBackground
          style={{
            position: 'relative',
            opacity: privateRouteAuthentication && authLoading ? '0' : 1
          }}
        >
          <BubbleContainer />
          <OverlayContainer>
            <div ref={logoRef}>
              <Logo />
            </div>
            <Tagline />
            <MemberLogin
              buttonText="Enter Quote Library"
              onClick={handleClick}
            />
            <EnterTheLibrary
              buttonText="Login with Google"
              onClick={e => {
                e.preventDefault();
                signIn();
              }}
            ></EnterTheLibrary>
            <ArrowIcon
              style={{ marginTop: '4rem' }}
              onClick={() => dispatch({ type: 'TOGGLE_DISPLAY_CREDO' })}
            />
            <Credo />
            <UpArrowIcon logoRef={logoRef} />
            {authLoading ? <LandingPageAuthLoader /> : null}
          </OverlayContainer>
        </LandingPageBackground>
      </CenterAlignedColumnContainer>
    </LandingPageAnimationContainer>
  );
};

export default CoreLandingPage;
