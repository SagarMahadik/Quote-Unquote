import React from 'react';
import { OverLayContainer } from 'StylesLibrary/Atoms/AddQuoteModule/AddQuoteForm/FormContainer/FormContainer.js';
import { CenterAlignedColumnContainer } from 'StylesLibrary/Atoms/GlobalQuoteModule/ContainerStyles.js';
import PageHeading from 'Modules/Global/Components/PageHeading';

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
import DatabaseEntrySound from 'StylesLibrary/Sounds/DatabaseEntrySound.js';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useApplicationState } from 'Modules/Authentication/State/ApplicationState';

const AddQuote = () => {
  const {
    quoteCreatedSuccessfully,
    quoteAuthor,
    addNewTag,
    loading
  } = useAddQuoteState();
  const dispatch = useAddQuoteDispatch();
  const history = useHistory();

  const { isUserAuthenticated, adminLogin, user } = useApplicationState();
  console.log(user);

  const handleAddQuoteSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'SET_LOADING'
    });
    dispatch({
      type: 'AQ_INITIATE_VALIDATIONS'
    });
  };
  useEffect(() => {
    if (!isUserAuthenticated || user.role != 'admin') {
      history.push('/');
    }
  }, []);

  useEffect(() => {
    window.onpopstate = e => history.push('/corelanding');
  }, []);

  if (quoteCreatedSuccessfully) {
    return (
      <>
        <DatabaseEntrySound play={quoteCreatedSuccessfully} />
        <AddQuoteSuccess authorName={quoteAuthor} />
      </>
    );
  }

  return (
    <>
      <CenterAlignedColumnContainer>
        <CenterAlignedColumnContainer style={{ position: 'relative' }}>
          {addNewTag ? <OverLayContainer displayOverlay={addNewTag} /> : null}
          <PageHeading />
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
      </CenterAlignedColumnContainer>
    </>
  );
};

export default AddQuote;
