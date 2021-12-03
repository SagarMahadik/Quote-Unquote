import React from 'react';

const SelectedAuthorIcon = props => {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 32 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clip-path="url(#clip0_947_2231)">
          <path
            d="M15.5172 0C6.93239 0 0 6.7219 0 15C0 23.2876 6.94517 30 15.5172 30C24.1279 30 31.0345 23.2559 31.0345 15C31.0345 6.70242 24.0757 0 15.5172 0ZM23.5024 23.8346C21.2905 25.7084 18.4855 26.732 15.5172 26.732C12.5496 26.732 9.74496 25.7087 7.53327 23.8357C7.23408 23.5824 7.09885 23.1929 7.17863 22.8163C7.94266 19.2088 10.3197 16.3637 13.3456 15.4276C11.7666 14.5241 10.6829 12.6678 10.6829 10.5229C10.6829 7.49072 12.8473 5.03268 15.5172 5.03268C18.1872 5.03268 20.3516 7.49072 20.3516 10.5229C20.3516 12.6675 19.2682 14.5235 17.6897 15.4271C20.7155 16.363 23.0926 19.208 23.8569 22.8152C23.9366 23.1914 23.8012 23.5816 23.5024 23.8346Z"
            fill="white"
            fill-opacity="0.63"
          />
        </g>
        <defs>
          <clipPath id="clip0_947_2231">
            <rect width="31.0345" height="30" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default SelectedAuthorIcon;