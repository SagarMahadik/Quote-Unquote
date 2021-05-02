import React from 'react';
import ToggleMoodDisplay from 'Modules/DisplayQuote/ToggleMoodDisplay.js';
import { FormContentContainer } from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormContainer/FormContainer.js';
import { CenterAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles.js';

import DisplayQuoteState from 'Modules/DisplayQuote/State/DisplayQuoteState.js';

const DisplayQuoteMainComponent = () => {
  return (
    <DisplayQuoteState>
      <CenterAlignedColumnContainer style={{ alignItems: 'flex-start' }}>
        <ToggleMoodDisplay />
      </CenterAlignedColumnContainer>
    </DisplayQuoteState>
  );
};

export default DisplayQuoteMainComponent;
