import React from 'react';
import FormSectionHeading from 'StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormSectionHeading/FormSectionHeading.js';
import { InputButtonContainer } from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormInput/inputButton.js';
import InputButton from 'StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormInput/InputButton.js';
import { authorList } from 'Modules/DisplayQuote/Components/MoodPage/MoodPageSeed.js';
import {
  useDisplayQuoteState,
  useDisplayQuoteDispatch
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';
import PaginationAuthors from 'Modules/DisplayQuote/Components/MoodPage/PaginationAuthors.js';
import InputButtonLoadingContainer from 'StylesLibrary/Molecules/LoadingModule/InputButtonLoadingContainer';
import { makeFirstLetterUpperCase } from 'Utils/stringOperations.js';

const MoodPageAuthor = () => {
  const {
    authorList,
    exploreMore: {
      authors: { exploreMoreCurrentCount },
      paginationStep
    }
  } = useDisplayQuoteState();
  const dispatch = useDisplayQuoteDispatch();
  const handleClickOnAuthor = authorName => {
    dispatch({ type: 'DQ_HANDLE_CLICK_AUTHOR', payload: authorName });
  };
  return (
    <>
      <FormSectionHeading sectionName="Authors" />
      <InputButtonContainer>
        {authorList
          .slice(0, paginationStep * exploreMoreCurrentCount)
          .map(({ authorName, selected, _id }) => {
            return (
              <InputButton
                buttonText={makeFirstLetterUpperCase(authorName)}
                buttonSelected={selected}
                onClick={() => handleClickOnAuthor(authorName)}
                key={_id}
              />
            );
          })}
      </InputButtonContainer>
      {authorList.length === 0 ? <InputButtonLoadingContainer /> : null}
      <PaginationAuthors />
    </>
  );
};

export default MoodPageAuthor;
