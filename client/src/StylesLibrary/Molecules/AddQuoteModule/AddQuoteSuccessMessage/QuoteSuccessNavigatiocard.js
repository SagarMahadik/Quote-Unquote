import React from 'react';
import {
  NavigationCardContainer,
  NavigatioCardText
} from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteSuccessMessage/quoteSuccessNavigationCard.js';
const QuoteSuccessNavigatiocard = ({ route, navigationCardText }) => {
  return (
    <NavigationCardContainer to={`/${route}`}>
      <NavigatioCardText>{navigationCardText}</NavigatioCardText>
    </NavigationCardContainer>
  );
};

export default QuoteSuccessNavigatiocard;
