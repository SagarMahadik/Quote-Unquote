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

import LandingPageAuthLoader from 'StylesLibrary/Atoms/LoadingModule/LandingPageAuthLoader';
import GoogleLogin from 'StylesLibrary/Molecules/AuthenticationModule/CoreLandingPage/GoogleLogin';
import EnterTheLibrary from 'StylesLibrary/Molecules/AuthenticationModule/CoreLandingPage/EnterTheLibrary';
import {
  DisplayQuoteContext,
  DisplayQuoteDispatchContext
} from 'Modules/DisplayQuote/State/DisplayQuoteContext.js';

const CoreLandingPage = () => {
  const clientId = `${process.env.REACT_APP_GOOGLEID}`;
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
    user,
    adminLogin,
    appThemes,
    activeTheme
  } = useApplicationState();
  useEffect(() => {
    dispatch({
      type: 'DQ_UNSET_QUOTE_STATE'
    });
  }, []);

  useEffect(() => {
    console.log('in a privateroute auth');
    if (privateRouteAuthentication && isUserAuthenticated) {
      history.push(`${privateAuthenticationRoute}`);
    }
  }, [privateRouteAuthentication, isUserAuthenticated]);

  useEffect(() => {
    if (
      isUserAuthenticated &&
      user.role == 'admin' &&
      !privateRouteAuthentication
    ) {
      console.log('in history posug');
      history.push('/corelanding');
    }
  }, [isUserAuthenticated, adminLogin, user, privateRouteAuthentication]);

  useEffect(() => {
    if (isUserAuthenticated && !newUser && user.role == 'user') {
      history.push('/moodPage');
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
    alert(`Failed to login. 😢 Please ping to sgrmhdk51@gmail.com`);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId
  });

  function handleClick() {
    console.log('in a handle click');
    history.push('/moodPage');
    dispatch({
      type: 'RESET_DISPLAY_QUOTE_LOGOUT'
    });
  }

  return (
    <LandingPageAnimationContainer>
      <CenterAlignedColumnContainer>
        <LandingPageBackground
          style={{
            position: 'relative',
            opacity: privateRouteAuthentication && authLoading ? '0' : 1
          }}
          gradientBackground={appThemes[activeTheme]}
        >
          <BubbleContainer style={{ zIndex: -1 }} />
          <OverlayContainer>
            <div ref={logoRef} style={{ zIndex: 100 }}>
              <Logo />
            </div>
            <Tagline />
            <div style={{ marginTop: '8rem', width: '100%' }}>
              <EnterTheLibrary
                buttonText="Enter Quote Library"
                onClick={handleClick}
                buttonBackground={appThemes[activeTheme]}
              />
              <GoogleLogin
                buttonText="Login with Google"
                onClick={e => {
                  e.preventDefault();
                  signIn();
                }}
                buttonTextColor={appThemes[activeTheme]}
              ></GoogleLogin>
            </div>
            <ArrowIcon
              style={{ marginTop: '4rem', zIndex: 100 }}
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
