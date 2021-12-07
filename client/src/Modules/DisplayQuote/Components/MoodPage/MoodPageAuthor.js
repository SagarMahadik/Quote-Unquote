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
  MoodPageAuthorButtonText,
  MoodPageAuthorTagContainer,
  MoodPageAuthorTagText
} from './Styles/moodpageStyles';
import { useApplicationState } from 'Modules/Authentication/State/ApplicationState.js';
import MoodPageSkeletons from './Styles/Molecules/MoodPageSkeletons';
import { CenterAlignedColumnContainer } from 'BennyStyleLibrary/Global/containerStyles';
import { formClickVibrations } from 'Utils/vibrations.js';
import useGAEventTracker from './../../../../Utils/UIutils/useGAEventTracker';
import MoodPageAuthorInfoIcons from './Styles/Molecules/MoodPageAuthorInfoIcons';

const MoodPageAuthor = () => {
  const { appThemes, activeTheme } = useApplicationState();

  const { authorList, displayFilterModal } = useDisplayQuoteState();
  const dispatch = useDisplayQuoteDispatch();

  const GAEventsTracker = useGAEventTracker('MoodPageAuthor');

  const handleClickOnAuthor = authorName => {
    GAEventsTracker('ClickonAUthor', authorName);
    formClickVibrations();
    dispatch({ type: 'DQ_HANDLE_CLICK_AUTHOR', payload: authorName });
  };

  //const authorTags = ['Brainy', 'Relax', 'Dark'];

  const createAuthorTagArray = string => {
    var array = string.split(',');
    return array;
  };

  return (
    <>
      {authorList.length === 0 ? (
        <MoodPageAuthorContainer>
          <MoodPageSkeletons />
        </MoodPageAuthorContainer>
      ) : (
        <MoodPageAuthorContainer height={displayFilterModal ? '48vh' : '58vh'}>
          {authorList
            .filter(author => author.authorImageUrl !== '')
            .map(
              ({
                authorName,
                selected,
                _id,
                authorImageUrl,
                authorTag,
                tapped
              }) => {
                return (
                  <MoodPageAuthorButtonWrapper
                    buttonText={makeFirstLetterUpperCase(authorName)}
                    selected={selected}
                    onClick={() => handleClickOnAuthor(authorName)}
                    key={_id}
                    onTapStart={() =>
                      dispatch({
                        type: 'DQ_HANDLE_TAP_SET_AUTHORTAG',
                        payload: authorName
                      })
                    }
                    onTapCancel={() =>
                      dispatch({
                        type: 'DQ_HANDLE_TAP_REMOVE_AUTHORTAG',
                        payload: authorName
                      })
                    }
                    selectedColor={appThemes[activeTheme]}
                  >
                    {authorTag != '' ? (
                      <MoodPageAuthorTagContainer tagPresent={authorTag != ''}>
                        {createAuthorTagArray(authorTag).map(tag => {
                          return <MoodPageAuthorInfoIcons tag={tag} />;
                        })}
                      </MoodPageAuthorTagContainer>
                    ) : null}

                    <MoodPageAuthorButtonImage
                      src={authorImageUrl}
                    ></MoodPageAuthorButtonImage>
                    <CenterAlignedColumnContainer height="60px" marginTop="6px">
                      <MoodPageAuthorButtonText>
                        {authorName}
                      </MoodPageAuthorButtonText>
                    </CenterAlignedColumnContainer>
                  </MoodPageAuthorButtonWrapper>
                );
              }
            )}
        </MoodPageAuthorContainer>
      )}
    </>
  );
};

export default MoodPageAuthor;
