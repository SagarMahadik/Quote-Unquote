import React from 'react';
import { AnimationContainer } from 'StylesLibrary/Animations/FramerAnimations.js';

const PageAnimationContainer = ({ children, animationDuration }) => {
  let timeDuration = animationDuration;
  if (timeDuration === '') {
    timeDuration = 0.6;
  }

  return (
    <AnimationContainer
      initial={{ y: 200, opacity: 0.6 }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        ease: 'easeOut',
        duration: timeDuration
      }}
      exit={{ opacity: 0.5, y: -200 }}
    >
      {children}
    </AnimationContainer>
  );
};

export default PageAnimationContainer;
