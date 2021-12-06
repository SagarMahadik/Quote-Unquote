import React from 'react';
import { useDisplayQuoteState } from 'Modules/DisplayQuote/State/DisplayQuoteState.js';
import { MoodPageTab, MoodPageTabWrapper } from './Styles/moodpageStyles';
import { playVibrations } from './../../../../Utils/vibrations';
import useGAEventTracker from './../../../../Utils/UIutils/useGAEventTracker';

const MoodPageTabContainer = () => {
  const { dispatch, moodPageActiveTab } = useDisplayQuoteState();

  const GAEventTracker = useGAEventTracker('MoodPageTab');

  return (
    <>
      <MoodPageTabWrapper width="92%" marginTop="36px">
        <MoodPageTab
          selected={moodPageActiveTab === 'authors'}
          onClick={() => {
            GAEventTracker('Authors');
            playVibrations(6);
            dispatch({ type: 'DQ_MOODPAGE_SET_ACTIVETAB', payload: 'authors' });
          }}
        >
          Authors
        </MoodPageTab>
        <MoodPageTab
          selected={moodPageActiveTab === 'tags'}
          onClick={() => {
            GAEventTracker('Tags');
            playVibrations(6);
            dispatch({ type: 'DQ_MOODPAGE_SET_ACTIVETAB', payload: 'tags' });
          }}
        >
          Tags
        </MoodPageTab>
      </MoodPageTabWrapper>
    </>
  );
};

export default MoodPageTabContainer;
