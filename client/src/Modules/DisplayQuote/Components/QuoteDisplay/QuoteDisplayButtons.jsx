import React, { useEffect } from 'react';
import FilterButton from 'StylesLibrary/Molecules/DisplayQuoteModule/Buttons/FilterButton.js';
import WhatsAppButton from 'StylesLibrary/Molecules/DisplayQuoteModule/Buttons/WhatsAppButton.js';
import { DisplayQuoteButtonContainer } from 'StylesLibrary/Atoms/DisplayQuoteModule/DisplayQuote/DisplayQuoteContainer.js';
import {
  useDisplayQuoteState,
  useDisplayQuoteDispatch
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';

import { goButtonVibrations } from 'Utils/vibrations';

const QuoteDisplayButtons = () => {
  const { currentQuote } = useDisplayQuoteState();
  const dispatch = useDisplayQuoteDispatch();

  const printDocument = async () => {
    navigator
      .share({
        title: 'title',
        text: `${currentQuote[0].quote}-${currentQuote[0].author['authorName']}`
      })
      .then(() => console.log('Successful share'))
      .catch(error => console.log('Error in sharing', error));
  };
  return (
    <DisplayQuoteButtonContainer>
      <FilterButton
        onClick={() => {
          goButtonVibrations();
          dispatch({ type: 'DQ_TOGGLE_FILTERMODAL' });
        }}
      />

      <WhatsAppButton
        onClick={() => {
          goButtonVibrations();
          printDocument();
        }}
      />
    </DisplayQuoteButtonContainer>
  );
};

export default QuoteDisplayButtons;
