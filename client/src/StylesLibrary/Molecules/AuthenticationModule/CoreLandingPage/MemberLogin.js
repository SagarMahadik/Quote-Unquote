import React from 'react';
import {
  MemberLoginButton,
  MemberLoginButtonText
} from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage.js';
import { buttonTransition } from 'StylesLibrary/Animations/FramerAnimations.js';
import { playVibrations } from 'Utils/vibrations.js';

const MemberLogin = ({ buttonText, onClick }) => {
  return (
    <MemberLoginButton
      onClick={onClick}
      whileTap={{
        scale: 1.2,
        transition: buttonTransition
      }}
      onTapStart={() => playVibrations(20)}
    >
      <MemberLoginButtonText>{buttonText}</MemberLoginButtonText>
    </MemberLoginButton>
  );
};

export default MemberLogin;
