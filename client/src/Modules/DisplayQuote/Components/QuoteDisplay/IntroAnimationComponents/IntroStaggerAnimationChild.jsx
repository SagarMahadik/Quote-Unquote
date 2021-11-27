import React from 'react';
import { CenterAlignedFlexStartColumnContainer } from 'BennyStyleLibrary/Global/containerStyles';
import { StaggerAnimationChildContainer } from 'StylesLibrary/Animations/FramerAnimations.js';

const StaggerAnimationChild = ({ children, top, left, animationType }) => {
  const setIntroChildAnimation = animationType => {
    switch (animationType) {
      case 'leftHand':
        return {
          hidden: { opacity: 0, x: 200 },
          show: { opacity: 1, x: 0, transition: { repeat: 1, duration: 1 } },
          exit: { opacity: 0 }
        };
      case 'rightHand':
        return {
          hidden: { opacity: 0, x: -300 },
          show: { opacity: 1, x: 0, transition: { repeat: 1, duration: 1 } },
          exit: { opacity: 0 }
        };
      case 'doubleTap':
        return {
          hidden: { opacity: 0, scale: 1 },
          show: {
            opacity: 1,
            scale: 0.8,
            transition: { repeat: 1, duration: 1 }
          },
          exit: { opacity: 1, scale: 1 }
        };

      case 'doubleTapText':
        return {
          hidden: { opacity: 0 },
          show: { opacity: 1 },
          exit: { opacity: 0 }
        };

      case 'buttonAnimation':
        return {
          hidden: { opacity: 0, scale: 0.7 },
          show: {
            opacity: 1,
            scale: 1
          },
          exit: { opacity: 0, scale: 1 }
        };
    }
  };

  return (
    <CenterAlignedFlexStartColumnContainer
      position="absolute"
      top={top}
      left={left}
      variants={setIntroChildAnimation(animationType)}
    >
      {children}
    </CenterAlignedFlexStartColumnContainer>
  );
};

export default StaggerAnimationChild;
