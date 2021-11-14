import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 25"
      {...props}
    >
      <path
        d="M8 8l9 9"
        stroke="#fff"
        strokeOpacity={0.7}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M8 17l9-9"
        stroke="#fff"
        strokeOpacity={0.7}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={12.5}
        cy={12.5}
        r={11.5}
        stroke="#fff"
        strokeOpacity={0.7}
        strokeWidth={2}
      />
    </svg>
  );
}

export default SvgComponent;
