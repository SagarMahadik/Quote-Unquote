import React from 'react';
import {
  GoButtonStyle,
  GoButtonText,
  GoButtonBorder
} from 'StylesLibrary/Atoms/DisplayQuoteModule/DisplayQuote/GoButton.js';

const GoButton = ({ onClick }) => {
  return (
    <GoButtonBorder onClick={onClick}>
      <GoButtonStyle>
        <GoButtonText>Go...</GoButtonText>
      </GoButtonStyle>
    </GoButtonBorder>
  );
};

export default GoButton;
