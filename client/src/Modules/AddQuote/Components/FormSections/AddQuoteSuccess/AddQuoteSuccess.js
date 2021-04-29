import React from 'react';
import { AddQuoteSuccessContainer } from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteSuccessMessage/quoteSuccessContainer.js';
import QuoteSuccessText from 'StylesLibrary/Molecules/AddQuoteModule/AddQuoteSuccessMessage/QuoteSuccessText.js';
import QuoteSuccessNavigatiocard from 'StylesLibrary/Molecules/AddQuoteModule/AddQuoteSuccessMessage/QuoteSuccessNavigatiocard.js';

import { useAddQuoteDispatch } from 'Modules/AddQuote/State/AddQuoteState.js';

import { useStepStatusRequest } from 'APICalls/StepLog/useStepLog.js';

const AddQuoteSuccess = ({ authorName }) => {
  const { sendStepStatusRequest } = useStepStatusRequest();

  const dispatch = useAddQuoteDispatch();

  const resetTheAddquoteForm = () => {
    sendStepStatusRequest(
      'AddQuote| Add another quote | Reset the application'
    );
    dispatch({ type: 'AQ_QUOTE_RESET_FORM' });
  };

  return (
    <AddQuoteSuccessContainer>
      <QuoteSuccessText quoteAuthor={authorName}></QuoteSuccessText>
      <QuoteSuccessNavigatiocard
        navigationCardText="Add another"
        onClick={() => resetTheAddquoteForm()}
      />
      <QuoteSuccessNavigatiocard route="readQuote" navigationCardText="Read" />
    </AddQuoteSuccessContainer>
  );
};

export default AddQuoteSuccess;
