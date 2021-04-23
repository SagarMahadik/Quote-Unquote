import React from "react";
import {
	AddQuoteSuccessTextContainer,
	AddQuoteSuccessText,
} from "StylesLibrary/Atoms/AddQuoteModule/AddQuoteSuccessMessage/quoteSuccessText.js";

const QuoteSuccessText = ({ quoteAuthor }) => {
	return (
		<AddQuoteSuccessTextContainer>
			<AddQuoteSuccessText>
				Quote by {quoteAuthor} Added Successfully !
			</AddQuoteSuccessText>
		</AddQuoteSuccessTextContainer>
	);
};

export default QuoteSuccessText;
