import React from 'react';
import MotionIconsButton from 'StylesLibrary/Animations/ButtonAnimations/MotionIconsButton';

function Icon(props) {
  return (
    <MotionIconsButton>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="56"
        fill="none"
        viewBox="0 0 56 56"
        {...props}
      >
        <g filter="url(#filter0_ddi)">
          <path
            fill="#FDFCFC"
            d="M42 26c0 8.837-7.163 16-16 16s-16-7.163-16-16 7.163-16 16-16 16 7.163 16 16z"
          ></path>
          <path
            stroke="#E7EAEF"
            d="M41.5 26c0 8.56-6.94 15.5-15.5 15.5-8.56 0-15.5-6.94-15.5-15.5 0-8.56 6.94-15.5 15.5-15.5 8.56 0 15.5 6.94 15.5 15.5z"
          ></path>
        </g>
        <g filter="url(#filter1_ddi)">
          <circle cx="26" cy="26" r="11" fill="url(#paint0_linear)"></circle>
          <circle cx="26" cy="26" r="10.5" stroke="#E7EAEF"></circle>
        </g>
        <path
          stroke="url(#paint1_linear)"
          strokeWidth="0.3"
          d="M18 23.05L34 23.05"
        ></path>
        <path
          stroke="url(#paint2_linear)"
          strokeWidth="0.3"
          d="M18 26.717L34 26.717"
        ></path>
        <path
          stroke="url(#paint3_linear)"
          strokeWidth="0.3"
          d="M18 30.383L34 30.383"
        ></path>
        <rect
          width="2.162"
          height="2.633"
          x="27.996"
          y="21.883"
          fill="url(#paint4_linear)"
          stroke="url(#paint5_linear)"
          strokeWidth="0.3"
          rx="1.081"
        ></rect>
        <rect
          width="2.162"
          height="2.633"
          x="20.611"
          y="25.55"
          fill="url(#paint6_linear)"
          stroke="url(#paint7_linear)"
          strokeWidth="0.3"
          rx="1.081"
        ></rect>
        <rect
          width="2.162"
          height="2.633"
          x="25.535"
          y="29.217"
          fill="url(#paint8_linear)"
          stroke="url(#paint9_linear)"
          strokeWidth="0.3"
          rx="1.081"
        ></rect>
        <defs>
          <filter
            id="filter0_ddi"
            width="50"
            height="50"
            x="0"
            y="0"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx="2" dy="2"></feOffset>
            <feGaussianBlur stdDeviation="3"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx="-2" dy="-2"></feOffset>
            <feGaussianBlur stdDeviation="4"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.996078 0 0 0 0 0.996078 0 0 0 0 0.996078 0 0 0 0.75 0"></feColorMatrix>
            <feBlend
              in2="effect1_dropShadow"
              result="effect2_dropShadow"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx="2" dy="2"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feComposite
              in2="hardAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
            <feBlend in2="shape" result="effect3_innerShadow"></feBlend>
          </filter>
          <filter
            id="filter1_ddi"
            width="52"
            height="52"
            x="4"
            y="4"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feMorphology
              in="SourceAlpha"
              operator="dilate"
              radius="3"
              result="effect1_dropShadow"
            ></feMorphology>
            <feOffset dx="4" dy="4"></feOffset>
            <feGaussianBlur stdDeviation="6"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx="-2" dy="-2"></feOffset>
            <feGaussianBlur stdDeviation="4"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.996078 0 0 0 0 0.996078 0 0 0 0 0.996078 0 0 0 1 0"></feColorMatrix>
            <feBlend
              in2="effect1_dropShadow"
              result="effect2_dropShadow"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx="2" dy="2"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feComposite
              in2="hardAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
            <feBlend in2="shape" result="effect3_innerShadow"></feBlend>
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="30.447"
            x2="21.665"
            y1="28.663"
            y2="27.369"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E7EAEF"></stop>
            <stop offset="1" stopColor="#F5F7F9"></stop>
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="18.308"
            x2="34"
            y1="23.2"
            y2="23.2"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#494343"></stop>
            <stop offset="1" stopColor="#131111" stopOpacity="0.35"></stop>
            <stop offset="1" stopColor="#131111" stopOpacity="0.35"></stop>
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="18.308"
            x2="34"
            y1="26.867"
            y2="26.867"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#494343"></stop>
            <stop offset="1" stopColor="#131111" stopOpacity="0.35"></stop>
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="18.308"
            x2="34"
            y1="30.533"
            y2="30.533"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#494343"></stop>
            <stop offset="1" stopColor="#131111" stopOpacity="0.35"></stop>
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="30.308"
            x2="28.256"
            y1="23.363"
            y2="23.363"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#494343"></stop>
            <stop offset="1" stopColor="#131111" stopOpacity="0.35"></stop>
          </linearGradient>
          <linearGradient
            id="paint5_linear"
            x1="30.308"
            x2="28.256"
            y1="23.363"
            y2="23.363"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#494343"></stop>
            <stop offset="1" stopColor="#131111" stopOpacity="0.35"></stop>
          </linearGradient>
          <linearGradient
            id="paint6_linear"
            x1="22.923"
            x2="20.872"
            y1="27.03"
            y2="27.03"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#494343"></stop>
            <stop offset="1" stopColor="#131111" stopOpacity="0.35"></stop>
          </linearGradient>
          <linearGradient
            id="paint7_linear"
            x1="22.923"
            x2="20.872"
            y1="27.03"
            y2="27.03"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#494343"></stop>
            <stop offset="1" stopColor="#131111" stopOpacity="0.35"></stop>
          </linearGradient>
          <linearGradient
            id="paint8_linear"
            x1="27.846"
            x2="25.795"
            y1="30.696"
            y2="30.696"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#494343"></stop>
            <stop offset="1" stopColor="#131111" stopOpacity="0.35"></stop>
          </linearGradient>
          <linearGradient
            id="paint9_linear"
            x1="27.846"
            x2="25.795"
            y1="30.696"
            y2="30.696"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#494343"></stop>
            <stop offset="1" stopColor="#131111" stopOpacity="0.35"></stop>
          </linearGradient>
        </defs>
      </svg>
    </MotionIconsButton>
  );
}

export default Icon;
