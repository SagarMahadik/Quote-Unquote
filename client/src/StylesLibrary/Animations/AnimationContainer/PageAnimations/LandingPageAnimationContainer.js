import React from 'react';
import { AnimationContainer } from 'StylesLibrary/Animations/FramerAnimations.js';

const LandingPageAnimationContainer = ({ children, animationDuration }) => {
  let timeDuration = animationDuration;
  if (timeDuration === '') {
    timeDuration = 0.9;
  }

  return (
    <AnimationContainer
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1
      }}
      transition={{
        ease: 'easeOut',
        duration: timeDuration
      }}
      exit={{ opacity: 0.6, y: -200 }}
    >
      {children}
    </AnimationContainer>
  );
};

export default LandingPageAnimationContainer;
