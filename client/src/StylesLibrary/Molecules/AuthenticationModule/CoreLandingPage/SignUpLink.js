import React from 'react';
import {
  SignupButtonText,
  SignupLinkButton
} from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage';

const SignUpLink = ({ linkText }) => {
  return (
    <SignupLinkButton>
      <SignupButtonText>{linkText}</SignupButtonText>
    </SignupLinkButton>
  );
};

export default SignUpLink;
