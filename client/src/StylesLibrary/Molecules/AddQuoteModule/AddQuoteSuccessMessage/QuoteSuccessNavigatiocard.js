import React from "react";
import {
	NavigationCardContainer,
	NavigatioCardText,
} from "StylesLibrary/Atoms/AddQuoteModule/AddQuoteSuccessMessage/quoteSuccessNavigationCard.js";
const QuoteSuccessNavigatiocard = ({ navigationCardText }) => {
	return (
		<NavigationCardContainer>
			<NavigatioCardText>{navigationCardText}</NavigatioCardText>
		</NavigationCardContainer>
	);
};

export default QuoteSuccessNavigatiocard;
