import React, { useEffect } from 'react';
import { AddQuoteSuccessContainer } from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteSuccessMessage/quoteSuccessContainer.js';
import QuoteSuccessText from 'StylesLibrary/Molecules/AddQuoteModule/AddQuoteSuccessMessage/QuoteSuccessText.js';
import QuoteSuccessNavigatiocard from 'StylesLibrary/Molecules/AddQuoteModule/AddQuoteSuccessMessage/QuoteSuccessNavigatiocard.js';

import {
  useAddQuoteDispatch,
  useAddQuoteState
} from 'Modules/AddQuote/State/AddQuoteState.js';

import { useStepStatusRequest } from 'APICalls/StepLog/useStepLog.js';

import { useHistory } from 'react-router-dom';

const AddQuoteSuccess = ({ authorName }) => {
  const { sendStepStatusRequest } = useStepStatusRequest();
  const { redirectToReadQuote } = useAddQuoteState();
  const dispatch = useAddQuoteDispatch();
  const history = useHistory();

  useEffect(() => {
    if (redirectToReadQuote) {
      history.push('/');
    }
  }, [redirectToReadQuote]);

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
      <QuoteSuccessNavigatiocard
        onClick={() => dispatch({ type: 'AQ_REDIRECT_READQUOTES' })}
        navigationCardText="Read"
      />
    </AddQuoteSuccessContainer>
  );
};

export default AddQuoteSuccess;
