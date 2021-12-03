import React from 'react';

const MoodPageSelectedItemCloseIcon = props => {
  return (
    <>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M3 4L11 12"
          stroke="white"
          stroke-opacity="0.7"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M3 12L11 4"
          stroke="white"
          stroke-opacity="0.7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default MoodPageSelectedItemCloseIcon;
