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
        duration: 50,
        repeat: Infinity,
        repeatType: 'reverse',
        type: 'tween'
      }}
      style={{ minHeight: '120vh', paddingBottom: '2rem' }}
    >
      {children}
    </AnimationContainer>
  );
};

export default GradientContainer;
