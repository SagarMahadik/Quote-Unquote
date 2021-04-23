import styled from "styled-components/macro";

export const TextBox = styled.input`
	width: 50%;
	height: 2.5em;
	margin-top: 1em;
	text-indent: 5px;
	background: #e7eaef;
	border: 2px solid #e8eced;
	box-shadow: -4px -4px 8px #ffffff, 4px 4px 8px #b9bdcb,
		inset -4px -4px 6px #ffffff, inset 4px 5px 6px #c1c5d2;
	box-sizing: border-box;
	border-radius: 25px;
	display: flex;
	font-family: Questrial;
	font-size: 14px;
	color: #828282;
	text-indent: 10px;
	&:focus {
		outline: none;
		text-indent: 8px;
	}
`;

export const TextBoxLabel = styled.label`
	position: absolute;
	top: 2.3em;
	left: 1em;
	font-family: Questrial;
	font-size: 14px;
	color: #828282;
	transition: 0.6s;
	pointer-events: none;
	${TextBox}:focus ~ &,
  ${TextBox}:not(:placeholder-shown) ~ & {
		top: 0;
		left: 0;
		color: #828282;
		font-size: 14px;
		padding-left: 12px;
	}
`;

export const InputTextBoxWrapper = styled.div`
	position: relative;
	width: 60%;
	margin-bottom: 1em;
	margin-top: 1em;
`;
