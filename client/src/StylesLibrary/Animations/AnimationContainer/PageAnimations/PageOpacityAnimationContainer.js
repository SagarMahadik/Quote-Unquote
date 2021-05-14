import React from 'react';
import { AnimationContainer } from 'StylesLibrary/Animations/FramerAnimations.js';

const PageAnimationOpacity = ({ children, animationDuration }) => {
  let timeDuration = animationDuration;
  if (timeDuration === '') {
    timeDuration = 0.9;
  }

  const opacityContainerVariants = {
    initial: { opacity: 0 },
    show: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimationContainer
      variants={opacityContainerVariants}
      initial="initiate"
      animate="show"
      transition={{
        ease: 'easeOut',
        duration: timeDuration
      }}
      exit="exit"
    >
      {children}
    </AnimationContainer>
  );
};

export default PageAnimationOpacity;
