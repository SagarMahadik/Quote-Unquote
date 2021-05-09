import React from 'react';
import { LoginPageInputTextBox } from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage';
import { CenterAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';
import LandingActionButton from 'StylesLibrary/Molecules/AuthenticationModule/CoreLandingPage/LandingActionButton';
import {
  useApplicationState,
  useApplicationDispatch
} from 'Modules/Authentication/State/ApplicationState.js';
import SignupFormFields from './SignupFormFields';
import { AnimatePresence } from 'framer-motion';
import HeightAnimationContainer from 'StylesLibrary/Animations/AnimationContainer/HeightAnimationContainer';

const Signup = () => {
  const {
    signupDetails: { userName, email, mobileNumber, password, confirmPassword },
    displaySignupForm
  } = useApplicationState();
  const dispatch = useApplicationDispatch();

  return (
    <AnimatePresence exitBeforeEnter>
      {displaySignupForm && (
        <CenterAlignedColumnContainer>
          <HeightAnimationContainer>
            <SignupFormFields />
            <LandingActionButton buttonText="Sign Up" />
          </HeightAnimationContainer>
        </CenterAlignedColumnContainer>
      )}
    </AnimatePresence>
  );
};

export default Signup;
