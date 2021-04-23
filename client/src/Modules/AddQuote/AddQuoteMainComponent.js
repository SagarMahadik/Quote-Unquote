import React from "react";
import AddQuoteState from "Modules/AddQuote/State/AddQuoteState.js";
import AddQuote from "Modules/AddQuote/Components/AddQuote.js";

const AddQuoteMainComponent = () => {
	return (
		<AddQuoteState>
			<AddQuote />
		</AddQuoteState>
	);
};

export default AddQuoteMainComponent;
