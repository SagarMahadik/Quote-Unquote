import React from 'react';
import {
  useDisplayQuoteState,
  useDisplayQuoteDispatch
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';

import { AnimationContainer } from 'StylesLibrary/Animations/FramerAnimations.js';

const DragToDelete = ({ children }) => {
  const {
    currentQuote,
    displayQuote,
    editQuoteText: { editQuoteText },
    deleteQuote: { deleteQuote, dragStart }
  } = useDisplayQuoteState();

  const dispatch = useDisplayQuoteDispatch();
  return (
    <AnimationContainer
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1
      }}
      transition={{
        ease: 'easeOut',
        duration: 0.8
      }}
      exit={{ opacity: 0 }}
      onTap={() => {
        dispatch({ type: 'DQ_TOGGLE_EDIT_QUOTETEXT' });
      }}
      style={{
        ...(dragStart ? { x: 0, y: 0 } : {}),
        cursor: 'grab'
      }}
    >
      {children}
    </AnimationContainer>
  );
};

export default DragToDelete;
