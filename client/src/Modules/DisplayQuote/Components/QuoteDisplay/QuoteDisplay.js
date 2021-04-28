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
          'radial-gradient(189.29% 95% at 169.57% 92.53%, #7674CC 7.16%, rgba(179, 240, 240, 0.84) 85.5%)',
          'radial-gradient(217% 126.71% at -38.86% 122.53%, #D5D795 7.16%, rgba(179, 240, 240, 0.84) 85.5%)',
          'radial-gradient(189.29% 95% at 169.57% 92.53%, rgba(255, 90, 115, 0.69) 7.16%, rgba(179, 240, 240, 0.84) 85.5%)',
          'radial-gradient(189.29% 95% at 169.57% 92.53%, #D5D795 7.16%, rgba(179, 240, 240, 0.84) 85.5%)',   
          ' radial-gradient(230.86% 95.82% at -38.86% 122.53%, rgba(125, 184, 238, 0.86) 7.16%, #9BD986 85.5%)',     
          'radial-gradient(230.86% 95.82% at -38.86% 122.53%, rgba(188, 120, 242, 0.37) 7.16%, rgba(179, 240, 240, 0.84) 85.5%)',
          'radial-gradient(230.86% 95.82% at -38.86% 122.53%, #7FD29B 7.16%, rgba(179, 240, 240, 0.84) 85.5%)'
        ]
      }}
      transition={{
        duration: 18,
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
