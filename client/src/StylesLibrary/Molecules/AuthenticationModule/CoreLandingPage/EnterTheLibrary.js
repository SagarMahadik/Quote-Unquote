import React from 'react';
import {
  EnterLibraryButton,
  EnterLibraryButtonText
} from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage.js';
import { buttonTransition } from 'StylesLibrary/Animations/FramerAnimations.js';
import { playVibrations } from 'Utils/vibrations.js';
import MotionButtonLanding from 'StylesLibrary/Animations/ButtonAnimations/MotionButtonLanding.js';

const EnterTheLibrary = ({ buttonText, onClick, buttonBackground }) => {
  return (
    <MotionButtonLanding>
      <EnterLibraryButton onClick={onClick} buttonBackground={buttonBackground}>
        <EnterLibraryButtonText>{buttonText}</EnterLibraryButtonText>
      </EnterLibraryButton>
    </MotionButtonLanding>
  );
};

export default EnterTheLibrary;
