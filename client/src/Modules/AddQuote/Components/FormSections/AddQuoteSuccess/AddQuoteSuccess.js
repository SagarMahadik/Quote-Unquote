import React from 'react';
import { AddQuoteSuccessContainer } from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteSuccessMessage/quoteSuccessContainer.js';
import QuoteSuccessText from 'StylesLibrary/Molecules/AddQuoteModule/AddQuoteSuccessMessage/QuoteSuccessText.js';
import QuoteSuccessNavigatiocard from 'StylesLibrary/Molecules/AddQuoteModule/AddQuoteSuccessMessage/QuoteSuccessNavigatiocard.js';

const AddQuoteSuccess = ({ authorName }) => {
  return (
    <AddQuoteSuccessContainer>
      <QuoteSuccessText quoteAuthor={authorName}></QuoteSuccessText>
      <QuoteSuccessNavigatiocard
        route="addQuote"
        navigationCardText="Add another"
      />
      <QuoteSuccessNavigatiocard route="readQuote" navigationCardText="Read" />
    </AddQuoteSuccessContainer>
  );
};

export default AddQuoteSuccess;
