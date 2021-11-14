import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      width={25}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={20.25} cy={4.5} r={4.5} fill="#fff" fillOpacity={0.75} />
      <path
        d="M7.5 12l9-6"
        stroke="#fff"
        strokeOpacity={0.75}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={4.5} cy={15} r={4.5} fill="#fff" fillOpacity={0.75} />
      <circle cx={20.25} cy={25.5} r={4.5} fill="#fff" fillOpacity={0.75} />
      <path
        d="M7.5 18l9 6"
        stroke="#fff"
        strokeOpacity={0.75}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgComponent;
