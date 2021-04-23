import React from "react";
import {
	FormSectionHeadingText,
	FormSectionHeadingContainer,
} from "StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormSectionHeading/FormSectionHeading.js";

const FormSectionHeading = ({ sectionName }) => {
	return (
		<FormSectionHeadingContainer>
			<FormSectionHeadingText>{sectionName}</FormSectionHeadingText>
		</FormSectionHeadingContainer>
	);
};

export default FormSectionHeading;
