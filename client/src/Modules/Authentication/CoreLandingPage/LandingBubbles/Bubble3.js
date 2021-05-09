import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundCircle3 } from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage.js';

const Bubble3 = () => {
  const transition = { duration: 10, repeat: Infinity, ease: 'easeInOut' };
  return (
    <div
      style={{
        position: 'relative',
        marginTop: '-30rem'
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="552"
        height="415"
        fill="none"
        viewBox="0 0 552 415"
      >
        <motion.path
          stroke="#00000"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
          d="M363.5 227c0 39.145-8.716 74.558-22.784 100.168C326.639 352.797 307.272 368.5 286 368.5s-40.639-15.703-54.716-41.332C217.216 301.558 208.5 266.145 208.5 227c0-39.144 8.716-74.558 22.784-100.168C245.361 101.203 264.728 85.5 286 85.5s40.639 15.703 54.716 41.332C354.784 152.442 363.5 187.856 363.5 227z"
        ></motion.path>
      </svg>
      <BackgroundCircle3
        initial={{ offsetDistance: '0%' }}
        animate={{ offsetDistance: '100%' }}
        transition={transition}
      ></BackgroundCircle3>
    </div>
  );
};

export default Bubble3;
