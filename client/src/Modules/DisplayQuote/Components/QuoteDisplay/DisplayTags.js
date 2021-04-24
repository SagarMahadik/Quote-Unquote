import React from 'react';
import {
  TagContainer,
  TagText
} from 'StylesLibrary/Atoms/DisplayQuoteModule/DisplayQuote/DisplayTag.js';
import { useDisplayQuoteState } from 'Modules/DisplayQuote/State/DisplayQuoteState.js';

const DisplayTags = () => {
  const { currentQuote } = useDisplayQuoteState();
  console.log(currentQuote);

  if (currentQuote.length === 0) {
    return null;
  }

  return (
    <TagContainer>
      <TagText>{currentQuote[0].author['authorName']}</TagText>
      {currentQuote[0].tags.map(({ tagName }) => {
        return <TagText> | {tagName}</TagText>;
      })}
    </TagContainer>
  );
};

export default DisplayTags;
