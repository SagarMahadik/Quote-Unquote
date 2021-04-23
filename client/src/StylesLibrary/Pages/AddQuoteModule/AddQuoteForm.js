import React from "react";
import PageHeading from "StylesLibrary/Molecules/AddQuoteModule/PageHeading/index.js";
import { FormContentContainer } from "StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormContainer/FormContainer.js";
import FormSectionHeading from "StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormSectionHeading/FormSectionHeading.js";
import FormQuoteInputTextBox from "StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormQuoteInputTextBox/FormQuoteInputTextBox.js";
import InputTextBox from "StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormInput/InputTextBox.js";
import FormDropDownOptions from "StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormDropDownOptions/FormDropDownOptions.js";
import { InputButtonContainer } from "StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormInput/inputButton.js";
import InputButton from "StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormInput/InputButton.js";
import { FormSectionDivider } from "StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormSectionDivider/formSectionDivider.js";
import AddButton from "StylesLibrary/Atoms/GlobalQuoteModule/Buttons/AddButton.js";

import SubmitButton from "StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormButtons/SubmitButton.js";

const AddQuoteForm = () => {
	return (
		<>
			<PageHeading></PageHeading>
			<FormContentContainer>
				<FormSectionHeading sectionName="Type/Paste the quote" />
				<FormQuoteInputTextBox />
				<FormSectionHeading sectionName="Author" />
				<InputTextBox />
				<FormDropDownOptions />
				<FormSectionHeading sectionName="Tags" />
				<InputButtonContainer>
					<InputButton />
				</InputButtonContainer>
				<AddButton />
				<FormSectionDivider />
				<SubmitButton />
			</FormContentContainer>
		</>
	);
};

export default AddQuoteForm;
