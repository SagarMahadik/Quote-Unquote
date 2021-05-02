import React from 'react';
import {
  TextBox,
  TextBoxLabel,
  InputTextBoxWrapper
} from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormInput/inputTextBox.js';

const InputTextBox = React.forwardRef(
  ({ placeholderText, value, onChange }, ref) => {
    return (
      <TextBox
        placeholder={placeholderText}
        onFocus={e => (e.target.placeholder = '')}
        onBlur={e => (e.target.placeholder = { placeholderText })}
        value={value}
        onChange={onChange}
        ref={ref}
      ></TextBox>
    );
  }
);

export default InputTextBox;
