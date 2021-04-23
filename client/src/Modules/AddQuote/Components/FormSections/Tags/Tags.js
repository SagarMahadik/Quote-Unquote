import React from "react";
import { InputButtonContainer } from "StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormInput/inputButton.js";
import InputButton from "StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormInput/InputButton.js";
import FormSectionHeading from "StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormSectionHeading/FormSectionHeading.js";
import { tagsList } from "./TagSeedData";
import {
	useAddQuoteState,
	useAddQuoteDispatch,
} from "Modules/AddQuote/State/AddQuoteState.js";

const Tags = () => {
	const { tagDetails } = useAddQuoteState();
	const dispatch = useAddQuoteDispatch();
	const handleTagSelections = (tagName) => {};
	return (
		<>
			<FormSectionHeading sectionName="Tags" />
			<InputButtonContainer>
				{tagDetails.map(({ tagName, selected }) => {
					return (
						<InputButton
							buttonText={tagName}
							buttonSelected={selected}
							onClick={() =>
								dispatch({ type: "SET_TAG", payload: tagName })
							}
						/>
					);
				})}
			</InputButtonContainer>
		</>
	);
};

export default Tags;
