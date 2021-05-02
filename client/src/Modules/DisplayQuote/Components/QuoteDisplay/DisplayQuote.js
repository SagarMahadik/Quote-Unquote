import React, { useRef, useLayoutEffect } from 'react';
import {
  QuotationRight,
  QuotationLeft,
  QuoteContainer,
  QuotationSymbolText,
  QuoteText
} from 'StylesLibrary/Atoms/DisplayQuoteModule/DisplayQuote/DisplayQuote.js';
import {
  useDisplayQuoteState,
  useDisplayQuoteDispatch
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';

import { AnimationContainer } from 'StylesLibrary/Animations/FramerAnimations.js';

import { AnimatePresence } from 'framer-motion';

const DisplayQuote = () => {
  const { currentQuote, displayQuote } = useDisplayQuoteState();
  const dispatch = useDisplayQuoteDispatch();
  const quoteTextRef = useRef(null);
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

  return (
    <>
      <QuoteContainer id="divToPrint">
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
              >
                <QuoteText ref={quoteTextRef}>
                  {currentQuote[0].quote}
                </QuoteText>
              </AnimationContainer>
            ) : null}
          </AnimatePresence>
        )}
        <QuotationRight>
          <QuotationSymbolText>&#8221;</QuotationSymbolText>
        </QuotationRight>
      </QuoteContainer>
    </>
  );
};

export default DisplayQuote;
