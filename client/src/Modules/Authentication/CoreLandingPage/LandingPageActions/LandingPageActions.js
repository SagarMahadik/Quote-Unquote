import React from 'react';
import {
  ActionBorder,
  ActionContainer
} from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage.js';
import EnterTheLibrary from 'StylesLibrary/Molecules/AuthenticationModule/CoreLandingPage/EnterTheLibrary';
import MemberLogin from 'StylesLibrary/Molecules/AuthenticationModule/CoreLandingPage/MemberLogin';
import SignUpLink from 'StylesLibrary/Molecules/AuthenticationModule/CoreLandingPage/SignUpLink';

const LandingPageActions = () => {
  return (
    <ActionBorder>
      <ActionContainer>
        <EnterTheLibrary buttonText="Enter Quote Library" />
        <MemberLogin buttonText="Login as a member" />
        <SignUpLink linkText="Sign up as member" />
      </ActionContainer>
    </ActionBorder>
  );
};

export default LandingPageActions;
