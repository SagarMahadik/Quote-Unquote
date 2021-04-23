import styled from "styled-components/macro";
import { ColumnContainer } from "StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles.js";

export const AddQuoteSuccessTextContainer = styled(ColumnContainer)`
	width: 100%;
	height: auto;
	margin: 2em;
`;

export const AddQuoteSuccessText = styled.h1`
	font-family: PT Sans;
	font-style: normal;
	font-weight: bold;
	font-size: 32px;
	line-height: 41px;
	text-align: center;
	background: linear-gradient(
		99.93deg,
		#25dab9 4%,
		#d37272 31.42%,
		#7674cc 96.55%
	);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
`;
