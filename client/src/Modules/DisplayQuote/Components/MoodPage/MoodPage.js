import React, { useEffect } from 'react';
import MoodPageTags from 'Modules/DisplayQuote/Components/MoodPage/MoodPageTags.js';
import MoodPageAuthor from 'Modules/DisplayQuote/Components/MoodPage/MoodPageAuthor.js';
import { MoodPageContainer, MoodPageHeader } from './Styles/moodpageStyles.js';
import { goButtonVibrations } from 'Utils/vibrations.js';

import {
  useDisplayQuoteDispatch,
  useDisplayQuoteState
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';

import StaggerAnimationContainer from 'StylesLibrary/Animations/AnimationContainer/PageAnimations/StaggerAnimationContainer.js';
import StaggerAnimationChild from 'StylesLibrary/Animations/AnimationContainer/PageAnimations/StaggerAnimationChild.js';

import { useApplicationState } from 'Modules/Authentication/State/ApplicationState.js';
import { useHistory } from 'react-router-dom';
import MoodPageStartReadingButton from 'Modules/DisplayQuote/Components/MoodPage/Styles/Molecules/MoodPageStartReadingButton.jsx';

const MoodPage = ({ hidePageheading }) => {
  const history = useHistory();

  const {
    user: { firstName },
    isUserAuthenticated,
    resetDisplayQuotes
  } = useApplicationState();

  const { displayQuotes, displayFilterModal } = useDisplayQuoteState();
  const dispatch = useDisplayQuoteDispatch();

  const createFilteredQuotes = () => {
    dispatch({
      type: 'DQ_CREATE_FILTEREDQUOTES'
    });
  };

  useEffect(() => {
    window.onpopstate = e => history.push('/');
  }, []);

  useEffect(() => {
    if (displayQuotes) {
      history.push('/readQuote');
    } else {
      history.push('/moodPage');
    }
  }, [displayQuotes]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MoodPageContainer displayInDrawer={displayFilterModal}>
      <StaggerAnimationContainer>
        {displayFilterModal ? null : (
          <MoodPageHeader>Whats your mood?</MoodPageHeader>
        )}
        <StaggerAnimationChild>
          <MoodPageTags />
        </StaggerAnimationChild>
        <StaggerAnimationChild>
          <MoodPageAuthor />
        </StaggerAnimationChild>
        <StaggerAnimationChild>
          <MoodPageStartReadingButton
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
