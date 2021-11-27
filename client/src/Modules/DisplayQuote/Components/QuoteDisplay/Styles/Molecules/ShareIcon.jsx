import React from 'react';

const ShareIcon = props => {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 25 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <circle cx="20.25" cy="4.5" r="4.5" fill="white" fill-opacity="0.75" />
        <path
          d="M7.5 12L16.5 6"
          stroke="white"
          stroke-opacity="0.75"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle cx="4.5" cy="15" r="4.5" fill="white" fill-opacity="0.75" />
        <circle cx="20.25" cy="25.5" r="4.5" fill="white" fill-opacity="0.75" />
        <path
          d="M7.5 18L16.5 24"
          stroke="white"
          stroke-opacity="0.75"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default ShareIcon;
