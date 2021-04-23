import React, { useReducer, useContext } from "react";
import {
	AddQuoteContext,
	AddQuoteDispatchContext,
} from "Modules/AddQuote/State/AddQuoteContext.js";
import AddQuoteReducer from "Modules/AddQuote/State/AddQuoteReducer.js";
import { tagsList } from "Modules/AddQuote/Components/FormSections/Tags/TagSeedData.js";

const AddQuoteState = ({ children }) => {
	const initialState = {
		quote: "",
		quoteAuthor: "",
		quoteTags: [],
		tagDetails: [...tagsList],
		newTagText: "",
		addNewTag: false,
		addQuoteSuccess: false,
	};

	const [state, dispatch] = useReducer(AddQuoteReducer, initialState);

	const {
		quote,
		quoteAuthor,
		quoteTags,
		tagDetails,
		newTagText,
		addNewTag,
		addQuoteSuccess,
	} = state;
	return (
		<AddQuoteContext.Provider
			value={{
				quote,
				quoteAuthor,
				quoteTags,
				tagDetails,
				newTagText,
				addNewTag,
				addQuoteSuccess,
			}}
		>
			<AddQuoteDispatchContext.Provider value={dispatch}>
				{children}
			</AddQuoteDispatchContext.Provider>
		</AddQuoteContext.Provider>
	);
};

export default AddQuoteState;

function useAddQuoteState() {
	const context = useContext(AddQuoteContext);

	if (context === undefined) {
		throw new Error(
			"useAddQuoteState must be used within a SupplierDetailsProvider"
		);
	}
	return context;
}

function useAddQuoteDispatch() {
	const context = useContext(AddQuoteDispatchContext);
	if (context === undefined) {
		throw new Error(
			"useAddQuoteDispatch must be used within a SupplierDetailsDispatchProvider"
		);
	}
	return context;
}

export { AddQuoteState, useAddQuoteState, useAddQuoteDispatch };
