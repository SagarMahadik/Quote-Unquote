import React from 'react';
import {
  EnterLibraryButton,
  EnterLibraryButtonText
} from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage.js';

import MotionButtonLanding from 'StylesLibrary/Animations/ButtonAnimations/MotionButtonLanding';
import { CenterAlignedRowContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';
import GoogleIcon from 'StylesLibrary/Atoms/GlobalQuoteModule/Icons/GoogleIcon';

const EnterTheLibrary = ({ buttonText, onClick }) => {
  return (
    <MotionButtonLanding>
      <EnterLibraryButton onClick={onClick}>
        <CenterAlignedRowContainer>
          <GoogleIcon />
          <EnterLibraryButtonText>{buttonText}</EnterLibraryButtonText>
        </CenterAlignedRowContainer>
      </EnterLibraryButton>
    </MotionButtonLanding>
  );
};

export default EnterTheLibrary;
