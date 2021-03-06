import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 157 228"
      {...props}
    >
      <rect
        x={1}
        y={1}
        width={155}
        height={226}
        rx={77.5}
        stroke="url(#prefix__paint0_linear_850_2424)"
        strokeWidth={2}
      />
      <path
        d="M136.514 164.992c-1.632 10.848-4.944 18.336-9.936 22.464-2.112 1.728-4.8 3.072-8.064 4.032-3.168 1.056-6.672 1.584-10.512 1.584-5.184 0-10.32-.816-15.408-2.448-4.992-1.632-11.184-4.08-18.576-7.344a571.101 571.101 0 01-6.048-2.592 560.286 560.286 0 00-7.2-2.88l-3.456-1.008c-1.824.96-3.84 1.68-6.048 2.16-2.112.576-4.128.864-6.048.864-2.016 0-3.648-.336-4.896-1.008-1.248-.576-1.872-1.488-1.872-2.736 0-2.592 2.64-3.888 7.92-3.888 3.552 0 7.2.672 10.944 2.016 3.264-.96 6.72-2.256 10.368-3.888l3.024-1.296c1.344-.48 2.544-.912 3.6-1.296-8.928-.864-16.752-3.456-23.472-7.776-6.624-4.416-11.76-10.368-15.408-17.856-3.552-7.488-5.328-16.224-5.328-26.208 0-10.56 2.16-19.92 6.48-28.08 4.32-8.16 10.32-14.496 18-19.008 7.776-4.512 16.608-6.768 26.496-6.768 10.176 0 19.056 2.064 26.64 6.192 7.68 4.128 13.632 10.128 17.856 18 4.224 7.776 6.336 17.088 6.336 27.936 0 10.176-2.016 19.296-6.048 27.36-4.032 7.968-9.696 14.256-16.992 18.864-7.296 4.608-15.6 7.104-24.912 7.488-2.304.288-4.368.72-6.192 1.296-1.824.576-3.984 1.392-6.48 2.448-3.072 1.344-6.048 2.448-8.928 3.312l11.664 1.008c12.192 1.056 20.976 1.584 26.352 1.584 3.552 0 7.152-.24 10.8-.72 5.952-.672 10.656-1.968 14.112-3.888 3.456-1.824 6.336-4.704 8.64-8.64l2.592.72zm-82.512-49.68c0 9.984 1.2 18.768 3.6 26.352 2.496 7.584 5.808 13.44 9.936 17.568 4.224 4.128 8.88 6.192 13.968 6.192 5.28 0 9.936-2.112 13.968-6.336 4.032-4.32 7.104-10.32 9.216-18 2.208-7.68 3.312-16.464 3.312-26.352 0-9.984-1.248-18.768-3.744-26.352-2.4-7.584-5.712-13.44-9.936-17.568-4.128-4.128-8.736-6.192-13.824-6.192-5.28 0-9.936 2.16-13.968 6.48-4.032 4.224-7.152 10.176-9.36 17.856-2.112 7.68-3.168 16.464-3.168 26.352z"
        fill="url(#prefix__paint1_linear_850_2424)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_850_2424"
          x1={-16}
          y1={28.5}
          x2={205.5}
          y2={145.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E7EAEF" />
          <stop offset={1} stopColor="#07080A" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear_850_2424"
          x1={41.5}
          y1={89.5}
          x2={156.5}
          y2={179}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E7EAEF" />
          <stop offset={1} stopColor="#0D1117" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgComponent;
