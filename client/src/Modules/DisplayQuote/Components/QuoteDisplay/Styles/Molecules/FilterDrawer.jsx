import React from 'react';
import MoodPage from 'Modules/DisplayQuote/Components/MoodPage/MoodPage.js';
import {
  FilterDrawerContainer,
  FilterDrawerCloseIcon
} from '../QuotePageStyles';
import CloseIcon from 'StyleLibrary1.0/Icons/CloseIcon.js';

import { useDisplayQuoteDispatch } from 'Modules/DisplayQuote/State/DisplayQuoteState';
import { useDisplayQuoteState } from 'Modules/DisplayQuote/State/DisplayQuoteState.js';
import { AnimatePresence } from 'framer-motion';
import { playVibrations } from './../../../../../../Utils/vibrations';

const FilterDrawer = () => {
  const dispatch = useDisplayQuoteDispatch();

  const { displayFilterModal } = useDisplayQuoteState();

  const handleModalClose = () => {
    dispatch({ type: 'DQ_TOGGLE_FILTERMODAL' });
  };

  return (
    <AnimatePresence>
      {displayFilterModal ? (
        <FilterDrawerContainer
          initial={{ opacity: 0, y: 700 }}
          key="filterDrawer"
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          exit={{ opacity: 0, y: 700 }}
        >
          <FilterDrawerCloseIcon>
            <CloseIcon
              onClick={() => {
                playVibrations(6);
                handleModalClose();
              }}
            />
          </FilterDrawerCloseIcon>
          <MoodPage />
        </FilterDrawerContainer>
      ) : null}
    </AnimatePresence>
  );
};

export default FilterDrawer;
