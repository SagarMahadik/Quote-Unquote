import React from 'react';
import { AddQuoteSuccessText } from 'StylesLibrary/Atoms/DisplayQuoteModule/PageHeading/PageHeading.js';
import MoodPageTags from 'Modules/DisplayQuote/Components/MoodPage/MoodPageTags.js';
import MoodPageAuthor from 'Modules/DisplayQuote/Components/MoodPage/MoodPageAuthor.js';
import GoButton from 'StylesLibrary/Molecules/DisplayQuoteModule/Buttons/GoButton.js';
import { submitVibrations } from 'Utils/vibrations.js';

import { goButtonVibrations } from 'Utils/vibrations.js';

import { useDisplayQuoteDispatch } from 'Modules/DisplayQuote/State/DisplayQuoteState.js';

const MoodPage = () => {
  const dispatch = useDisplayQuoteDispatch();
  const createFilteredQuotes = () => {
    submitVibrations();
    dispatch({
      type: 'DQ_CREATE_FILTEREDQUOTES'
    });
  };

  return (
    <>
      <AddQuoteSuccessText>Whats your mood</AddQuoteSuccessText>
      <MoodPageTags />
      <MoodPageAuthor />
      <GoButton
        onClick={() => {
          goButtonVibrations();
          createFilteredQuotes();
        }}
      />
    </>
  );
};

export default MoodPage;
