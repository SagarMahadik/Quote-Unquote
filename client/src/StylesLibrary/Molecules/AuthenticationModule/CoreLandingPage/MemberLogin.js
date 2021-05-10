import React from 'react';
import {
  MemberLoginButton,
  MemberLoginButtonText
} from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage.js';
import { buttonTransition } from 'StylesLibrary/Animations/FramerAnimations.js';
import { playVibrations } from 'Utils/vibrations.js';
import MotionButtonLanding from 'StylesLibrary/Animations/ButtonAnimations/MotionButtonLanding.js';

const MemberLogin = ({ buttonText, onClick }) => {
  return (
    <MotionButtonLanding>
      <MemberLoginButton onClick={onClick}>
        <MemberLoginButtonText>{buttonText}</MemberLoginButtonText>
      </MemberLoginButton>
    </MotionButtonLanding>
  );
};

export default MemberLogin;
