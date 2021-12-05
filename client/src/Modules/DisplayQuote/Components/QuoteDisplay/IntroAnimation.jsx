import React, { useEffect } from 'react';
import StaggerAnimationChild from 'Modules/DisplayQuote/Components/QuoteDisplay/IntroAnimationComponents/IntroStaggerAnimationChild.jsx';
import StaggerAnimationContainer from './../../../../StylesLibrary/Animations/AnimationContainer/PageAnimations/StaggerAnimationContainer';
import SwipeLeftHand from 'Modules/DisplayQuote/Components/QuoteDisplay/IntroAnimationComponents/SwipeLeftHand.jsx';
import SwipeRightHand from 'Modules/DisplayQuote/Components/QuoteDisplay/IntroAnimationComponents/SwipeRightHand.jsx';
import DoubleTap from 'Modules/DisplayQuote/Components/QuoteDisplay/IntroAnimationComponents/DoubleTap.jsx';
import { CenterAlignedFlexStartColumnContainer } from 'BennyStyleLibrary/Global/containerStyles';
import { useDisplayQuoteDispatch } from 'Modules/DisplayQuote/State/DisplayQuoteState';
import { goButtonVibrations } from 'Utils/vibrations.js';
import {
  IntroAnimationButtonText,
  IntroAnimationText
} from './Styles/QuotePageStyles';

const IntroAnimation = () => {
  const [hideAnimation, setHideAnimation] = React.useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    if (width > 768) {
      setHideAnimation(true);
    }
  }, []);

  const dispatch = useDisplayQuoteDispatch();

  if (hideAnimation) {
    return null;
  }

  return (
    <CenterAlignedFlexStartColumnContainer
      position="absolute"
      top="0"
      left="0"
      background="rgba(0,0,0,0.6)"
      width="100%"
      height="100vh"
      zIndex="10"
    >
      <StaggerAnimationContainer>
        <StaggerAnimationChild animationType="leftHand" top="40%" left="10%">
          <SwipeLeftHand />
        </StaggerAnimationChild>
        <StaggerAnimationChild
          animationType="doubleTapText"
          top="24%"
          left="-10%"
        >
          <IntroAnimationText width="40%">
            Swipe left for the next quote
          </IntroAnimationText>
        </StaggerAnimationChild>
        <StaggerAnimationChild animationType="rightHand" top="40%" left="70%">
          <SwipeRightHand />
        </StaggerAnimationChild>
        <StaggerAnimationChild
          animationType="doubleTapText"
          top="18%"
          left="54%"
        >
          <IntroAnimationText width="40%">
            Swipe right for the previous quote
          </IntroAnimationText>
        </StaggerAnimationChild>
        <StaggerAnimationChild animationType="doubleTap" top="48%" left="44%">
          <DoubleTap />
        </StaggerAnimationChild>
        <StaggerAnimationChild
          animationType="doubleTapText"
          top="60%"
          left="20%"
        >
          <IntroAnimationText width="70%">
            Double Tap to access Filter and Share Feature
          </IntroAnimationText>
        </StaggerAnimationChild>
        <StaggerAnimationChild
          top="84%"
          position="absolute"
          animationType="buttonAnimation"
        >
          <CenterAlignedFlexStartColumnContainer
            width="auto"
            padding="0px 16px"
            borderRadius="25px"
            background="rgba(255,255,255,0.3)"
            onClick={() => {
              goButtonVibrations();
              localStorage.setItem('hasSeenIntroAnimation', 'Y');
              dispatch({ type: 'DQ_HIDE_INTROANIMATION' });
            }}
          >
            <IntroAnimationButtonText>Got it</IntroAnimationButtonText>
          </CenterAlignedFlexStartColumnContainer>
        </StaggerAnimationChild>
      </StaggerAnimationContainer>
    </CenterAlignedFlexStartColumnContainer>
  );
};

export default IntroAnimation;
