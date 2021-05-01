import React, { useRef } from 'react';
import FormSectionHeading from 'StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormSectionHeading/FormSectionHeading.js';
import FormQuoteInputTextBox from 'StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormQuoteInputTextBox/FormQuoteInputTextBox.js';
import {
  useAddQuoteState,
  useAddQuoteDispatch
} from 'Modules/AddQuote/State/AddQuoteState.js';

import { sanitizeQuoteText } from 'Utils/stringOperations.js';

const QuoteText = () => {
  const { quote } = useAddQuoteState();
  const dispatch = useAddQuoteDispatch();

  const pasteFromClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard.readText().then(text => {
        dispatch({ type: 'SET_QUOTE', quoteText: text });
      });
    } else {
      return null;
    }
  };
  return (
    <>
      <FormSectionHeading sectionName="Type/Paste the quote" />
      <FormQuoteInputTextBox
        name="quote"
        value={quote}
        id="quote"
        onChange={e => {
          dispatch({ type: 'SET_QUOTE', quoteText: e.target.value });
        }}
        onClick={pasteFromClipboard}
        onBlur={() =>
          dispatch({
            type: 'SET_QUOTE',
            quoteText: sanitizeQuoteText(quote)
          })
        }
      />
    </>
  );
};

export default QuoteText;
