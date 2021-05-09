import React from 'react';
import {
  EnterLibraryButton,
  EnterLibraryButtonText
} from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage.js';

const EnterTheLibrary = ({ buttonText }) => {
  return (
    <EnterLibraryButton>
      <EnterLibraryButtonText>{buttonText}</EnterLibraryButtonText>
    </EnterLibraryButton>
  );
};

export default EnterTheLibrary;
