import React, { useState, CSSProperties, useEffect, useRef } from 'react';
import {
  QuotationRight,
  QuotationLeft,
  QuoteContainer,
  QuotationSymbolText,
  QuoteText
} from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormQuoteInputTextBox/FormQuoteInputTextBox.js';

const FormQuoteInputTextBox = ({ value, onChange, onClick }) => {
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
        ></QuoteText>
      </div>

      <QuotationRight>
        <QuotationSymbolText>&#8221;</QuotationSymbolText>
      </QuotationRight>
    </QuoteContainer>
  );
};

export default FormQuoteInputTextBox;
