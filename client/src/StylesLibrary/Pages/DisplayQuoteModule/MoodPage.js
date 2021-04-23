import React from "react";
import { AddQuoteSuccessText } from "StylesLibrary/Atoms/DisplayQuoteModule/PageHeading/PageHeading.js";
import FormSectionHeading from "StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormSectionHeading/FormSectionHeading.js";
import { InputButtonContainer } from "StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormInput/inputButton.js";
import InputButton from "StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormInput/InputButton.js";
import GoButton from "StylesLibrary/Molecules/DisplayQuoteModule/Buttons/GoButton.js";
import { FormContentContainer } from "StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormContainer/FormContainer.js";

const MoodPage = () => {
	return (
		<FormContentContainer containerHeight="90vh">
			<AddQuoteSuccessText>Whats Your mood</AddQuoteSuccessText>
			<FormSectionHeading sectionName="Tags" />
			<InputButtonContainer>
				<InputButton />
			</InputButtonContainer>
			<FormSectionHeading sectionName="Author" />
			<InputButtonContainer>
				<InputButton />
			</InputButtonContainer>
			<GoButton />
		</FormContentContainer>
	);
};

export default MoodPage;
