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
        <g clipPath="url(#prefix__clip0)">
          <path
            d="M30.966 22.459l-.243-.728a.677.677 0 00-.643-.464h-2.041v-.665a.603.603 0 00-.603-.602h-1.869a.603.603 0 00-.602.602v.665h-2.041a.677.677 0 00-.643.464l-.243.728a.546.546 0 00.517.717h.253l.56 6.91a1 1 0 00.99.914h4.401a1 1 0 00.99-.914l.56-6.91h.14a.546.546 0 00.517-.717zm-5.356-1.814h1.784v.622H25.61v-.622zm3.497 9.389a.352.352 0 01-.348.322h-4.401a.352.352 0 01-.348-.322l-.555-6.858h6.207l-.555 6.858zm-6.414-7.502l.199-.597a.033.033 0 01.032-.023h7.156c.014 0 .027.009.032.023l.199.597h-7.618z"
            fill="url(#prefix__paint1_linear)"
          />
          <path
            d="M28.08 30.01l.017.001c.17 0 .312-.133.321-.305l.303-5.81a.322.322 0 00-.644-.033l-.303 5.81c-.009.177.128.329.305.338z"
            fill="url(#prefix__paint2_linear)"
          />
          <path
            d="M24.6 29.706a.322.322 0 00.644-.035l-.317-5.809a.322.322 0 10-.644.035l.317 5.81z"
            fill="url(#prefix__paint3_linear)"
          />
          <path
            d="M26.505 30.011a.322.322 0 00.323-.322v-5.81a.322.322 0 10-.645 0v5.81c0 .178.144.322.322.322z"
            fill="url(#prefix__paint4_linear)"
          />
        </g>
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
            x1={30.994}
            y1={26.111}
            x2={23.507}
            y2={26.111}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DB2222" />
            <stop offset={1} stopColor="#DF2222" stopOpacity={0.35} />
          </linearGradient>
          <linearGradient
            id="prefix__paint2_linear"
            x1={28.721}
            y1={27.143}
            x2={27.932}
            y2={27.143}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DB2222" />
            <stop offset={1} stopColor="#DF2222" stopOpacity={0.35} />
          </linearGradient>
          <linearGradient
            id="prefix__paint3_linear"
            x1={25.244}
            y1={27.143}
            x2={24.443}
            y2={27.143}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DB2222" />
            <stop offset={1} stopColor="#DF2222" stopOpacity={0.35} />
          </linearGradient>
          <linearGradient
            id="prefix__paint4_linear"
            x1={26.828}
            y1={27.143}
            x2={26.291}
            y2={27.143}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DB2222" />
            <stop offset={1} stopColor="#DF2222" stopOpacity={0.35} />
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
          <clipPath id="prefix__clip0">
            <path fill="#fff" transform="translate(21 20)" d="M0 0h11v11H0z" />
          </clipPath>
        </defs>
      </svg>
    </MotionIconsButton>
  );
}

export default SvgComponent;
