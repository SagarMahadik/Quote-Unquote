import { keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
};

export const listItem = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export const pageVariant = {
  in: { opacity: 1 },
  out: { opacity: 0 }
};

export const pageTransition = {
  duration: 1.5
};

export const PageAnimationContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  z-index: 0;
  background: none;
`;

export const StaggerAnimationParentContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  z-index: 0;
  background: none;
`;

export const StaggerAnimationChildContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  z-index: 0;
  background: none;
`;

export const AnimationContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const DisplayQuoteMainContainerGradient = [
  'radial-gradient(152.29% 124.05% at -38.86% 122.53%, rgba(125, 184, 238, 0.86) 7.16%, rgba(217, 158, 201, 0.964234) 24.86%, rgba(246, 240, 196, 0.81) 85.5%)',
  'radial-gradient(189.29% 95% at 169.57% 92.53%, #7674CC 7.16%, rgba(179, 240, 240, 0.84) 85.5%)',
  'radial-gradient(217% 126.71% at -38.86% 122.53%, #D5D795 7.16%, rgba(179, 240, 240, 0.84) 85.5%)',
  'radial-gradient(189.29% 95% at 169.57% 92.53%, rgba(255, 90, 115, 0.69) 7.16%, rgba(179, 240, 240, 0.84) 85.5%)',
  'radial-gradient(189.29% 95% at 169.57% 92.53%, #D5D795 7.16%, rgba(179, 240, 240, 0.84) 85.5%)',
  'radial-gradient(230.86% 95.82% at -38.86% 122.53%, rgba(125, 184, 238, 0.86) 7.16%, #9BD986 85.5%)',
  'radial-gradient(230.86% 95.82% at -38.86% 122.53%, rgba(188, 120, 242, 0.37) 7.16%, rgba(179, 240, 240, 0.84) 85.5%)',
  'radial-gradient(230.86% 95.82% at -38.86% 122.53%, #7FD29B 7.16%, rgba(179, 240, 240, 0.84) 85.5%)'
];