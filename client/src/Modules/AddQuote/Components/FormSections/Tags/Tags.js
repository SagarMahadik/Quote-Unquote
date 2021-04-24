import React from 'react';
import { InputButtonContainer } from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormInput/inputButton.js';
import InputButton from 'StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormInput/InputButton.js';
import FormSectionHeading from 'StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormSectionHeading/FormSectionHeading.js';
import {
  useAddQuoteState,
  useAddQuoteDispatch
} from 'Modules/AddQuote/State/AddQuoteState.js';

const Tags = () => {
  const {
    applicationData: { tagList }
  } = useAddQuoteState();
  const dispatch = useAddQuoteDispatch();

  console.log(tagList);
  return (
    <>
      <FormSectionHeading sectionName="Tags" />
      {tagList ? (
        <InputButtonContainer>
          {tagList.map(({ tagName, selected }) => {
            return (
              <InputButton
                buttonText={tagName}
                buttonSelected={selected}
                onClick={() => dispatch({ type: 'SET_TAG', payload: tagName })}
              />
            );
          })}
        </InputButtonContainer>
      ) : null}
    </>
  );
};

export default Tags;
