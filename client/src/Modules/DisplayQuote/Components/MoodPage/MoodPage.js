import React, { useEffect } from 'react';
import MoodPageTags from 'Modules/DisplayQuote/Components/MoodPage/MoodPageTags.js';
import MoodPageAuthor from 'Modules/DisplayQuote/Components/MoodPage/MoodPageAuthor.js';
import {
  MoodPageContainer,
  MoodPageHeader,
  MoodPageTagContainer
} from './Styles/moodpageStyles.js';
import { goButtonVibrations } from 'Utils/vibrations.js';

import {
  useDisplayQuoteDispatch,
  useDisplayQuoteState
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';

import { useApplicationState } from 'Modules/Authentication/State/ApplicationState.js';
import { useHistory } from 'react-router-dom';
import MoodPageStartReadingButton from 'Modules/DisplayQuote/Components/MoodPage/Styles/Molecules/MoodPageStartReadingButton.jsx';
import { quQTheme } from 'BennyStyleLibrary/Themes/darkTheme.js';
import MoodPageStaggerParent from './Styles/Molecules/MoodPageStaggerParent.jsx';

import MoodPageTabContainer from './MoodPageTabContainer.jsx';
import SelectedTagsAuthorContainer from './SelectedTagsAuthorContainer';
import useGAEventTracker from './../../../../Utils/UIutils/useGAEventTracker';

const MoodPage = ({ hidePageheading }) => {
  const history = useHistory();

  const { themeIndex } = useApplicationState();

  const {
    displayQuotes,
    displayFilterModal,
    moodPageActiveTab
  } = useDisplayQuoteState();
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
      return;
    }
  }, [displayQuotes]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const GAEventTracker = useGAEventTracker('MoodPage');

  return (
    <MoodPageContainer
      background={`radial-gradient(103.04% 56.47% at 49.87% 50%, ${quQTheme[themeIndex].primaryColor} 30.25%, ${quQTheme[themeIndex].secondaryColor} 100%)`}
      displayInDrawer={displayFilterModal}
    >
      <MoodPageStaggerParent>
        {displayFilterModal ? (
          <MoodPageHeader>Your selections</MoodPageHeader>
        ) : (
          <MoodPageHeader>Whats your mood?</MoodPageHeader>
        )}

        <SelectedTagsAuthorContainer />
        <MoodPageTabContainer />

        {moodPageActiveTab === 'tags' ? <MoodPageTags /> : <MoodPageAuthor />}

        <MoodPageStartReadingButton
          onClick={() => {
            GAEventTracker('MoodPage', 'StartReadingButton');
            goButtonVibrations();
            createFilteredQuotes();
          }}
        />
      </MoodPageStaggerParent>
    </MoodPageContainer>
  );
};

export default MoodPage;
