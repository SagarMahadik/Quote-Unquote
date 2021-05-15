import React, { useEffect } from 'react';
import { AddQuoteSuccessContainer } from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteSuccessMessage/quoteSuccessContainer.js';
import QuoteSuccessText from 'StylesLibrary/Molecules/AddQuoteModule/AddQuoteSuccessMessage/QuoteSuccessText.js';
import NavigationPage from 'Modules/Global/Navigation/NavigationPage.js';

import {
  useAddQuoteDispatch,
  useAddQuoteState
} from 'Modules/AddQuote/State/AddQuoteState.js';

import { useStepStatusRequest } from 'APICalls/StepLog/useStepLog.js';

import { useHistory } from 'react-router-dom';
import GradientContainer from 'StylesLibrary/Animations/AnimationContainer/GradientContainer';
import {
  useApplicationState,
  useApplicationDispatch
} from 'Modules/Authentication/State/ApplicationState.js';

const AddQuoteSuccess = ({ authorName }) => {
  const { sendStepStatusRequest } = useStepStatusRequest();
  const { redirectToReadQuote } = useAddQuoteState();
  const dispatch = useAddQuoteDispatch();
  const history = useHistory();
  const { appThemes, activeTheme } = useApplicationState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (redirectToReadQuote) {
      history.push('/moodPage');
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
      <GradientContainer style={{ alignItems: 'flex-start' }}>
        <QuoteSuccessText quoteAuthor={authorName}></QuoteSuccessText>
        <NavigationPage
          addQuouteCallBack={() => resetTheAddquoteForm()}
          readQuoteCallBack={() => dispatch({ type: 'AQ_REDIRECT_READQUOTES' })}
          addMore={true}
          navigatioCardTextColor={appThemes[activeTheme]}
        />
      </GradientContainer>
    </AddQuoteSuccessContainer>
  );
};

export default AddQuoteSuccess;
