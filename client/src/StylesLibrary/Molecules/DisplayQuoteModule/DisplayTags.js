import React from "react";
import {
	TagContainer,
	TagText,
} from "StylesLibrary/Atoms/DisplayQuoteModule/DisplayQuote/DisplayTag.js";

const DisplayTags = () => {
	return (
		<TagContainer>
			<TagText>Linus Torvalds </TagText>
			<TagText>Technology</TagText>
			<TagText>Philosophy </TagText>
		</TagContainer>
	);
};

export default DisplayTags;
