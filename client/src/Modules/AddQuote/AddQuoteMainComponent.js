import React from 'react';
import AddQuoteState from 'Modules/AddQuote/State/AddQuoteState.js';
import AddQuote from 'Modules/AddQuote/Components/AddQuote.js';
import PageAnimationContainer from 'StylesLibrary/Animations/AnimationContainer/PageAnimations/PageAnimationContainer';

const AddQuoteMainComponent = () => {
  return (
    <PageAnimationContainer>
      <AddQuoteState>
        <AddQuote />
      </AddQuoteState>
    </PageAnimationContainer>
  );
};

export default AddQuoteMainComponent;
