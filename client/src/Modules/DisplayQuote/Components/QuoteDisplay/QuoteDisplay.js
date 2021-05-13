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
import { CenterAlignedColumnContainerWithShadowBackground } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';
import QuoteDisplayButtons from './QuoteDisplayButtons';
import {
  useApplicationState,
  useApplicationDispatch
} from 'Modules/Authentication/State/ApplicationState.js';

import { goButtonVibrations } from 'Utils/vibrations';

const QuoteDisplay = () => {
  const { isUserAuthenticated } = useApplicationState();
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

  return (
    <CenterAlignedColumnContainerWithShadowBackground>
      <GradientContainer>
        <PageHeading />
        <DisplayQuoteMainContainer
          quoteMainContainerHeight={containerHeight}
          style={{
            width: '98%',
            marginTop: !isUserAuthenticated ? '3rem' : '2rem'
          }}
        >
          <DisplayQuoteContiner
            showModal={displayFilterModal}
            onClick={() => handleHideModal()}
          >
            <QuoteDisplayButtons />

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
      </GradientContainer>
      <PeacefulMusic />
    </CenterAlignedColumnContainerWithShadowBackground>
  );
};

export default QuoteDisplay;
