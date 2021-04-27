import React from 'react';
import ToggleMoodDisplay from 'Modules/DisplayQuote/ToggleMoodDisplay.js';
import { FormContentContainer } from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormContainer/FormContainer.js';
import { CenterAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles.js';

import DisplayQuoteState from 'Modules/DisplayQuote/State/DisplayQuoteState.js';
const DisplayQuoteMainComponent = () => {
  return (
    <DisplayQuoteState>
      <CenterAlignedColumnContainer>
        <FormContentContainer containerHeight="100vh">
          <ToggleMoodDisplay />
        </FormContentContainer>
      </CenterAlignedColumnContainer>
    </DisplayQuoteState>
  );
};

export default DisplayQuoteMainComponent;
