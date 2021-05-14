import React from 'react';
import ToggleMoodDisplay from 'Modules/DisplayQuote/ToggleMoodDisplay.js';

import { CenterAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles.js';

const DisplayQuoteMainComponent = () => {
  return (
    <>
      <CenterAlignedColumnContainer style={{ alignItems: 'flex-start' }}>
        <ToggleMoodDisplay />
      </CenterAlignedColumnContainer>
    </>
  );
};

export default DisplayQuoteMainComponent;
