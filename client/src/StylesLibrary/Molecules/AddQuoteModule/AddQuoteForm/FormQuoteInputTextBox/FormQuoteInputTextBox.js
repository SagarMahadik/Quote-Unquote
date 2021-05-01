import React, { useState, CSSProperties, useEffect, useRef } from 'react';
import {
  QuotationRight,
  QuotationLeft,
  QuoteContainer,
  QuotationSymbolText,
  QuoteText
} from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormQuoteInputTextBox/FormQuoteInputTextBox.js';

const FormQuoteInputTextBox = React.forwardRef(
  ({ value, onChange, onClick, onBlur, height }, ref) => {
    return (
      <QuoteContainer>
        <QuotationLeft>
          <QuotationSymbolText>&#8220;</QuotationSymbolText>
        </QuotationLeft>
        <div>
          <QuoteText
            onFocus={e => (e.target.placeholder = '')}
            onBlur={e => (e.target.placeholder = 'paste quote here!')}
            placeholder="paste quote here!"
            value={value}
            onChange={onChange}
            onClick={onClick}
            onBlur={onBlur}
            ref={ref}
            textAreaHeight={height}
          ></QuoteText>
        </div>

        <QuotationRight>
          <QuotationSymbolText>&#8221;</QuotationSymbolText>
        </QuotationRight>
      </QuoteContainer>
    );
  }
);

export default FormQuoteInputTextBox;
