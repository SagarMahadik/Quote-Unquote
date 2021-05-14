import React from 'react';
import {
  CenterAlignedColumnContainer,
  CenterAlignedColumnContainerWithShadowBackground
} from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';
import { useApplicationState } from 'Modules/Authentication/State/ApplicationState.js';
import { useRef } from 'react';
import { useEffect } from 'react';
import { getElementIntoView } from 'Utils/UIutils/getElementIntoView';
import { AnimatePresence } from 'framer-motion';
import HeightAnimationContainer from 'StylesLibrary/Animations/AnimationContainer/HeightAnimationContainer';

const Credo = () => {
  const { displayCredo } = useApplicationState();
  const credoContainerRef = useRef(null);

  useEffect(() => {
    if (displayCredo) {
      getElementIntoView(credoContainerRef.current);
    }
  }, [displayCredo]);
  return (
    <CenterAlignedColumnContainer
      ref={credoContainerRef}
      style={{ marginTop: '3rem' }}
    >
      <AnimatePresence exitBeforeEnter>
        {displayCredo ? (
          <CenterAlignedColumnContainerWithShadowBackground
            style={{ height: '80vh', width: '90%', marginBottom: '4rem' }}
          >
            <HeightAnimationContainer animationDuration="0.5">
              More than seven years ago Aaron Swartz, who spared no risk in
              standing up for what we here urge you to stand up for too, wrote:
              "We need to take information, wherever it is stored, make our
              copies and share them with the world. We need to take stuff that's
              out of copyright and add it to the archive. We need to buy secret
              databases and put them on the Web. We need to download scientific
              journals and upload them to file sharing networks. We need to
              fight for Guerilla Open Access. With enough of us, around the
              world, we'll not just send a strong message opposing the
              privatization of knowledge — we'll make it a thing of the past.
              Will you join us?"9
            </HeightAnimationContainer>
          </CenterAlignedColumnContainerWithShadowBackground>
        ) : null}
      </AnimatePresence>
    </CenterAlignedColumnContainer>
  );
};

export default Credo;
