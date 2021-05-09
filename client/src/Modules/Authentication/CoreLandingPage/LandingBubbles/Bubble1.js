import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundCircle } from 'StylesLibrary/Atoms/AuthenticationModule/LandingPage.js';

const Bubble1 = () => {
  const transition = { duration: 50, repeat: Infinity, ease: 'easeInOut' };
  return (
    <div
      style={{
        position: 'relative'
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="482"
        height="273"
        fill="none"
        viewBox="0 0 482 273"
      >
        <motion.path
          stroke="rgba(255,129,120,0)"
          strokeWidth="2"
          d="M375 142c0 22.975-15.783 43.953-41.685 59.243C307.435 216.519 271.617 226 232 226s-75.435-9.481-101.315-24.757C104.783 185.953 89 164.975 89 142s15.783-43.953 41.685-59.243C156.565 67.481 192.383 58 232 58s75.435 9.48 101.315 24.757C359.217 98.047 375 119.025 375 142z"
          fill="transparent"
          strokeWidth="12"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        ></motion.path>
      </svg>
      <BackgroundCircle
        initial={{ offsetDistance: '0%' }}
        animate={{ offsetDistance: '100%' }}
        transition={transition}
      ></BackgroundCircle>
    </div>
  );
};

export default Bubble1;
