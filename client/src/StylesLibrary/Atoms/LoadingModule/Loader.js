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
    },
    animateThree: {
      x: [0, -40],
      y: [60, -60],
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
    animateFour: {
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
          backgroundColor: 'rgba(255,255,255,0.7)',
          borderRadius: '50%'
        }}
      ></motion.div>
      <motion.div
        variants={loaderVariants}
        animate="animateFour"
        style={{
          display: 'flex',
          height: '20px',
          width: '20px',
          backgroundColor: 'rgba(255,255,255,0.5)',
          borderRadius: '50%'
        }}
      ></motion.div>
    </>
  );
};

export default Loader;
