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
        duration: 20,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeOut'
      }}
      style={{ minHeight: '100vh', paddingBottom: '2rem' }}
    >
      {children}
    </AnimationContainer>
  );
};

export default GradientContainer;
