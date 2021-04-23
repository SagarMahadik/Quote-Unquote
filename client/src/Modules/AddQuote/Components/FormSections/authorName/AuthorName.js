import React from "react";
import FormSectionHeading from "StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormSectionHeading/FormSectionHeading.js";
import InputTextBox from "StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormInput/InputTextBox.js";
import {
	useAddQuoteState,
	useAddQuoteDispatch,
} from "Modules/AddQuote/State/AddQuoteState.js";

const AuthorName = () => {
	const { author } = useAddQuoteState();
	const dispatch = useAddQuoteDispatch();
	return (
		<>
			<FormSectionHeading sectionName="Author" />
			<InputTextBox
				placeholderText="Author name"
				name="author"
				value={author}
				onChange={(e) => {
					dispatch({
						type: "SET_AUTHOR",
						authorName: e.target.value,
					});
				}}
			/>
		</>
	);
};

export default AuthorName;
