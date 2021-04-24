import React from 'react';
import {
  SubmitButtonText,
  SubmitButtonBorder,
  SumbitButtonStyle
} from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormButtons/SubmitButton.js';

const SubmitButton = ({ onClick }) => {
  return (
    <SubmitButtonBorder onClick={e => onClick(e)}>
      <SumbitButtonStyle>
        <SubmitButtonText>Add Quote</SubmitButtonText>
      </SumbitButtonStyle>
    </SubmitButtonBorder>
  );
};

export default SubmitButton;
