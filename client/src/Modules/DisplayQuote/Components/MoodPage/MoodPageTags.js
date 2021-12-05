import React, { useRef, useState, useEffect } from 'react';
import {
  useDisplayQuoteState,
  useDisplayQuoteDispatch
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';

import { useApplicationState } from 'Modules/Authentication/State/ApplicationState.js';
import {
  MoodPageSectionContainer,
  MoodPageSectionHeader,
  MoodPageTagButtonSVG,
  MoodPageTagButtonText,
  MoodPageTagButtonWrapper
} from './Styles/moodpageStyles';
import MoodPageSkeletons from './Styles/Molecules/MoodPageSkeletons';
import { formClickVibrations } from 'Utils/vibrations.js';
import useGAEventTracker from './../../../../Utils/UIutils/useGAEventTracker';

const MoodPageTags = () => {
  const { tagList, displayFilterModal } = useDisplayQuoteState();
  const dispatch = useDisplayQuoteDispatch();
  const GAEventsTracker = useGAEventTracker('MoodPageTags');

  const handleClickOnTag = tagName => {
    GAEventsTracker.trackEvent('ClickOnTag', tagName);
    formClickVibrations();
    dispatch({ type: 'DQ_HANDLE_CLICK_TAG', payload: tagName });
  };

  return (
    <>
      {tagList.length === 0 ? (
        <MoodPageSectionContainer>
          <MoodPageSkeletons />
        </MoodPageSectionContainer>
      ) : (
        <MoodPageSectionContainer height={displayFilterModal ? '48vh' : '56vh'}>
          {tagList
            .filter(tag => tag.tagSVGIcon != '')
            .map(({ tagName, selected, _id, tagSVGIcon }) => {
              return (
                <MoodPageTagButtonWrapper
                  key={_id}
                  selected={selected}
                  onClick={() => handleClickOnTag(tagName)}
                  whileTap={{ scale: 1.2 }}
                >
                  <MoodPageTagButtonSVG src={tagSVGIcon}></MoodPageTagButtonSVG>
                  <MoodPageTagButtonText>{tagName}</MoodPageTagButtonText>
                </MoodPageTagButtonWrapper>
              );
            })}
        </MoodPageSectionContainer>
      )}
    </>
  );
};

export default MoodPageTags;
