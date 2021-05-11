import React from 'react';
import {
  buttonTransition,
  MotionButtonContainer
} from 'StylesLibrary/Animations/FramerAnimations.js';
import { playVibrations } from 'Utils/vibrations';

const MotionButtonLanding = ({ children }) => {
  const buttonVariants = {
    scale: 0.8,
    transition: buttonTransition
  };
  return (
    <MotionButtonContainer
      whileTap={buttonVariants}
      onTapStart={() => playVibrations(15)}
      style={{ width: '56px' }}
    >
      {children}
    </MotionButtonContainer>
  );
};

export default MotionButtonLanding;
