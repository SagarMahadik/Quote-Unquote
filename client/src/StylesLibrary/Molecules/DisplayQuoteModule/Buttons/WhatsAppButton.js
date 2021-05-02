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
        fill="url(#paint1_linear)"
        d="M27 20c-3.308 0-6 2.692-6 6 0 1.129.314 2.224.909 3.176-.237.83-.665 2.4-.67 2.417a.23.23 0 00.29.281l2.379-.731A5.986 5.986 0 0027 32c3.308 0 6-2.692 6-6s-2.692-6-6-6zm0 11.538a5.524 5.524 0 01-2.938-.842.231.231 0 00-.19-.025l-2.077.64c.152-.558.427-1.554.586-2.108a.231.231 0 00-.029-.19 5.517 5.517 0 01-.89-3.013A5.545 5.545 0 0127 20.462 5.545 5.545 0 0132.538 26 5.545 5.545 0 0127 31.538z"
      ></path>
      <path
        fill="url(#paint2_linear)"
        d="M30.92 27.414c-.426-.237-.79-.474-1.054-.647a5.591 5.591 0 00-.455-.281c-.3-.15-.526-.044-.613.043a.233.233 0 00-.028.035c-.311.467-.717.913-.836.937-.137-.022-.78-.387-1.419-.919-.652-.543-1.062-1.064-1.123-1.418.419-.43.57-.702.57-1.01 0-.318-.742-1.645-.876-1.779-.134-.134-.437-.155-.9-.063a.233.233 0 00-.118.063c-.056.056-1.369 1.394-.745 3.016.684 1.779 2.441 3.847 4.681 4.183.255.038.493.057.717.057 1.317 0 2.095-.663 2.314-1.978a.23.23 0 00-.115-.24zm-2.847 1.704c-2.369-.355-3.86-2.702-4.32-3.893-.454-1.182.385-2.235.595-2.473.171-.03.352-.042.427-.03.157.219.701 1.247.725 1.432 0 .121-.04.29-.51.76a.23.23 0 00-.067.163c0 1.208 2.549 2.885 3 2.885.393 0 .905-.66 1.196-1.09.017 0 .045.006.086.027.083.041.227.135.409.254.24.158.56.366.937.582-.172.824-.65 1.658-2.478 1.383z"
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
          x1="23.5"
          x2="39"
          y1="28.5"
          y2="33"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#25EE69"></stop>
          <stop offset="1" stopColor="#131111" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#7FD29B"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="26.5"
          x2="21"
          y1="25.5"
          y2="25"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.174" stopColor="#25EE69"></stop>
          <stop offset="1" stopColor="#131111" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#25EE69"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Icon;
