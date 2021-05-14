import React, { useEffect } from 'react';
import { AddQuoteSuccessText } from 'StylesLibrary/Atoms/DisplayQuoteModule/PageHeading/PageHeading.js';
import MoodPageTags from 'Modules/DisplayQuote/Components/MoodPage/MoodPageTags.js';
import MoodPageAuthor from 'Modules/DisplayQuote/Components/MoodPage/MoodPageAuthor.js';
import GoButton from 'StylesLibrary/Molecules/DisplayQuoteModule/Buttons/GoButton.js';
import { MoodPageContainer } from 'Modules/DisplayQuote/Components/MoodPage/MoodPageContainer.js';

import { goButtonVibrations } from 'Utils/vibrations.js';

import {
  useDisplayQuoteDispatch,
  useDisplayQuoteState
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';

import StaggerAnimationContainer from 'StylesLibrary/Animations/AnimationContainer/PageAnimations/StaggerAnimationContainer.js';
import StaggerAnimationChild from 'StylesLibrary/Animations/AnimationContainer/PageAnimations/StaggerAnimationChild.js';

import { useApplicationState } from 'Modules/Authentication/State/ApplicationState.js';
import { useHistory } from 'react-router-dom';

import PageHeading from 'Modules/Global/Components/PageHeading';

const MoodPage = ({ hidePageheading }) => {
  const history = useHistory();

  const {
    user: { firstName },
    isUserAuthenticated,
    resetDisplayQuotes
  } = useApplicationState();

  const { displayQuotes } = useDisplayQuoteState();
  const dispatch = useDisplayQuoteDispatch();

  const createFilteredQuotes = () => {
    dispatch({
      type: 'DQ_CREATE_FILTEREDQUOTES'
    });
  };

  useEffect(() => {
    if (displayQuotes) {
      history.push('/readQuote');
    } else {
      return;
    }
  }, [displayQuotes]);

  return (
    <MoodPageContainer isGuestUser={!isUserAuthenticated}>
      {hidePageheading ? null : <PageHeading />}
      <StaggerAnimationContainer>
        <AddQuoteSuccessText isGuestUser={!isUserAuthenticated}>
          Whats your mood {firstName}?
        </AddQuoteSuccessText>
        <StaggerAnimationChild>
          <MoodPageTags />
        </StaggerAnimationChild>
        <StaggerAnimationChild>
          <MoodPageAuthor />
        </StaggerAnimationChild>
        <StaggerAnimationChild>
          <GoButton
            onClick={() => {
              goButtonVibrations();
              createFilteredQuotes();
            }}
          />
        </StaggerAnimationChild>
      </StaggerAnimationContainer>
    </MoodPageContainer>
  );
};

export default MoodPage;
