import React from 'react';
import {
  SubmitButtonText,
  SubmitButtonBorder,
  SumbitButtonStyle
} from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormButtons/SubmitButton.js';
import ThreeDotsWave from 'Modules/AddQuote/Components/ThreeDotWave.js';

const SubmitButton = ({ onClick, loading }) => {
  return (
    <SubmitButtonBorder onClick={e => onClick(e)}>
      <SumbitButtonStyle>
        {loading ? (
          <ThreeDotsWave />
        ) : (
          <SubmitButtonText>Add Quote</SubmitButtonText>
        )}
      </SumbitButtonStyle>
    </SubmitButtonBorder>
  );
};

export default SubmitButton;
