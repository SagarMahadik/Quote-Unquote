import React from "react";
import {
	SubmitButtonText,
	SubmitButtonBorder,
	SumbitButtonStyle,
} from "StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormButtons/SubmitButton.js";

const SubmitButton = () => {
	return (
		<SubmitButtonBorder>
			<SumbitButtonStyle>
				<SubmitButtonText>Add Quote</SubmitButtonText>
			</SumbitButtonStyle>
		</SubmitButtonBorder>
	);
};

export default SubmitButton;
