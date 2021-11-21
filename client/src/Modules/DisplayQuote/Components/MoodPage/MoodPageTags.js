import React, { useRef, useState, useEffect } from 'react';
import FormSectionHeading from 'StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormSectionHeading/FormSectionHeading.js';
import {
  InputButtonContainer,
  ExploreMoreButton,
  ExploreMoreButtonContainer
} from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormInput/inputButton.js';
import InputButton from 'StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormInput/InputButton.js';
import { RightAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles.js';
import { tagsList } from 'Modules/DisplayQuote/Components/MoodPage/MoodPageSeed.js';
import {
  useDisplayQuoteState,
  useDisplayQuoteDispatch
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';

import {
  useApplicationState,
  useApplicationDispatch
} from 'Modules/Authentication/State/ApplicationState.js';
import { makeFirstLetterUpperCase } from 'Utils/stringOperations.js';

import PaginationTags from 'Modules/DisplayQuote/Components/MoodPage/PaginationTags.js';
import InputButtonLoadingContainer from 'StylesLibrary/Molecules/LoadingModule/InputButtonLoadingContainer';
import {
  MoodPageSectionContainer,
  MoodPageSectionHeader,
  MoodPageTagButtonSVG,
  MoodPageTagButtonText,
  MoodPageTagButtonWrapper
} from './Styles/moodpageStyles';

const MoodPageTags = () => {
  const { appThemes, activeTheme } = useApplicationState();

  const {
    tagList,
    exploreMore: {
      explreMoreTotalCount,
      exploreMoreCurrentCount,
      paginationStep
    }
  } = useDisplayQuoteState();
  const dispatch = useDisplayQuoteDispatch();

  const handleClickOnTag = tagName => {
    dispatch({ type: 'DQ_HANDLE_CLICK_TAG', payload: tagName });
  };

  return (
    <>
      <MoodPageSectionHeader>Tags</MoodPageSectionHeader>

      {tagList.length === 0 ? (
        <MoodPageSectionContainer>
          <MoodPageTagButtonWrapper background="rgba(255,255,255,0.4)">
            <MoodPageTagButtonSVG background="rgba(255,255,255,0.8)"></MoodPageTagButtonSVG>
            <MoodPageTagButtonText></MoodPageTagButtonText>
          </MoodPageTagButtonWrapper>
          <MoodPageTagButtonWrapper background="rgba(255,255,255,0.4)">
            <MoodPageTagButtonSVG background="rgba(255,255,255,0.8)"></MoodPageTagButtonSVG>
            <MoodPageTagButtonText></MoodPageTagButtonText>
          </MoodPageTagButtonWrapper>
          <MoodPageTagButtonWrapper background="rgba(255,255,255,0.4)">
            <MoodPageTagButtonSVG background="rgba(255,255,255,0.8)"></MoodPageTagButtonSVG>
            <MoodPageTagButtonText></MoodPageTagButtonText>
          </MoodPageTagButtonWrapper>
          <MoodPageTagButtonWrapper background="rgba(255,255,255,0.4)">
            <MoodPageTagButtonSVG background="rgba(255,255,255,0.8)"></MoodPageTagButtonSVG>
            <MoodPageTagButtonText></MoodPageTagButtonText>
          </MoodPageTagButtonWrapper>
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
