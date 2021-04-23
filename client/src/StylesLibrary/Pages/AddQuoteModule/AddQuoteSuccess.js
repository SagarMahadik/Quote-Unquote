import React from "react";
import { AddQuoteSuccessContainer } from "StylesLibrary/Atoms/AddQuoteModule/AddQuoteSuccessMessage/quoteSuccessContainer.js";
import QuoteSuccessNavigatiocard from "StylesLibrary/Molecules/AddQuoteModule/AddQuoteSuccessMessage/QuoteSuccessNavigatiocard.js";
import QuoteSuccessText from "StylesLibrary/Molecules/AddQuoteModule/AddQuoteSuccessMessage/QuoteSuccessText.js";

const AddQuoteSuccess = () => {
	return (
		<AddQuoteSuccessContainer>
			<QuoteSuccessText></QuoteSuccessText>
			<QuoteSuccessNavigatiocard navigationCardText="Add another" />
			<QuoteSuccessNavigatiocard navigationCardText="Read" />
		</AddQuoteSuccessContainer>
	);
};

export default AddQuoteSuccess;
