import React from "react";
import RandomButton from "StylesLibrary/Atoms/GlobalQuoteModule/Buttons/RandomButton.js";
import DisplayTags from "StylesLibrary/Molecules/DisplayQuoteModule/DisplayTags.js";
import DisplayQuote from "StylesLibrary/Molecules/DisplayQuoteModule/DisplayQuote.js";
import { FormContentContainer } from "StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormContainer/FormContainer.js";

const QuoteDisplay = () => {
	return (
		<FormContentContainer>
			<DisplayQuote />
			<DisplayTags />
			<RandomButton />
		</FormContentContainer>
	);
};

export default QuoteDisplay;
