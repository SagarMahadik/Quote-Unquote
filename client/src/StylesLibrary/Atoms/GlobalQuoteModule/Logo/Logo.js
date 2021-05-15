import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      width={196}
      height={150}
      viewBox="0 0 196 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0)">
        <g filter="url(#prefix__filter0_ddii)">
          <g clipPath="url(#prefix__clip1)">
            <rect
              x={67}
              y={13}
              width={62}
              height={89}
              rx={5}
              fill="url(#prefix__paint0_linear)"
            />
            <rect
              x={67}
              y={13}
              width={62}
              height={89}
              rx={5}
              fill="#E7EAEF"
              fillOpacity={0.5}
            />
          </g>
          <rect
            x={66}
            y={12}
            width={64}
            height={91}
            rx={6}
            stroke="#E8ECED"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </g>
        <path
          d="M105.698 73.116c1.698 0 2.929.607 3.692 1.82.346.52.624 1.162.832 1.924.208.763.312 1.56.312 2.392 0 1.803-.468 3.432-1.404 4.888-.902 1.456-2.254 2.6-4.056 3.432l-.468-.936a6.716 6.716 0 002.6-1.924c.762-.866 1.213-1.75 1.352-2.652a4.93 4.93 0 00.156-1.196c0-.346-.052-.676-.156-.988-.763.832-1.768 1.248-3.016 1.248-1.214 0-2.202-.346-2.964-1.04-.763-.728-1.144-1.716-1.144-2.964 0-1.178.398-2.132 1.196-2.86.797-.762 1.82-1.144 3.068-1.144zm10.712 0c1.698 0 2.929.607 3.692 1.82.346.52.624 1.162.832 1.924.208.763.312 1.56.312 2.392 0 1.803-.468 3.432-1.404 4.888-.902 1.456-2.254 2.6-4.056 3.432l-.468-.936a6.716 6.716 0 002.6-1.924c.762-.866 1.213-1.75 1.352-2.652a4.93 4.93 0 00.156-1.196c0-.346-.052-.676-.156-.988-.763.832-1.768 1.248-3.016 1.248-1.214 0-2.202-.346-2.964-1.04-.763-.728-1.144-1.716-1.144-2.964 0-1.178.398-2.132 1.196-2.86.797-.762 1.82-1.144 3.068-1.144zM90.644 43.652c-1.698 0-2.929-.607-3.692-1.82-.346-.52-.623-1.161-.831-1.924a9.052 9.052 0 01-.313-2.392c0-1.803.451-3.432 1.352-4.888.937-1.456 2.306-2.6 4.109-3.432l.468.936c-1.006.416-1.89 1.057-2.652 1.924-.728.867-1.162 1.75-1.3 2.652a4.93 4.93 0 00-.156 1.196c0 .347.051.676.155.988.763-.832 1.768-1.248 3.016-1.248 1.214 0 2.202.364 2.965 1.092.762.693 1.144 1.664 1.144 2.912 0 1.179-.4 2.15-1.197 2.912-.797.728-1.82 1.092-3.068 1.092zm-10.712 0c-1.698 0-2.929-.607-3.692-1.82-.346-.52-.623-1.161-.831-1.924a9.052 9.052 0 01-.313-2.392c0-1.803.451-3.432 1.352-4.888.937-1.456 2.306-2.6 4.109-3.432l.468.936c-1.006.416-1.89 1.057-2.653 1.924-.728.867-1.16 1.75-1.3 2.652a4.93 4.93 0 00-.156 1.196c0 .347.053.676.157.988.762-.832 1.768-1.248 3.016-1.248 1.213 0 2.2.364 2.963 1.092.763.693 1.144 1.664 1.144 2.912 0 1.179-.398 2.15-1.195 2.912-.798.728-1.82 1.092-3.069 1.092z"
          fill="#828282"
        />
        <g clipPath="url(#prefix__clip2)">
          <g clipPath="url(#prefix__clip3)" filter="url(#prefix__filter1_d)">
            <path
              d="M122.173 92.293c.693 1.009 1.197 2.835 1.197 4.347 0 1.512-.504 2.709-.063 4.001.441 1.291 1.827 2.677 4.694 4.945 2.866 2.268 7.213 5.417 9.386 6.898 2.173 1.48 2.173 1.291 2.173.756 0-.536 0-1.418.221-2.048.22-.63.661-1.008.85-.535.189.472.126 1.795.473 2.898.346 1.102 1.102 1.984 2.299 3.024 1.197 1.039 2.835 2.236 4.536 3.653a58.236 58.236 0 014.977 4.662c1.512 1.607 2.771 3.181 4.504 4.914 1.732 1.732 3.937 3.622 5.449 4.945 1.512 1.323 2.331 2.079 2.835 2.457.504.377.693.377.724-.095.032-.472-.094-1.417.095-1.291.189.126.693 1.323 1.386 2.016.693.692 1.575.881 2.047.944.472.063.535 0 .346-.377-.189-.378-.63-1.071-.409-1.04.221.032 1.102.788 1.827 1.103.724.314 1.291.188 2.268-.127.976-.315 2.362-.819 3.37-1.449 1.008-.629 1.638-1.385 2.173-2.393.536-1.008.977-2.268.882-3.811-.094-1.544-.724-3.371-1.89-5.607-1.165-2.236-2.866-4.882-4.504-6.993-1.638-2.11-3.213-3.685-4.535-4.567-1.323-.882-2.394-1.071-3.339-1.134-.945-.063-1.764 0-2.142 0-.378 0-.315-.063-.063-.315s.693-.693 1.386-.787c.693-.095 1.638.157-.189-1.512-1.827-1.67-6.426-5.26-10.835-8.568-4.41-3.307-8.631-6.33-12.316-8.693-3.685-2.362-6.835-4.063-8.759-4.827-1.923-.763-2.738-.56-3.967-.118-1.228.44-2.929 1.133-3.811 1.48-.882.346-.945.346-1.858.032-.913-.315-2.677-.945-4.126-1.323-1.449-.378-2.583-.504-3.654-.284-1.071.22-2.079.788-1.418 1.418.662.63 2.993 1.323 4.599 1.764 1.607.44 2.489.63 3.181 1.637z"
              fill="url(#prefix__paint1_linear)"
            />
            <path
              d="M114.866 88.892c1.26.882 4.662 2.016 7.875 3.496 3.212 1.48 6.236 3.307 9.732 5.607 3.497 2.299 7.465 5.071 11.277 7.937a225.542 225.542 0 0110.929 8.788 257.046 257.046 0 019.009 8.064c2.268 2.142 3.528 3.464 4.284 4.22.756.756 1.008.945.692.252-.315-.693-1.196-2.267-2.488-4-1.291-1.732-2.992-3.622-4.851-5.481-1.858-1.858-3.874-3.685-7.244-6.551-3.37-2.867-8.095-6.772-12.347-10.08-4.253-3.307-8.032-6.016-10.867-7.843-2.835-1.826-4.725-2.771-6.552-3.559a55.857 55.857 0 00-5.071-1.89c-1.48-.472-2.677-.787-3.717-.63-1.039.158-1.921.788-.661 1.67z"
              fill="#8275A9"
            />
            <path
              d="M121.015 91.427c.199-.262.141-1.056-.525-1.571-.667-.515-1.941-.751-2.468-1.136-.527-.384-.307-.916-.451-1.213-.144-.297-.684-.363-1.246-.316-.561.047-1.16.204-1.434.396-.274.191-.125.859.379 1.3.504.44 1.412.876 2.252 1.251.84.376 1.612.69 2.225.984.614.294 1.069.566 1.268.305z"
              fill="url(#prefix__paint2_linear)"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h196v150H0z" />
        </clipPath>
        <clipPath id="prefix__clip1">
          <rect x={67} y={13} width={62} height={89} rx={5} fill="#fff" />
        </clipPath>
        <clipPath id="prefix__clip2">
          <path fill="#fff" transform="translate(106 81)" d="M0 0h75v63H0z" />
        </clipPath>
        <clipPath id="prefix__clip3">
          <path
            fill="#fff"
            transform="translate(114 87)"
            d="M0 0h73.609v60.988H0z"
          />
        </clipPath>
        <linearGradient
          id="prefix__paint0_linear"
          x1={118.395}
          y1={57.5}
          x2={80.55}
          y2={70.06}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7DB8EE" stopOpacity={0.86} />
          <stop offset={0.594} stopColor="#BC78F2" stopOpacity={0.37} />
          <stop offset={1} stopColor="#A7F3F3" stopOpacity={0.71} />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear"
          x1={128.5}
          y1={93.5}
          x2={177}
          y2={135.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F47373" />
          <stop offset={0.429} stopColor="#9CC68E" />
          <stop offset={0.909} stopColor="#6A49F0" />
        </linearGradient>
        <linearGradient
          id="prefix__paint2_linear"
          x1={114.623}
          y1={89.355}
          x2={121.251}
          y2={89.355}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5D3590" />
          <stop offset={1} stopColor="#E7DFDA" />
        </linearGradient>
        <filter
          id="prefix__filter0_ddii"
          x={53}
          y={-1}
          width={90}
          height={117}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={4} dy={4} />
          <feGaussianBlur stdDeviation={4} />
          <feColorMatrix values="0 0 0 0 0.72549 0 0 0 0 0.741176 0 0 0 0 0.796078 0 0 0 1 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={-4} dy={-4} />
          <feGaussianBlur stdDeviation={4} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend in2="effect1_dropShadow" result="effect2_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={4} dy={5} />
          <feGaussianBlur stdDeviation={3} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0.756863 0 0 0 0 0.772549 0 0 0 0 0.823529 0 0 0 1 0" />
          <feBlend in2="shape" result="effect3_innerShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={-4} dy={-4} />
          <feGaussianBlur stdDeviation={3} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend in2="effect3_innerShadow" result="effect4_innerShadow" />
        </filter>
        <filter
          id="prefix__filter1_d"
          x={107}
          y={87}
          width={74.609}
          height={59.988}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={-3} dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgComponent;
