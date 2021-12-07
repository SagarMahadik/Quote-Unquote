import React from 'react';

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 74 74"
      {...props}
    >
      <circle
        cx="37"
        cy="37"
        r="37"
        fill="url(#paint0_radial_1075_3479)"
      ></circle>
      <g filter="url(#filter0_f_1075_3479)">
        <path
          fill="#fff"
          fillOpacity="0.88"
          d="M42 16l6.5-4s2.977 2.126 4.5 3.875c1.7 1.95 2.148 3.935 3.5 5.625C57.852 23.19 54 25 54 25s-3.657-3.743-6-5.5c-2.343-1.757-6-3.5-6-3.5z"
        ></path>
        <path
          stroke="#000"
          strokeWidth="0.1"
          d="M42 16l6.5-4s2.977 2.126 4.5 3.875c1.7 1.95 2.148 3.935 3.5 5.625C57.852 23.19 54 25 54 25s-3.657-3.743-6-5.5c-2.343-1.757-6-3.5-6-3.5z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_f_1075_3479"
          width="16.942"
          height="15.12"
          x="40.895"
          y="10.94"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_1075_3479"
            stdDeviation="0.5"
          ></feGaussianBlur>
        </filter>
        <radialGradient
          id="paint0_radial_1075_3479"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(138.225 20.384 22.386) scale(50.2842)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0"></stop>
          <stop offset="1"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
}

export default Icon;
