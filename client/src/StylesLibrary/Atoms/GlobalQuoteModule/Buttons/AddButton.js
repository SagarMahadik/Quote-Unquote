import React from "react";

function AddButton(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="64"
			height="63"
			fill="none"
			viewBox="0 0 64 63"
			{...props}
		>
			<g filter="url(#filter0_ddii)">
				<g clipPath="url(#clip0)">
					<rect
						width="35.756"
						height="35"
						x="14"
						y="14"
						fill="#E7EAEF"
						rx="17.5"
					></rect>
				</g>
				<rect
					width="37.756"
					height="37"
					x="13"
					y="13"
					stroke="#E8ECED"
					strokeLinecap="round"
					strokeWidth="2"
					rx="18.5"
				></rect>
			</g>
			<path
				fill="url(#paint0_linear)"
				fillRule="evenodd"
				d="M34 21a1.5 1.5 0 00-3 0v8h-9a1.5 1.5 0 000 3h9v9a1.5 1.5 0 003 0v-9h8a1.5 1.5 0 000-3h-8v-8z"
				clipRule="evenodd"
			></path>
			<defs>
				<filter
					id="filter0_ddii"
					width="63.756"
					height="63"
					x="0"
					y="0"
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood
						floodOpacity="0"
						result="BackgroundImageFix"
					></feFlood>
					<feColorMatrix
						in="SourceAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					></feColorMatrix>
					<feOffset dx="4" dy="4"></feOffset>
					<feGaussianBlur stdDeviation="4"></feGaussianBlur>
					<feColorMatrix values="0 0 0 0 0.72549 0 0 0 0 0.741176 0 0 0 0 0.796078 0 0 0 1 0"></feColorMatrix>
					<feBlend
						in2="BackgroundImageFix"
						result="effect1_dropShadow"
					></feBlend>
					<feColorMatrix
						in="SourceAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					></feColorMatrix>
					<feOffset dx="-4" dy="-4"></feOffset>
					<feGaussianBlur stdDeviation="4"></feGaussianBlur>
					<feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
					<feBlend
						in2="effect1_dropShadow"
						result="effect2_dropShadow"
					></feBlend>
					<feBlend
						in="SourceGraphic"
						in2="effect2_dropShadow"
						result="shape"
					></feBlend>
					<feColorMatrix
						in="SourceAlpha"
						result="hardAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					></feColorMatrix>
					<feOffset dx="4" dy="5"></feOffset>
					<feGaussianBlur stdDeviation="3"></feGaussianBlur>
					<feComposite
						in2="hardAlpha"
						k2="-1"
						k3="1"
						operator="arithmetic"
					></feComposite>
					<feColorMatrix values="0 0 0 0 0.756863 0 0 0 0 0.772549 0 0 0 0 0.823529 0 0 0 1 0"></feColorMatrix>
					<feBlend in2="shape" result="effect3_innerShadow"></feBlend>
					<feColorMatrix
						in="SourceAlpha"
						result="hardAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					></feColorMatrix>
					<feOffset dx="-4" dy="-4"></feOffset>
					<feGaussianBlur stdDeviation="3"></feGaussianBlur>
					<feComposite
						in2="hardAlpha"
						k2="-1"
						k3="1"
						operator="arithmetic"
					></feComposite>
					<feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
					<feBlend
						in2="effect3_innerShadow"
						result="effect4_innerShadow"
					></feBlend>
				</filter>
				<linearGradient
					id="paint0_linear"
					x1="24"
					x2="56.404"
					y1="11.5"
					y2="33.212"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#73EDD7"></stop>
					<stop offset="0.401" stopColor="#D5D795"></stop>
					<stop offset="0.734" stopColor="#D37272"></stop>
					<stop offset="0.979" stopColor="#7674CC"></stop>
				</linearGradient>
				<clipPath id="clip0">
					<rect
						width="35.756"
						height="35"
						x="14"
						y="14"
						fill="#fff"
						rx="17.5"
					></rect>
				</clipPath>
			</defs>
		</svg>
	);
}

export default AddButton;
