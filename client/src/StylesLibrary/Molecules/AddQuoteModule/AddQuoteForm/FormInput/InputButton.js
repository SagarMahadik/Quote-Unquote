import React from 'react';

import {
  InputButtonStyle,
  InputButtonText
} from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormInput/inputButton.js';

import { incomeButtonVibrations } from 'Utils/vibrations.js';

const InputButton = ({ buttonText, buttonSelected, onClick }) => {
  return (
    <>
      <InputButtonStyle
        selected={buttonSelected}
        onClick={e => {
          incomeButtonVibrations();
          onClick(e);
        }}
      >
        <InputButtonText selected={buttonSelected}>
          {buttonText}
        </InputButtonText>
      </InputButtonStyle>
    </>
  );
};

export default InputButton;
