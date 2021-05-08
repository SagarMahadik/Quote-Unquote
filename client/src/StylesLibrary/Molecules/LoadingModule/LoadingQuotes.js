import React from 'react';
import ShimmerContainer from 'StylesLibrary/Atoms/LoadingModule/ShimmerContainer.js';
import { CenterAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';
import {
  QuoteLoadingContainer,
  QuoteLoadingLine
} from 'StylesLibrary/Atoms/LoadingModule/LoadingQuote.js';

const LoadingQuotes = () => {
  return (
    <CenterAlignedColumnContainer style={{ position: 'relative' }}>
      <QuoteLoadingContainer>
        <QuoteLoadingLine></QuoteLoadingLine>
        <QuoteLoadingLine></QuoteLoadingLine>
      </QuoteLoadingContainer>
      <ShimmerContainer />
    </CenterAlignedColumnContainer>
  );
};

export default LoadingQuotes;
