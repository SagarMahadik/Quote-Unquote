import React from 'react';
import FormSectionHeading from 'StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormSectionHeading/FormSectionHeading.js';
import { InputButtonContainer } from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormInput/inputButton.js';
import InputButton from 'StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormInput/InputButton.js';
import { tagsList } from 'Modules/DisplayQuote/Components/MoodPage/MoodPageSeed.js';
import {
  useDisplayQuoteState,
  useDisplayQuoteDispatch
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';

const MoodPageTags = () => {
  const { tagList } = useDisplayQuoteState();
  const dispatch = useDisplayQuoteDispatch();

  const handleClickOnTag = tagName => {
    dispatch({ type: 'DQ_HANDLE_CLICK_TAG', payload: tagName });
  };
  return (
    <>
      <FormSectionHeading sectionName="Tags" />
      <InputButtonContainer>
        {tagList.map(({ tagName, selected }) => {
          return (
            <InputButton
              buttonText={tagName}
              buttonSelected={selected}
              onClick={() => handleClickOnTag(tagName)}
            />
          );
        })}
      </InputButtonContainer>
    </>
  );
};

export default MoodPageTags;
