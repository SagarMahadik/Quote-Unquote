import * as React from "react";

function SvgComponent(props) {
	return (
		<svg
			width={64}
			height={63}
			viewBox="0 0 64 63"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g filter="url(#prefix__filter0_ddii)">
				<g clipPath="url(#prefix__clip0)">
					<rect
						x={14}
						y={14}
						width={35.756}
						height={35}
						rx={17.5}
						fill="#E7EAEF"
					/>
				</g>
				<rect
					x={13}
					y={13}
					width={37.756}
					height={37}
					rx={18.5}
					stroke="#E8ECED"
					strokeWidth={2}
					strokeLinecap="round"
				/>
			</g>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M34 21a1.5 1.5 0 00-3 0v8h-9a1.5 1.5 0 000 3h9v9a1.5 1.5 0 003 0v-9h8a1.5 1.5 0 000-3h-8v-8z"
				fill="url(#prefix__paint0_linear)"
			/>
			<defs>
				<linearGradient
					id="prefix__paint0_linear"
					x1={24}
					y1={11.5}
					x2={56.404}
					y2={33.212}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#73EDD7" />
					<stop offset={0.401} stopColor="#D5D795" />
					<stop offset={0.734} stopColor="#D37272" />
					<stop offset={0.979} stopColor="#7674CC" />
				</linearGradient>
				<clipPath id="prefix__clip0">
					<rect
						x={14}
						y={14}
						width={35.756}
						height={35}
						rx={17.5}
						fill="#fff"
					/>
				</clipPath>
				<filter
					id="prefix__filter0_ddii"
					x={0}
					y={0}
					width={63.756}
					height={63}
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
					<feBlend
						in2="BackgroundImageFix"
						result="effect1_dropShadow"
					/>
					<feColorMatrix
						in="SourceAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					/>
					<feOffset dx={-4} dy={-4} />
					<feGaussianBlur stdDeviation={4} />
					<feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
					<feBlend
						in2="effect1_dropShadow"
						result="effect2_dropShadow"
					/>
					<feBlend
						in="SourceGraphic"
						in2="effect2_dropShadow"
						result="shape"
					/>
					<feColorMatrix
						in="SourceAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dx={4} dy={5} />
					<feGaussianBlur stdDeviation={3} />
					<feComposite
						in2="hardAlpha"
						operator="arithmetic"
						k2={-1}
						k3={1}
					/>
					<feColorMatrix values="0 0 0 0 0.756863 0 0 0 0 0.772549 0 0 0 0 0.823529 0 0 0 1 0" />
					<feBlend in2="shape" result="effect3_innerShadow" />
					<feColorMatrix
						in="SourceAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dx={-4} dy={-4} />
					<feGaussianBlur stdDeviation={3} />
					<feComposite
						in2="hardAlpha"
						operator="arithmetic"
						k2={-1}
						k3={1}
					/>
					<feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
					<feBlend
						in2="effect3_innerShadow"
						result="effect4_innerShadow"
					/>
				</filter>
			</defs>
		</svg>
	);
}

export default SvgComponent;
