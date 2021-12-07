import React from 'react';
import { QuotePageIconContainer } from '../QuotePageStyles';
import ShareIcon from './ShareIcon';
import FilterIcon from './FilterIcon';
import { goButtonVibrations } from 'Utils/vibrations.js';
import { useDisplayQuoteDispatch } from 'Modules/DisplayQuote/State/DisplayQuoteState';
import { playVibrations } from './../../../../../../Utils/vibrations';
import useGAEventTracker from './../../../../../../Utils/UIutils/useGAEventTracker';

const ActionIcons = ({ currentQuote, currentAuthor, onClick }) => {
  const dispatch = useDisplayQuoteDispatch();

  const GAEventTracker = useGAEventTracker('Quote Display_Actions');

  const sendText = async () => {
    dispatch({ type: 'DQ_TOGGLE_ACTIONBUTTONS' });
    navigator
      .share({
        title: 'title',
        text: `${currentQuote}-${currentAuthor}`
      })
      .then(() => console.log('Successful share'))
      .catch(error => console.log('Error in sharing', error));
  };
  const handleHideModal = () => {
    playVibrations(8);
    dispatch({ type: 'DQ_TOGGLE_FILTERMODAL' });
  };
  return (
    <QuotePageIconContainer
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <FilterIcon
        onClick={() => {
          GAEventTracker('QuoteDisplay_Icon', 'Filter');
          dispatch({ type: 'DQ_TOGGLE_ACTIONBUTTONS' });
          handleHideModal();
        }}
        style={{ width: '35px', height: '35px' }}
      />
      <ShareIcon
        onClick={() => {
          GAEventTracker('QuoteDisplay_Icon', 'Share');
          goButtonVibrations();
          sendText();
        }}
        style={{ width: '24px', height: '30px' }}
      />
    </QuotePageIconContainer>
  );
};

export default ActionIcons;
