import React, { useEffect, useRef } from 'react';
import {
  ActionBorder,
  ActionContainer
} from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage.js';
import EnterTheLibrary from 'StylesLibrary/Molecules/AuthenticationModule/CoreLandingPage/EnterTheLibrary';
import MemberLogin from 'StylesLibrary/Molecules/AuthenticationModule/CoreLandingPage/MemberLogin';
import SignUpLink from 'StylesLibrary/Molecules/AuthenticationModule/CoreLandingPage/SignUpLink';
import Login from 'Modules/Authentication/CoreLandingPage/LandingPageActions/Login/Login.js';
import Signup from './Signup/Signup';
import {
  useApplicationState,
  useApplicationDispatch
} from 'Modules/Authentication/State/ApplicationState.js';

import { getElementIntoView } from 'Utils/UIutils/getElementIntoView.js';

const LandingPageActions = () => {
  const {
    signupDetails: { userName, email, mobileNumber, password, confirmPassword },
    displaySignupForm,
    displayLoginForm
  } = useApplicationState();
  const dispatch = useApplicationDispatch();

  const handleDisplayLoginForm = e => {
    dispatch({
      type: 'TOGGLE_DISPLAY_LOGINFORM'
    });
    /**
     *if (loginContainerRef.current) {
      console.log(loginContainerRef.current);
      loginContainerRef.current.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
    } 
     */
  };

  const loginContainerRef = useRef(null);
  const signUpContainerRef = useRef(null);

  const handleDisplaySignupForm = e => {
    e.preventDefault();
    dispatch({
      type: 'TOGGLE_DISPLAY_SIGNUPFORM'
    });
  };

  useEffect(() => {
    console.log('in useffect sign up');
    if (displaySignupForm) {
      getElementIntoView(signUpContainerRef.current);
    }
  }, [displaySignupForm]);

  useEffect(() => {
    if (displayLoginForm) {
      getElementIntoView(loginContainerRef.current);
    }
  }, [displayLoginForm]);

  return (
    <ActionBorder>
      <ActionContainer>
        <EnterTheLibrary buttonText="Enter Quote Library" />
        <MemberLogin
          buttonText="Login as a member"
          onClick={e => handleDisplayLoginForm(e)}
        />
        <div style={{ width: '100%' }} ref={loginContainerRef}>
          <Login />
        </div>
        <SignUpLink
          linkText="Sign up as member"
          onClick={e => handleDisplaySignupForm(e)}
        />
        <div style={{ width: '100%' }} ref={signUpContainerRef}>
          <Signup />
        </div>
      </ActionContainer>
    </ActionBorder>
  );
};

export default LandingPageActions;
