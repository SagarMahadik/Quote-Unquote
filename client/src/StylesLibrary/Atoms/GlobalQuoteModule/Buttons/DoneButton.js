import * as React from 'react';
import MotionIconsButton from 'StylesLibrary/Animations/ButtonAnimations/MotionIconsButton';

function SvgComponent(props) {
  return (
    <MotionIconsButton>
      <svg
        width={56}
        height={56}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g filter="url(#prefix__filter0_ddi)">
          <path
            d="M42 26c0 8.837-7.163 16-16 16s-16-7.163-16-16 7.163-16 16-16 16 7.163 16 16z"
            fill="#FDFCFC"
          />
          <path
            d="M41.5 26c0 8.56-6.94 15.5-15.5 15.5-8.56 0-15.5-6.94-15.5-15.5 0-8.56 6.94-15.5 15.5-15.5 8.56 0 15.5 6.94 15.5 15.5z"
            stroke="#E7EAEF"
          />
        </g>
        <g filter="url(#prefix__filter1_ddi)">
          <circle cx={26} cy={26} r={11} fill="url(#prefix__paint0_linear)" />
          <circle cx={26} cy={26} r={10.5} stroke="#E7EAEF" />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.633 26.035a.75.75 0 10-1.266.805l2.407 3.781a.75.75 0 001.306-.072.748.748 0 00.228-.172l6.187-6.875a.75.75 0 00-1.115-1.004l-5.857 6.508-1.89-2.971z"
          fill="url(#prefix__paint1_linear)"
        />
        <defs>
          <linearGradient
            id="prefix__paint0_linear"
            x1={30.447}
            y1={28.663}
            x2={21.665}
            y2={27.369}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E7EAEF" />
            <stop offset={1} stopColor="#F5F7F9" />
          </linearGradient>
          <linearGradient
            id="prefix__paint1_linear"
            x1={31.688}
            y1={26.535}
            x2={21.25}
            y2={26.535}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#40E3BE" />
            <stop offset={1} stopColor="#6CB5D1" />
          </linearGradient>
          <filter
            id="prefix__filter0_ddi"
            x={0}
            y={0}
            width={50}
            height={50}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx={2} dy={2} />
            <feGaussianBlur stdDeviation={3} />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx={-2} dy={-2} />
            <feGaussianBlur stdDeviation={4} />
            <feColorMatrix values="0 0 0 0 0.996078 0 0 0 0 0.996078 0 0 0 0 0.996078 0 0 0 0.75 0" />
            <feBlend in2="effect1_dropShadow" result="effect2_dropShadow" />
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx={2} dy={2} />
            <feGaussianBlur stdDeviation={2} />
            <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="shape" result="effect3_innerShadow" />
          </filter>
          <filter
            id="prefix__filter1_ddi"
            x={4}
            y={4}
            width={52}
            height={52}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feMorphology
              radius={3}
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow"
            />
            <feOffset dx={4} dy={4} />
            <feGaussianBlur stdDeviation={6} />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx={-2} dy={-2} />
            <feGaussianBlur stdDeviation={4} />
            <feColorMatrix values="0 0 0 0 0.996078 0 0 0 0 0.996078 0 0 0 0 0.996078 0 0 0 1 0" />
            <feBlend in2="effect1_dropShadow" result="effect2_dropShadow" />
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx={2} dy={2} />
            <feGaussianBlur stdDeviation={2} />
            <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="shape" result="effect3_innerShadow" />
          </filter>
        </defs>
      </svg>
    </MotionIconsButton>
  );
}

export default SvgComponent;
