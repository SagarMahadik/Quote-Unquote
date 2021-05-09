import React from 'react';
import {
  EnterLibraryButton,
  EnterLibraryButtonText
} from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage.js';

import { playVibrations } from 'Utils/vibrations.js';
import { buttonTransition } from 'StylesLibrary/Animations/FramerAnimations.js';

const EnterTheLibrary = ({ buttonText }) => {
  return (
    <EnterLibraryButton
      whileTap={{
        scale: 1.2,
        transition: buttonTransition
      }}
      onTapStart={() => playVibrations(20)}
    >
      <EnterLibraryButtonText>{buttonText}</EnterLibraryButtonText>
    </EnterLibraryButton>
  );
};

export default EnterTheLibrary;
