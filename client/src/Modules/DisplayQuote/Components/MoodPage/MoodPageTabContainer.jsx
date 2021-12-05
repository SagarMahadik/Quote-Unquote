import React from 'react';
import { useDisplayQuoteState } from 'Modules/DisplayQuote/State/DisplayQuoteState.js';
import {
  WrappedRowContainer,
  CenterAlignedColumnContainer
} from 'BennyStyleLibrary/Global/containerStyles';
import { MoodPageTab, MoodPageTabWrapper } from './Styles/moodpageStyles';
import { playVibrations } from './../../../../Utils/vibrations';

const MoodPageTabContainer = () => {
  const { dispatch, moodPageActiveTab } = useDisplayQuoteState();
  return (
    <>
      <MoodPageTabWrapper width="92%" marginTop="36px">
        <MoodPageTab
          selected={moodPageActiveTab === 'authors'}
          onClick={() => {
            playVibrations(6);
            dispatch({ type: 'DQ_MOODPAGE_SET_ACTIVETAB', payload: 'authors' });
          }}
        >
          Authors
        </MoodPageTab>
        <MoodPageTab
          selected={moodPageActiveTab === 'tags'}
          onClick={() => {
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
