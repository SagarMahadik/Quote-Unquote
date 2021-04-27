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

import PaginationTags from 'Modules/DisplayQuote/Components/MoodPage/PaginationTags.js';
import InputButtonLoadingContainer from 'StylesLibrary/Molecules/LoadingModule/InputButtonLoadingContainer';

const MoodPageTags = () => {
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
      <FormSectionHeading sectionName="Tags" />
      <InputButtonContainer>
        {tagList
          .slice(0, paginationStep * exploreMoreCurrentCount)
          .map(({ tagName, selected }) => {
            return (
              <InputButton
                buttonText={tagName}
                buttonSelected={selected}
                onClick={() => handleClickOnTag(tagName)}
              />
            );
          })}
      </InputButtonContainer>
      {tagList.length === 0 ? <InputButtonLoadingContainer /> : null}
      <PaginationTags />
    </>
  );
};

export default MoodPageTags;
