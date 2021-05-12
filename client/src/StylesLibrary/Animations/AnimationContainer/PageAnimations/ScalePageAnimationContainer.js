import React from 'react';
import { AnimationContainer } from 'StylesLibrary/Animations/FramerAnimations.js';

const ScalePageAnimationContainer = ({ children, animationDuration }) => {
  let timeDuration = animationDuration;
  if (timeDuration === '') {
    timeDuration = 0.6;
  }
  console.log(timeDuration);

  return (
    <AnimationContainer
      initial={{ scale: 0.5 }}
      animate={{
        scale: 1
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

export default ScalePageAnimationContainer;
