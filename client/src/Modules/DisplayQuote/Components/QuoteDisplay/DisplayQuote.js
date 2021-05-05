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
  EditTextContainer
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
import { CenterAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';

const DisplayQuote = () => {
  const {
    currentQuote,
    displayQuote,
    editQuoteText: { editQuoteText, editedText }
  } = useDisplayQuoteState();
  const [inputBoxHeight, setInnputBoxHeight] = useState(200);
  const [editContainerMarginTop, setEditContainerMarginTop] = useState(200);
  const dispatch = useDisplayQuoteDispatch();
  const quoteTextRef = useRef(null);
  const editQuoteTextRef = useRef(null);
  useLayoutEffect(() => {
    if (quoteTextRef.current) {
      console.log(quoteTextRef.current.clientHeight);
      if (quoteTextRef.current.clientHeight < 400) {
        dispatch({
          type: 'DQ_SET_MAINCONTAINERHEIGHT',
          payload: '100vh'
        });
      } else {
        dispatch({
          type: 'DQ_SET_MAINCONTAINERHEIGHT',
          payload: 'auto'
        });
      }
    }
  }, [quoteTextRef, currentQuote]);

  useLayoutEffect(() => {
    if (quoteTextRef.current) {
      setInnputBoxHeight(Number(quoteTextRef.current.clientHeight) / 2);
      setEditContainerMarginTop(Number(quoteTextRef.current.clientHeight));
    }
  }, [editQuoteTextRef.current, currentQuote, quoteTextRef]);

  return (
    <>
      <QuoteContainer id="divToPrint" editText={editQuoteText}>
        <QuotationLeft>
          <QuotationSymbolText>&#8220;</QuotationSymbolText>
        </QuotationLeft>

        {currentQuote.length === 0 ? (
          <h1>Quote loading</h1>
        ) : (
          <AnimatePresence>
            {displayQuote ? (
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
                onTap={() => dispatch({ type: 'DQ_TOGGLE_EDIT_QUOTETEXT' })}
              >
                <QuoteText ref={quoteTextRef}>
                  {sanitizeQuoteText(currentQuote[0].quote)}
                </QuoteText>
              </AnimationContainer>
            ) : null}
          </AnimatePresence>
        )}
        <QuotationRight>
          <QuotationSymbolText>&#8221;</QuotationSymbolText>
        </QuotationRight>
      </QuoteContainer>
      <AnimatePresence>
        {editQuoteText ? (
          <CenterAlignedColumnContainer style={{ position: 'relative' }}>
            <EditQuoteContainer
              onTap={() => dispatch({ type: 'DQ_TOGGLE_EDIT_QUOTETEXT' })}
            ></EditQuoteContainer>
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
              <EditTextContainer marginTop={`-${editContainerMarginTop}px`}>
                <EditQuoteInputBox
                  defaultValue={sanitizeQuoteText(currentQuote[0].quote)}
                  onChange={e =>
                    dispatch({
                      type: 'DQ_SET_EDIT_QUOTETEXT',
                      payload: e.target.value
                    })
                  }
                  ref={editQuoteTextRef}
                  style={{ height: `${inputBoxHeight}px` }}
                ></EditQuoteInputBox>
                <EditButtonContainer>
                  <LogoutButton
                    style={{ zIndex: '100' }}
                    onClick={() =>
                      dispatch({ type: 'DQ_INITIATE_EDITQUOTETEXT' })
                    }
                  />
                </EditButtonContainer>
              </EditTextContainer>

              <EditQuoteText />
            </AnimationContainer>
          </CenterAlignedColumnContainer>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default DisplayQuote;
