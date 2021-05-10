import React from 'react';
import { AnimationContainer } from 'StylesLibrary/Animations/FramerAnimations.js';

const PageAnimationContainer = ({ children, animationDuration }) => {
  let timeDuration = animationDuration;
  if (timeDuration === '') {
    timeDuration = 0.6;
  }
  console.log(timeDuration);

  return (
    <AnimationContainer
      initial={{ y: 200 }}
      animate={{
        y: 0
      }}
      transition={{
        ease: 'easeOut',
        duration: timeDuration
      }}
      exit={{ opacity: 0.8, y: -200 }}
    >
      {children}
    </AnimationContainer>
  );
};

export default PageAnimationContainer;
