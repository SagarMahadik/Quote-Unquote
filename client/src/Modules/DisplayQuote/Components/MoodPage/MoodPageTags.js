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

const MoodPageTags = () => {
  const { tagList } = useDisplayQuoteState();
  const dispatch = useDisplayQuoteDispatch();

  const handleClickOnTag = tagName => {
    dispatch({ type: 'DQ_HANDLE_CLICK_TAG', payload: tagName });
  };

  return (
    <>
      <MoodPageSectionHeader>Tags</MoodPageSectionHeader>

      {tagList.length === 0 ? (
        <MoodPageSectionContainer>
          <MoodPageSkeletons />
        </MoodPageSectionContainer>
      ) : (
        <MoodPageSectionContainer>
          {tagList
            .filter(tag => tag.tagSVGIcon != '')
            .map(({ tagName, selected, _id, tagSVGIcon }) => {
              return (
                <MoodPageTagButtonWrapper
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
