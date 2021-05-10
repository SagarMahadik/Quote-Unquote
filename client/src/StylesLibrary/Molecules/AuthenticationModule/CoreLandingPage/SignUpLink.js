import React from 'react';
import {
  SignupButtonText,
  SignupLinkButton
} from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage';

import MotionButtonLanding from 'StylesLibrary/Animations/ButtonAnimations/MotionButtonLanding';

const SignUpLink = ({ linkText, onClick }) => {
  return (
    <MotionButtonLanding>
      <SignupLinkButton onClick={onClick}>
        <SignupButtonText>{linkText}</SignupButtonText>
      </SignupLinkButton>
    </MotionButtonLanding>
  );
};

export default SignUpLink;
