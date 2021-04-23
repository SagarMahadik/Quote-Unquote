import React from "react";
import QuoteDisplay from "Modules/DisplayQuote/Components/QuoteDisplay/QuoteDisplay.js";
import MoodPage from "Modules/DisplayQuote/Components/MoodPage/MoodPage.js";
import DisplayQuoteState from "Modules/DisplayQuote/State/DisplayQuoteState.js";
const DisplayQuoteMainComponent = () => {
	return (
		<DisplayQuoteState>
			<MoodPage />
			<QuoteDisplay />
		</DisplayQuoteState>
	);
};

export default DisplayQuoteMainComponent;
