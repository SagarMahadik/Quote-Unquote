import React from 'react';

import {
  BackgroundCircle,
  BackgroundCircle1,
  BackgroundCircle2
} from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage.js';

function PathSVG() {
  return (
    <>
      <BackgroundCircle
        initial={{ y: -100, x: 20, scale: 0.4, opacity: 0 }}
        animate={{
          y: 0,
          x: 0,
          opacity: 1,
          scale: 1,
          transition: {
            duration: 5,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 5
          }
        }}
        exit={{ opacity: 0 }}
      />
      <BackgroundCircle1
        initial={{ y: 30, scale: 0.5, opacity: 0.6 }}
        animate={{
          y: 0,
          x: 0,
          opacity: 1.2,
          scale: 1,
          transition: {
            duration: 5,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 5
          }
        }}
      />
      <BackgroundCircle2
        initial={{ y: -60, scale: 0.5, opacity: 1 }}
        animate={{
          y: 0,
          x: 0,
          opacity: 1,
          scale: 1,
          transition: {
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 5
          }
        }}
      />
    </>
  );
}

export default PathSVG;
