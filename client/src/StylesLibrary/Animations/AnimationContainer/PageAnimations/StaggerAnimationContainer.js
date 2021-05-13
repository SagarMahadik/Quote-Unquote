import React from 'react';
import { AnimationContainer } from 'StylesLibrary/Animations/FramerAnimations.js';
import { StaggerAnimationParentContainer } from 'StylesLibrary/Animations/FramerAnimations.js';

const StaggerAnimationContainer = ({ children, animationDuration }) => {
  let timeDuration = animationDuration;
  if (timeDuration === '') {
    timeDuration = 0.6;
  }
  const parentCntainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        duration: 0.9
      }
    },
    exit: { opacity: 0 }
  };

  return (
    <StaggerAnimationParentContainer
      variants={parentCntainer}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {children}
    </StaggerAnimationParentContainer>
  );
};

export default StaggerAnimationContainer;
