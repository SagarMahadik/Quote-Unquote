import React from 'react';
import QuoteDisplay from 'Modules/DisplayQuote/Components/QuoteDisplay/QuoteDisplay.js';
import MoodPage from 'Modules/DisplayQuote/Components/MoodPage/MoodPage.js';
import {
  useDisplayQuoteDispatch,
  useDisplayQuoteState
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';
import { FormContentContainer } from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormContainer/FormContainer.js';

const ToggleMoodDisplay = () => {
  const {
    displayQuotes,
    styles: { containerHeight }
  } = useDisplayQuoteState();

  if (displayQuotes) {
    return (
      <FormContentContainer containerHeight={containerHeight}>
        <QuoteDisplay />
      </FormContentContainer>
    );
  }
  return (
    <FormContentContainer containerHeight={containerHeight}>
      <MoodPage />
    </FormContentContainer>
  );
};

export default ToggleMoodDisplay;
