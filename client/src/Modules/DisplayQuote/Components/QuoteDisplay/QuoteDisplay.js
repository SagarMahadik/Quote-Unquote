import React from "react";
import DisplayQuote from "Modules/DisplayQuote/Components/QuoteDisplay/DisplayQuote.js";
import DisplayTags from "Modules/DisplayQuote/Components/QuoteDisplay/DisplayTags.js";
import RandomButton from "StylesLibrary/Atoms/GlobalQuoteModule/Buttons/RandomButton.js";
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
