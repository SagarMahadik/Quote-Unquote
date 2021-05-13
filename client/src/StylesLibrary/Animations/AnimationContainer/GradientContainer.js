import React from 'react';
import {
  AnimationContainer,
  DisplayQuoteMainContainerGradient,
  gradientArray
} from 'StylesLibrary/Animations/FramerAnimations.js';

const GradientContainer = ({ children }) => {
  return (
    <AnimationContainer
      animate={{
        backgroundImage: gradientArray
      }}
      transition={{
        duration: 60,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeOut'
      }}
      style={{ width: '100%' }}
    >
      {children}
    </AnimationContainer>
  );
};

export default GradientContainer;
