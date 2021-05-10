import React from 'react';
import { AddQuoteSuccessText } from 'StylesLibrary/Atoms/DisplayQuoteModule/PageHeading/PageHeading.js';
import MoodPageTags from 'Modules/DisplayQuote/Components/MoodPage/MoodPageTags.js';
import MoodPageAuthor from 'Modules/DisplayQuote/Components/MoodPage/MoodPageAuthor.js';
import GoButton from 'StylesLibrary/Molecules/DisplayQuoteModule/Buttons/GoButton.js';
import { submitVibrations } from 'Utils/vibrations.js';

import { goButtonVibrations } from 'Utils/vibrations.js';

import { useDisplayQuoteDispatch } from 'Modules/DisplayQuote/State/DisplayQuoteState.js';
import {
  StaggerAnimationChildContainer,
  StaggerAnimationParentContainer
} from 'StylesLibrary/Animations/FramerAnimations';

const MoodPage = () => {
  const parentCntainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        duration: 0.9
      }
    },
    exit: { opacity: 0 }
  };

  const childContainer = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  };

  const dispatch = useDisplayQuoteDispatch();
  const createFilteredQuotes = () => {
    dispatch({
      type: 'DQ_CREATE_FILTEREDQUOTES'
    });
  };

  return (
    <>
      <StaggerAnimationParentContainer
        variants={parentCntainer}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <AddQuoteSuccessText>Whats your mood</AddQuoteSuccessText>
        <StaggerAnimationChildContainer variants={childContainer}>
          <MoodPageTags />
        </StaggerAnimationChildContainer>
        <StaggerAnimationChildContainer variants={childContainer}>
          <MoodPageAuthor />
        </StaggerAnimationChildContainer>
        <StaggerAnimationChildContainer variants={childContainer}>
          <GoButton
            onClick={() => {
              goButtonVibrations();
              createFilteredQuotes();
            }}
          />
        </StaggerAnimationChildContainer>
      </StaggerAnimationParentContainer>
    </>
  );
};

export default MoodPage;
