import React from 'react';
import {
  TagContainer,
  TagText
} from 'StylesLibrary/Atoms/DisplayQuoteModule/DisplayQuote/DisplayTag.js';
import { useDisplayQuoteState } from 'Modules/DisplayQuote/State/DisplayQuoteState.js';
import { AnimationContainer } from 'StylesLibrary/Animations/FramerAnimations';
import { makeFirstLetterUpperCase } from 'Utils/stringOperations.js';

import { AnimatePresence } from 'framer-motion';

const DisplayTags = () => {
  const { currentQuote, displayQuote } = useDisplayQuoteState();

  if (currentQuote.length === 0) {
    return null;
  }

  return (
    <AnimatePresence>
      {displayQuote ? (
        <AnimationContainer
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1
          }}
          transition={{
            ease: 'easeOut',
            duration: 0.5
          }}
          exit={{ opacity: 0 }}
        >
          <TagContainer>
            <TagText>
              {makeFirstLetterUpperCase(currentQuote[0].author['authorName'])}
            </TagText>
            {currentQuote[0].tags.slice(0, 3).map(({ tagName }) => {
              return <TagText> | {makeFirstLetterUpperCase(tagName)}</TagText>;
            })}
          </TagContainer>
        </AnimationContainer>
      ) : null}
    </AnimatePresence>
  );
};

export default DisplayTags;
