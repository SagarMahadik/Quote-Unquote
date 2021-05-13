import React from 'react';
import { AnimationContainer } from 'StylesLibrary/Animations/FramerAnimations.js';

const HeightAnimationContainer = ({ children, animationDuration }) => {
  let timeDuration = animationDuration;
  if (timeDuration === '') {
    timeDuration = 1.0;
  }

  return (
    <AnimationContainer
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        ease: 'easeOut',
        duration: timeDuration
      }}
      exit={{ opacity: 0, scale: 0 }}
    >
      {children}
    </AnimationContainer>
  );
};

export default HeightAnimationContainer;
