import React, { useRef } from 'react';
import { CenterAlignedColumnContainerWithShadowBackground } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';

import {
  BackgroundCircle,
  BackgroundCircle1,
  LandingPageBackground,
  OverlayContainer
} from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage';

import Logo from 'StylesLibrary/Atoms/GlobalQuoteModule/Logo/Logo';
import Tagline from 'StylesLibrary/Atoms/GlobalQuoteModule/Logo/Tagline.js';
import LandingPageActions from 'Modules/Authentication/CoreLandingPage/LandingPageActions/LandingPageActions';
import BubbleContainer from 'Modules/Authentication/CoreLandingPage/LandingBubbles/BubbleContainer.js';
import Credo from 'Modules/Authentication/CoreLandingPage/Credo/Credo.js';
import ArrowIcon from './Icons/ArrowIcon';
import {
  useApplicationState,
  useApplicationDispatch
} from 'Modules/Authentication/State/ApplicationState.js';
import UpArrowIcon from './Icons/UpArrowIcon';

const CoreLandingPage = () => {
  const dispatch = useApplicationDispatch();
  const testRef = useRef(null);
  return (
    <CenterAlignedColumnContainerWithShadowBackground>
      <LandingPageBackground style={{ position: 'relative' }}>
        <BubbleContainer />
        <OverlayContainer>
          <div ref={testRef}>
            <Logo />
          </div>
          <Tagline />
          <LandingPageActions />
          <ArrowIcon
            onClick={() => dispatch({ type: 'TOGGLE_DISPLAY_CREDO' })}
          />
          <Credo />
          <UpArrowIcon logoRef={testRef} />
        </OverlayContainer>
      </LandingPageBackground>
    </CenterAlignedColumnContainerWithShadowBackground>
  );
};

export default CoreLandingPage;
