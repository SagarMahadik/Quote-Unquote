import styled from "styled-components/macro";

export const SubmitButtonStyle = styled.div`
	height: 56px;
	background: linear-gradient(279.96deg, #e7eaef -16.21%, #e7eaef 134.55%);
	border-radius: 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const SubmitButtonBorder = styled.div`
	height: 56px;
	padding: 2px;
	margin: 8px;
	border-radius: 25px;
	z-index: 1;
	background: linear-gradient(
		279.96deg,
		rgba(171, 112, 112, 0.25) -16.21%,
		rgba(255, 0, 0, 0.0925) 134.55%
	);
	box-shadow: -4px -4px 8px #ffffff, 4px 4px 8px rgba(0, 0, 0, 0.25);
`;

export const SubmitButtonText = styled.h1`
	background: linear-gradient(
		99.93deg,
		#25dab9 4%,
		#d37272 31.42%,
		#7674cc 96.55%
	);
	font-family: PT Sans;
	font-style: normal;
	font-size: 18px;
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	margin: 0;
	padding: 0;
	padding-right: 12px;
	padding-left: 12px;
`;
