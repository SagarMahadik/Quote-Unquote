import React from 'react';
import { QuotePageOverlay } from '../QuotePageStyles';

const QuotePageOverlayAnimation = ({ display }) => {
  return (
    <>
      {display ? (
        <QuotePageOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          exit={{ opacity: 0 }}
        />
      ) : null}
    </>
  );
};

export default QuotePageOverlayAnimation;
