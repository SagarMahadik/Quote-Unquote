import React from 'react';
import { CenterAlignedColumnContainerWithShadowBackground } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';

import {
  LandingPageBackground,
  OverlayContainer
} from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage';

import Logo from 'StylesLibrary/Atoms/GlobalQuoteModule/Logo/Logo';
import Tagline from 'StylesLibrary/Atoms/GlobalQuoteModule/Logo/Tagline.js';
import LandingPageActions from 'Modules/Authentication/CoreLandingPage/LandingPageActions/LandingPageActions.js';
const CoreLandingPage = () => {
  return (
    <CenterAlignedColumnContainerWithShadowBackground>
      <LandingPageBackground>
        <OverlayContainer>
          <Logo />
          <Tagline />
          <LandingPageActions />
        </OverlayContainer>
      </LandingPageBackground>
    </CenterAlignedColumnContainerWithShadowBackground>
  );
};

export default CoreLandingPage;
