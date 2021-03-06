import React from 'react';
import {
  buttonTransition,
  MotionButtonContainer
} from 'StylesLibrary/Animations/FramerAnimations.js';
import { playVibrations } from 'Utils/vibrations';

const MotionButtonLanding = ({ children }) => {
  const buttonVariants = {
    scale: 1.2,
    transition: buttonTransition
  };
  return (
    <MotionButtonContainer
      whileTap={buttonVariants}
      onTapStart={() => playVibrations(20)}
    >
      {children}
    </MotionButtonContainer>
  );
};

export default MotionButtonLanding;
