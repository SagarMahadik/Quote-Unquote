import * as React from "react";

function SvgComponent(props) {
	return (
		<svg
			width={56}
			height={56}
			viewBox="0 0 56 56"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g filter="url(#prefix__filter0_ddi)">
				<path
					d="M42 26c0 8.837-7.163 16-16 16s-16-7.163-16-16 7.163-16 16-16 16 7.163 16 16z"
					fill="#FDFCFC"
				/>
				<path
					d="M41.5 26c0 8.56-6.94 15.5-15.5 15.5-8.56 0-15.5-6.94-15.5-15.5 0-8.56 6.94-15.5 15.5-15.5 8.56 0 15.5 6.94 15.5 15.5z"
					stroke="#E7EAEF"
				/>
			</g>
			<g filter="url(#prefix__filter1_ddi)">
				<circle
					cx={26}
					cy={26}
					r={11}
					fill="url(#prefix__paint0_linear)"
				/>
				<circle cx={26} cy={26} r={10.5} stroke="#E7EAEF" />
			</g>
			<g clipPath="url(#prefix__clip0)">
				<path
					d="M30.984 24.837a.198.198 0 00-.045-.068l-1.25-1.25a.208.208 0 00-.294.295l.893.895h-.122c-1.628 0-2.75.447-3.64 1.452a.208.208 0 10.312.277c.54-.611 1.408-1.313 3.328-1.313h.122l-.894.894a.209.209 0 00.295.295l1.25-1.25a.207.207 0 00.045-.227z"
					fill="url(#prefix__paint1_linear)"
				/>
				<path
					d="M25.772 27.58a.209.209 0 00-.288.064l-.06.095c-.832 1.305-1.723 2.386-4.216 2.386a.208.208 0 000 .416c2.701 0 3.702-1.219 4.567-2.578l.06-.096a.208.208 0 00-.063-.287z"
					fill="url(#prefix__paint2_linear)"
				/>
				<path
					d="M30.984 29.004a.198.198 0 00-.046-.068l-1.25-1.25a.209.209 0 00-.294.295l.894.894h-.122c-2.605 0-3.394-1.255-4.23-2.584-.876-1.393-1.782-2.833-4.728-2.833a.208.208 0 000 .417c2.716 0 3.522 1.281 4.375 2.638.86 1.366 1.748 2.778 4.583 2.778h.122l-.894.895a.208.208 0 10.295.294l1.25-1.25a.216.216 0 00.045-.067.212.212 0 000-.16z"
					fill="url(#prefix__paint3_linear)"
				/>
			</g>
			<defs>
				<linearGradient
					id="prefix__paint0_linear"
					x1={30.447}
					y1={28.663}
					x2={21.665}
					y2={27.369}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#E7EAEF" />
					<stop offset={1} stopColor="#F5F7F9" />
				</linearGradient>
				<linearGradient
					id="prefix__paint1_linear"
					x1={26.473}
					y1={24.387}
					x2={31.422}
					y2={25.468}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#494343" />
					<stop offset={1} stopColor="#131111" stopOpacity={0.35} />
				</linearGradient>
				<linearGradient
					id="prefix__paint2_linear"
					x1={21}
					y1={28.459}
					x2={26.274}
					y2={29.72}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#494343" />
					<stop offset={1} stopColor="#131111" stopOpacity={0.35} />
				</linearGradient>
				<linearGradient
					id="prefix__paint3_linear"
					x1={21}
					y1={25.614}
					x2={31.979}
					y2={27.894}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#494343" />
					<stop offset={1} stopColor="#131111" stopOpacity={0.35} />
				</linearGradient>
				<filter
					id="prefix__filter0_ddi"
					x={0}
					y={0}
					width={50}
					height={50}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					/>
					<feOffset dx={2} dy={2} />
					<feGaussianBlur stdDeviation={3} />
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
					<feBlend
						in2="BackgroundImageFix"
						result="effect1_dropShadow"
					/>
					<feColorMatrix
						in="SourceAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					/>
					<feOffset dx={-2} dy={-2} />
					<feGaussianBlur stdDeviation={4} />
					<feColorMatrix values="0 0 0 0 0.996078 0 0 0 0 0.996078 0 0 0 0 0.996078 0 0 0 0.75 0" />
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
					<feOffset dx={2} dy={2} />
					<feGaussianBlur stdDeviation={2} />
					<feComposite
						in2="hardAlpha"
						operator="arithmetic"
						k2={-1}
						k3={1}
					/>
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
					<feBlend in2="shape" result="effect3_innerShadow" />
				</filter>
				<filter
					id="prefix__filter1_ddi"
					x={4}
					y={4}
					width={52}
					height={52}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					/>
					<feMorphology
						radius={3}
						operator="dilate"
						in="SourceAlpha"
						result="effect1_dropShadow"
					/>
					<feOffset dx={4} dy={4} />
					<feGaussianBlur stdDeviation={6} />
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
					<feBlend
						in2="BackgroundImageFix"
						result="effect1_dropShadow"
					/>
					<feColorMatrix
						in="SourceAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					/>
					<feOffset dx={-2} dy={-2} />
					<feGaussianBlur stdDeviation={4} />
					<feColorMatrix values="0 0 0 0 0.996078 0 0 0 0 0.996078 0 0 0 0 0.996078 0 0 0 1 0" />
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
					<feOffset dx={2} dy={2} />
					<feGaussianBlur stdDeviation={2} />
					<feComposite
						in2="hardAlpha"
						operator="arithmetic"
						k2={-1}
						k3={1}
					/>
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
					<feBlend in2="shape" result="effect3_innerShadow" />
				</filter>
				<clipPath id="prefix__clip0">
					<path
						fill="#fff"
						transform="translate(21 22)"
						d="M0 0h10v10H0z"
					/>
				</clipPath>
			</defs>
		</svg>
	);
}

export default SvgComponent;
