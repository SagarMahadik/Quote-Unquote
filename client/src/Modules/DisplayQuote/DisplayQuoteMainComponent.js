import React from 'react';
import ToggleMoodDisplay from 'Modules/DisplayQuote/ToggleMoodDisplay.js';
import { FormContentContainer } from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormContainer/FormContainer.js';

import DisplayQuoteState from 'Modules/DisplayQuote/State/DisplayQuoteState.js';
const DisplayQuoteMainComponent = () => {
  return (
    <DisplayQuoteState>
      <FormContentContainer containerHeight="auto">
        <ToggleMoodDisplay />
      </FormContentContainer>
    </DisplayQuoteState>
  );
};

export default DisplayQuoteMainComponent;
