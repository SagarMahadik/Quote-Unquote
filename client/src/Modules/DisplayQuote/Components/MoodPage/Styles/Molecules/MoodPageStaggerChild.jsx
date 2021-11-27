import React from 'react';
import { CenterAlignedFlexStartColumnContainer } from 'BennyStyleLibrary/Global/containerStyles';
import { StaggerAnimationChildContainer } from 'StylesLibrary/Animations/FramerAnimations.js';

const MoodPageStaggerChild = ({ children }) => {
  const childContainer = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  };

  return (
    <CenterAlignedFlexStartColumnContainer variants={childContainer}>
      {children}
    </CenterAlignedFlexStartColumnContainer>
  );
};

export default MoodPageStaggerChild;
