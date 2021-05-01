import React, { useRef } from 'react';
import {
  QuotationRight,
  QuotationLeft,
  QuoteContainer,
  QuotationSymbolText,
  QuoteText
} from 'StylesLibrary/Atoms/DisplayQuoteModule/DisplayQuote/DisplayQuote.js';
import { useDisplayQuoteState } from 'Modules/DisplayQuote/State/DisplayQuoteState.js';

import { AnimationContainer } from 'StylesLibrary/Animations/FramerAnimations.js';

import { AnimatePresence } from 'framer-motion';

import LogoutButton from 'StylesLibrary/Atoms/GlobalQuoteModule/Buttons/LogoutButton.js';
const DisplayQuote = () => {
  const { currentQuote, displayQuote } = useDisplayQuoteState();

  const printDocument = async () => {
    navigator
      .share({
        title: 'title',
        text: `${currentQuote[0].quote}-${currentQuote[0].author['authorName']}`
      })
      .then(() => console.log('Successful share'))
      .catch(error => console.log('Error in sharing', error));
  };

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
                <QuoteText>{currentQuote[0].quote}</QuoteText>
              </AnimationContainer>
            ) : null}
          </AnimatePresence>
        )}
        <QuotationRight>
          <QuotationSymbolText>&#8221;</QuotationSymbolText>
        </QuotationRight>
      </QuoteContainer>

      <LogoutButton onClick={printDocument} />
    </>
  );
};

export default DisplayQuote;
