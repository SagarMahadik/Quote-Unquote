import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const loaderVariants = {
    animateOne: {
      x: [40, -40],
      y: [0, 60],
      transition: {
        x: {
          yoyo: Infinity,
          duration: 1.5
        },
        y: {
          yoyo: Infinity,
          duration: 1.25,
          ease: 'easeOut'
        }
      }
    },
    animateTwo: {
      x: [-40, 40],
      y: [60, 0],
      transition: {
        x: {
          yoyo: Infinity,
          duration: 1.5
        },
        y: {
          yoyo: Infinity,
          duration: 1.25,
          ease: 'easeOut'
        }
      }
    }
  };
  return (
    <>
      <motion.div
        variants={loaderVariants}
        animate="animateOne"
        style={{
          display: 'flex',
          height: '20px',
          width: '20px',
          backgroundColor: '#cc5079',
          borderRadius: '50%'
        }}
      ></motion.div>
      <motion.div
        variants={loaderVariants}
        animate="animateTwo"
        style={{
          display: 'flex',
          height: '20px',
          width: '20px',
          backgroundColor: '#B5DCCD',
          borderRadius: '50%'
        }}
      ></motion.div>
    </>
  );
};

export default Loader;
