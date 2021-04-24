import React from 'react';
import { FormContentContainer } from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormContainer/FormContainer.js';
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
import {
  useAddQuoteState,
  useAddQuoteDispatch
} from 'Modules/AddQuote/State/AddQuoteState.js';
const AddQuote = () => {
  const { addQuoteSuccess } = useAddQuoteState();
  const dispatch = useAddQuoteDispatch();

  const handleAddQuoteSubmit = e => {
    e.preventDefault();
    console.log('In handle add');
    dispatch({
      type: 'AQ_INITIATE_VALIDATIONS'
    });
  };
  if (addQuoteSuccess) {
    return <AddQuoteSuccess />;
  }
  return (
    <>
      <PageHeading />
      <FormContentContainer containerHeight="auto">
        <QuoteText />
        <AuthorName />
        <Tags />
        <AddNewTags />
        <AddNewTagsText />
        <FormSectionDivider />
        <SubmitButton onClick={handleAddQuoteSubmit} />
        <FormValidations />
        <CreateRequestFlow />
      </FormContentContainer>
    </>
  );
};

export default AddQuote;
