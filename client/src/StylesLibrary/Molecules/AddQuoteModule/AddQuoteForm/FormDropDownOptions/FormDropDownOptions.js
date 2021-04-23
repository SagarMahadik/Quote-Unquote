import React from "react";
import {
	DropDownOptionsContainer,
	DropDownOptionContainer,
	DropDownOptionLine1Text,
	DropDownOptionLine2Text,
} from "StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormDropDownOptions/FormDropDownOptions.js";

const FormDropDownOptions = () => {
	return (
		<DropDownOptionsContainer>
			<DropDownOptionContainer>
				<DropDownOptionLine1Text>
					Nassim Nicolas Taleb
				</DropDownOptionLine1Text>
				<DropDownOptionLine2Text>Black Swan</DropDownOptionLine2Text>
			</DropDownOptionContainer>
			<DropDownOptionContainer>
				<DropDownOptionLine1Text>Ayn Rand</DropDownOptionLine1Text>
				<DropDownOptionLine2Text>
					The Fountainhead
				</DropDownOptionLine2Text>
			</DropDownOptionContainer>
		</DropDownOptionsContainer>
	);
};

export default FormDropDownOptions;
