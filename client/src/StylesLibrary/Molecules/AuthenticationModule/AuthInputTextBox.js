import React from "react";
import {
	TextBox,
	TextBoxLabel,
	InputTextBoxWrapper,
} from "StylesLibrary/Atoms/AuthenticationModule/AuthInputTextBox.js";

const AuthInputTextBox = () => {
	return (
		<>
			<InputTextBoxWrapper>
				<TextBox placeholder=" " />
				<TextBoxLabel>Mobile number</TextBoxLabel>
			</InputTextBoxWrapper>
		</>
	);
};

export default AuthInputTextBox;
