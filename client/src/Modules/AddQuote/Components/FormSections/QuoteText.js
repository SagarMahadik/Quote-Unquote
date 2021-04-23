import React from "react";
import FormSectionHeading from "StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormSectionHeading/FormSectionHeading.js";
import FormQuoteInputTextBox from "StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormQuoteInputTextBox/FormQuoteInputTextBox.js";
import {
	useAddQuoteState,
	useAddQuoteDispatch,
} from "Modules/AddQuote/State/AddQuoteState.js";

const QuoteText = () => {
	const { quote } = useAddQuoteState();
	const dispatch = useAddQuoteDispatch();
	console.log(quote);
	return (
		<>
			<FormSectionHeading sectionName="Type/Paste the quote" />
			<FormQuoteInputTextBox
				name="quote"
				value={quote}
				onChange={(e) => {
					dispatch({ type: "SET_QUOTE", quoteText: e.target.value });
				}}
			/>
		</>
	);
};

export default QuoteText;
