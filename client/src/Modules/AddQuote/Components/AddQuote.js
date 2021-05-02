import React from 'react';
import {
  FormContentContainer,
  OverLayContainer
} from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormContainer/FormContainer.js';
import { CenterAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles.js';
import PageHeading from 'StylesLibrary/Molecules/AddQuoteModule/PageHeading/index.js';

import QuoteText from './FormSections/QuoteText';
import AuthorName from './FormSections/authorName/AuthorName';
import Tags from './FormSections/Tags/Tags';
import AddNewTags from './FormSections/Tags/AddNewTags';
import AddNewTagsText from 'Modules/AddQuote/Components/FormSections/Tags/AddNewTagsText.js';
import { FormSectionDivider } from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormSectionDivider/formSectionDivider.js';
import SubmitButton from 'StylesLibrary/Molecules/AddQuoteModule/AddQuoteForm/FormButtons/SubmitButton.js';
import AddQuoteSuccess from 'Modules/AddQuote/Components/FormSections/AddQuoteSuccess/AddQuoteSuccess.js';
import FormValidations from 'Modules/AddQuote/Components/FormSections/FormValidations/FormValidations.js';
import CreateRequestFlow from 'Modules/AddQuote/CeateRequestFLow/CreateRequestFlow.js';
import CreateTags from 'Modules/AddQuote/APICalls/CreateTags.js';
import CreateQuote from 'Modules/AddQuote/APICalls/CreateQuote.js';

import {
  useAddQuoteState,
  useAddQuoteDispatch
} from 'Modules/AddQuote/State/AddQuoteState.js';

import CreateAuthor from 'Modules/AddQuote/APICalls/CreateAuthor.js';
import { ButtonContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/Buttons/ButtonContainer';
import { submitVibrations } from 'Utils/vibrations';

const AddQuote = () => {
  const {
    quoteCreatedSuccessfully,
    quoteAuthor,
    addNewTag,
    loading
  } = useAddQuoteState();
  const dispatch = useAddQuoteDispatch();

  const handleAddQuoteSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'SET_LOADING'
    });
    dispatch({
      type: 'AQ_INITIATE_VALIDATIONS'
    });
  };
  if (quoteCreatedSuccessfully) {
    return <AddQuoteSuccess authorName={quoteAuthor} />;
  }
  return (
    <>
      <PageHeading />
      <CenterAlignedColumnContainer>
        <FormContentContainer containerHeight="auto">
          <CenterAlignedColumnContainer style={{ position: 'relative' }}>
            {addNewTag ? <OverLayContainer displayOverlay={addNewTag} /> : null}
            <QuoteText />
            <AuthorName />
            <Tags />
          </CenterAlignedColumnContainer>
          <CenterAlignedColumnContainer style={{ margin: '1rem' }}>
            <AddNewTags />
            <AddNewTagsText />
          </CenterAlignedColumnContainer>
          <CenterAlignedColumnContainer style={{ position: 'relative' }}>
            {addNewTag ? <OverLayContainer displayOverlay={addNewTag} /> : null}
            <FormSectionDivider />
            <ButtonContainer>
              <SubmitButton
                onClick={e => {
                  submitVibrations();
                  handleAddQuoteSubmit(e);
                }}
                loading={loading}
              />
            </ButtonContainer>
          </CenterAlignedColumnContainer>

          <FormValidations />
          <CreateRequestFlow />
          <CreateAuthor />
          <CreateTags />
          <CreateQuote />
        </FormContentContainer>
      </CenterAlignedColumnContainer>
    </>
  );
};

export default AddQuote;
