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
import {
  MoodPageAuthorButtonImage,
  MoodPageAuthorContainer,
  MoodPageSectionHeader,
  MoodPageAuthorButtonWrapper,
  MoodPageAuthorButtonText
} from './Styles/moodpageStyles';
import {
  useApplicationState,
  useApplicationDispatch
} from 'Modules/Authentication/State/ApplicationState.js';

const MoodPageAuthor = () => {
  const { appThemes, activeTheme } = useApplicationState();

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
      <MoodPageSectionHeader>Authors</MoodPageSectionHeader>
      <MoodPageAuthorContainer>
        {authorList
          .filter(author => author.authorImageUrl !== '')
          .map(({ authorName, selected, _id, authorImageUrl }) => {
            return (
              <MoodPageAuthorButtonWrapper
                buttonText={makeFirstLetterUpperCase(authorName)}
                selected={selected}
                onClick={() => handleClickOnAuthor(authorName)}
                key={_id}
                whileTap={{ scale: 1.2 }}
                selectedColor={appThemes[activeTheme]}
              >
                <MoodPageAuthorButtonImage
                  src={authorImageUrl}
                ></MoodPageAuthorButtonImage>
                <MoodPageAuthorButtonText>
                  {authorName}
                </MoodPageAuthorButtonText>
              </MoodPageAuthorButtonWrapper>
            );
          })}
      </MoodPageAuthorContainer>
      {authorList.length === 0 ? <InputButtonLoadingContainer /> : null}
    </>
  );
};

export default MoodPageAuthor;
