import React from 'react';
import { useDisplayQuoteState } from 'Modules/DisplayQuote/State/DisplayQuoteState.js';
import {
  WrappedRowContainer,
  CenterAlignedColumnContainer
} from 'BennyStyleLibrary/Global/containerStyles';
import { MoodPageTab } from './Styles/moodpageStyles';

const MoodPageTabContainer = () => {
  const { dispatch, moodPageActiveTab } = useDisplayQuoteState();
  return (
    <>
      <WrappedRowContainer width="92%" marginTop="36px">
        <MoodPageTab
          selected={moodPageActiveTab === 'authors'}
          onClick={() =>
            dispatch({ type: 'DQ_MOODPAGE_SET_ACTIVETAB', payload: 'authors' })
          }
        >
          Authors
        </MoodPageTab>
        <MoodPageTab
          selected={moodPageActiveTab === 'tags'}
          onClick={() =>
            dispatch({ type: 'DQ_MOODPAGE_SET_ACTIVETAB', payload: 'tags' })
          }
        >
          Tags
        </MoodPageTab>
      </WrappedRowContainer>
    </>
  );
};

export default MoodPageTabContainer;
