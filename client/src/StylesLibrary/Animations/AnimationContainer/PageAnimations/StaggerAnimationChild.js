import React from 'react';
import { StaggerAnimationChildContainer } from 'StylesLibrary/Animations/FramerAnimations.js';

const StaggerAnimationChild = ({ children }) => {
  const childContainer = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  };

  return (
    <StaggerAnimationChildContainer variants={childContainer}>
      {children}
    </StaggerAnimationChildContainer>
  );
};

export default StaggerAnimationChild;
