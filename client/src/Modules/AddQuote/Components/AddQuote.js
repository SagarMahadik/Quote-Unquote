import React from "react";
import { FormContentContainer } from "StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormContainer/FormContainer.js";
import PageHeading from "StylesLibrary/Molecules/AddQuoteModule/PageHeading/index.js";

import QuoteText from "./FormSections/QuoteText";
import AuthorName from "./FormSections/authorName/AuthorName";
import Tags from "./FormSections/Tags/Tags";
import AddNewTags from "./FormSections/Tags/AddNewTags";
import AddNewTagsText from "Modules/AddQuote/Components/FormSections/Tags/AddNewTagsText.js";
import { FormSectionDivider } from "StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormSectionDivider/formSectionDivider.js";
import SubmitButton from "StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormButtons/SubmitButton.js";
import AddQuoteSuccess from "Modules/AddQuote/Components/FormSections/AddQuoteSuccess/AddQuoteSuccess.js";

import {
	useAddQuoteState,
	useAddQuoteDispatch,
} from "Modules/AddQuote/State/AddQuoteState.js";
const AddQuote = () => {
	const { addQuoteSuccess } = useAddQuoteState();
	if (addQuoteSuccess) {
		return <AddQuoteSuccess />;
	}
	return (
		<>
			<PageHeading />
			<FormContentContainer>
				<QuoteText />
				<AuthorName />
				<Tags />
				<AddNewTags />
				<AddNewTagsText />
				<FormSectionDivider />
				<SubmitButton />
			</FormContentContainer>
		</>
	);
};

export default AddQuote;
