import React from 'react';
import FormSectionHeading from 'StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormSectionHeading/FormSectionHeading.js';
import { InputButtonContainer } from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormInput/inputButton.js';
import InputButton from 'StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormInput/InputButton.js';
import { authorList } from 'Modules/DisplayQuote/Components/MoodPage/MoodPageSeed.js';
import {
  useDisplayQuoteState,
  useDisplayQuoteDispatch
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';

const MoodPageAuthor = () => {
  const { authorList } = useDisplayQuoteState();
  const dispatch = useDisplayQuoteDispatch();
  const handleClickOnAuthor = authorName => {
    dispatch({ type: 'DQ_HANDLE_CLICK_AUTHOR', payload: authorName });
  };
  return (
    <>
      <FormSectionHeading sectionName="Authors" />
      <InputButtonContainer>
        {authorList.map(({ authorName, selected }) => {
          return (
            <InputButton
              buttonText={authorName}
              buttonSelected={selected}
              onClick={() => handleClickOnAuthor(authorName)}
            />
          );
        })}
      </InputButtonContainer>
    </>
  );
};

export default MoodPageAuthor;
