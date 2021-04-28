import React, { useEffect } from 'react';
import DisplayQuote from 'Modules/DisplayQuote/Components/QuoteDisplay/DisplayQuote.js';
import DisplayTags from 'Modules/DisplayQuote/Components/QuoteDisplay/DisplayTags.js';
import RandomButton from 'StylesLibrary/Atoms/GlobalQuoteModule/Buttons/RandomButton.js';
import FilterButton from 'StylesLibrary/Molecules/DisplayQuoteModule/Buttons/FilterButton.js';
import LogOutButton from 'StylesLibrary/Atoms/GlobalQuoteModule/Buttons/LogoutButton.js';
import {
  useDisplayQuoteState,
  useDisplayQuoteDispatch
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';
import { generateRandomInteger } from 'Modules/DisplayQuote/State/utils.js';

import {
  DisplayQuoteContiner,
  DisplayQuoteMainContainer
} from 'StylesLibrary/Atoms/DisplayQuoteModule/DisplayQuote/DisplayQuoteContainer.js';

import { AnimationContainer } from 'StylesLibrary/Animations/FramerAnimations.js';

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
    <AnimationContainer
      animate={{
        backgroundImage: [
          'radial-gradient(154% 68.86% at 132.29% 66.46%, rgba(98, 217, 227, 0.64) 0%, #E7EAEF 87.61%)',
          'radial-gradient(154% 68.86% at 132.29% 66.46%, #7674CC 0%, #E7EAEF 87.61%)',
          'radial-gradient(154% 68.86% at 132.29% 66.46%, rgba(37, 218, 185, 0.54) 0%, #E7EAEF 87.61%)'
        ]
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: 'reverse'
      }}
    >
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
          <RandomButton
            onClick={() => {
              dispatch({ type: 'HIDE_QUOTE' });
              setTimeout(() => {
                selectRandomQuote();
              }, 800);
            }}
          />
        </DisplayQuoteContiner>
        <DisplayFilterModal />
      </DisplayQuoteMainContainer>
    </AnimationContainer>
  );
};

export default QuoteDisplay;
