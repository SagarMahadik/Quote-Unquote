import React from 'react';
import {
  GoogleLoginButton,
  GoogleLoginButtonText
} from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage.js';

import MotionButtonLanding from 'StylesLibrary/Animations/ButtonAnimations/MotionButtonLanding';
import { CenterAlignedRowContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';
import GoogleIcon from 'StylesLibrary/Atoms/GlobalQuoteModule/Icons/GoogleIcon';

const GoogleLogin = ({ buttonText, onClick, buttonTextColor }) => {
  return (
    <MotionButtonLanding>
      <GoogleLoginButton onClick={onClick}>
        <CenterAlignedRowContainer>
          <GoogleIcon />
          <GoogleLoginButtonText buttonTextColor={buttonTextColor}>
            {buttonText}
          </GoogleLoginButtonText>
        </CenterAlignedRowContainer>
      </GoogleLoginButton>
    </MotionButtonLanding>
  );
};

export default GoogleLogin;
