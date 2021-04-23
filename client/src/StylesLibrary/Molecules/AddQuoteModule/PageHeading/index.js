import React from "react";
import {
	PageHeadingContainer,
	PageHeadingText,
} from "StylesLibrary/Atoms/AddQuoteModule/PageHeading/index.js";

import LogoutButton from "StylesLibrary/Atoms/GlobalQuoteModule/Buttons/LogoutButton.js";

const PageHeading = () => {
	return (
		<PageHeadingContainer>
			<PageHeadingText>Logo</PageHeadingText>
			<PageHeadingText>Add a quote</PageHeadingText>
			<LogoutButton />
		</PageHeadingContainer>
	);
};

export default PageHeading;
