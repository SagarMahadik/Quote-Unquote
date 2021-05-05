import React from 'react';

function Icon(props) {
  return (
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
        strokeWidth="0.65"
        d="M20.87 24.98l4.717-4.639a.5.5 0 01.698-.004l4.82 4.639a.5.5 0 01-.346.86h-.838a.5.5 0 00-.5.5V30.5a.5.5 0 01-.5.5h-1.5a.5.5 0 01-.5-.5v-1.687a.5.5 0 00-.5-.5h-1.237a.5.5 0 00-.5.5V30.5a.5.5 0 01-.5.5h-1.17a.5.5 0 01-.5-.5v-4.164a.5.5 0 00-.5-.5h-.793a.5.5 0 01-.35-.857z"
      ></path>
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
          x1="32"
          x2="22"
          y1="26.111"
          y2="26.111"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#494343"></stop>
          <stop offset="1" stopColor="#131111" stopOpacity="0.35"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Icon;
