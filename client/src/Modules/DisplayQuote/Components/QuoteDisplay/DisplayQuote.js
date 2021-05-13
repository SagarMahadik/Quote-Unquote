import React, { useRef, useLayoutEffect, useState } from 'react';
import {
  QuotationRight,
  QuotationLeft,
  QuoteContainer,
  QuotationSymbolText,
  QuoteText,
  TrashIconContainer,
  DeleteOverlayContainer
} from 'StylesLibrary/Atoms/DisplayQuoteModule/DisplayQuote/DisplayQuote.js';
import {
  useDisplayQuoteState,
  useDisplayQuoteDispatch
} from 'Modules/DisplayQuote/State/DisplayQuoteState.js';
import { sanitizeQuoteText } from 'Utils/stringOperations.js';
import { AnimatePresence } from 'framer-motion';
import DragToDelete from 'Modules/DisplayQuote/Components/QuoteDisplay/DragToDelete.js';
import DeleteQuoteComponent from 'Modules/DisplayQuote/Components/QuoteDisplay/DeleteQuoteComponent.js';
import EditQuoteComponent from './EditQuoteComponent';
import LoadingQuotes from 'StylesLibrary/Molecules/LoadingModule/LoadingQuotes.js';

import DeleteSound from 'StylesLibrary/Sounds/DeleteSound.js';

const DisplayQuote = () => {
  const {
    currentQuote,
    displayQuote,
    editQuoteText: { editQuoteText },
    deleteQuote: { deleteQuote, dragStart, deleteRequestSuccess }
  } = useDisplayQuoteState();
  const [inputBoxHeight, setInnputBoxHeight] = useState(200);
  const [editContainerMarginTop, setEditContainerMarginTop] = useState(200);
  const dispatch = useDisplayQuoteDispatch();
  const quoteTextRef = useRef(null);

  useLayoutEffect(() => {
    if (quoteTextRef.current) {
      if (quoteTextRef.current.clientHeight < 400) {
        dispatch({
          type: 'DQ_SET_MAINCONTAINERHEIGHT',
          payload: '120vh'
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
  }, [currentQuote, quoteTextRef]);

  return (
    <>
      <QuoteContainer
        id="divToPrint"
        editText={editQuoteText}
        style={{ position: 'relative' }}
      >
        <QuotationLeft>
          <QuotationSymbolText>&#8220;</QuotationSymbolText>
        </QuotationLeft>

        {currentQuote.length === 0 ? (
          <LoadingQuotes />
        ) : (
          <AnimatePresence>
            {displayQuote ? (
              <DragToDelete>
                {currentQuote.length === 0 ? (
                  <LoadingQuotes />
                ) : (
                  <QuoteText ref={quoteTextRef} dragScale={dragStart}>
                    {sanitizeQuoteText(currentQuote[0].quote)}
                  </QuoteText>
                )}
              </DragToDelete>
            ) : null}
          </AnimatePresence>
        )}
        <QuotationRight>
          <QuotationSymbolText>&#8221;</QuotationSymbolText>
        </QuotationRight>
      </QuoteContainer>

      <AnimatePresence>
        {editQuoteText ? (
          <div
            style={{
              position: 'absolute',
              top: '10%',
              width: '100%'
            }}
          >
            <EditQuoteComponent
              inputBoxHeight={inputBoxHeight}
              editContainerMarginTop={editContainerMarginTop}
            />
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default DisplayQuote;
