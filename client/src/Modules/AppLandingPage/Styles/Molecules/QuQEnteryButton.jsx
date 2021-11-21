import * as React from 'react';
import { LandingPageEntryButtonContainer } from 'Modules/AppLandingPage/Styles/AppLandingPageStyles.js';

function SvgComponent(props) {
  return (
    <LandingPageEntryButtonContainer
      initial={{ opacity: 0.7, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        repeat: Infinity,
        duration: 3,
        repeatType: 'reverse'
      }}
      exit={{ opacity: 0, scale: 0.9 }}
      onClick={props.onClick}
    >
      <svg
        width="100%"
        height="100%"
        fill="none"
        viewBox="0 0 89 89"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <circle
          cx={44.5}
          cy={44.5}
          r={43.5}
          stroke="#fff"
          strokeOpacity={0.76}
          strokeWidth={2}
        />
        <path
          d="M66.794 22.116l-.25-.66-.66-.248A18.702 18.702 0 0059.255 20c-5.004 0-9.709 1.949-13.248 5.488l-5.017 5.017-11.213.544-9.386 9.385 8.092 2.578-2.992 2.992 1.748 1.748-3.873 5.936 10.948 10.948 5.936-3.872 1.748 1.747 2.993-2.992 2.577 8.092 9.386-9.385.543-11.214 5.018-5.017a18.78 18.78 0 004.28-19.879zm-40.572 16.9l4.908-4.908 6.575-.32-6.738 6.74-4.745-1.512zm8.507 21.622l-7.366-7.366 2.13-3.265 8.501 8.501-3.265 2.13zm19.165-3.767l-4.909 4.908-1.511-4.744 6.739-6.739-.32 6.575zm-11.897 1.227L29.904 46.004l18.31-18.31a15.513 15.513 0 0111.04-4.573c1.66 0 3.29.259 4.856.77a15.655 15.655 0 01-3.803 15.897l-18.31 18.31z"
          fill="#fff"
          fillOpacity={0.76}
        />
        <path
          d="M55.967 27.352a4.65 4.65 0 00-3.31 1.372 4.687 4.687 0 000 6.62 4.65 4.65 0 003.31 1.372 4.65 4.65 0 003.31-1.372 4.687 4.687 0 000-6.62 4.65 4.65 0 00-3.31-1.372zm1.104 5.786a1.55 1.55 0 01-1.103.457 1.562 1.562 0 010-3.121 1.562 1.562 0 011.103 2.664z"
          fill="#fff"
          fillOpacity={0.76}
        />
        <path
          d="M18.002 59.076l3.537-3.537 2.206 2.207-3.537 3.537-2.206-2.207zM28.924 70l-2.207-2.207 3.537-3.537 2.207 2.207L28.924 70zm-8.32-4.966l5.215-5.215 2.207 2.207-5.215 5.215-2.207-2.207z"
          fill="url(#prefix__paint0_linear_850_2561)"
        />
        <defs>
          <linearGradient
            id="prefix__paint0_linear_850_2561"
            x1={25.5}
            y1={57.916}
            x2={20.083}
            y2={64.999}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F9460D" />
            <stop offset={1} stopColor="#FFD600" />
          </linearGradient>
        </defs>
      </svg>
    </LandingPageEntryButtonContainer>
  );
}

export default SvgComponent;
