import React from 'react';
import QuoteDisplay from 'Modules/DisplayQuote/Components/QuoteDisplay/QuoteDisplay.js';
import MoodPage from 'Modules/DisplayQuote/Components/MoodPage/MoodPage.js';
import {
  useDisplayQuoteDispatch,
  useDisplayQuoteState
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';
import { FormContentContainer } from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormContainer/FormContainer.js';
import { AnimatePresence } from 'framer-motion';

const ToggleMoodDisplay = () => {
  const {
    displayQuotes,
    styles: { containerHeight }
  } = useDisplayQuoteState();

  return (
    <FormContentContainer
      containerHeight={containerHeight}
      containerPaddingBottom="2rem"
    >
      <AnimatePresence>
        {displayQuotes ? <QuoteDisplay /> : <MoodPage />}
      </AnimatePresence>
    </FormContentContainer>
  );
};

export default ToggleMoodDisplay;
