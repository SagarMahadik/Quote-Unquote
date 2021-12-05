import React from 'react';

import {
  FlexRowContainer,
  OverflowScrollContainer,
  RowGridContainer
} from 'BennyStyleLibrary/Global/containerStyles';
import { useDisplayQuoteState } from 'Modules/DisplayQuote/State/DisplayQuoteState.js';
import {
  SpaceBetweenRowContainer,
  CenterAlignedColumnContainer
} from './../../../../BennyStyleLibrary/Global/containerStyles';
import { Text } from 'BennyStyleLibrary/Global/rootStyles';
import {
  MoodPageSelectedItemContainer,
  MoodPageSelectedItemText,
  MoodPageFilterScrollContainer,
  MoodPageSelectedItemIconContainer
} from './Styles/moodpageStyles';
import MoodPageSelectedItemCloseIcon from './Styles/Molecules/MoodPageSelectedItemCloseIcon';
import { AnimatePresence } from 'framer-motion';
import SelectedAuthorIcon from './Styles/Molecules/SelectedAuthorIcon';
import SelectedTagIcon from './Styles/Molecules/SelectedTagIcon';
import { playVibrations } from './../../../../Utils/vibrations';

const MoodPageSelectedFilter = ({ filter, keyIndex, onClick }) => {
  return (
    <>
      <MoodPageSelectedItemContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        key={keyIndex}
        onClick={onClick}
      >
        <MoodPageSelectedItemText>{filter}</MoodPageSelectedItemText>
        <MoodPageSelectedItemCloseIcon />
      </MoodPageSelectedItemContainer>
    </>
  );
};

const SelectedTagsAuthorContainer = () => {
  const { authorList, tagList, dispatch } = useDisplayQuoteState();

  return (
    <>
      <AnimatePresence>
        {authorList.filter(author => author.selected).length > 0 && (
          <FlexRowContainer
            alignItems="baseline"
            width="100%"
            style={{ maxWidth: '800px' }}
          >
            <MoodPageSelectedItemIconContainer>
              <SelectedAuthorIcon
                style={{ width: '30px', height: '30px', marginTop: '8px' }}
              />
            </MoodPageSelectedItemIconContainer>
            <MoodPageFilterScrollContainer
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {authorList
                .filter(author => author.selected)
                .map((author, index) => (
                  <AnimatePresence exitBeforeEnter>
                    <MoodPageSelectedFilter
                      filter={author.authorName}
                      key={author._id}
                      onClick={() => {
                        playVibrations(6);
                        dispatch({
                          type: 'DQ_HANDLE_CLICK_AUTHOR',
                          payload: author.authorName
                        });
                      }}
                    />
                  </AnimatePresence>
                ))}
            </MoodPageFilterScrollContainer>
          </FlexRowContainer>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {tagList.filter(tag => tag.selected).length > 0 && (
          <FlexRowContainer
            alignItems="center"
            width="100%"
            style={{ maxWidth: '800px' }}
          >
            <MoodPageSelectedItemIconContainer>
              <SelectedTagIcon
                style={{ width: '30px', height: '30px', marginTop: '16px' }}
              />
            </MoodPageSelectedItemIconContainer>
            <MoodPageFilterScrollContainer
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {tagList
                .filter(tag => tag.selected)
                .map((tag, index) => (
                  <AnimatePresence exitBeforeEnter>
                    <MoodPageSelectedFilter
                      filter={tag.tagName}
                      key={tag._id}
                      onClick={() => {
                        playVibrations(6);
                        dispatch({
                          type: 'DQ_HANDLE_CLICK_TAG',
                          payload: tag.tagName
                        });
                      }}
                    />
                  </AnimatePresence>
                ))}
            </MoodPageFilterScrollContainer>
          </FlexRowContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default SelectedTagsAuthorContainer;
