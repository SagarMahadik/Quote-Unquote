import React, { useEffect } from 'react';
import DisplayQuote from 'Modules/DisplayQuote/Components/QuoteDisplay/DisplayQuote.js';
import DisplayTags from 'Modules/DisplayQuote/Components/QuoteDisplay/DisplayTags.js';
import RandomButton from 'StylesLibrary/Atoms/GlobalQuoteModule/Buttons/RandomButton.js';
import FilterButton from 'StylesLibrary/Molecules/DisplayQuoteModule/Buttons/FilterButton.js';
import {
  useDisplayQuoteState,
  useDisplayQuoteDispatch
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';
import { generateRandomInteger } from 'Modules/DisplayQuote/State/utils.js';

import {
  DisplayQuoteContiner,
  DisplayQuoteMainContainer
} from 'StylesLibrary/Atoms/DisplayQuoteModule/DisplayQuote/DisplayQuoteContainer.js';

import DisplayFilterModal from 'Modules/DisplayQuote/Components/QuoteDisplay/DisplayFilterModal.js';

const QuoteDisplay = () => {
  const {
    filteredQuotes: { filterQuotesList },

    refreshFIlteredQuotes,
    displayFilterModal
  } = useDisplayQuoteState();
  const dispatch = useDisplayQuoteDispatch();

  const selectRandomQuote = () => {
    let randomIndex = generateRandomInteger(1, filterQuotesList.length - 1);

    let randomQuote = filterQuotesList[randomIndex];
    dispatch({ type: 'DQ_SET_CURRENT_QUOTE', payload: randomQuote });
  };
  useEffect(() => {
    selectRandomQuote();
  }, [refreshFIlteredQuotes]);

  const handleHideModal = () => {
    if (displayFilterModal) {
      dispatch({ type: 'DQ_TOGGLE_FILTERMODAL' });
    }
  };

  return (
    <DisplayQuoteMainContainer>
      <DisplayQuoteContiner
        showModal={displayFilterModal}
        onClick={() => handleHideModal()}
      >
        <FilterButton
          onClick={() => dispatch({ type: 'DQ_TOGGLE_FILTERMODAL' })}
        />
        <DisplayQuote />
        <DisplayTags />
        <RandomButton onClick={() => selectRandomQuote()} />
      </DisplayQuoteContiner>
      <DisplayFilterModal />
    </DisplayQuoteMainContainer>
  );
};

export default QuoteDisplay;
