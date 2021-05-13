import React from 'react';
import {
  EnterLibraryButton,
  EnterLibraryButtonText
} from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage.js';

import MotionButtonLanding from 'StylesLibrary/Animations/ButtonAnimations/MotionButtonLanding';

const EnterTheLibrary = ({ buttonText, onClick }) => {
  console.log('I am being Clicked');
  return (
    <MotionButtonLanding>
      <EnterLibraryButton onClick={() => onClick}>
        <EnterLibraryButtonText>{buttonText}</EnterLibraryButtonText>
      </EnterLibraryButton>
    </MotionButtonLanding>
  );
};

export default EnterTheLibrary;
