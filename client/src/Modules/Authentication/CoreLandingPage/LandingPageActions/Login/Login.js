import React from 'react';
import { LoginPageInputTextBox } from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage';
import { CenterAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';
import LandingActionButton from 'StylesLibrary/Molecules/AuthenticationModule/CoreLandingPage/LandingActionButton';
import {
  useApplicationState,
  useApplicationDispatch
} from 'Modules/Authentication/State/ApplicationState.js';
import LoginForm from './LoginFormFields';
import HeightAnimationContainer from 'StylesLibrary/Animations/AnimationContainer/HeightAnimationContainer';
import { AnimatePresence } from 'framer-motion';

const Login = () => {
  const {
    logindetails: { mobileNumber, password },
    displayLoginForm
  } = useApplicationState();

  const dispatch = useApplicationDispatch();

  const handleLoginSubmit = e => {};
  return (
    <AnimatePresence exitBeforeEnter>
      {displayLoginForm && (
        <CenterAlignedColumnContainer>
          <HeightAnimationContainer>
            <LoginForm />
            <LandingActionButton
              onClick={e => handleLoginSubmit(e)}
              buttonText="Login"
            ></LandingActionButton>
          </HeightAnimationContainer>
        </CenterAlignedColumnContainer>
      )}
    </AnimatePresence>
  );
};

export default Login;
