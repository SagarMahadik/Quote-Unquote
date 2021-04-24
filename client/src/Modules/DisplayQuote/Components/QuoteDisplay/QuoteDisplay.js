import React, { useState, useEffect } from 'react';
import DisplayQuote from 'Modules/DisplayQuote/Components/QuoteDisplay/DisplayQuote.js';
import DisplayTags from 'Modules/DisplayQuote/Components/QuoteDisplay/DisplayTags.js';
import RandomButton from 'StylesLibrary/Atoms/GlobalQuoteModule/Buttons/RandomButton.js';
import { FormContentContainer } from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormContainer/FormContainer.js';
import { DisplayQuoteState } from 'Modules/DisplayQuote/State/DisplayQuoteState.js';
import {
  useDisplayQuoteState,
  useDisplayQuoteDispatch
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';
import { generateRandomInteger } from 'Modules/DisplayQuote/State/utils.js';

const QuoteDisplay = () => {
  const {
    filteredQuotes: { filterQuotesList },
    currentQuote
  } = useDisplayQuoteState();
  const dispatch = useDisplayQuoteDispatch();

  const selectRandomQuote = () => {
    let randomIndex = generateRandomInteger(1, filterQuotesList.length - 1);
    console.log(randomIndex);
    let randomQuote = filterQuotesList[randomIndex];
    dispatch({ type: 'DQ_SET_CURRENT_QUOTE', payload: randomQuote });
  };
  useEffect(() => {
    selectRandomQuote();
  }, []);
  console.log(currentQuote);

  return (
    <FormContentContainer>
      <DisplayQuote />
      <DisplayTags />
      <RandomButton onClick={() => selectRandomQuote()} />
    </FormContentContainer>
  );
};

export default QuoteDisplay;
