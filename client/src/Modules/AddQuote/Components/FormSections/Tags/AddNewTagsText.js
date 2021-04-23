import React from "react";
import InputTextBox from "StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormInput/InputTextBox.js";
import AddButton from "StylesLibrary/Atoms/GlobalQuoteModule/Buttons/AddButton.js";
import {
	useAddQuoteState,
	useAddQuoteDispatch,
} from "Modules/AddQuote/State/AddQuoteState.js";

const AddNewTagsText = () => {
	const { newTagText, addNewTag } = useAddQuoteState();
	const dispatch = useAddQuoteDispatch();
	const addNewTagToState = () => {};
	if (addNewTag) {
		return (
			<>
				<InputTextBox
					value={newTagText}
					name="newTagText"
					placeholderText="Start typing ..."
					onChange={(e) =>
						dispatch({
							type: "SET_NEWTAG",
							payload: e.target.value,
						})
					}
				></InputTextBox>
				<AddButton onClick={() => dispatch({ type: "ADD_NEW_TAGS" })} />
			</>
		);
	} else {
		return null;
	}
};

export default AddNewTagsText;
