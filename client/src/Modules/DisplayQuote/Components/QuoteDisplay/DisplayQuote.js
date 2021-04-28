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

import { Transition, TransitionGroup } from 'react-transition-group';

import anime from 'animejs/lib/anime.es.js';

import Anime from '@mollycule/react-anime';
const DisplayQuote = () => {
  const transitionKey = useRef();

  const { currentQuote, displayQuote } = useDisplayQuoteState();
  console.log(displayQuote);
  const animateCardIn = card =>
    anime({
      targets: card,
      opacity: 1
    });

  const animateCardOut = card =>
    anime({
      targets: card,
      opacity: 0,
      duration: 1800
    });
  return (
    <QuoteContainer>
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
  );
};

export default DisplayQuote;
