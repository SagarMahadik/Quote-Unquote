import React from 'react';
import { motion } from 'framer-motion';
import {
  BackgroundCircle,
  LandingPageBackground,
  BackgroundCircle1,
  BackgroundCircle2
} from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage.js';
import Bubble1 from 'Modules/Authentication/CoreLandingPage/LandingBubbles/Bubble1';
import Bubble2 from 'Modules/Authentication/CoreLandingPage/LandingBubbles/Bubble2';
import Bubble3 from 'Modules/Authentication/CoreLandingPage/LandingBubbles/Bubble3';

function PathSVG() {
  const transition = { duration: 50, repeat: Infinity, ease: 'easeInOut' };
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
            delay: 3
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
          transition: { duration: 5, repeat: Infinity, repeatType: 'reverse' }
        }}
      />
      <BackgroundCircle2
        initial={{ y: -60, scale: 0.5, opacity: 1 }}
        animate={{
          y: 0,
          x: 0,
          opacity: 1,
          scale: 1,
          transition: { duration: 8, repeat: Infinity, repeatType: 'reverse' }
        }}
      />
    </>
  );
}

export default PathSVG;
