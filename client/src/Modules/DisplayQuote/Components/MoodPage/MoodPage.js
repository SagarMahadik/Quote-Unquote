import React from 'react';
import { FormContentContainer } from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormContainer/FormContainer.js';
import { AddQuoteSuccessText } from 'StylesLibrary/Atoms/DisplayQuoteModule/PageHeading/PageHeading.js';
import MoodPageTags from 'Modules/DisplayQuote/Components/MoodPage/MoodPageTags.js';
import MoodPageAuthor from 'Modules/DisplayQuote/Components/MoodPage/MoodPageAuthor.js';
import GoButton from 'StylesLibrary/Molecules/DisplayQuoteModule/Buttons/GoButton.js';

import {
  useDisplayQuoteDispatch,
  useDisplayQuoteState
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';

const MoodPage = () => {
  const dispatch = useDisplayQuoteDispatch();
  const createFilteredQuotes = () => {
    dispatch({
      type: 'DQ_CREATE_FILTEREDQUOTES'
    });
  };

  return (
    <FormContentContainer>
      <AddQuoteSuccessText>Whats your mood</AddQuoteSuccessText>
      <MoodPageTags />
      <MoodPageAuthor />
      <GoButton onClick={() => createFilteredQuotes()} />
    </FormContentContainer>
  );
};

export default MoodPage;
