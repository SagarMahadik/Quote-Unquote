import React, { useEffect, useRef } from 'react';
import FormSectionHeading from 'StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormSectionHeading/FormSectionHeading.js';
import FormQuoteInputTextBox from 'StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormQuoteInputTextBox/FormQuoteInputTextBox.js';
import {
  useAddQuoteState,
  useAddQuoteDispatch
} from 'Modules/AddQuote/State/AddQuoteState.js';

import { sanitizeQuoteText } from 'Utils/stringOperations.js';
import { CenterAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles';

const QuoteText = () => {
  const {
    quote,
    styles: { textAreaHeight }
  } = useAddQuoteState();
  const dispatch = useAddQuoteDispatch();
  const textAreaRef = React.useRef(null);

  const pasteFromClipboard = e => {
    if (navigator.clipboard) {
      navigator.clipboard.readText().then(text => {
        dispatch({ type: 'SET_QUOTE', quoteText: text });
      });
    } else {
      return null;
    }
  };

  React.useLayoutEffect(() => {
    if (quote == '') {
      dispatch({
        type: 'AQ_SET_TEXTAREAHEIGHT',
        payload: 'auto'
      });
    }
    if (textAreaRef.current && quote != '') {
      dispatch({
        type: 'AQ_SET_TEXTAREAHEIGHT',
        payload: `${Number(textAreaRef.current.scrollHeight) - 40}px`
      });
    }
  }, [textAreaRef.current, quote]);

  return (
    <CenterAlignedColumnContainer>
      <FormSectionHeading sectionName="Type/Paste the quote" />
      <FormQuoteInputTextBox
        name="quote"
        value={quote}
        id="quote"
        ref={textAreaRef}
        onChange={e => {
          dispatch({ type: 'SET_QUOTE', quoteText: e.target.value });
        }}
        onClick={e => pasteFromClipboard(e)}
        onBlur={() =>
          dispatch({
            type: 'SET_QUOTE',
            quoteText: sanitizeQuoteText(quote)
          })
        }
        height={textAreaHeight}
      />
    </CenterAlignedColumnContainer>
  );
};

export default QuoteText;
