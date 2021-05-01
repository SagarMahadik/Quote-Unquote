import React from 'react';
import { InputButtonContainer } from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormInput/inputButton.js';
import InputButton from 'StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormInput/InputButton.js';
import FormSectionHeading from 'StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormSectionHeading/FormSectionHeading.js';
import {
  useAddQuoteState,
  useAddQuoteDispatch
} from 'Modules/AddQuote/State/AddQuoteState.js';

import { makeFirstLetterUpperCase } from 'Utils/stringOperations.js';
import PaginationTags from '../PaginationTags';

const Tags = () => {
  const {
    applicationData: { tagList },
    exploreMore: {
      explreMoreTotalCount,
      exploreMoreTagsCurrentCount,
      paginationStep
    }
  } = useAddQuoteState();
  const dispatch = useAddQuoteDispatch();

  return (
    <>
      <FormSectionHeading sectionName="Tags" />
      {tagList ? (
        <>
          <InputButtonContainer>
            {tagList
              .slice(0, paginationStep * exploreMoreTagsCurrentCount)
              .map(({ tagName, selected }) => {
                return (
                  <InputButton
                    buttonText={makeFirstLetterUpperCase(tagName)}
                    buttonSelected={selected}
                    onClick={() =>
                      dispatch({ type: 'SET_TAG', payload: tagName })
                    }
                  />
                );
              })}
          </InputButtonContainer>
          <PaginationTags />
        </>
      ) : null}
    </>
  );
};

export default Tags;
