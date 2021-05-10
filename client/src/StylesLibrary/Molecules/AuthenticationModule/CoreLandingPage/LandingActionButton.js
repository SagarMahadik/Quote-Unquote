import React from 'react';
import { LoginPageActionButton } from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage';
import MotionButtonLanding from 'StylesLibrary/Animations/ButtonAnimations/MotionButtonLanding.js';

const LandingActionButton = ({ buttonText, onClick }) => {
  return (
    <MotionButtonLanding>
      <LoginPageActionButton onClick={onClick}>
        {buttonText}
      </LoginPageActionButton>
    </MotionButtonLanding>
  );
};

export default LandingActionButton;
