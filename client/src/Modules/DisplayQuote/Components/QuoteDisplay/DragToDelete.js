import React from 'react';
import {
  useDisplayQuoteState,
  useDisplayQuoteDispatch
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';

import {
  useApplicationState,
  useApplicationDispatch
} from 'Modules/Authentication/State/ApplicationState.js';

import { AnimationContainer } from 'StylesLibrary/Animations/FramerAnimations.js';

const DragToDelete = ({ children }) => {
  const {
    user: { role }
  } = useApplicationState();

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
        if (role && role == 'admin') {
          dispatch({ type: 'DQ_TOGGLE_EDIT_QUOTETEXT' });
        } else {
          return;
        }
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
