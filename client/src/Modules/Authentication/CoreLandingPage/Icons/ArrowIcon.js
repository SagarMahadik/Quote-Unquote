import React from 'react';
import { CenterAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';

function ArrowIcon(props) {
  return (
    <CenterAlignedColumnContainer
      initial={{ y: -10 }}
      animate={{
        y: 0,
        transition: { duration: 3, repeat: Infinity, repeatType: 'reverse' }
      }}
      exit={{ opacity: 0 }}
      {...props}
    >
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <g filter="url(#filter0_ddii)">
            <g clip-path="url(#clip1)">
              <rect
                x="10"
                y="10"
                width="35.756"
                height="35"
                rx="17.5"
                fill="#E7EAEF"
              />
            </g>
            <rect
              x="9"
              y="9"
              width="37.756"
              height="37"
              rx="18.5"
              stroke="#E8ECED"
              stroke-width="2"
              stroke-linecap="round"
            />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.0875 26.4669C39.6581 27.0675 39.6337 28.0169 39.0331 28.5875L29.0331 38.0875C28.6775 38.4253 28.1996 38.5546 27.7505 38.4792C27.669 38.4929 27.5854 38.5 27.5 38.5C27.4148 38.5 27.3312 38.4929 27.2498 38.4792C26.7607 38.5613 26.2414 38.3993 25.8851 38.0034L16.8851 28.0034C16.3309 27.3877 16.3808 26.4392 16.9966 25.885C17.6123 25.3308 18.5608 25.3808 19.1149 25.9965L26 33.6466V17C26 16.1716 26.6716 15.5 27.5 15.5C28.3285 15.5 29 16.1716 29 17V33.981L36.9669 26.4125C37.5675 25.8419 38.5169 25.8663 39.0875 26.4669Z"
            fill="url(#paint0_linear)"
          />
        </g>
        <defs>
          <filter
            id="filter0_ddii"
            x="-1"
            y="-1"
            width="58.756"
            height="58"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.72549 0 0 0 0 0.741176 0 0 0 0 0.796078 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="-2" dy="-2" />
            <feGaussianBlur stdDeviation="3.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow"
              result="effect2_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="4" dy="5" />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.756863 0 0 0 0 0.772549 0 0 0 0 0.823529 0 0 0 1 0"
            />
            <feBlend mode="normal" in2="shape" result="effect3_innerShadow" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-4" dy="-4" />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect3_innerShadow"
              result="effect4_innerShadow"
            />
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="19"
            y1="27"
            x2="32.0404"
            y2="20.7876"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#7DB8EE" stop-opacity="0.86" />
            <stop offset="0.59375" stop-color="#BC78F2" stop-opacity="0.37" />
            <stop offset="1" stop-color="#81DDDD" />
            <stop offset="1" stop-color="#6EF5F5" stop-opacity="0.79" />
          </linearGradient>
          <clipPath id="clip0">
            <rect width="56" height="56" fill="white" />
          </clipPath>
          <clipPath id="clip1">
            <rect
              x="10"
              y="10"
              width="35.756"
              height="35"
              rx="17.5"
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
    </CenterAlignedColumnContainer>
  );
}

export default ArrowIcon;
