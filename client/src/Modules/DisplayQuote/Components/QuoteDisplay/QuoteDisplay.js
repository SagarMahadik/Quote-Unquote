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
import PageHeading from 'Modules/Global/Components/PageHeading.js';

import {
  DisplayQuoteContiner,
  DisplayQuoteMainContainer,
  DisplayQuoteButtonContainer
} from 'StylesLibrary/Atoms/DisplayQuoteModule/DisplayQuote/DisplayQuoteContainer.js';

import GradientContainer from 'StylesLibrary/Animations/AnimationContainer/GradientContainer.js';

import DisplayFilterModal from 'Modules/DisplayQuote/Components/QuoteDisplay/DisplayFilterModal.js';
import PeacefulMusic from 'Modules/Sounds/PeacefulMusic.js';
import { randomButtonVibrations } from 'Utils/vibrations.js';
import { RightAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';

import { goButtonVibrations } from 'Utils/vibrations';

const QuoteDisplay = () => {
  const {
    filteredQuotes: { filterQuotesList },
    currentQuote,
    refreshFIlteredQuotes,
    displayFilterModal,
    styles: { containerHeight },
    selectQuotePostDelete
  } = useDisplayQuoteState();
  const dispatch = useDisplayQuoteDispatch();

  const selectRandomQuote = () => {
    let randomIndex = generateRandomInteger(1, filterQuotesList.length - 1);

    let randomQuote = filterQuotesList[randomIndex];

    dispatch({ type: 'DQ_SET_CURRENT_QUOTE', payload: randomQuote });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    selectRandomQuote();
  }, [refreshFIlteredQuotes]);

  useEffect(() => {
    if (selectQuotePostDelete) {
      selectRandomQuote();
    }
  }, [selectQuotePostDelete]);

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
    <>
      <PageHeading />
      <DisplayQuoteMainContainer quoteMainContainerHeight={containerHeight}>
        <DisplayQuoteContiner
          showModal={displayFilterModal}
          onClick={() => handleHideModal()}
        >
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

          <DisplayQuote selectRandomQuote={selectRandomQuote} />
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
    </>
  );
};

export default QuoteDisplay;
