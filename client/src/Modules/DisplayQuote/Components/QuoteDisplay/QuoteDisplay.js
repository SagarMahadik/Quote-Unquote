import React, { useEffect } from 'react';
import DisplayQuote from 'Modules/DisplayQuote/Components/QuoteDisplay/DisplayQuote.js';
import DisplayTags from 'Modules/DisplayQuote/Components/QuoteDisplay/DisplayTags.js';
import RandomButton from 'StylesLibrary/Atoms/GlobalQuoteModule/Buttons/RandomButton.js';

import {
  useDisplayQuoteState,
  useDisplayQuoteDispatch
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';
import { generateRandomInteger } from 'Modules/DisplayQuote/State/utils.js';
import PageHeading from 'Modules/Global/Components/PageHeading.js';

import {
  DisplayQuoteContiner,
  DisplayQuoteMainContainer
} from 'StylesLibrary/Atoms/DisplayQuoteModule/DisplayQuote/DisplayQuoteContainer.js';

import GradientContainer from 'StylesLibrary/Animations/AnimationContainer/GradientContainer.js';

import DisplayFilterModal from 'Modules/DisplayQuote/Components/QuoteDisplay/DisplayFilterModal.js';
import PeacefulMusic from 'Modules/Sounds/PeacefulMusic.js';
import { randomButtonVibrations } from 'Utils/vibrations.js';
import { CenterAlignedColumnContainerWithShadowBackground } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';
import QuoteDisplayButtons from './QuoteDisplayButtons';
import { useApplicationState } from 'Modules/Authentication/State/ApplicationState.js';

import { useHistory } from 'react-router-dom';
import PageAnimationOpacity from 'StylesLibrary/Animations/AnimationContainer/PageAnimations/PageOpacityAnimationContainer.js';
import { QuotePageContainer } from './QuoteDisplayContainer';

const QuoteDisplay = () => {
  const { isUserAuthenticated } = useApplicationState();
  const {
    filteredQuotes: { filterQuotesList },
    refreshFIlteredQuotes,
    displayFilterModal,
    styles: { containerHeight },
    selectQuotePostDelete,
    displayQuotes
  } = useDisplayQuoteState();
  const dispatch = useDisplayQuoteDispatch();

  const selectRandomQuote = () => {
    let randomIndex = generateRandomInteger(1, filterQuotesList.length - 1);

    let randomQuote = filterQuotesList[randomIndex];

    dispatch({ type: 'DQ_SET_CURRENT_QUOTE', payload: randomQuote });
  };
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!displayQuotes) {
      history.push('/moodPage');
    }
  }, [displayQuotes]);

  useEffect(() => {
    if (refreshFIlteredQuotes) {
      selectRandomQuote();
    }
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
    <PageAnimationOpacity>
      {displayQuotes ? (
        <QuotePageContainer isGuestUser={!isUserAuthenticated}>
          <GradientContainer>
            <PageHeading />
            <DisplayQuoteMainContainer
              quoteMainContainerHeight={containerHeight}
              style={{
                width: '98%',
                marginTop: !isUserAuthenticated ? '3rem' : '2rem'
              }}
              isGuestUser={!isUserAuthenticated}
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
        </QuotePageContainer>
      ) : null}
    </PageAnimationOpacity>
  );
};

export default QuoteDisplay;
