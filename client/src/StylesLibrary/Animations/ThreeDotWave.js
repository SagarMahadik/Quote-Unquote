import { motion } from 'framer-motion';
import styled from 'styled-components/macro';
import { CenterAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles.js';

export const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2
    }
  },
  end: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const loadingCircleVariants = {
  start: {
    y: '150%'
  },
  end: {
    y: '50%'
  }
};

export const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: 'easeInOut'
};

export const LoadingCircle = styled(motion.span)`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin: 5px;
  display: block;
  background: linear-gradient(278.38deg, #5a9393 30.83%, #6bd5e3 66.37%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const LoadingCircleContainer = styled(motion.div)`
  width: 100%;
  height: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: 'space-around';
`;

export const MainContainer = styled(CenterAlignedColumnContainer)`
  margin-top: -5px;
  width: 100%;
  height: 24px;
  width: 50%;
`;
