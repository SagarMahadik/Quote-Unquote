import React from 'react';
import AddQuoteState from 'Modules/AddQuote/State/AddQuoteState.js';
import AddQuote from 'Modules/AddQuote/Components/AddQuote.js';
import PageAnimationContainer from 'StylesLibrary/Animations/AnimationContainer/PageAnimations/PageAnimationContainer';
import { CenterAlignedColumnContainerWithShadowBackground } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';

const AddQuoteMainComponent = () => {
  return (
    <PageAnimationContainer>
      <CenterAlignedColumnContainerWithShadowBackground>
        <AddQuoteState>
          <AddQuote />
        </AddQuoteState>
      </CenterAlignedColumnContainerWithShadowBackground>
    </PageAnimationContainer>
  );
};

export default AddQuoteMainComponent;
