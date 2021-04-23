import React from "react";
import InputButton from "StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormInput/InputButton.js";
import {
	useAddQuoteState,
	useAddQuoteDispatch,
} from "Modules/AddQuote/State/AddQuoteState.js";
const AddNewTags = () => {
	const { addNewTag } = useAddQuoteState();
	const dispatch = useAddQuoteDispatch();

	return (
		<InputButton
			buttonText="Add new tag"
			buttonSelected={addNewTag}
			onClick={() => dispatch({ type: "TOGGLE_ADDNEWTAG" })}
		></InputButton>
	);
};

export default AddNewTags;
