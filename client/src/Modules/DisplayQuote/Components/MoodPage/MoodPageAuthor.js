import React from 'react';

import {
  useDisplayQuoteState,
  useDisplayQuoteDispatch
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';

import { makeFirstLetterUpperCase } from 'Utils/stringOperations.js';
import {
  MoodPageAuthorButtonImage,
  MoodPageAuthorContainer,
  MoodPageSectionHeader,
  MoodPageAuthorButtonWrapper,
  MoodPageAuthorButtonText
} from './Styles/moodpageStyles';
import { useApplicationState } from 'Modules/Authentication/State/ApplicationState.js';
import MoodPageSkeletons from './Styles/Molecules/MoodPageSkeletons';
import { CenterAlignedColumnContainer } from 'BennyStyleLibrary/Global/containerStyles';

const MoodPageAuthor = () => {
  const { appThemes, activeTheme } = useApplicationState();

  const { authorList } = useDisplayQuoteState();
  const dispatch = useDisplayQuoteDispatch();
  const handleClickOnAuthor = authorName => {
    dispatch({ type: 'DQ_HANDLE_CLICK_AUTHOR', payload: authorName });
  };
  return (
    <>
      <MoodPageSectionHeader>Authors</MoodPageSectionHeader>
      {authorList.length === 0 ? (
        <MoodPageAuthorContainer>
          <MoodPageSkeletons />
        </MoodPageAuthorContainer>
      ) : (
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
                  <CenterAlignedColumnContainer height="60px">
                    <MoodPageAuthorButtonText>
                      {authorName}
                    </MoodPageAuthorButtonText>
                  </CenterAlignedColumnContainer>
                </MoodPageAuthorButtonWrapper>
              );
            })}
        </MoodPageAuthorContainer>
      )}
    </>
  );
};

export default MoodPageAuthor;
