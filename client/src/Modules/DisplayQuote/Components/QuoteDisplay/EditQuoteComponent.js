import React, { useRef, useLayoutEffect, useEffect, useState } from 'react';
import {
  QuotationRight,
  QuotationLeft,
  QuoteContainer,
  QuotationSymbolText,
  QuoteText,
  EditQuoteContainer,
  EditQuoteInputBox,
  EditButtonContainer,
  EditTextContainer,
  TrashIconContainer,
  TickIconContainer
} from 'StylesLibrary/Atoms/DisplayQuoteModule/DisplayQuote/DisplayQuote.js';
import {
  useDisplayQuoteState,
  useDisplayQuoteDispatch
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';

import { sanitizeQuoteText } from 'Utils/stringOperations.js';

import { AnimationContainer } from 'StylesLibrary/Animations/FramerAnimations.js';

import { AnimatePresence } from 'framer-motion';

import LogoutButton from 'StylesLibrary/Atoms/GlobalQuoteModule/Buttons/LogoutButton.js';
import EditQuoteText from './APICalls/EditQuoteText';
import DeleteQuote from 'Modules/DisplayQuote/Components/QuoteDisplay/APICalls/DeleteQuoteText.js';
import { CenterAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';
import DragToDelete from 'Modules/DisplayQuote/Components/QuoteDisplay/DragToDelete.js';
import DoneSound from 'StylesLibrary/Sounds/DoneSound.js';

import DeleteQuoteComponent from 'Modules/DisplayQuote/Components/QuoteDisplay/DeleteQuoteComponent.js';
import LoadingQuotes from 'StylesLibrary/Molecules/LoadingModule/LoadingQuotes';
import DoneButton from 'StylesLibrary/Atoms/GlobalQuoteModule/Buttons/DoneButton';
import DeleteButton from 'StylesLibrary/Atoms/GlobalQuoteModule/Buttons/DeleteButton';

const EditQuoteComponent = ({ inputBoxHeight, editContainerMarginTop }) => {
  const {
    currentQuote,
    displayQuote,
    editQuoteText: { editQoteSuccessSound, initiateEditQuoteTextRequest },
    deleteQuote: { deleteQuote, dragStart }
  } = useDisplayQuoteState();

  const dispatch = useDisplayQuoteDispatch();

  return (
    <CenterAlignedColumnContainer>
      <AnimationContainer
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1
        }}
        transition={{
          ease: 'easeOut',
          duration: 0.4
        }}
        exit={{ opacity: 0 }}
      >
        <EditTextContainer>
          {currentQuote.length === 0 ? (
            <LoadingQuotes />
          ) : (
            <>
              <EditButtonContainer style={{ zIndex: '100' }}>
                <DoneButton
                  onClick={() =>
                    dispatch({
                      type: 'DQ_INITIATE_EDITQUOTETEXT'
                    })
                  }
                />
                <DeleteButton
                  onClick={() =>
                    dispatch({
                      type: 'DQ_INITIATE_DELETE_REQUEST'
                    })
                  }
                />
              </EditButtonContainer>
              <EditQuoteInputBox
                defaultValue={sanitizeQuoteText(currentQuote[0].quote)}
                onChange={e =>
                  dispatch({
                    type: 'DQ_SET_EDIT_QUOTETEXT',
                    payload: e.target.value
                  })
                }
                style={{
                  height: `${inputBoxHeight}px`
                }}
                editQuoteSuccess={initiateEditQuoteTextRequest}
              ></EditQuoteInputBox>
            </>
          )}
        </EditTextContainer>
        {editQoteSuccessSound ? (
          <DoneSound play={editQoteSuccessSound} />
        ) : null}
        <EditQuoteText />
        <DeleteQuote />
      </AnimationContainer>
    </CenterAlignedColumnContainer>
  );
};

export default EditQuoteComponent;
