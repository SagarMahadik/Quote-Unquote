import React from 'react';
import {
  MemberLoginButton,
  MemberLoginButtonText
} from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage.js';

const MemberLogin = ({ buttonText }) => {
  return (
    <MemberLoginButton>
      <MemberLoginButtonText>{buttonText}</MemberLoginButtonText>
    </MemberLoginButton>
  );
};

export default MemberLogin;
