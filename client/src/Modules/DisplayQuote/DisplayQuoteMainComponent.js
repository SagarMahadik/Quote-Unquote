import React from 'react';
import ToggleMoodDisplay from 'Modules/DisplayQuote/ToggleMoodDisplay.js';

import DisplayQuoteState from 'Modules/DisplayQuote/State/DisplayQuoteState.js';
const DisplayQuoteMainComponent = () => {
  return (
    <DisplayQuoteState>
      <ToggleMoodDisplay />
    </DisplayQuoteState>
  );
};

export default DisplayQuoteMainComponent;
