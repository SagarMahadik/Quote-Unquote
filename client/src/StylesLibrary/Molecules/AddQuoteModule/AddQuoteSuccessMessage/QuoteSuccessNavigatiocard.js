import React from 'react';
import {
  NavigationCardContainer,
  NavigatioCardText
} from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteSuccessMessage/quoteSuccessNavigationCard.js';
const QuoteSuccessNavigatiocard = ({
  onClick,
  navigationCardText,
  navigatioCardTextColor
}) => {
  return (
    <NavigationCardContainer onClick={onClick}>
      <NavigatioCardText navigatioCardTextColor={navigatioCardTextColor}>
        {navigationCardText}
      </NavigatioCardText>
    </NavigationCardContainer>
  );
};

export default QuoteSuccessNavigatiocard;
