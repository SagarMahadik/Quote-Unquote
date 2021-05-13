import React from 'react';
import { motion } from 'framer-motion';
import {
  useDisplayQuoteState,
  useDisplayQuoteDispatch
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';

function Icon() {
  const {
    currentQuote,
    displayQuote,
    editQuoteText: { editQuoteText, editedText },
    deleteQuote: {
      deleteQuote,
      dragStart,
      deleteRequestSuccess,
      trashAnimatation,
      tickAnimation
    }
  } = useDisplayQuoteState();

  const pathVariants = {
    deleteQuote: {
      rotate: '-60deg',
      translateX: '-30px'
    },
    deleteQuoteComplete: { translateX: '0' }
  };

  const tickVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2 }
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="197"
      height="219"
      fill="none"
      viewBox="0 0 197 219"
    >
      <motion.path
        animate={trashAnimatation ? 'deleteQuote' : 'deleteQuoteComplete'}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        variants={pathVariants}
        fill="#E89191"
        d="M128.351 87.923c0-1.698-1.87-3.075-4.176-3.075H72.49c-2.306 0-4.175 1.377-4.175 3.075 0 1.699 1.869 3.076 4.175 3.076h51.685c2.306 0 4.176-1.377 4.176-3.076z"
      ></motion.path>
      <motion.path
        animate={trashAnimatation ? 'deleteQuote' : 'deleteQuoteComplete'}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        variants={pathVariants}
        fill="#E89191"
        d="M111.348 87.988c-.821 0-1.487-.509-1.487-1.136V78.56c0-1.384-1.474-2.51-3.287-2.51H90.765c-1.812 0-3.287 1.126-3.287 2.51v8.292c0 .627-.665 1.136-1.487 1.136-.821 0-1.487-.509-1.487-1.136V78.56c0-2.637 2.809-4.783 6.261-4.783h15.809c3.453 0 6.262 2.146 6.262 4.783v8.292c0 .627-.666 1.136-1.488 1.136z"
      ></motion.path>
      <g filter="url(#filter0_d)">
        <path
          fill="#E9ECF0"
          d="M118.183 147.716l4.942-56.854H74.669l4.943 56.854c.335 3.86 3.66 6.827 7.651 6.827h23.268c3.991 0 7.316-2.967 7.652-6.827z"
        ></path>
        <path
          stroke="#E8ECED"
          d="M122.58 91.362l-4.895 56.311c-.312 3.589-3.41 6.37-7.154 6.37H87.263c-3.743 0-6.841-2.781-7.153-6.37l-4.895-56.311h47.365z"
        ></path>
      </g>

      <defs>
        <filter
          id="filter0_d"
          width="56.456"
          height="71.681"
          x="70.669"
          y="90.862"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Icon;
