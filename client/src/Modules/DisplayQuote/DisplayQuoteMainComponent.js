import React from 'react';
import ToggleMoodDisplay from 'Modules/DisplayQuote/ToggleMoodDisplay.js';
import { FormContentContainer } from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormContainer/FormContainer.js';
import {
  CenterAlignedColumnContainer,
  CenterAlignedColumnContainerWithShadowBackground
} from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles.js';

import DisplayQuoteState from 'Modules/DisplayQuote/State/DisplayQuoteState.js';
import PageAnimationContainer from 'StylesLibrary/Animations/AnimationContainer/PageAnimations/PageAnimationContainer';

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
