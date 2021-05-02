import React, { useEffect } from 'react';
import DisplayQuote from 'Modules/DisplayQuote/Components/QuoteDisplay/DisplayQuote.js';
import DisplayTags from 'Modules/DisplayQuote/Components/QuoteDisplay/DisplayTags.js';
import RandomButton from 'StylesLibrary/Atoms/GlobalQuoteModule/Buttons/RandomButton.js';
import FilterButton from 'StylesLibrary/Molecules/DisplayQuoteModule/Buttons/FilterButton.js';
import WhatsAppButton from 'StylesLibrary/Molecules/DisplayQuoteModule/Buttons/WhatsAppButton.js';
import {
  useDisplayQuoteState,
  useDisplayQuoteDispatch
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';
import { generateRandomInteger } from 'Modules/DisplayQuote/State/utils.js';

import {
  DisplayQuoteContiner,
  DisplayQuoteMainContainer
} from 'StylesLibrary/Atoms/DisplayQuoteModule/DisplayQuote/DisplayQuoteContainer.js';

import GradientContainer from 'StylesLibrary/Animations/AnimationContainer/GradientContainer.js';

import DisplayFilterModal from 'Modules/DisplayQuote/Components/QuoteDisplay/DisplayFilterModal.js';
import PeacefulMusic from 'Modules/Sounds/PeacefulMusic.js';
import { randomButtonVibrations } from 'Utils/vibrations.js';
import { RightAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';

const QuoteDisplay = () => {
  const {
    filteredQuotes: { filterQuotesList },
    currentQuote,
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
    <GradientContainer>
      <DisplayQuoteMainContainer>
        <DisplayQuoteContiner
          showModal={displayFilterModal}
          onClick={() => handleHideModal()}
        >
          <RightAlignedColumnContainer marginTop="2rem">
            <FilterButton
              onClick={() => dispatch({ type: 'DQ_TOGGLE_FILTERMODAL' })}
            />
          </RightAlignedColumnContainer>
          <RightAlignedColumnContainer>
            <WhatsAppButton onClick={() => printDocument()} />
          </RightAlignedColumnContainer>
          <DisplayQuote />
          <DisplayTags />

          <RandomButton
            onClick={() => {
              randomButtonVibrations();
              dispatch({ type: 'HIDE_QUOTE' });
              setTimeout(() => {
                selectRandomQuote();
              }, 700);
            }}
            style={{ marginTop: '1rem' }}
          />
        </DisplayQuoteContiner>
        <DisplayFilterModal />
      </DisplayQuoteMainContainer>
      <PeacefulMusic />
    </GradientContainer>
  );
};

export default QuoteDisplay;
