import React from 'react';
import QuoteDisplay from 'Modules/DisplayQuote/Components/QuoteDisplay/QuoteDisplay.js';
import MoodPage from 'Modules/DisplayQuote/Components/MoodPage/MoodPage.js';
import {
  useDisplayQuoteDispatch,
  useDisplayQuoteState
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';

const ToggleMoodDisplay = () => {
  const { displayQuotes } = useDisplayQuoteState();

  if (displayQuotes) {
    return <QuoteDisplay />;
  }
  return (
    <>
      <MoodPage />
    </>
  );
};

export default ToggleMoodDisplay;
