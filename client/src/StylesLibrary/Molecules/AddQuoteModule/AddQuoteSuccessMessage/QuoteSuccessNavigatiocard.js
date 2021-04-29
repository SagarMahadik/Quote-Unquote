import React from 'react';
import {
  NavigationCardContainer,
  NavigatioCardText
} from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteSuccessMessage/quoteSuccessNavigationCard.js';
const QuoteSuccessNavigatiocard = ({ onClick, navigationCardText }) => {
  return (
    <NavigationCardContainer onClick={onClick}>
      <NavigatioCardText>{navigationCardText}</NavigatioCardText>
    </NavigationCardContainer>
  );
};

export default QuoteSuccessNavigatiocard;
