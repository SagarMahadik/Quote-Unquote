import React, { useState, CSSProperties, useEffect, useRef } from 'react';
import {
  QuotationRight,
  QuotationLeft,
  QuoteContainer,
  QuotationSymbolText,
  QuoteText
} from 'StylesLibrary/Atoms/DisplayQuoteModule/DisplayQuote/DisplayQuote.js';
import { useDisplayQuoteState } from 'Modules/DisplayQuote/State/DisplayQuoteState.js';

const DisplayQuote = () => {
  const { currentQuote } = useDisplayQuoteState();
  console.log(currentQuote);
  return (
    <QuoteContainer>
      <QuotationLeft>
        <QuotationSymbolText>&#8220;</QuotationSymbolText>
      </QuotationLeft>
      {currentQuote.length === 0 ? (
        <h1>Quote loading</h1>
      ) : (
        <div>
          <QuoteText>{currentQuote[0].quote}</QuoteText>
        </div>
      )}

      <QuotationRight>
        <QuotationSymbolText>&#8221;</QuotationSymbolText>
      </QuotationRight>
    </QuoteContainer>
  );
};

export default DisplayQuote;
