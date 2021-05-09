import React from 'react';
import {
  SignupButtonText,
  SignupLinkButton
} from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage';

import { buttonTransition } from 'StylesLibrary/Animations/FramerAnimations.js';
import { playVibrations } from 'Utils/vibrations.js';

const SignUpLink = ({ linkText, onClick }) => {
  return (
    <SignupLinkButton
      onClick={onClick}
      whileTap={{ scale: 1.2, transition: buttonTransition }}
      onTapStart={() => playVibrations(20)}
    >
      <SignupButtonText>{linkText}</SignupButtonText>
    </SignupLinkButton>
  );
};

export default SignUpLink;
