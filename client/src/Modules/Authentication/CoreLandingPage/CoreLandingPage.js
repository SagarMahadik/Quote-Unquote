import React, { useRef } from 'react';
import { CenterAlignedColumnContainerWithShadowBackground } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';

import {
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
import LandingPageAnimationContainer from 'StylesLibrary/Animations/AnimationContainer/PageAnimations/LandingPageAnimationContainer.js';

const CoreLandingPage = () => {
  const dispatch = useApplicationDispatch();
  const logoRef = useRef(null);

  return (
    <LandingPageAnimationContainer>
      <CenterAlignedColumnContainerWithShadowBackground>
        <LandingPageBackground style={{ position: 'relative' }}>
          <BubbleContainer />
          <OverlayContainer>
            <div ref={logoRef}>
              <Logo />
            </div>
            <Tagline />
            <LandingPageActions />
            <ArrowIcon
              onClick={() => dispatch({ type: 'TOGGLE_DISPLAY_CREDO' })}
            />
            <Credo />
            <UpArrowIcon logoRef={logoRef} />
          </OverlayContainer>
        </LandingPageBackground>
      </CenterAlignedColumnContainerWithShadowBackground>
    </LandingPageAnimationContainer>
  );
};

export default CoreLandingPage;
