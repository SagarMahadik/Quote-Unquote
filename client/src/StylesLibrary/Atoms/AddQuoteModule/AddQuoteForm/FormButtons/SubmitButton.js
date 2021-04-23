import styled from "styled-components";

export const SumbitButtonStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 53px;
	background: linear-gradient(279.96deg, #e7eaef -16.21%, #e7eaef 134.55%);
	border-radius: 25px;
`;

export const SubmitButtonBorder = styled.div`
	width: 40%;
	height: 53px;
	padding: 2px;
	margin: 8px;
	margin-top: 0;
	margin-bottom: 1.2em;
	background: linear-gradient(
		279.96deg,
		rgba(171, 112, 112, 0.25) -16.21%,
		rgba(255, 0, 0, 0.0925) 134.55%
	);
	box-shadow: -4px -4px 8px #ffffff, 4px 4px 8px rgba(0, 0, 0, 0.25);
	border-radius: 25px;
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
