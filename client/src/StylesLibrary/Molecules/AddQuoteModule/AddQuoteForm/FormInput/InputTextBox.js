import React from "react";
import {
	TextBox,
	TextBoxLabel,
	InputTextBoxWrapper,
} from "StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormInput/inputTextBox.js";

const InputTextBox = ({ placeholderText, value, onChange }) => {
	return (
		<TextBox
			placeholder={placeholderText}
			onFocus={(e) => (e.target.placeholder = "")}
			onBlur={(e) => (e.target.placeholder = { placeholderText })}
			value={value}
			onChange={onChange}
		></TextBox>
	);
};

export default InputTextBox;
